import { useState, useEffect } from 'react'
import Filter from './filter'
import Addperson from './addperson'
import People from './people'
import contact from './contacts'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [notification, setNotification] = useState(null)
  const [noti, setDelNoti] = useState(null)

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='add'>
        {message}
      </div>
    )
  }
  
  const Noti = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='delete'>
        {message}
      </div>
    )
  }

  
  useEffect(() => {
    contact.getAll().then(initialContacts => {
      setPersons(initialContacts)})
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilterName(event.target.value)
  }

  const toDelete = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      contact
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
          setDelNoti(`Information of ${name} has been removed from the server`)
          setTimeout(() => {
            setDelNoti(null)
          }, 5000)
        })
        };
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
      contact.create(newPerson).then(addedPerson => {
        setPersons(persons.concat(addedPerson))
        setNewName('')
        setNewNumber('')
        setNotification(`Added ${addedPerson.name}`)
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
    }

    else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Noti message={noti} />
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
      <People people={toShow} handleDelete={toDelete}/>
    </div>
  )
}

export default App