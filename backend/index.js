import express from 'express';
import mongoDB from './db.js';
import routes from './routes/route.js';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import corsOptions from './corsOptions.js'
const _dirname = path.resolve()
const app = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true})); 
app.use('/', routes);

// app.use(express.static(path.join(_dirname, "./me/build")))

// app.get('*', function(_,res){
//   res.sendFile(path.join(__dirname, "./me/build/index.html", function(err){
//     res.status(500).send(err);
//   }))
// })
const PORT =process.env.PORT || 8080 ;
// Connect to database before starting server
mongoDB();

app.listen(PORT, () => {
  console.log(`Server is started on PORT ${PORT}`);
});