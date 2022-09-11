export default function NavBar(){
    return (
        <nav className="navbar">
            <img  src={require('../pictures/globe.png')} alt='logo' className="nav--logo"></img>
            <h1 className="nav--title">Travel Journal</h1>
        </nav>
    )
}