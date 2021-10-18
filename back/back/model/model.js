const sequelize = require('../db/conexion')


module.exports = class friendsModel {
    constructor(friends) {
        this.friends = friends
    }


    async friendsUserSelect(user) {
        console.log(user)
        let result = await sequelize.query("SELECT img,first_name,last_name,users.id_user FROM perfilPicture RIGHT JOIN users ON perfilPicture.id_user = users.id_user WHERE users.id_user !="+user.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }

    // async friendsInsert(user,hobby){
    //     let result = await sequelize.query("INSERT INTO friends VALUES ("+user.id_user+", '"+hobby.name+"')")
    //     return result
    // }

    // async friendsDelete(user,hobby){
    //     let result = await sequelize.query("DELETE FROM friends WHERE id_hobby = "+hobby.id_hobby+" AND id_user = "+user.id_user)
    //     return result
    // }

}
/*Termina modelo friends*/


const sequelize = require('../db/conexion')


module.exports = class hobbiesModel {
    constructor(hobbies) {
        this.hobbies = hobbies
    }


    async hobbiesSelect(user) {
        console.log(user)
        let result = await sequelize.query("SELECT id_hobby,name_hobby FROM hobbies RIGHT JOIN users ON hobbies.id_user = users.id_user WHERE users.id_user = "+user.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }

    async hobbiesInsert(user,hobby){
        let result = await sequelize.query("INSERT INTO hobbies VALUES ("+user.id_user+", '"+hobby.name+"')")
        return result
    }

    async hobbiesDelete(user,hobby){
        let result = await sequelize.query("DELETE FROM hobbies WHERE id_hobby = "+hobby.id_hobby+" AND id_user = "+user.id_user)
        return result
    }

}
/*Termina modelo hobbies*/

const sequelize = require('../db/conexion')


module.exports = class languagesModel {
    constructor(languages) {
        this.languages = languages
    }


    async languagesSelect(user) {
        console.log(user)
        let result = await sequelize.query("SELECT id_language,name_language,language_level FROM languages RIGHT JOIN users ON languages.id_user = users.id_user WHERE users.id_user = "+user.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }

    async languagesInsert(user,language){
        let result = await sequelize.query("INSERT INTO languages VALUES ("+user.id_user+", '"+language.name+"', '"+language.level+"')")
        return result
    }

    async languagesDelete(user,language){
        let result = await sequelize.query("DELETE FROM languages WHERE id_language = "+language.id_language+" AND id_user = "+user.id_user)
        return result
    }

}
/*Termina modelo idioms*/



const sequelize = require('../db/conexion')


module.exports = class loginModel {
    constructor(login) {
        this.login = login
    }

    async singIn(user) {
        let result = await sequelize.query("INSERT INTO users  VALUES ('" + user.first_name + "', '" + user.last_name + "','"+user.city+"','"+user.country+"', '" + user.linkedln + "','" + user.age + "', '" + user.email + "','"+user.password+"')");
        console.log(result);
        if (result[0].length == 0) {
            let result = await sequelize.query("SELECT  id_user,first_name,last_name,email FROM users WHERE [email] ='" + user.email + "' AND [password] = '" + user.password + "'");
            if (result[0].length > 0) {
                return result[0][0]
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }


    async loginUser(user) {
        let result = await sequelize.query("SELECT  id_user,first_name,last_name,email FROM users WHERE [email] ='" + user.email + "' AND [password] = '" + user.password + "'");
        if (result[0].length > 0) {
            return result[0][0]
        }
        else {
            return false
        }
    }
    async loginData(user) {
        let result = await sequelize.query("SELECT first_name,last_name,city,country,linkedln,age,email FROM users WHERE id_user =" + user.id_user + " AND [email] = '" + user.email + "'");
        if (result[0].length > 0) {
            return result[0][0]
        }
        else {
            return false
        }
    }

    async listUsers (user){
        console.log(user.id_user)
        let result = await sequelize.query("SELECT id_user,first_name,last_name FROM users WHERE id_user !=" + user.id_user);
        return result
    }
}


/*Termina modelo users*/


const sequelize = require('../db/conexion')


module.exports = class pictureModel {
    constructor(picture) {
        this.picture = picture
    }


    async pictureSelect(user) {
        let result = await sequelize.query("SELECT id_picture,img FROM perfilPicture RIGHT JOIN users ON perfilPicture.id_user = users.id_user WHERE users.id_user = " + user.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }

    async pictureInsert(user, picture) {
        let result = await sequelize.query("INSERT INTO perfilPicture VALUES (" + user.id_user + ", '" + picture.img + "')")
        return result
    }
    async pictureUpdate(user, picture) {
        console.log('Actualizar')
        let result = await sequelize.query("Update perfilPicture SET img ='" + picture.img + "' WHERE id_user = " + user.id_user + " AND id_picture =" + picture.id_picture)
        return result
    }

    async pictureDelete(user, picture) {
        let result = await sequelize.query("DELETE FROM perfilPicture WHERE id_picture = " + picture.id_picture + " AND id_user = " + user.id_user)
        return result
    }

}


/*Termina modelo pictures*/


const sequelize = require('../db/conexion')


module.exports = class studiesModel {
    constructor(studies) {
        this.studies = studies
    }


    async studiesSelect(user) {
        console.log(user)
        let result = await sequelize.query("SELECT id_study,place,title FROM studies RIGHT JOIN users ON studies.id_user = users.id_user WHERE users.id_user = "+user.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }

    async studiesInsert(user,study){
        let result = await sequelize.query("INSERT INTO studies VALUES ("+user.id_user+", '"+study.place+"', '"+study.title+"')")
        return result
    }

    async studiesDelete(user,study){
        let result = await sequelize.query("DELETE FROM studies WHERE id_study = "+study.id_study+" AND id_user = "+user.id_user)
    }

}

/*Termina modelo users*/
