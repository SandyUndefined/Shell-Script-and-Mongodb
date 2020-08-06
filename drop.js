var db = connect('127.0.0.1:27017/users'),
   i=0
   dbs = null;

db.dropDatabase();
dbs = db.adminCommand({listDatabases:1});

for(i in dbs.databases){
  print(i+'Database:'+dbs.databases[i].name)
};
