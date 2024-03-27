import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

   <div className=" mx-auto bg-slate-800 max-w-4xl">

    
    <h1 className="text-white text-center">PassOP</h1>
    <p className="text-white text-center">Your own password Manager</p>
    
    <div className="text-white flex flex-col p-4">
        <input className="rounded-full" type="text" />
        <div className="flex">
            <input type="text" />
            <input type="text" />
        </div>
    </div>

   </div>
    </>
  );
};

export default Manager;
