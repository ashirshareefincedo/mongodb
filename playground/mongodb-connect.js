const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    console.log("Unable to connect to mongodb server",)
    return;
  }
  console.log("connected to mongodb server");
  const db= client.db('TodoApp');
//   db.collection('Todos').insertOne({
//     text:'somethin to do',
//     completed:false
//   },(err,res)=>{
//     if(err){
//       return console.log("unable to insert todo", err);
//     }
//
// console.log(JSON.stringify(res.ops,undefined,2));
//   })

db.collection("Users").insertOne({
  name:'Ashir Shareef',
  age:28,
  location:'Bangalore'
},(err,res)=>{
  if(err)
    return console.log("error in creating the collection ",err);
  console.log(JSON.stringify(res.ops,undefined,2));
})
  client.close();
});
