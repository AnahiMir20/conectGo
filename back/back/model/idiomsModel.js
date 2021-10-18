const sequelize = require('../db/conexion')


module.exports = class idiomsModel {
    constructor(idioms) {
        this.idioms = idioms
    }


    async idiomsSelect(user) {
        console.log(user)
        let result = await sequelize.query("SELECT id_idiom,name_idiom,idiom_level FROM idioms RIGHT JOIN users ON idioms.id_user = users.id_user WHERE users.id_user = "+user.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }

    async idiomsInsert(user,idiom){
        let result = await sequelize.query("INSERT INTO idioms VALUES ("+user.id_user+", '"+idiom.name+"', '"+idiom.level+"')")
        return result
    }

    async idiomsDelete(user,language){
        let result = await sequelize.query("DELETE FROM languages WHERE id_language = "+language.id_language+" AND id_user = "+user.id_user)
        return result
    }

}