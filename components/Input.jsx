import React, { useRef } from "react";
import useStore from "@/store";

export default function Input() {
  const inputRef = useRef();
  const addPerson = useStore((state) => state.addPerson);
  const add = () => {
    addPerson(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="p-2 ">
      <input className="text-black" type="text" ref={inputRef} />
      <button className=" bg-gray-500 m-2 p-1 rounded-md" onClick={add}>
        Add Person
      </button>
    </div>
  );
}
