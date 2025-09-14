const mongoose = require('mongoose');

const schema = mongoose.Schema({
    is_active: {type: Boolean, required: true},
    created_by: {type: mongoose.SchemaType.ObjectId, required: true}
},{
    versionKey: false,
    timestamps:{
        createdAt: "created_at",
        updatedAd: "updated_at",
    }
})

class Categories extends mongoose.Model{}

schema.loadClass(Categories);
module.exports = mongoose.model("categories", schema);