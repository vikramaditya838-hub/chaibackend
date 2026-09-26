require('dotenv').config()
const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/instagram',(req,res) => {
    res.send('ravipatel06_')
})
app.get('/login',(req,res) => {
    res.send('<h1>please login at chai or code</h1>')
})

app.get('/youtude',(req,res) => {
    res.send("<h2> chai our code </h2>")
}) 

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
