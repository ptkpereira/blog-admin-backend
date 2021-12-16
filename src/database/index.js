const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Post = require("../models/Post");
const RelatedPost = require("../models/RelatedPost");

const connection = new Sequelize(dbConfig);

User.init(connection);
Post.init(connection);
RelatedPost.init(connection);

User.associate(connection.models);
Post.associate(connection.models);
RelatedPost.associate(connection.models);

module.exports = connection;
