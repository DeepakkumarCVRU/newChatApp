import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="px-4 py-2">
      <form action="">
        <div className="flex justify-between  ">
          <label className="input  flex items-center gap-2 w-[90%] outline-none">
            <input type="search" className="outline-none border-none " required placeholder="Search" />
          </label>
          <button className=" w-10 h-10 flex items-center justify-center  rounded-full hover:bg-slate-900 hover:ease-initial hover:duration-300 cursor-pointer">
            <IoSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
