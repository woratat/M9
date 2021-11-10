import { Sequelize } from 'sequelize';
import model from "../model";
import config from "./configDB";

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    pool: config.pool,
    define: {
        timestamp: false,
    },
    logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

Object.keys(model).forEach(key => {
    db[key] = model[key](sequelize, Sequelize);
});

db.account.hasMany(db.post, {foreignKey: {name: 'accountID', field: 'account_id'}});
db.post.belongsTo(db.account, {foreignKey: {name: 'accountID', field: 'account_id'}});
db.account.hasMany(db.friend, {foreignKey: {name: 'accountID', field: 'account_id'}});
db.friend.belongsTo(db.account, {foreignKey: {name: 'accountID', field: 'account_id'}});
db.account.hasMany(db.friend, {foreignKey: {name: 'accountFriendID', field: 'account_friend_id'}});
db.friend.belongsTo(db.account, {foreignKey: {name: 'accountFriendID', field: 'account_friend_id'}});




export default db;