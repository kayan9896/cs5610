const mdb = require("mongodb");
require('dotenv').config()

const c = new mdb.MongoClient(process.env.url);
module.exports.connectdb = async () => {
    try {
        await c.connect();
        console.log('connected');
    }
    catch (e) { console.log(e); }
}
module.exports.addtodb = async (n1) => {
    try {
        const dat = await c.db('cuisine').collection('food').insertOne(n1);
        console.log(dat.insertedId);
    }
    catch (e) { console.log(e); }
}
module.exports.readdb = async () => {
    try {
        const dat = await c.db('cuisine').collection('food').find();
        //console.log(dat);
        return dat.toArray();
    }
    catch (e) { console.log(e); }
}
module.exports.getone = async (n) => {
    try {
        const dat = await c.db('cuisine').collection('food').findOne({Dish:n});
        //console.log(dat);
        return dat;
    }
    catch (e) { console.log(e); }
}
module.exports.updatedb = async (o,n) => {
    try {
        const dat = await c.db('cuisine').collection('food').updateOne({ Dish: o }, { $set: n });
        console.log(`${dat.matchedCount}  matched.`);
        console.log(`${dat.modifiedCount}  updated.`);
    }
    catch (e) { console.log(e); }
}
module.exports.deletedb = async (n) => {
    try {
        const dat = await c.db('cuisine').collection('food').deleteOne({ Dish: n });
        console.log(`${dat.deletedCount}  matched.`);
    }
    catch (e) { console.log(e); }
}