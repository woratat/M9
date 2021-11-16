export default function likeModel(sequelize, DataTypes) {
  const like = sequelize.define("like", {
    likeID: {
      type: DataTypes.INTEGER(10),
      field: "like_id",
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      min: 0,
      allowNull: false,
    },
  });
  return like;
}
