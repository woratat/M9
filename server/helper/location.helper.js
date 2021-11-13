import database from "../config/database";

const Locations = database.location;

const getLocationDB = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const locations = await Locations.findAll();

      return resolve(locations);
    } catch (error) {
      return reject(error);
    }
  });
};
const postLocationDB = async (content) => {
  return new Promise(async (resolve, reject) => {
    try {
      const postLocation = await Locations.create(content);

      return resolve(postLocation);
    } catch (error) {
      return reject(error);
    }
  });
};

export { getLocationDB, postLocationDB };
