const server = require('./src/app.js');
const { conn } = require('./src/db.js');


conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('Listening on port 3001'); 
  });
});