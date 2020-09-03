const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const events = [

];

let idCounter = 1;

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

// create a GET route
app.get('/events/:id', (req, res) => {
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    if (events[i].id === req.params.id) {
      res.status(200).send(event);
      return;
    }
  }

  const event = events.find((event) => event.id === req.params.id);
  res.status(200).send(event);

  // What if the event is not in the list?
});

// create a GET route
app.get('/events', (req, res) => {
  res.status(200).send(events);
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));