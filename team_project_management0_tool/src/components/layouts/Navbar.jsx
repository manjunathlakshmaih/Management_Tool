import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="border-b border-slate-800 px-8 py-5">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search..."
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={
            "bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 w-full md:w-96 outline-none"
          }
        />
        <div className="flex items-center gap-4">
          <Button
            text="+ New Task"
            onClick={() => console.log("Searching for:", searchValue)}
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
