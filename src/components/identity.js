const Identity = ({picture, lastname, firstname, job}) => {
    return (
        <div>
            <div className="left-section w-25">
                <img id="profile-picture" src={picture} alt="" />
            </div>

            <div className="right-section w-75">
                <h3>{`${firstname} ${lastname}`}</h3>
                <p>{job}</p>
            </div>

        </div>
    )
}

export default Identity