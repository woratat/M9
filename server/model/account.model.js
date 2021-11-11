export default function accountModel(sequelize, DataTypes) {
  const account = sequelize.define("account", {
    accountID: {
      type: DataTypes.INTEGER,
      field: "account_id",
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return account;
}
