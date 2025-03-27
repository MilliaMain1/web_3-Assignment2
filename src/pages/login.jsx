import { NavLink } from "react-router";

export default function LoginPage() {
    return (
        <div className="
            w-screen h-screen
            bg-blend-multiply bg-neutral-600 bg-[url(/bg.jpg)] bg-cover
            flex justify-center content-center place-items-center 
            ">
            <div className="p-4 bg-white rounded h-min">
                <form className="flex flex-col gap-4">
                    <input 
                        name="username" type="text" placeholder="username" 
                        className="p-2 border-2 border-neutral-800 rounded"
                    />
                    <input 
                        name="password" type="password" placeholder="password" 
                        className="p-2 border-2 border-neutral-800 rounded"
                    />
                    <div className="flex gap-2">
                        <NavLink to="/gallery" className="button">Login</NavLink> 
                        <NavLink to="/dashboard" className="button">Register</NavLink> 
                    </div>
                </form>
            </div> 
        </div>
    )
}
