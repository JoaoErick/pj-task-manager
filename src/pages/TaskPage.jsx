import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-zinc-900 flex justify-center p-6">
      <div className="w-[600px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-yellow-500"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-zinc-800 px-6 py-4 rounded-md">
          <h2 className="text-xl text-zinc-200 font-bold">{title}</h2>
          <p className="text-zinc-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
