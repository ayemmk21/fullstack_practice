const http = require('http')
const express = require('express')
const cors = require('cors')

const morgan = require('morgan')
morgan.token('body', (req) => {
  return JSON.stringify(req.body)
})

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

const generateId = () => {
  const maxId = persons.length > 0
  ? Math.max(...persons.map(n => Number(n.id)))
  : 0
  return String(maxId + 1)
}

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.get('/api/info', (request, response) => {
    const totalNumber = persons.length;
    const currentTime = new Date();
    response.send(`
        <p>Phonebook has info for ${totalNumber} people</p>
        <p>${currentTime.toString()}</p>
        `);
  })
  
  app.get('/api/persons/:id',(request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id === id)
    
    if (person) {
    response.json(person)
    }
    else {
        response.status(404).end()
    }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
  })
/*
3.4
  app.post('/api/persons', (request, response) => {
    const person = request.body
    console.log(person)
    response.json(person)
  })
*/

  app.post('/api/persons', (request,response) => {
    const body = request.body
    if (!body.name || !body.number) {
      return response.status(400).json({
        error: 'content missing'
      })
    }

    const nameExists = persons.some((person) => person.name === body.name);
    if (nameExists) {
      return response.status(409).json({
        error: 'name must be unique',
      });
    }

    const person = {
      id: generateId(),
      name: body.name,
      number: body.number || false
    }

    persons = persons.concat(person)
    response.json(person)
  })

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)