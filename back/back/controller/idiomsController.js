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