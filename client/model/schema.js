const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    endpoint: Object,
    // expirationTime: Boolean,
    // p256dh: String,
    // auth: String,


})

module.exports = mongoose.model('db',userSchema);