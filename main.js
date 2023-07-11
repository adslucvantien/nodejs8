
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lvtien:gV0qzfnAndz2pUUG@cluster0.ip8ysgw.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

/*
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); */


async function saveStudent(id, name, age) {
    try {
      await client.connect(); 
      const collection = client.db("Cluster0").collection("Info");
      
      const student = {
        id: id,
        name: name,
        age: age
      };
      
      
      const result = await collection.insertOne(student);
      
      console.log("Student saved successfully:", result.insertedId);
    } finally {
      await client.close(); 
    }
  }
  
  
  const studentId = 1;
  const studentName = "Van Tien Aptech";
  const studentAge = 20;
  
  saveStudent(studentId, studentName, studentAge).catch(console.error);
  