import { getData } from "@/utils/crud";
import { edit, remove } from "@/utils/crud";

import SaveButton from "./components/SaveButton";
import DeleteButton from "./components/DeleteButton";
import Form from "./components/Form";
import SearchForm from "./components/SearchForm";

export default async function Home() {
  const data = await getData();

  return (
    <div className="h-screen w-screen flex items-center  flex-col justify-center">
      <h1 className="text-white text-4xl mb-4 tracking-widest ">TodoApp</h1>
      <div className=" border rounded-lg shadow-xl p-10 w-90 bg-white">
        <Form />
        <SearchForm />
        <div className="mt-5 flex flex-col w-auto font-bold text-xl gap-y-2">
          {data.map((todo, ind) => (
            <div
              className="flex w-full h-full justify-center items-center gap-5 "
              key={todo.id}
            >
              <form className="flex  justify-between gap-5" action={edit}>
                <input type="hidden" name="inputId" value={todo.id} />
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name="input"
                  defaultValue={`${ind + 1}) ${todo.input}`}
                />
                <SaveButton />
              </form>
              <form className="flex" action={remove}>
                <input type="hidden" name="inputId" value={todo.id} />
                <DeleteButton />
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
