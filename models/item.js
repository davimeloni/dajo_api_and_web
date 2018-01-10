var mongoose = require('mongoose');
/*require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;*/

var itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    categorytype: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: false,
        default: ""
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    featured: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;