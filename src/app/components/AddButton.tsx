"use client";
import { useFormStatus } from "react-dom";
function AddButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="border rounded-md bg-green-400 w-max py-2 px-10 m-auto text-yellow-50 font-bold cursor-pointer"
    >
      {pending ? "Adding" : "ADD"}
    </button>
  );
}

export default AddButton;
