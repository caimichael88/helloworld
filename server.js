const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static('public'));

/*app.get('/', (req, res) => {
    //res.send('<h1>Hello htere</h1>');
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
})*/

const PORT = process.env.PORT || 8080;

app.get('*', (req, res) => {
    res.status(400).json({ message: 'page doesnot exist' });
})

app.listen(PORT, ()=>{
    console.log('listing on port 8080');
})