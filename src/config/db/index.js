const mongoose = require('mongoose');
async function connect()
{
    try{
        await mongoose.connect('mongodb://localhost:27017/nhatminh_blog_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect successfully!!');
    }catch (error){
        console.log('Connect fail');
    }
}
module.exports ={connect}