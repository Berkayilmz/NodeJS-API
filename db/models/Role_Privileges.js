const mongoose = require('mongoose');

const schema = mongoose.Schema({
    role_id: {type: mongoose.SchemaType.ObjectId, required: true},
    permission: {type: String, required: true},
    created_by: {type: mongoose.SchemaType.ObjectId, required: true},
},{
    verisonKey: false,
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
})