const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const events = [

];

let idCounter = 0;

app.use(bodyParser.json());

app.post('/events', function test2(req,res) {
  idCounter += 1;
  const eventObject = {
    id: idCounter,
    name: req.body.name
  };
  events.push(eventObject);
  console.log(events);
  res.status(201).send({ eventObject });
});

app.delete('/events/:id',(req, res) => {
  const requestId = events.find((event) => event.id === req.params.id);
  res.status(202).send(requestId);
    return;
}); 

// create a GET route
app.get('/events/:id', (req, res) => {
    const event = events.find((event) => event.id === req.params.id);
    res.status(200).send(event);
      return;
});


app.get('/events', (req, res) => {
  res.status(200).send(events);
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));