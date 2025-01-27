import { useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const QtyBox = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="qtyBox border-2 border-[#ccc] !rounded-md flex items-start w-[100%]">
      <input
        type="number"
        className="w-full h-[45px] p-2 px-2 text-[16px] focus:outline-none rounded-md"
        defaultValue={count}
        value={count}
        min={1}
      />
      <div className="flex items-start flex-col items-center h-full pt-1">
        <Button
          className="!min-w-[10px] !h-[20px] !text-black opacity-55"
          onClick={() => setCount(count + 1)}
        >
          <FaAngleUp />
        </Button>

        <Button
          className="!min-w-[10px] !h-[20px] !text-black opacity-55"
          onClick={() => setCount(count - 1)}
        >
          <FaAngleDown />
        </Button>
      </div>
    </div>
  );
};

export default QtyBox;
