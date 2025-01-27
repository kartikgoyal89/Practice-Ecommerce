import { useContext } from "react";
import "./productItem.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { SlSizeFullscreen } from "react-icons/sl";
import Tooltip from "@mui/material/Tooltip";
import { MyContext } from "../../App.jsx";

function ProductItem() {
  const context = useContext(MyContext);

  return (
    <div className="productItem p-3 border-2 rounded-md">
      <div className="group imgWrapper w-[100%] overflow-hidden relative">
        <Link to="/">
          <div className="img h-[250px] overflow-hidden">
            <img
              src="https://www.gulabicity.com/images/uploads/2022/Dec/EC147/202212211707530.png"
              alt=""
              className="w-full h-full max-h-[250px] max-w-[250px] object-contain"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD110RJ9HvFwXoTpvkaDCJxXBGY1diQfqRVkNzICEZX_HgsD2aSRxLvNffdolUi-s-7jA&usqp=CAU"
              alt=""
              className="absolute top-0 left-0 w-full h-full max-h-[250px] max-w-[250px] object-contain transition-all duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[0px] left-[0px] z-40 bg-green-500 text-white rounded-lg p-1">
          10%
        </span>

        <div className="actions flex items-center flex-col absolute top-[-200px] right-[0px] gap-1 group-hover:top-[0px] opacity-0 group-hover:opacity-100">
          <Tooltip title="Add to Wishlist" placement="right-end">
            <Button
              className="!text-black !w-[34px] !h-[34px] !min-w-[34px] !rounded-full 
          bg-white hover:!bg-primary hover:!text-[#fff] group"
            >
              <IoMdHeartEmpty className="text-[20px]" />
            </Button>
          </Tooltip>
          <Tooltip title="Compare Product" placement="right-end">
            <Button className="!text-black !w-[34px] !h-[34px] !min-w-[34px] !rounded-full bg-white hover:!bg-primary hover:!text-[#fff] group">
              <MdOutlineCompareArrows className="text-[20px]" />
            </Button>
          </Tooltip>

          <Tooltip title="View Product" placement="right-end">
            <Button
              onClick={() => context.setOpenProductModal(true)}
              className="!text-black !w-[34px] !h-[34px] !min-w-[34px] !rounded-full bg-white hover:!bg-primary hover:!text-[#fff] group"
            >
              <SlSizeFullscreen className="text-[20px]" />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="info p-3">
        <h6 className="text-[14px] mb-2 text-[rgba(0,0,0,0.7)]">
          <Link className="link2 transition-all">Manyavar</Link>
        </h6>
        <h3 className="text-[14px] title font-[500] ">
          <Link className="link2 transition-all">
            Siril Georette Pink Color Saree with Blouse piece
          </Link>
        </h3>
        <Rating name="read-only" value={4} readOnly className="mt-3" />

        <div className="flex items-center mt-3">
          <span className="text-[17px] oldPrice line-through font-[500] text-[rgba(0,0,0,0.4)]">
            $59.00
          </span>
          <span className="text-[17px] ms-3 newPrice text-[#ff5252] font-[600]">
            $40.00
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
