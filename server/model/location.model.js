export default function locationModel(sequelize, DataTypes) {
  const location = sequelize.define("location", {
    locationID: {
      type: DataTypes.INTEGER(10),
      field: "location_id",
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    longtitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  });
  return location;
}
