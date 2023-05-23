const Competences = ({ children, title }) => {
    return (
        <div className='competences-wrapper w-75 ms-auto me-auto'>
            <div className='competences mb-3'>
                <h1 className='title'>{title}</h1>

                {children}
            </div>
        </div>
    )
}

export default Competences
