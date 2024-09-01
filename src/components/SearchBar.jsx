import React, { useContext, useState } from "react";
import { assets } from "../assets";
import { ContextProduct } from "../context/ContextProduct";
import toast from "react-hot-toast";

const SearchBar = () => {
  let { setSearchVisible, searchVisible, search, setSearch } =
    useContext(ContextProduct);
  let [getUserValue, setGetUserValue] = useState("");
  const getValueHandler = (e) => {
    e.preventDefault();
    if (!getUserValue) {
      toast.error("Required are missing")
    }else{
      setSearch(getUserValue);

    }
    setGetUserValue("");
  };
  return searchVisible ? (
    <div className="my-6 flex items-center font-nowThin">
      <form
        class="flex items-center w-[60%] mx-auto"
        onSubmit={getValueHandler}
      >
        <input
          type="text"
          id="simple-search"
          className=" bg-gray-900 text-white border text-sm rounded-lg  block w-full ps-3 p-2.5  dark:bg-gray-700  outline-none"
          placeholder="Search branch name..."
          required
          value={getUserValue}
          onChange={(e) => setGetUserValue(e.target.value)}
        />
        <button
          type="submit"
          className="border flex items-center gap-1 p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </form>
      <img
        onClick={() => setSearchVisible(false)}
        src={assets.closeWhite}
        className="cursor-pointer invert size-5"
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
