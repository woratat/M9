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
    },
    image: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
    },
    imageName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    like: { 
      type: DataTypes.INTEGER,
      defaultValue: 0,
      min: 0,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return post;
}

