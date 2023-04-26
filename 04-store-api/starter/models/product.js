const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
    },
    price: {
        type : Number, 
        // required: true,
    },
    featured: {
        type : Boolean,
        default: false,
    },
    rating: {
        type:Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        enum:{
            values:['ikea', 'liddy','caressa','marcos'],
            message: '{VALUE} is not supported',
        },
        //enum:[ikea]
    },
})

module.exports = mongoose.model('Product', productSchema)