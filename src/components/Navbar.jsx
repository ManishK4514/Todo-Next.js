import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className="text-white text-2xl font-bold" href={"/"}>ToDo App</Link>
            <Link className="bg-white p-2 font-bold rounded-sm" href={"/addTodo"}>Add ToDo</Link>
        </nav>
    )
}