export default function accountModel(sequelize, DataTypes) {
  const account = sequelize.define("account", {
    accountID: {
      type: DataTypes.INTEGER,
      field: 'account_id',
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });
  return account;
}


