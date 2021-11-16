export default function commentModel(sequelize, DataTypes) {
  const comment = sequelize.define("comment", {
    commentID : {
      type: DataTypes.INTEGER(10),
      field: 'comment_id',
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return comment;
}
