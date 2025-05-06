import express from 'express';
import bodyParser from 'body-parser';


const port = 3000;
const app = express();
app.use(bodyParser.urlencoded( { extended : true } ));
app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('node_modules/bootstrap-icons/icons'));


//get calls
app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs');
})

app.get('/about', (req, res) => {
    res.render('about.ejs');
})

app.get('/write', (req, res) => {
    res.render('write-post.ejs');
})


app.post('/submit', (req, res) => {
    console.log(req);
    console.log(res);
})


//starting web server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})