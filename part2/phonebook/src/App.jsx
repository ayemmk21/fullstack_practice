import { useState } from 'react'

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

  const handleFliter = (event) => {
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          filter shown with: <input value={filterName} onChange={handleFliter} /> <br />
        </div>
        <h2>add a new</h2>
        <div>
          name: <input value={newName} onChange={handleNameChange} /> <br />
          number: <input value={newNumber} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {toShow.map((person, index) => (
        <div key={index}>{person.name} {person.number}</div>
      ))}
    </div>
  )
}

export default App