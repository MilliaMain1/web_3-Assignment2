import { Link, Outlet } from "react-router";


export default function MainLayout() {
    return (
        <div className="w-screen h-screen flex flex-col">
            <header className="">
                <h1>Here is the top of the main layout </h1>
                <nav className="flex gap-4">
                    <Link to="/painting">Paintings</Link>                
                    <Link to="/gallery">Galleries</Link>                
                    <Link to="/artist">Artists</Link>                
                    <Link to="/favorites">Favorites</Link>                
                    <Link to="/genre">Genres</Link>                
                    <Link to="/about">About</Link>                
                </nav>
            </header> 
            <main className="max-h-full max-w-full p-4">
                <Outlet />
            </main>
        </div>
    )
}
