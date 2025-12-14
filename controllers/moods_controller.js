const { moods, getNextId } = require('../data/moods_data');


exports.getAllMoods = (req, res) => {
    const { mood } = req.query;


    if (mood) {
        const filtered = moods.filter(m => m.mood === mood);
        return res.json(filtered);
    }


    res.json(moods);
};


exports.getMoodById = (req, res) => {
    const id = Number(req.params.id);
    const record = moods.find(m => m.id === id);


    if (!record) {
        return res.status(404).json({ message: 'Запись не найдена' });
    }


    res.json(record);
};


exports.createMood = (req, res) => {
    const { mood, note } = req.body;


    if (!mood) {
        return res.status(400).json({ message: 'Настроение обязательно' });
    }


    const newMood = {
        id: getNextId(),
        mood,
        note: note || '',
        date: new Date().toISOString()
    };


    moods.push(newMood);
    res.status(201).json(newMood);
};


exports.deleteMood = (req, res) => {
    const id = Number(req.params.id);
    const index = moods.findIndex(m => m.id === id);


    if (index === -1) {
        return res.status(404).json({ message: 'Запись не найдена' });
    }


    moods.splice(index, 1);
    res.json({ message: 'Запись удалена' });
};