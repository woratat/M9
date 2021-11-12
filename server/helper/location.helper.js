import database from "../config/database";

const Locations = database.location;

const getLocationDB = () =>{
    return new Promise ( async (resovle,reject)=>{
        try{
            const locations = await Locations.findAll();

            return resovle(locations);
        }catch (error){
            return reject(error);
        }
    });
}



export {getLocationDB};