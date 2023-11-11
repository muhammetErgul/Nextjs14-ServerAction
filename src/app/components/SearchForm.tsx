"use client";
import Image from "next/image";
import { filterItem } from "@/utils/crud";
import { useState } from "react";

interface SearchFormProps {
  filtered: () => string;
}
function SearchForm() {
  const [show, setShow] = useState(true);
  return (
    <div className="flex top-10 justify-center items-center">
      <form
        action={filterItem}
        className="flex justify-center items-center w-72"
      >
        {show && (
          <input
            type="text"
            name="input"
            className="border flex-1 p-1 border-gray-500 outline-none w-90 m-auto font-bold text-lg rounded-md"
          />
        )}

        <button type="submit">
          <Image src="/search.png" width={34} height={34} alt="search" />
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
