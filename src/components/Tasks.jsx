import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-zinc-800 rounded-md shadow">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-zinc-700 border-zinc-600 text-zinc-300 text-left px-3 py-2 rounded-md w-full ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>
            <Button onClick={() => onSeeDetailsClick(task)}>
              <ChevronRightIcon className="size-5" />
            </Button>
            <Button onClick={() => onDeleteTaskClick(task.id)}>
              <TrashIcon className="size-5" />
            </Button>
          </li>
        ))
      ) : (
        <p className="text-zinc-400">Não existe nenhuma tarefa registrada.</p>
      )}
    </ul>
  );
}

export default Tasks;
