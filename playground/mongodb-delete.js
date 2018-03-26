const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongoDB://localhost:27017/TodoApp',(err,client)=>{
  if(err)
    return console.log("cannot connect to Todos DB");
  console.log("connected to DB");
  const db=client.db('TodoApp');
//   db.collection('Todos').find().toArray().then((docs)=>{
//     console.log(docs);
//   },(err)=>{
//     console.log("unable to fetch todos",err);
// })

db.collection('Users').find({name:'Ashir Shareef'}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log(err);
})

  client.close()
})
