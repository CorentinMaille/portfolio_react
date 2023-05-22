
const SectionWithLink = ({titre, image, lien}) => {
    return (
        <>
            <h2>{titre}</h2>
            <img src={image} alt={titre} style={{  }} />
            <a href={lien} title={titre} target="_blank" rel="noreferrer">
                plus d&#39; infos
            </a>
        </>
    )
}
