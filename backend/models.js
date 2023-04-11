const mongoose = require('mongoose')

const StoresPost = mongoose.model('storesPost', {
    _id: mongoose.SchemaTypes.String,
    name: mongoose.SchemaTypes.String
});

const ItemsPost = mongoose.model('itemsPost', {
    _id: mongoose.SchemaTypes.String,
    name: mongoose.SchemaTypes.String,
    quantity: mongoose.SchemaTypes.Number,
    price: mongoose.SchemaTypes.Number,
    store_id: mongoose.SchemaTypes.String
});

module.exports = {
    Store: StoresPost,
    Item: ItemsPost
}
