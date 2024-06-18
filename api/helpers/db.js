import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
const connString = 'mongodb+srv://liteflix:LTFLX-mdb@lc-cluster.vn9e7bg.mongodb.net/liteflix?retryWrites=true&w=majority&appName=LC-cluster';

const connect = async () => {
    console.log('Connecting to DB...');
    await mongoose.connect(connString);
    console.log('DB Connected');
}

export {
    connect as dbConnect,
};