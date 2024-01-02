const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set view engine dan lokasi folder views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware untuk file statis
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

// Start server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
