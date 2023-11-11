"use client";
import React from "react";
import { useFormStatus } from "react-dom";
function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-red-500 text-white cursor-pointer border p-1 rounded-md"
      type="submit"
    >
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}

export default DeleteButton;
