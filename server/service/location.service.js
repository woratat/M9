import helper from "../helper";
import lodash from "lodash";

const { getLocationDB , postLocationDB } = helper.locations;

const getLocationService = async () => {
  try {
    const locations = await getLocationDB();

    return locations;
  } catch (error) {
    throw new Error(error);
  }
};
const postLocationService = async (content) => {
  console.log('content :>> ', content);
  try {
    if (
      lodash.isEmpty(content.name) ||
      lodash.isEmpty(content.description) ||
      lodash.isEmpty(content.latitude) ||
      lodash.isEmpty(content.longtitude)
    ) {
      return {
        error: true,
        message: "Please fill in data",
      };
    } else {
      const postData = {
        name: content.name,
        description: content.description,
        latitude: content.latitude,
        longtitude: content.longtitude,
      };
      const post = await postLocationDB(postData);
      
      return {
        error: false,
        message: "Post success!",
        data: post,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};
export { getLocationService, postLocationService };
