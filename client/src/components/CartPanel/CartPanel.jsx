import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "@mui/material/Button";

const CartPanel = () => {
  return (
    <>
      <div className="scroll max-w-[400px] max-h-[400px] mt-4 overflow-y-scroll !p-0">
        <div className="card flex !gap-3 pr-2 border-b border-[#ccc]">
          <div className="img w-[25%] py-3">
            <img
              src="https://m.media-amazon.com/images/I/61SgexiVsjL._SX569_PIbundle-17,TopRight,0,0_AA569SH20_.jpg"
              alt="product-img"
              className="max-w-[100px] object-contain"
            />
          </div>
          <div className="info w-[74%] py-3 pr-3 relative">
            <h4 className="text-[15px] mt-1">
              KitKat Minis, Chocolate Coated Wafer Bar
            </h4>
            <p className="flex items-center gap-5 mt-2">
              <span>
                Qty: <span className="font-[500] text-primary">2</span>
              </span>
              <span>
                Price: <span className="text-primary font-[500]">$ 25.00</span>
              </span>
            </p>
            <Button className="!absolute !right-[0px] !text-black !min-w-[35px] !rounded-full !min-h-[35px] !top-[20px] !cursor-pointer">
              <RiDeleteBin6Line className="text-[16px]" />
            </Button>
          </div>
        </div>

        <div className="card flex !gap-3 pr-2 border-b border-[#ccc]">
          <div className="img w-[25%] py-3">
            <img
              src="https://m.media-amazon.com/images/I/61SgexiVsjL._SX569_PIbundle-17,TopRight,0,0_AA569SH20_.jpg"
              alt="product-img"
              className="max-w-[100px] object-contain"
            />
          </div>
          <div className="info w-[74%] py-3 pr-3 relative">
            <h4 className="text-[15px] mt-1">
              KitKat Minis, Chocolate Coated Wafer Bar
            </h4>
            <p className="flex items-center gap-5 mt-2">
              <span>
                Qty: <span className="font-[500] text-primary">2</span>
              </span>
              <span>
                Price: <span className="text-primary font-[500]">$ 25.00</span>
              </span>
            </p>
            <Button className="!absolute !right-[0px] !text-black !min-w-[35px] !rounded-full !min-h-[35px] !top-[20px] !cursor-pointer">
              <RiDeleteBin6Line className="text-[16px]" />
            </Button>
          </div>
        </div>

        <div className="card flex !gap-3 pr-2 border-b border-[#ccc]">
          <div className="img w-[25%] py-3">
            <img
              src="https://m.media-amazon.com/images/I/61SgexiVsjL._SX569_PIbundle-17,TopRight,0,0_AA569SH20_.jpg"
              alt="product-img"
              className="max-w-[100px] object-contain"
            />
          </div>
          <div className="info w-[74%] py-3 pr-3 relative">
            <h4 className="text-[15px] mt-1">
              KitKat Minis, Chocolate Coated Wafer Bar
            </h4>
            <p className="flex items-center gap-5 mt-2">
              <span>
                Qty: <span className="font-[500] text-primary">2</span>
              </span>
              <span>
                Price: <span className="text-primary font-[500]">$ 25.00</span>
              </span>
            </p>
            <Button className="!absolute !right-[0px] !text-black !min-w-[35px] !rounded-full !min-h-[35px] !top-[20px] !cursor-pointer">
              <RiDeleteBin6Line className="text-[16px]" />
            </Button>
          </div>
        </div>

        <div className="card flex !gap-3 pr-2 border-b border-[#ccc]">
          <div className="img w-[25%] py-3">
            <img
              src="https://m.media-amazon.com/images/I/61SgexiVsjL._SX569_PIbundle-17,TopRight,0,0_AA569SH20_.jpg"
              alt="product-img"
              className="max-w-[100px] object-contain"
            />
          </div>
          <div className="info w-[74%] py-3 pr-3 relative">
            <h4 className="text-[15px] mt-1">
              KitKat Minis, Chocolate Coated Wafer Bar
            </h4>
            <p className="flex items-center gap-5 mt-2">
              <span>
                Qty: <span className="font-[500] text-primary">2</span>
              </span>
              <span>
                Price: <span className="text-primary font-[500]">$ 25.00</span>
              </span>
            </p>
            <Button className="!absolute !right-[0px] !text-black !min-w-[35px] !rounded-full !min-h-[35px] !top-[20px] !cursor-pointer">
              <RiDeleteBin6Line className="text-[16px]" />
            </Button>
          </div>
        </div>
      </div>

      <br />
      <div className="bottomSec bg-white absolute bottom-[10px] w-full">
        <div className="bottomInfo py-3 w-full flex flex-col gap-1">
          <div className="w-full flex items-center justify-between px-4">
            <span className="text-[15px]">1 Item</span>
            <span className="text-primary text-[15px] font-[600]">$20.00</span>
          </div>

          <div className="w-full flex items-center justify-between px-4">
            <span className="text-[15px]">Shipping</span>
            <span className="text-[15px] text-primary font-[600]">$7.00</span>
          </div>
        </div>

        <div className="bottomInfo py-3 w-full flex flex-col gap-1">
          <div className="w-full flex items-center justify-between px-4">
            <span className="text-[15px]">Total (tax excl.)</span>
            <span className="text-primary text-[15px] font-[600]">$100.00</span>
          </div>

          <div className="w-full flex items-center justify-between px-4">
            <span className="text-[15px]">Total (tax incl.)</span>
            <span className="text-[15px] text-primary font-[600]">$100.00</span>
          </div>

          <div className="w-full flex items-center justify-between px-4">
            <span className="text-[15px]">Taxes</span>
            <span className="text-[15px] text-primary font-[600]">$0.00</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 px-4 !w-full mb-4">
          <Button className="!bg-primary !text-white w-[49%]">View Cart</Button>
          <Button className="!bg-primary !text-white w-[49%]">Checkout</Button>
        </div>
      </div>
    </>
  );
};

export default CartPanel;

//4237
