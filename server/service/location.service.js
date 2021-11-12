import helper from "../helper";

const {getLocationDB} = helper.locations;

const getLocationService = async () =>{
    try{
        const locations = await getLocationDB();

        return locations;
    }catch(error){
        throw new Error(error);
    }
}
export {getLocationService}
