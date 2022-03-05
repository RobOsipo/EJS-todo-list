const express = require('express');
const bodyParser = require('body-parser');
// const date = require(__dirname + '/date.js');



const app = express();
let items = ['Buy Food', 'Watch Anime'];
let workItems = []



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))


app.get('/', (req, res) => {
    
    let today = new Date();
    

    let options = {
        weekday: 'long', 
        day: 'numeric',
        month: 'long'
    }

    let day = today.toLocaleDateString("en-US", options)
    

    res.render('list', {listTitle: day, newListItems: items})


})


app.post('/', (req, res) => {

    let item = req.body.nextTodo

    items.push(item)

    res.redirect('/')
})

app.post("/work", (req,res) => {

    let item = req.body.newItem
    console.log(req.body.list)

if (req.body.list === "Work"){
    workItems.push(item)
    res.redirect('/work')
} else {
    items.push(item)
    res.redirect('/')
}

    
    
})


app.get('/work', (req, res) => {
    res.render('list', {listTitle: "Work List", newListItems: workItems})
})


app.get('/about', (req, res) => {
    res.render("about")
})




app.listen(3002, (req, res) => {
    console.log('App is listening on port 3002')
})