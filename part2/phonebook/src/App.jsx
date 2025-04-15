import { useState, useEffect } from 'react'
import Filter from './filter'
import Addperson from './addperson'
import People from './people'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilterName(event.target.value)
  }

  const toShow = filterName
    ? persons.filter(person =>
        person.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : persons

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    const nameExists = persons.some(person => person.name === newName);

    if (!nameExists) {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterName} onChange={handleFilter}/>
      <h2>add a new</h2>
      <Addperson
      onSubmit={handleSubmit}
      newName={newName}
      newNumber={newNumber}
      handleNameChange={handleNameChange}
      handleNumChange={handleNumChange}
      />
      <h2>Numbers</h2>
      <People people={toShow}/>
    </div>
  )
}

export default App