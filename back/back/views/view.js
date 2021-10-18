const friendsController = require('../controller/friendsController');
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")


module.exports = async (app) => {
    app.get('/friends/selectUsers', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await friendsController.friendsUserSelect(user.data));
    });
    // app.post('/friends/insert', autentication.userAutentication, async (req, res) => {
    //     const token = req.headers.authorization.split(' ')[1];
    //     let user = jwt.verify(token, process.env.SECRETKEY);
    //     let friend = req.body
    //     res.send(await friendsController.friendsInsert(user.data, friend));
    // });
    // app.delete('/friends/delete', autentication.userAutentication, async(req, res) => {
    //     const token = req.headers.authorization.split(' ')[1];
    //     let user = jwt.verify(token, process.env.SECRETKEY);
    //     let friend = req.body
    //     res.send(await friendsController.friendsDelete(user.data, friend));
    // });
}

/*Termina vista friends*/


const hobbiesController = require('../controller/hobbiesController');
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")



module.exports = async (app) => {
    app.get('/hobbies/select', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await hobbiesController.hobbiesSelect(user.data));
    });
    app.post('/hobbies/insert', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let hobby = req.body
        res.send(await hobbiesController.hobbiesInsert(user.data, hobby));
    });
    app.delete('/hobbies/delete', autentication.userAutentication, async(req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let hobby = req.body
        res.send(await hobbiesController.hobbiesDelete(user.data, hobby));
    });
}


/*Termina vista hobbies*/


module.exports = async (app) => {
    app.get('/', function (req, res) {
        res.render('pages/index');
    });
    app.get('/singIn', function (req, res) {
        res.render('pages/singIn');
    });
    app.get('/perfil', function (req, res) {
        res.render('pages/perfil');
    });

}

/*Termina vista index*/


const languagesController = require('../controller/languagesController');
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")



module.exports = async (app) => {
    app.get('/languages/select', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await languagesController.languagesSelect(user.data));
    });
    app.post('/languages/insert', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let language = req.body
        res.send(await languagesController.languagesInsert(user.data, language));
    });
    app.delete('/languages/delete', autentication.userAutentication, async(req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let language = req.body
        res.send(await languagesController.languagesDelete(user.data, language));
    });
}

/*Termina vista idioms*/


const loginController = require('../controller/loginController');
const validation = require('../middleware/validation')
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")

module.exports = async (app) => {

    app.post('/login/singIn', async (req,res) =>{
        let user = req.body;
        res.send(await loginController.singIn(user));
    });

    app.post('/login', validation.loginValidation, async (req, res) => {
        let user = req.body;
        let token = await loginController.loginUser(user)
        if (token == false) {
            res.status(500).json({ error: 'Usuario no encontrado' })
        } else {
            res.send(token);
        }
    });
    app.get('/login/data', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await loginController.loginData(user.data));
    });

    app.get('/login/select', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await loginController.listUsers(user.data))
    });

}
/*Termina vista login*/


const pictureController = require('../controller/pictureController');
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")



module.exports = async (app) => {
    app.get('/picture/select', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await pictureController.pictureSelect(user.data));
    });
    app.post('/picture/insert', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let picture = req.body
        res.send(await pictureController.pictureInsert(user.data, picture));
    });
    app.post('/picture/update', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let picture = req.body
        res.send(await pictureController.pictureUpdate(user.data, picture));
    });
    app.delete('/picture/delete', autentication.userAutentication, async(req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let picture = req.body
        res.send(await pictureController.pictureDelete(user.data, picture));
    });
}

/*Termina vista picture*/

const studiesController = require('../controller/studiesControler');
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")



module.exports = async (app) => {
    app.get('/studies/select', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await studiesController.studiesSelect(user.data));
    });
    app.post('/studies/insert', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let study = req.body
        res.send(await studiesController.studiesInsert(user.data, study));
    });
    app.delete('/studies/delete', autentication.userAutentication, async(req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let study = req.body
        res.send(await studiesController.studiesDelete(user.data, study));
    });
}

/*Termina vista studies*/
