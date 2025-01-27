import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Collapse } from "react-collapse";
import "./sidebar.css";
import Rating from "@mui/material/Rating";

import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Sidebar = () => {
  const [openCat, setIsOpenCat] = useState(false);
  const [openAvailability, setIsOpenAvailability] = useState(false);
  const [openSize, setIsOpenSize] = useState(false);

  return (
    <div className="sidebar py-5 border border-[#ccc] px-5 rounded-md">
      <div className="box p-2">
        <h3 className="flex items-center justify-between font-[600] mb-3 text-[18px]">
          Shop By Category
          {openCat === false ? (
            <FaAngleDown
              className="cursor-pointer"
              onClick={() => setIsOpenCat(!openCat)}
            />
          ) : (
            <FaAngleUp
              className="cursor-pointer"
              onClick={() => setIsOpenCat(!openCat)}
            />
          )}
        </h3>
        <Collapse isOpened={openCat}>
          <div className="scroll px-3 py-1 relative -left-[10px]">
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="Fashion"
            />
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="Electronics"
            />
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="Bags"
            />
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="Footwear"
            />
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="Groceries"
            />
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="Beauty"
            />
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="Wellness"
            />
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="Jewellery"
            />
          </div>
        </Collapse>
      </div>

      <div className="box p-2">
        <h3 className="flex items-center justify-between font-[600] mb-3 text-[18px]">
          Availability
          {openAvailability === false ? (
            <FaAngleDown
              className="cursor-pointer"
              onClick={() => setIsOpenAvailability(!openAvailability)}
            />
          ) : (
            <FaAngleUp
              className="cursor-pointer"
              onClick={() => setIsOpenAvailability(!openAvailability)}
            />
          )}
        </h3>
        <Collapse isOpened={openAvailability}>
          <div className="scroll px-3 py-1 relative -left-[10px]">
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="Available (10)"
            />
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="In Stock (10)"
            />
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="Not Available (10)"
            />
          </div>
        </Collapse>
      </div>

      <div className="box p-2">
        <h3 className="flex items-center justify-between font-[600] mb-3 text-[18px]">
          Size
          {openSize === false ? (
            <FaAngleDown
              className="cursor-pointer"
              onClick={() => setIsOpenSize(!openSize)}
            />
          ) : (
            <FaAngleUp
              className="cursor-pointer"
              onClick={() => setIsOpenSize(!openSize)}
            />
          )}
        </h3>
        <Collapse isOpened={openSize}>
          <div className="scroll px-3 py-1 relative -left-[10px]">
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="Small (10)"
            />
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="Medium (10)"
            />
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="Large (10)"
            />
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="XL (10)"
            />
            <FormControlLabel
              className="w-full"
              control={<Checkbox size="small" />}
              label="XXL (10)"
            />
          </div>
        </Collapse>
      </div>

      <div className="box p-2">
        <h3 className="flex items-center justify-between font-[600] mb-3 text-[18px] !pb-2">
          Filter By Price
        </h3>
        <RangeSlider />
        <div className="flex py-2 priceRange mt-2">
          <span className="text-[14px]">
            From: <strong className="text-black">$100.00</strong>
          </span>
          <span className="ml-auto text-[14px]">
            From: <strong className="text-black">$200.00</strong>
          </span>
        </div>
      </div>

      <div className="box p-2">
        <h3 className="flex items-center justify-between font-[600] mb-2 text-[18px]">
          Rating
        </h3>
        <div className="ratings flex flex-col">
          <Rating className="w-full" name="read-only" value={5} readOnly />
          <Rating className="w-full" name="read-only" value={4} readOnly />
          <Rating className="w-full" name="read-only" value={3} readOnly />
          <Rating className="w-full" name="read-only" value={2} readOnly />
          <Rating className="w-full" name="read-only" value={1} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
