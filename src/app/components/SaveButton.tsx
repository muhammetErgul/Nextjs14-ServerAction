"use client";
import React from "react";
import { useFormStatus } from "react-dom";
function SaveButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className=" bg-green-500 text-white cursor-pointer border p-1 rounded-md "
      type="submit"
    >
      {pending ? "Saving..." : "Save"}
    </button>
  );
}

export default SaveButton;
