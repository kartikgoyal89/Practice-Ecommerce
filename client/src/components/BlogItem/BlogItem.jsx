import "./blog.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const BlogItem = () => {
  return (
    <div className="blogItem relative group rounded-md">
      <div className="imgWrapper w-full  rounded-lg overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QT9kvgpcVvrp_SX0RQbfjtDv0pbq1gOKLw&s"
          alt="blog-img"
          className="w-full rounded-lg transition-all duration-500 group-hover:scale-105"
        />
      </div>

      <div className="blog-actions flex items-center gap-4">
        <Button
          className="!text-white !w-[34px] !h-[34px] !min-w-[34px] !font-[600] !rounded-md 
          !border-2 border-[#fff] group"
        >
          <SlSizeFullscreen className="blog-icon !text-[20px] !font-[900]" />
        </Button>
        <Button
          className="!text-white !w-[34px] !h-[34px] !min-w-[34px] !font-[600] !rounded-md 
          !border-2 border-[#fff] group"
        >
          <IoSettingsOutline className="blog-icon !text-[25px] !font-[900]" />
        </Button>
      </div>

      <div className="info p-5">
        <div className="time flex items-center gap-3 text-primary">
          <FaRegClock className="text-[22px]" />
          <p className="m-0 p-0 font-bold">5 April, 2023</p>
        </div>

        <div className="title mt-4">
          <h5 className="font-[600]">Lorem ipsum dolor sit amet.</h5>
        </div>

        <div className="desc py-3 pb-5">
          <p className="text-[rgba(0,0,0,0.5)]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            excepturi perspiciatis officiis
          </p>
        </div>
        <Link className="py-4 underline uppercase text-primary">Read More</Link>
      </div>
    </div>
  );
};

export default BlogItem;
