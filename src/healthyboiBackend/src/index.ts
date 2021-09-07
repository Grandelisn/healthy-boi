/**
 * Required External Modules
 */
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet'
import { exerciseRouter } from './controllers/ExerciseController'

dotenv.config();
/**
 * App Variables
 */
if(!process.env.PORT){
    process.exit(1);
}
const mongoSecret:any = process.env['MONGO_URI'];
mongoose.connect(mongoSecret, {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log('connected to database');
});
const PORT : number = parseInt(process.env.PORT as string, 10);
const app = express();
/**
 *  App Configuration
 */
const allowedOrigins = ['http://localhost:19006'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
}
app.use(helmet());
app.use(cors(options));
app.use(express.json());
app.get('/', (req, res)=> {
    console.log('API online');
    res.json('hey mothafucka');
})
app.use('/api', exerciseRouter);
/**
 * Server Activation
 */
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})