const Filter = ({value, onChange}) => {
    return(
    <div>
    filter shown with: <input value={value} onChange={onChange} /> <br />
    </div>
    )
}

export default Filter
