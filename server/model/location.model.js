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
    },
    description: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.DOUBLE,
    },
    longtitude: {
      type: DataTypes.DOUBLE,
    },
  });
  return location;
}
