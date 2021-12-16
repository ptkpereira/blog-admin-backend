const User = require("../models/User");
const Post = require("../models/Post");
const RelatedPost = require("../models/RelatedPost");
const { Op } = require("sequelize");

module.exports = {
  async create(req, res) {
    const { user_id, title, description, image, status, related_posts } =
      req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const post = await Post.create({
      user_id,
      title,
      description,
      image,
      status,
    });

    if (related_posts?.length > 0) {
      for (const relatedId of related_posts) {
        await RelatedPost.create({
          post_id: post.id,
          related_post: relatedId,
        });
      }
    }

    return res.status(201).json(post);
  },

  async list(req, res) {
    const { q = "", limit = 5, page = 1 } = req.query;

    const offset = limit * (page - 1);

    const posts = await Post.findAll({
      include: {
        model: User,
        as: "user",
        attributes: ["id", "name", "email"],
      },
      offset,
      limit,
      where: { title: { [Op.iLike]: `%${q}%` } },
      order: [["updatedAt", "DESC"]],
    });

    const total = await Post.count({
      where: { title: { [Op.iLike]: `%${q}%` } },
    });

    const totalPages = Math.ceil(total / limit);
    const hasPrevPage = page > 1;
    const hasNextPage = +page !== totalPages;

    return res.status(200).json({
      posts,
      total,
      totalPages,
      hasPrevPage,
      hasNextPage,
      page,
      limit,
    });
  },

  async view(req, res) {
    const { id } = req.params;
    const post = await Post.findByPk(id, {
      include: [
        {
          model: RelatedPost,
          as: "relatedPosts",
          attributes: ["id"],
          include: [
            {
              model: Post,
              as: "post",
              attributes: ["id", "title"],
            },
          ],
        },
      ],
    });

    return post ? res.status(200).json(post) : res.status(404).send();
  },

  async update(req, res) {
    const { id } = req.params;

    const { relatedPosts } = req.body;

    const relateds = await RelatedPost.findAll({
      attributes: ["id", "post_id", "related_post"],
      where: { post_id: id },
    });

    for (const related of relatedPosts) {
      if (relateds.some((e) => e.related_post === related.id)) {
        //pass
      } else {
        await RelatedPost.create({
          post_id: id,
          related_post: related.id,
        });
      }
    }

    for (const related of relateds) {
      if (relatedPosts.some((e) => e.id === related.related_post)) {
        continue;
      } else {
        await RelatedPost.destroy({
          where: { related_post: related.related_post },
        });
      }
    }

    await Post.update(req.body, {
      where: { id },
    });

    return res.status(204).send();
  },

  async delete(req, res) {
    const { id } = req.params;

    await Post.destroy({
      where: { id },
    });

    return res.status(204).send();
  },
};
