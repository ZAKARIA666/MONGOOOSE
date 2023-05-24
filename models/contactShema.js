const mongoose = require('mongoose');

const contactShema = mongoose.Schema(
{
    name: String,
    email : {type:String, required: true},
    password :{type:String, required: true},
    address : {
        city: String,
        code: Number,
    }
}
)
const Contact = mongoose.model('Contact',contactShema)
module.exports=Contact