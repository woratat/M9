import service from "../service";

const { getLocationService, postLocationService } = service.locations;

const getLocationsController = async (req, res) => {
  try {
    const locations = await getLocationService();

    return res.status(200).json(locations);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};
const postLocationController = async (req, res) => {
  const content = req.body;

  try {
    const newLocation = await postLocationService(content);

    if (newLocation.error) {
      return res.status(400).json({
        message: newLocation.message,
      });
    } else {
      return res.status(200).json({
        message: newLocation.message,
        content: newLocation.data,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

export { getLocationsController, postLocationController };
