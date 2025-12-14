const express = require('express');
const path = require('path');


const moodRoutes = require('./routes/moods_routes');
const logger = require('./middleware/logger');


const app = express();
const PORT = 3000;


// Middleware для логов
app.use(logger);


// Middleware для обработки тела запроса
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Раздача статических файлов
app.use(express.static(path.join(__dirname, 'public')));


// Роуты
app.use('/api/moods', moodRoutes);


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});