import service from "../service";

const {getLocationService} = service.lications;
const getLocationsController = async (req,res) =>{
    try{
        const locations = await getLocationService();

        return res.status(200).json(locations);
    }catch(error){
        console.log(error.message);
        return res.sendStatus(500);
    }
}

export {getLocationsController}