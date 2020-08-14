var db = connect('127.0.0.1:27017/users'),
    users = null;
db.names.insert({'name':'Sandeep Kumar Sharma'});

users = db.names.find();

while(users.hasNext())
{
   printjson(users.next());
};
