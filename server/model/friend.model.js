export default function friendModel(sequelize, DataTypes) {
  const friend = sequelize.define("friend", {
    friendID: {
      type: DataTypes.INTEGER(10),
      field: "friend_id",
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING,
    },
  });
  return friend;
}
