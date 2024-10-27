const express = require ('express');
const app = express();
const port = 3001;

app.get('/',(req,res) =>{
    res.send('Welcome World');
});

app.get('/about',(req,res)=> {
    res.send('About');
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});