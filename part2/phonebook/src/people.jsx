import Person from "./person";

const People = ({ people, handleDelete }) => {
    return (
      <>
        {people.map(person => (
          <div key={person.id}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
          </div>
        ))}
      </>
    );
  };
  
  export default People;