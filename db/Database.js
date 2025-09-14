const mongoose = require('mongoose');

let instance = null;

class Database {

    /**
     * Singleton pattern uygulaması - Database kaç kez çağırılırsa çağırılsın tek bir nesne döner.
     */
    constructor() {
        if (!instance) { this.mongoConnection; instance = this; }
        return instance;
    }

    async connect(options) {
        try {
            console.log("DB connecting...");
            let db = await mongoose.connect(options.CONNECTION_STRING);
            this.mongoConnection = db;
            console.log("DB connected succesfully!");
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    }

}

module.exports = Database;