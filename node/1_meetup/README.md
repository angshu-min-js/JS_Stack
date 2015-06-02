# Mean_App
simple full stack app

###MongoDB:

- Can be used directly, no schema require.
- NoSQL

#####Example:

```
MongoDB shell version: 3.0.4
connecting to: test
>
> use mean-demo
switched to db mean-demo
> show collections
> db.meetups.insert({ name: "MEAN SF Developers" })
WriteResult({ "nInserted" : 1 })
> show collections
meetups
system.indexes
> db.meetups.find()
{ "_id" : ObjectId("55995a06e0c3881231be9886"), "name" : "MEAN SF Developers" }
> db.meetups.insert({ name: "MEAN SF Developers", speaker: "Ang" })
WriteResult({ "nInserted" : 1 })
> db.meetups.find()
{ "_id" : ObjectId("55995a06e0c3881231be9886"), "name" : "MEAN SF Developers" }
{ "_id" : ObjectId("55995a5be0c3881231be9887"), "name" : "MEAN SF Developers", "
speaker" : "Ang" }
>
```

###NodeJS:

- JavaScript on the Server
- Google’s V8 Engine
- Non-Blocking asyn model
- NPM


###Express:

- Node Framework
- Http server
- Routes
- Middleware
```
Npm –install < > --save (for saving the dependencies in json)

>>npm install


>>node server
```
