const mdb=require("mongodb");
async function main(){
    const url='mongodb+srv://jomud9:7leungon9@cluster0.m87wg71.mongodb.net/?retryWrites=true&w=majority';
    const c=new mdb.MongoClient(url);
    try{
        await c.connect();
        //await list(c);
        await createmulti(c,[
            {
                name:'one',
                sum:'good',
                room:1,
                price:100
            },
            {
                name:'one',
                room:2,
                price:'120'
            }
        
        ])
    }
    catch(e){console.log(e);}

}
main().catch(console.error);

async function createmulti(c,nl){
    const dat=await c.db().collection('listingsAndReviews').insertMany(nl);
    console.log(dat.insertedIds);
}
async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({ name: nameOfListing });

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}
async function list(c){
    const databaselist=await c.db().admin().listDatabases();
    console.log("DATABASE:");
    databaselist.databases.forEach(db=>{
        console.log(`${db.name}`)
    })
}