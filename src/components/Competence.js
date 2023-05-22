const Competence = ({logo, name, lien, note}) => {
    return (
        <div className="row mt-3 w-100 bg-light border">
            <div id="logo" className="w-25">
                <img className="image" src={logo} alt="logo" />
            </div>
            <div id="name" className="w-25 float-end">
                <h5>{name}</h5>
            </div>
            <div id="lien" className="w-25 float-end">
                <a href={lien}>cliquez donc ici</a>
            </div>
            <div id="note" className="w-25 float-end">
                note : {note} / 5
            </div>
        </div>
    )
}

export default Competence