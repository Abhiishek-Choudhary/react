import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()+_}{|";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(()=>{
     passwordGenerate();
  },[length,numAllowed,charAllowed,passwordGenerate])

  const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,5)
      window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-7 p-2
      my-8 text-orange-500 bg-gray-700"
      >
        <h1 className="text-white text-center ">Password Generator</h1>
        <div className="flex shadow rounded-xl overflow-hidden p-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-lg mb-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 rounded-lg shadow-lg shrink-0 mb-3 ml-2"
            onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={(e) => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberinput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberinput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
