const friendsModel = require('../model/friendsModel');

module.exports.friendsUserSelect = async (user) => {
    let response = new friendsModel();
    let result =await response.friendsUserSelect(user)
    return result;
}
module.exports.friendsInsert = async (user,friend) => {
    let response = new friendsModel();
    let result =await response.friendsInsert(user,friend)
    return result;
}
module.exports.friendsDelete = async (user,friend) => {
    let response = new friendsModel();
    let result =await response.friendsDelete(user,friend)
    return result;
}
/*Termina controller friends*/

const hobbiesModel = require('../model/hobbiesModel');

module.exports.hobbiesSelect = async (user) => {
    let response = new hobbiesModel();
    let result =await response.hobbiesSelect(user)
    return result;
}
module.exports.hobbiesInsert = async (user,hobby) => {
    let response = new hobbiesModel();
    let result =await response.hobbiesInsert(user,hobby)
    return result;
}
module.exports.hobbiesDelete = async (user,hobby) => {
    let response = new hobbiesModel();
    let result =await response.hobbiesDelete(user,hobby)
    return result;
}
/*Termina controller hobbies*/

const idiomsModel = require('../model/idiomsModel');

module.exports.idiomsSelect = async (user) => {
    let response = new idiomsModel();
    let result =await response.idiomsSelect(user)
    return result;
}
module.exports.idiomsInsert = async (user,idiom) => {
    let response = new idiomsModel();
    let result =await response.idiomsInsert(user,idiom)
    return result;
}
module.exports.idiomsDelete = async (user,idiom) => {
    let response = new idiomsModel();
    let result =await response.idiomsDelete(user,idiom)
    return result;
}
/*Termina controller idiom*/

const jwt = require('jsonwebtoken');
const loginModel = require('../model/loginModel');


module.exports.singIn = async (user) => {
    let login = new loginModel();
    let data = await login.singIn(user)
    if (data) {
        token = jwt.sign({ data }, process.env.SECRETKEY);
        return token;
    }
    else {
        return "Regristro fallido Try again"
    }
}

module.exports.loginUser = async (user) => {
    let login = new loginModel();//Cada usuario necesita su login
    let data = await login.loginUser(user)
    if (data) {
        token = jwt.sign({ data }, process.env.SECRETKEY);
        return token;
    }
    else {
        return false
    }
}

module.exports.loginData = async (user) => {
    let login = new loginModel();
    let data = await login.loginData(user)
    return data;
}

module.exports.listUsers = async (user) => {
    
    let response = new loginModel();
    let result =await response.listUsers(user)
    return result;
}
/*Termina controller users*/

const pictureModel = require('../model/pictureModel');

module.exports.pictureSelect = async (user) => {
    let response = new pictureModel();
    let result =await response.pictureSelect(user)
    return result;
}
module.exports.pictureInsert = async (user,picture) => {
    let response = new pictureModel();
    let result =await response.pictureInsert(user,picture)
    return result;
}
module.exports.pictureUpdate = async (user,picture) => {
    let response = new pictureModel();
    let result =await response.pictureUpdate(user,picture)
    return result;
}
module.exports.pictureDelete = async (user,picture) => {
    let response = new pictureModel();
    let result =await response.pictureDelete(user,picture)
    return result;
}
/*Termina controller picture*/

const studiesModel = require('../model/studiesModel');

module.exports.studiesSelect = async (user) => {
    let response = new studiesModel();
    let result =await response.studiesSelect(user)
    return result;
}
module.exports.studiesInsert = async (user,study) => {
    let response = new studiesModel();
    let result =await response.studiesInsert(user,study)
    return result;
}
module.exports.studiesDelete = async (user,study) => {
    let response = new studiesModel();
    let result =await response.studiesDelete(user,study)
    return result;
}
/*Termina controller studies*/
