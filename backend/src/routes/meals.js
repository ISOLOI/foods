const mealRoutes = (app, fs) => {

  const dataPath = '../data/meals.json';

  // READ
  app.get('/meals', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = mealRoutes;