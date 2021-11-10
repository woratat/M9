import service from "../service";
import jwt from 'jsonwebtoken';

const LoginBasicController = async (req, res) => {
    if(req.user.error) {
        return res.status(400).json({message: req.user.message});
    } else {
        const {username, accountID, name} = req.user.data;
        const token = jwt.sign({username, accountID, name}, 'test');
        return res.status(200).json({token: token});
    }
}

export {LoginBasicController};