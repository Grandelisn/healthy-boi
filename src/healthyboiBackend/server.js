// const express = require('express');
// const { emitWarning } = require('process');
// const app = express();
// let mongoose;
// try{
//     mongoose = require('mongoose');
// }catch(err){
//     console.log('Mongoose Error: ', err)
// }
// const router = express.Router();
// const bodyParser = require('body-parser');
// const enableCORS = (req, res, next) => {
//     if(!process.env.DISABLE_XORIGIN){
//         const allowedOrigins = ['*'];
//         const origin = req.headers.origin;
//         if(!process.env.XORIGIN_RESTRICT || allowedOrigins.indexOf(origin) > -1){
//             console.log(req.method);
//             res.set({
//                 'Access-Control-Allow-Origin': origin,
//                 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
//                 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//             });
//         }
//     }
//     next();
// };

// const TIMEOUT = 10000;
// app.use(bodyParser.urlencoded({extended: 'false'}));
// app.use(bodyParser.json());
// app.get('/', (req, res)=> {
//     console.log('API online');
//     res.json('hey mothafucka');
// })
// app.post('/exercise-entry', (req, res)=> {
//     console.log('post entry: ', req.body);
//     res.status(200).json(req.body); 
// })
// const listener = app.listen(process.env.PORT || 3000, ()=>{
//     console.log('App listening on port ', listener.address().port);
// })