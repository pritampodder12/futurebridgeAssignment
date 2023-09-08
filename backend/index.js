const express = require('express');
const cors = require('cors');
const app = express();

const fs = require('fs');

app.use(cors());

app.get('/getMovies', (req, res) => {
    try {
        fs.readFile('./moviesData.json', "utf-8", (err, jsonData)=> {
            if(err) {
                throw err;
            }
            res.send({data: JSON.parse(jsonData).data});
            return;
        })
    } catch(e) {
        res.status(500).send({error: e})
    }
})

app.listen(3001, () => {
    console.log('Listening to 3001 port');
})