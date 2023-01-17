import { Home } from "@/pages/home";

export type ITodoInputProps = {
  id: string;
  task: string;
  status?: string;
  created: string;
  updated: string;
  time: string;
};

async function getTodos() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/todos/records",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as ITodoInputProps[];
}

export default async function HomePage() {
  const todos = await getTodos();

  return <Home todos={todos} />;
}
