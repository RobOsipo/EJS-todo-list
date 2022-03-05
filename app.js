const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    
    let today = new Date();
    let currentDay = today.getDay()
    let day = ''

    if (currentDay === 6 || currentDay === 0){
        day = 'Weekend'
        res.render('list', {typeOfDay: day})
    } else {
        day = 'Weekday'  
    }

    res.render('list', {typeOfDay: day})

})


app.listen(3002, (req, res) => {
    console.log('App is listening on port 3002')
})