const { Model, DataTypes } = require("sequelize");

class RelatedPost extends Model {
  static init(sequelize) {
    super.init({}, { sequelize });
  }

  static associate(models) {
    this.belongsTo(models.Post, { foreignKey: "related_post", as: "post" });
    this.belongsTo(models.Post, {
      foreignKey: "related_post",
      as: "postRelated",
    });
  }
}

module.exports = RelatedPost;
