
const Card = ({img, title, text}) => {
    return (
        <div className="card w-50 mx-auto">
            <img src={img} className="card-img-top mx-auto my-3" alt="" style={{ width: "125px" }} />

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="/projets" className="btn btn-primary">Go back</a>
            </div>
        </div>
    )
}

export default Card;