const mdb = require("mongodb");
require('dotenv').config()

const c = new mdb.MongoClient(process.env.url);
module.exports.connectdb = async () => {
    try {
        await c.connect();
        console.log('cnted');
    }
    catch (e) { console.log(e); }
}
module.exports.addtodb = async (n1) => {
    try {
        const dat = await c.db().collection('listingsAndReviews').insertOne(n1);
        console.log(dat.insertedId);
    }
    catch (e) { console.log(e); }
}
module.exports.readd = async (n1) => {
    try {
        const dat = await c.db('test').collection('listingsAndReviews').find(n1);
        console.log(dat);
    }
    catch (e) { console.log(e); }
}