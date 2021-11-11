export default function typeAccountModel(sequelize, DataTypes) {
    const typeAccount = sequelize.define("typeAccount", {
        typeAccountID: {
        type: DataTypes.INTEGER(10),
        field: "type_account_id",
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      typeName: {
        type: DataTypes.STRING,
        field: "type_name",
        allowNull: false,
      }
    });
    return typeAccount;
  }
  