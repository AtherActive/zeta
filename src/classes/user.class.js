const db = require('../modules/database')

class User {
    id
    username
    #password

    constructor() {
    }

    async initializeFromUsername(usr) {
        let test = new Promise(resolve => {
            db.execute('SELECT * FROM user WHERE username=?', [usr], (err, results, fields) => {
                this.id = results[0].id
                this.username = results[0].username
                this.#password = results[0].password
                console.log(this.getUsername())
                resolve(this)
            })
        })
        return await test 
    }

    comparePassword(hashed_pwd) {
        return hashed_pwd == this.#password
    }
    getId() {
        return this.id;
    }
    getUsername() {
        return this.username;
    }
    updateProperty(property, value) {
        this[`#${property}`] = value;
    }
}

module.exports = User;