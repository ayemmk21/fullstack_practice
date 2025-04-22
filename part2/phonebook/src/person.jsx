const Person = ({name,number,deleteName}) => {
    return (
    <div>{name} {number}
     <button onClick = {deleteName}>delete</button>
    </div>
    )
}
export default Person