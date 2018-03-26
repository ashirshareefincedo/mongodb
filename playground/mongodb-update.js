const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongoDB://localhost:27017/TodoApp',(err,client)=>{
  if(err)
    return console.log("cannot connect to Todos DB");
  console.log("connected to DB");
  const db=client.db('TodoApp');

  //delete many
// db.collection("Todos").deleteMany({text:"somethin to do"}).then((res)=>{
//   console.log("item deleted ", res);
// },(err)=>{
//   console.log("failed to delete ", err.ops)
// })

//delete one

//find one and delete
db.collection("Todos").findOneAndDelete({_id:new ObjectID('5ab8e62ea3da2cb4757af3f5')}).then((res)=>{
  console.log("item deleted ", res);
},(err)=>{
  console.log("failed to delete ", err)
})

  // client.close()
})
