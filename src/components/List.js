
const List = ({line1, line2, line3, line4}) => {
    return (
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{line1}</li>
            <li className="list-group-item">{line2}</li>
            <li className="list-group-item">{line3}</li>
            <li className="list-group-item">{line4}</li>
        </ul>
    )
}

export default List