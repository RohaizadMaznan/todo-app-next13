import { Home } from "@/pages/home";
import { HOST_URL } from "api/TodoAPI";

export type ITodoInputProps = {
  id: string;
  task: string;
  status?: string;
  created: string;
  updated: string;
  time: string;
};

async function getTodos() {
  const res = await fetch(`${HOST_URL}/todos/records`, { cache: "no-store" });
  const data = await res.json();
  return data?.items as ITodoInputProps[];
}

export default async function HomePage() {
  const todos = await getTodos();

  return <Home todos={todos} />;
}
