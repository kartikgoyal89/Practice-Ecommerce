import "./search.css";
import Button from "@mui/material/Button";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
      <div className="searchbox w-[100%] h-[50px] bg-[#e3e3e3] rounded-[5px] relative p-2">
        <input
          type="text"
          placeholder="Search Products Here..."
          className="w-full h-[35px] bg-transparent focus:outline-none p-2 text-[18px]"
        />
        <Button className="!absolute top-[8px] right-[3px] z-50 !w-[37px] !min-w-[37px] !h-[37px] !rounded-full !text-black">
          <CiSearch className="text-black text-[25px] font-[700]" />
        </Button>
      </div>
    </>
  );
};

export default Search;
