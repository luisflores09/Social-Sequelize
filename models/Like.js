const { db, DataTypes, Model } = require("../db/connection");

class Like extends Model {}

Like.init(
  {
    reactionType: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Like",
  }
);

module.exports = Like;