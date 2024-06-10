import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex item-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full rounded-full"
      />

      <button className="btn btn-primary text-white rounded-full">
        <IoSearchSharp className='w-6 h-6 outline-none'/>
      </button>
    </form>
  );
};

export default SearchInput;
