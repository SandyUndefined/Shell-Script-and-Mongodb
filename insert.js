var db = connect('127.0.0.1:27017/users'),
    users = null;

db.names.insert([{'name':'Sandeep Sharma'},{'name':'Sandy'},{'name':'Sandy-Undefined'}])

users = db.names.find();

while(users.hasNext())
{
   printjson(users.next());
}
