const Layout = ({children}) => {
    return (
        <>
            <header>
                <p>Je suis un header</p>
            </header>

            <main>
                <p>{children}</p>
            </main>

            <footer>Corentin Maille 2023</footer>
        </>
    )
}

export default Layout