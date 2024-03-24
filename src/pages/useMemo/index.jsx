import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";

export default function index() {
  const [number, setNumber] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useRouter();

  function onChangeNumber(e) {
    setNumber(e.target.value);
  }

  function slowFunction(number) {
    for (let i = 0; i < 100000000; i++) {}
    return number * 2;
  }

  const outPutNumber = useMemo(() => slowFunction(number), [number]);

  return (
    <>
      <div
        className={`${
          darkMode ? "bg-sky-950" : ""
        }	flex flex-col items-center container-main`}
      >
        <h1 className="mb-2 text-3xl font-bold underline">useMemo</h1>
        <button
          className="mb-6	bg-sky-700 px-4 py-2 text-white hover:bg-red-800 sm:px-8 sm:py-3 rounded"
          onClick={() => navigate.push("/")}
        >
          Home
        </button>
        <div className="border	w-full	mb-6"></div>
        <h2 className="text-xl	mb-3">About useMemo</h2>
        <p>
          here we make a function that working is slow and that will re render
          if we do any changes in the file so to stop the particular part for
          rerendering we are using useMemo{" "}
        </p>
        <p>
          But try to minimal use of useMemo because it consuming the memory some
          where in the browser, if we using useMEmo for every simple thing so it
          will not increasing the performance although it willo decrese the
          performance.
        </p>
        <div className="flex flex-col items-center	">
          <h2 className="text-xl	mb-3">Practical</h2>
          <input
            type="number"
            value={number}
            className="pl-1 block mb-1"
            onChange={onChangeNumber}
          />
          <button
            className="mb-6	bg-sky-700 px-4 py-2 text-white hover:bg-red-800 sm:px-8 sm:py-3 rounded"
            onClick={() => setDarkMode((pre) => !pre)}
          >
            Blue Mode
          </button>
          <p>Slowly Doubled Value</p>
          <p>{outPutNumber}</p>
        </div>
      </div>
    </>
  );
}
