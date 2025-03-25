import { useRef, useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";

function App() {
  const [length, setlength] = useState(6);
  const [numberAllowed, setnumberAllowed] =
    useState(false);
  const [characterAllowed, setcharacterAllowed] =
    useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null); // This is a reference to the input field, we don't need to have a value inside the useRef, we can pass null as well in this case.

  // useCallback is used to cache the function so that it is not created again and again on each render. It is used to optimize the performance of the application.
  const generatePassword = useCallback(() => {
    let pass = "";
    let str =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      const charIndex = Math.floor(
        Math.random() * str.length + 1
      ); // This will generate a random number between 1 and str.length(nicluded becuase of adding 1)
      pass += str.charAt(charIndex);
    }
    setpassword(pass);
  }, [length, numberAllowed, characterAllowed]); // read about this dependency array for useCallback hook.

  const copyPasswordtoClipboard = (password) => {
    window.navigator.clipboard.writeText(
      password
    ); // This will copy the password to the clipboard
    passwordRef.current.select(); // This will select the text inside the input field to the clipboard
  };

  // useEffect hook is used to generate the password each time the component is rendered.
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed]); // this dependency array will make sure that the password is generated whenever the length, numberAllowed or characterAllowed changes.

  return (
    <>
      <div className=" w-full max-w-md max-auto shadow-md shadow-slate-500 rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className=" text-white text-center my-3 ">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // This is sending a reference of the input field to the useRef hook on line number 12
          />
          <button
            className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0"
            onClick={() => {
              copyPasswordtoClipboard(password);
            }}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-3">
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              onChange={(e) =>
                setlength(e.target.value)
              }
              className="cursor-pointer"
            />
            <label id="_" htmlFor="charLength">
              length: {length}
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              value={numberAllowed}
              onChange={(e) =>
                setnumberAllowed((prev) => !prev)
              }
              className="cursor-pointer"
            />
            <label
              id="___"
              htmlFor="isNumberAllowed"
            >
              Number
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              value={characterAllowed}
              onChange={(e) =>
                setcharacterAllowed(
                  (prev) => !prev
                )
              }
              className="cursor-pointer"
            />
            <label
              id="__"
              htmlFor="ischaracterAllowes"
            >
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
