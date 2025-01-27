import { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductItemListView from "../../components/ProductItemListView/ProductItemListView";
import { BsGrid3X2Gap } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";

const ProductListing = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="product-listing py-8">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" className="link2 transition" href="/">
            Home
          </Link>
          <Link underline="hover" className="link2 transition" href="/">
            Fashion
          </Link>
        </Breadcrumbs>
      </div>
      <div className="bg-white p-2 mt-5">
        <div className="container flex items-start gap-3">
          <div className="sidebarWrapper w-[24%] h-full bg-white !sticky !top-[10px]">
            <Sidebar />
          </div>

          <div className="rightProducts w-[76%]">
            <div className="bg-[#f1f1f1] p-3 mb-4 rounded-md w-full flex items-center justify-between">
              <div className="col1 flex items-center">
                <Button
                  onClick={() => setItemView("grid")}
                  className={`!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black ${
                    itemView === "grid" && "gridActive"
                  }`}
                >
                  <IoGrid className="text-[24px]" />
                </Button>
                <Button
                  onClick={() => setItemView("list")}
                  className={`!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black ${
                    itemView === "list" && "gridActive"
                  }`}
                >
                  <BsGrid3X2Gap className="!text-[40px]" />
                </Button>
                <span className="text-[17px] font-[500] pl-3 mb-0 pb-0">
                  There are 27 Products.
                </span>
              </div>

              <div className="col2 ml-auto flex items-center gap-4 pr-4">
                <span className="text-[17px] font-[500] pl-3 mb-0 pb-0">
                  Sort By :
                </span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-white !text-black !capitalize !text-[16px] !border !border-[#000]"
                >
                  Sales, highest to lowest
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose} className="text-[15px]">
                    Sales, highest to lowest
                  </MenuItem>
                  <MenuItem onClick={handleClose} className="text-[15px]">
                    Relevance
                  </MenuItem>
                  <MenuItem onClick={handleClose} className="text-[15px]">
                    Name, A to Z
                  </MenuItem>
                  <MenuItem onClick={handleClose} className="text-[15px]">
                    Name, Z to A
                  </MenuItem>
                  <MenuItem onClick={handleClose} className="text-[15px]">
                    Price, low to high
                  </MenuItem>
                  <MenuItem onClick={handleClose} className="text-[15px]">
                    Price, high to low
                  </MenuItem>
                </Menu>
              </div>
            </div>

            <div
              className={`grid ${
                itemView === "grid"
                  ? "grid-cols-4 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-1"
              }  gap-2`}
            >
              {itemView === "grid" ? (
                <>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </>
              ) : (
                <>
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                </>
              )}
            </div>
            <div className="flex items-center justify-center py-6">
              <Pagination count={10} variant="outlined" color="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
