import { useState } from "react";
import Rating from "@mui/material/Rating";
import QtyBox from "../../components/QtyBox/QtyBox";
import { BsCart4 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import Button from "@mui/material/Button";

const ProductInfo = () => {
  const [productAction, setProductAction] = useState();

  return (
    <>
      <h1 className="text-[30px] font-[500] mb-2">
        KitKat Minis, Chocolate Coated Wafer Bar
      </h1>
      <div className=" gap-3">
        <span className="text-[#555] text-[16px] !flex !items-center ">
          Brands:
          <span className="ml-2 mr-5 font-[400] text-black">KitKat</span>
          <Rating name="read-only" value={4} readOnly />
          <span className="ml-2 text-[#555] cursor-pointer">
            Review (0 reviews)
          </span>
        </span>
      </div>

      <div className="flex items-center mt-5 gap-4">
        <span className="text-[23px] oldPrice line-through font-[500] text-[rgba(0,0,0,0.4)]">
          $59.00
        </span>
        <span className="text-[23px] newPrice text-[#ff5252] font-[600]">
          $40.00
        </span>
        <span className="text-[#555] text-[16px]">
          Available In Stock :{" "}
          <span className="text-green-700 text-[16px] font-[600]">
            147 Items
          </span>
        </span>
      </div>

      <br />

      <p className="text-[#555] text-justify">
        MINI DELIGHTS: Delight your taste buds with your favourite KITKAT wafer
        bar in a mini-size COATED WAFER BAR: Indulge in the delicious crispy &
        chocolaty wafer bar and make your mini breaks delightful <br /> HAVE A
        BREAK, HAVE A KITKAT : Just unwrap your KitKat , snap into two and
        enjoy! ENJOY A DELICIOUS BREAK: This pack is perfect for enjoying at
        home or for passing around with your friends and family.{" "}
      </p>

      <div className="flex items-center gap-3 mt-6 text-[#555] text-[18px]">
        <span>Size : </span>
        <div className="flex items-center gap-4 actionsSize">
          <Button
            onClick={() => setProductAction(0)}
            className={`!text-black !min-w-[50px] ${
              productAction === 0 && "productActionActive"
            }`}
          >
            S
          </Button>
          <Button
            onClick={() => setProductAction(1)}
            className={`!text-black !min-w-[50px] ${
              productAction === 1 && "productActionActive"
            }`}
          >
            M
          </Button>
          <Button
            onClick={() => setProductAction(2)}
            className={`!text-black !min-w-[50px] ${
              productAction === 2 && "productActionActive"
            }`}
          >
            L
          </Button>
          <Button
            onClick={() => setProductAction(3)}
            className={`!text-black !min-w-[50px] ${
              productAction === 3 && "productActionActive"
            }`}
          >
            XL
          </Button>
        </div>
      </div>
      <p className="text-[#555] mt-6 mb-0 text-[15px]">
        Free Shipping (Est. Delivery Time 3-4 Business Days)
      </p>

      <div className="!flex items-center gap-5">
        <div className="qtyBoxWrapper w-[70px] mt-4">
          <QtyBox />
        </div>
        <Button className="!bg-primary !text-white !mt-3 !flex !items-center !gap-2 h-[43px] p-2 !px-5">
          {" "}
          <BsCart4 className="text-[20px]" /> Add to Cart
        </Button>
      </div>

      <div className="flex items-center gap-4 mt-4 text-[#555]">
        <span className="flex items-center gap-1 link2 cursor-pointer">
          <IoMdHeartEmpty className="text-[22px]" /> Add to Wishlist
        </span>
        <span className="flex items-center gap-1 link2 cursor-pointer">
          <MdCompareArrows className="text-[22px]" /> Add to Wishlist
        </span>
      </div>
    </>
  );
};

export default ProductInfo;
