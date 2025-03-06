const { db, DataTypes, Model } = require("../db/connection");

class Profile extends Model {}

Profile.init(
  {
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "Profile",
  }
);

module.exports = Profile;
