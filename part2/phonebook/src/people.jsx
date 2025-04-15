import Person from "./person";

const People = ({ people}) => {
    return(
        <>
        {people.map((person,index) =>(
            <Person key={index} name={person.name} number={person.number} />
        ))}
        </>
    )
}

export default People