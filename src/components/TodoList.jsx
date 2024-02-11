"use client"

import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { PiNotePencilBold } from "react-icons/pi";

const getTodos = async () => {
    try {
        const res = await fetch( `http://localhost:3000/api/todos`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch todos");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading todos: ", error);
    }
}

export default async function TodoList() {
    const { todos } = await getTodos();
    return (
        <>
            {todos.map((todo) => (
                <div key={todo._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                    <div>
                        <h2 className="font-bold text-2xl">{todo.title}</h2>
                        <div>{todo.description}</div>
                    </div>

                    <div className="flex gap-2">
                        <RemoveBtn id={todo._id} />
                        <Link href={`./editTodo/${todo._id}`}>
                            <PiNotePencilBold size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}