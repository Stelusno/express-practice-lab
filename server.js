const express = require('express'); 

const app = express(); 

const path = require('path');

const studentDb = require('./data/students');

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));


app.get('/students', function(req, res) {
    const studentNames = studentDb.getAll();
    res.render('students/index', { studentNames})
} );

app.get('/students' , function(req, res) {
    res.render('students/index');
});

// app.get('/teachers', function(req, res) {
//     res.redirect('/students');
// });

app.get('/views', function (req, res) {
    res.render('home'); 
});

app.get('/teachers', function(req, res) {
    res.render('partials/footer')
})

app.listen(3001, function() {

});


