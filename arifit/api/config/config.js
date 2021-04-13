process.env.PORT = process.env.PORT || 3080;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let DB_URI = "mongodb://admin:z2fKcb9uKLxpWUzX@cluster0-shard-00-00.r2veq.mongodb.net:27017,cluster0-shard-00-01.r2veq.mongodb.net:27017,cluster0-shard-00-02.r2veq.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-g56vh6-shard-0&authSource=admin&retryWrites=true&w=majority";

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/mydb';
} else {
    urlDB = "here write the mongo connection with mongo atlas and other type of connection mode"
};

process.env.DB_URI = DB_URI;

process.env.CADUCIDAD_TOKEN = '48h';

process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION ||  'este-es-el-seed-desarrollo';