const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    subscription: Object
    // expirationTime: Boolean,
    // p256dh: String,
    // auth: String,


})

module.exports = mongoose.model('db',userSchema);