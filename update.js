var db = connect('127.0.0.1:27017/users'),
    users = null;
// Update Sandy-undefined to Sandeep kumar Sharma
db.names.find().forEach(function(thisDoc){
   if(thisDoc.name == 'Sandy-Undefined'){
     db.names.update({"_id": thisDoc._id},{"name":"Sandeep Kumar Sharma"});
   };
});

users = db.names.find();

while(users.hasNext()){
  printjson(users.next());
}
