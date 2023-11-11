"use client";
import { create } from "@/utils/crud";
import AddButton from "./AddButton";
import { useRef } from "react";
import { useFormState } from "react-dom";

function Form() {
  const initialState = {
    message: null,
  };

  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(create, initialState);
  return (
    <form
      action={async (formData: FormData) => {
        formAction(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className="flex flex-col w-90 m-auto gap-5"
    >
      {state?.message && (
        <div className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800">
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className="ml-3 text-sm font-semibold underline hover:no-underline">
            {state?.message}
          </div>
          <button
            onClick={() => location.reload()}
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}

      <input
        type="text"
        name="input"
        className="border flex-1 p-1 border-gray-500 outline-none w-90 m-auto font-bold text-lg rounded-md"
      />

      <AddButton />
    </form>
  );
}

export default Form;
