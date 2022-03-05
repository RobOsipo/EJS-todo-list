const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    
    let today = new Date();
    let currentDay = today.getDay()
    // let day = ''

    let options = {
        weekday: 'long', 
        day: 'numeric',
        month: 'long'
    }

    let day = today.toLocaleDateString("en-US", options)

    res.render('list', {typeOfDay: day})

    // switch (currentDay) {
    //     case 0:
    //         day = 'Sunday'
    //         res.render('list', {typeOfDay: day})
    //         break;
    //     case 1:
    //         day = 'Monday'
    //         res.render('list', {typeOfDay: day})
    //         break;
    //     case 2: 
    //         day = 'Tuesday'
    //         res.render('list', {typeOfDay: day})
    //         break;
    //     case 3:
    //         day = 'Wednesday'
    //         res.render('list', {typeOfDay: day})
    //         break;
    //     case 4:
    //         day = 'Thursday'
    //         res.render('list', {typeOfDay: day})
    //         break;
    //     case 5:
    //         day = 'Friday'
    //         res.render('list', {typeOfDay: day})
    //         break;
    //     case 6:
    //         day = 'Saturday'
    //         res.render('list', {typeOfDay: day})
    //         break;
    //     default:
    //         console.log('ERROR! Current Day is equal to ' + currentDay + ', it need to be 0 - 6')
    // }

})


app.listen(3002, (req, res) => {
    console.log('App is listening on port 3002')
})