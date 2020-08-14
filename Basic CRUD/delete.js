var db = connect('127.0.0.1:27017/users'),
    users = null;
db.names.find().forEach(function(thisDoc){
     if(thisDoc.name == 'Sandy'){
       db.names.remove({ "_id": thisDoc._id });
  };
});

users = db.names.find();

while(users.hasNext()){
  printjson(users.next());
}
