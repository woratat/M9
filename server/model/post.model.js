export default function postModel(sequelize, DataTypes) {
  const post = sequelize.define("post", {
    postID: {
      type: DataTypes.INTEGER(10),
      field: 'post_id',
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  });
  return post;
}

