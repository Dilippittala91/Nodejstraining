const express = require('express');
const cors = require('cors');
const app = express();
const port = 5020;


app.use(cors());


let data = [
  { id: 1, name: 'Joker', moviename:'The Dark Knight' },
  { id: 2, name: 'Silver Surfer', moviename:'Fantastic 4' },
  { id: 3, name: 'Will Hunting', moviename:'Good Will Hunting' },
];

let Sports =[
  {id: 1, sport : 'Soccer'},
  {id: 2, sport : 'Cricket'},
  {id: 3, sport : 'Hockey'},
];


app.get('/api/items', (req, res) => {
  res.json(data);
});

app.get('/api/Sports', (req, res) => {
  res.json(Sports);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
