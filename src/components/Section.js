const Section = ({ children, title }) => {
    return (
        <div className='section-wrapper'>
            <div className='section'>
                <h1 className='title'>{title}</h1>

                <div className='children-wrapper'>{children}</div>
            </div>
        </div>
    )
}

export default Section
