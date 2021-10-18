
const idiomsController = require('../controller/idiomsController');
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")



module.exports = async (app) => {
    app.get('/idioms/select', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await idiomsController.idiomsSelect(user.data));
    });
    app.post('/idioms/insert', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let idiom = req.body
        res.send(await idiomsController.idiomsInsert(user.data, idiom));
    });
    app.delete('/idioms/delete', autentication.userAutentication, async(req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let idiom = req.body
        res.send(await idiomsController.idiomsDelete(user.data, idiom));
    });
}