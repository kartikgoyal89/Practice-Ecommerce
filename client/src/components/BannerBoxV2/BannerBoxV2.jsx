import "./banner.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function BannerBoxV2({ src, info }) {
  return (
    <div className="bannerBox2 w-full overflow-hidden rounded-md group relative">
      <img
        src={src}
        alt="sub-banner"
        className="w-full rounded-md transition-all duration-150 group-hover:scale-105"
      />

      <div
        className={`absolute top-[20%] ${
          info == "left" ? "left-[7%]" : "right-[7%]"
        }`}
      >
        <h2 className="text-[24px] font-bold">Samsung Gear</h2>
        <span className="block text-[20px] font-[500]">$129.00</span>
        <Button className="!bg-primary !text-white !mt-5">
          <Link>Shop Now</Link>
        </Button>
      </div>
    </div>
  );
}

export default BannerBoxV2;
