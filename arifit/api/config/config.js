DB_URI="mongodb://admin:czccDcRTLdD9jcJr@cluster0-shard-00-00.r2veq.mongodb.net:27017,cluster0-shard-00-01.r2veq.mongodb.net:27017,cluster0-shard-00-02.r2veq.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-g56vh6-shard-0&authSource=admin&retryWrites=true&w=majority"
process.env.PORT = process.env.PORT || 5000;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
process.env.DB_URI = DB_URI;
process.env.CADUCIDAD_TOKEN = '48h';
process.env.SECRET = process.env.SECRET ||  'czccDcRTLdD9jcJr';