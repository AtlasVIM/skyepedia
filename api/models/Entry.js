const mongoose = require('mongoose')
const {Schema, model} = mongoose;

const EntrySchema = new Schema({
    title:String,
    previewCard:String,
    content:String,

}, {
    timestamps: true,
});

const EntryModel = model('Entry', EntrySchema)

model.exports = EntryModel;
