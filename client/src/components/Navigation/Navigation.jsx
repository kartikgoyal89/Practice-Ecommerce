import Button from "@mui/material/Button";
import "./navigation.css";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoRocketOutline } from "react-icons/io5";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(!isOpenCatPanel);
  };

  return (
    <>
      <nav className="navigation-header">
        <div className="container flex items-center justify-end gap-8">
          <div className="col-1 w-[16%]">
            <Button
              className="!text-black !font-[600] !text-[16px] gap-2 w-full !py-4"
              onClick={() => openCategoryPanel(true)}
            >
              <RiMenu2Fill />
              Shop By Categories
              <FaAngleDown className="text-[14px] ml-auto" />
            </Button>
          </div>
          <div className="main-header col-2 w-[60%]">
            <ul className="flex items-center gap-2 nav">
              <li className="list-none">
                <Link to="/" className="main-link">
                  <Button className="!text-black !text-[500] !text-[16px] !py-4">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link2 text-[18px] main-link font-[500]">
                  <Button className="!text-black  !text-[500] !text-[16px] !py-4">
                    Fashion
                  </Button>
                </Link>

                <div className="hover-submenu  absolute top-[100%] left-[0%] min-w-[130px] bg-white shadow-md opacity-0">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link>
                        <Button className="!text-black !px-3 !text-[15px] w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,0.8)]">
                          Men
                        </Button>
                      </Link>

                      <div className="hover-submenu inner-hover-submenu absolute top-[100%] left-[101%] min-w-[180px] bg-white shadow-md opacity-0">
                        <ul>
                          <li className="list-none w-full">
                            <Link>
                              <Button className="!text-black !px-3 !text-[15px] w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,0.8)]">
                                T-shirt
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link>
                              <Button className="!text-black !px-3 !text-[15px] w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,0.8)]">
                                Jeans
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link>
                              <Button className="!text-black !px-3 !text-[15px] w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,0.8)]">
                                Footwear
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link>
                              <Button className="!text-black !px-3 !text-[15px] w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,0.8)]">
                                Watch
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link>
                              <Button className="!text-black !px-3 !text-[15px] w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,0.8)]">
                                Glasses
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-none w-full">
                      <Link>
                        <Button className="!text-black !px-3 !text-[15px] w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,0.8)]">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link>
                        <Button className="!text-black !px-3 !text-[15px] w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,0.8)]">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link>
                        <Button className="!text-black !px-3 !text-[15px] w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,0.8)]">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link>
                        <Button className="!text-black !px-3 !text-[15px] w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,0.8)]">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link to="/" className="link2 text-[18px] font-[500]">
                  <Button className="!text-black !text-[500] !text-[16px] !py-4">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link2 text-[18px] font-[500]">
                  <Button className="!text-black !text-[500] !text-[16px] !py-4">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link2 text-[18px] font-[500]">
                  <Button className="!text-black !text-[500] !text-[16px] !py-4">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link2 text-[18px] font-[500]">
                  <Button className="!text-black !text-[500] !text-[16px] !py-4">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link2 text-[18px] font-[500]">
                  <Button className="!text-black !text-[500] !text-[16px] !py-4">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link2 text-[18px] font-[500]">
                  <Button className="!text-black !text-[500] !text-[16px] !py-4">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link2 text-[18px] font-[500]">
                  <Button className="!text-black !text-[500] !text-[16px] !py-4">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-3 w-[17%]  flex items-center justify-center gap-1">
            <IoRocketOutline className="m-0 text-[20px]" />
            <p className="m-0 text-[16px]">&nbsp;Free International Delivery</p>
          </div>
        </div>
      </nav>

      {/* Category Panel Drawer  */}
      <CategoryPanel
        setIsOpenCatPanel={setIsOpenCatPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
