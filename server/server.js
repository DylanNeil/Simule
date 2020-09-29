const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const events = [
  {id: 0,
  name: 'Test Event'},
  {id: 1,
    name: 'Test Event'},
  {id: 2,
    name: 'Test Event'},
];

let idCounter = events.length -1;

app.use(bodyParser.json());

app.post('/events', function createEvent(req,res) {
  idCounter += 1;
  const eventObject = {
    id: idCounter,
    name: req.body.name
  };
  events.push(eventObject);
  res.status(201).send({ eventObject });
});

app.delete('/events/:id',(req, res) => {
  const requestId = events.find((event) => event.id === req.params.id);
  
  for(let i=0; i<=events.length -1; i += 1){
    const eventsID = events[i].id;
    const currentID = req.params.id;
    const index = events[i];
       if(eventsID == currentID){
         events.splice([i],1);
       }
       else{
        res.status(404).send();        
       }
  }
  res.status(204).send();
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