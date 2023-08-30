"use client"
import { useRouter } from "next/navigation"

function TaskCard({ task }) {
    const router = useRouter();
    return (
        <div className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
        onClick={() => {
            router.push('/task/edit/' + task.id)
        }}
        >
            <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
            <p className="text-base">{task.description}</p>
            <p className="text-">{new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
        )
}

export default TaskCard