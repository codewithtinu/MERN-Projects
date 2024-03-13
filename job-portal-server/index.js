// username: pmnextsolution   /    vinay2821
// password: 4QFpB4yk9DuGDHH3 /    lS8og9GPM2YFKBol / 

require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 2128;
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);



// middlewears
app.use(express.json());
app.use(cors());


const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@jobportal.g1ydvwe.mongodb.net/?retryWrites=true&w=majority&appName=jobportal`;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@jobportal.g1ydvwe.mongodb.net/?retryWrites=true&w=majority&appName=jobportal`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const db = client.db("mernjobdemo");
    const jobCollections = db.collection("jobdemo");

    app.post("/post-job", async(req, resp) => {
      console.log('test')
      const body = req.body;
      body.createAt = new Date();
      const result = await jobCollections.insertOne(body);
       if(result.insertedId){
        return resp.status(200).send(result)
       }else {
        return resp.status(404).send({
            message : "Job not posted",
            status : false
        })
       }
    })

    app.get('/all-jobs', async(req, resp)=> {
      const data=await jobCollections.find().toArray();
      console.log("Server is running...");
      resp.send(data);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

    

