const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const publicPath = path.join(__dirname,'public');


app.use(express.static(publicPath));
/* Routes */
app.get('/',(req,res)=>{res.sendFile(path.join(__dirname,'./views/home.html'))})

app.listen(PORT,()=>console.log(`TAMO CHELO EN EL PUERTO ${PORT}
http://localhost:${PORT}`));
