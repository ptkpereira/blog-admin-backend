const { Model, DataTypes } = require("sequelize");

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.hasMany(models.RelatedPost, {
      foreignKey: "post_id",
      as: "relatedPosts",
    });
  }
}

module.exports = Post;
