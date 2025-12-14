let moods = [];
let currentId = 1;


module.exports = {
    moods,
    getNextId: () => currentId++
};