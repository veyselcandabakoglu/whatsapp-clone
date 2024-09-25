const mongoose = require("mongoose")

const database = () => {
    mongoose.connect("mongodb+srv://veyselCan:Veysel77.@cluster1.0qgey.mongodb.net/", {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    }).then(() => {
        console.log("mongodb conected!!")
    }).catch(err => {
        console.log('err', err)
    })
    
}

module.exports = database