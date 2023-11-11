import React, { useRef, useState } from "react";
import threeJS from "./threeJS";

function App() {
  return (
    <>
      <div className="flex w-full h-screen flex-col justify-center bg-black">
        <div className="w-full h-full">
            <div className="w-full h-full">
              {threeJS()}
            </div>
            {/* <div className="w-full text-center absolute top-1/2">
              <h1 className="text-8xl text-black select-none">ThreeJS</h1>
            </div> */}
        </div>
        {/* <div className="">
          <h1>Second Screen</h1>
        </div> */}
      </div>
      <div className="flex w-full h-screen flex-col justify-center">
      </div>

    </>
  )
}

export default App;
