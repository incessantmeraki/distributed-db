# distributed-db

Simple distributed leveldb database that replicates its states among peers using scuttlebutt protocol

### Start server for first peer
```
node database.js --port 9000
```

### Send PUT request to above server
```
curl -X PUT --data 'world' http://localhost:9000/hello
```

### Test get request
```
curl http://localhost:9000/hello
world //returns world
```

### Replicate the database to second peer
```
node database.js --port 9001 -peer localhost:9000
