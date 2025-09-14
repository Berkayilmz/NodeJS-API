const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    is_active: {type: String, deault: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    phone_number: {type: String, required: true},
},{
    versionKey: false,
    // timestamps: true,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
})

class User extends mongoose.Model{

}

schema.loadClass(User);
module.exports = mongoose.model("users", schema);