import { BsSearch } from "react-icons/bs";
const Search = () => {
  return (
    <div className="relative">
      <BsSearch className="absolute top-[11px] left-3 font-bold text-lg" />
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search your destination..."
          className="outline-0 border pl-10 py-2 mr-10 text-sm w-full bg-transparent rounded"
        />
      </form>
    </div>
  );
};

export default Search;
