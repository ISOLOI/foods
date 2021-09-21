const {dataPath} = '../data/meals.json';


const appRouter = (app, fs) => {


  app.get('/', (req, res) => {
    res.send('welcome to the ROOT');
  });


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

// this line is unchanged
module.exports = appRouter;