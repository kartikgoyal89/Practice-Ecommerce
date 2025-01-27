import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

function CategoryCollapse() {
  const [submenuIdx, setSubmenuIdx] = useState(null);
  const [subinnermenuIdx, setSubInnermenuIdx] = useState(null);

  const openSubmenu = (index) => {
    if (submenuIdx === index) {
      setSubmenuIdx(null);
    } else {
      setSubmenuIdx(index);
    }
  };

  const openSubInnermenu = (index) => {
    if (subinnermenuIdx === index) {
      setSubInnermenuIdx(null);
    } else {
      setSubInnermenuIdx(index);
    }
  };
  return (
    <div>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none !w-full  flex-col py-1">
            <Button className="w-full !normal-case !flex !items-center !justify-between !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !text-[16px]">
              <Link to="/">Fashion</Link>
              {submenuIdx === 0 ? (
                <CiSquareMinus
                  className="m-0 p-0 text-[25px] text-[700] cursor-pointer"
                  onClick={() => openSubmenu(0)}
                />
              ) : (
                <CiSquarePlus
                  className="m-0 p-0 text-[25px] text-[700] cursor-pointer"
                  onClick={() => openSubmenu(0)}
                />
              )}
            </Button>
            {submenuIdx === 0 && (
              <>
                <ul className="submenu">
                  <li className="list-none w-full !flex !items-center !justify-between py-1 pb-2">
                    <Button className="!w-full !normal-case !px-6 !text-left !justify-start !text-[rgba(0,0,0,0.8)] !text-[16px]">
                      <Link to="/" className="w-full">
                        Apparel
                      </Link>
                      {subinnermenuIdx === 0 ? (
                        <CiSquareMinus
                          className="m-0 p-0 text-[25px] text-[700] cursor-pointer"
                          onClick={() => openSubInnermenu(0)}
                        />
                      ) : (
                        <CiSquarePlus
                          className="m-0 p-0 text-[25px] text-[700] cursor-pointer"
                          onClick={() => openSubInnermenu(0)}
                        />
                      )}
                    </Button>
                  </li>

                  {subinnermenuIdx === 0 && (
                    <>
                      <ul className="inner-submenu">
                        <li className="w-full  link list-none !flex !items-start !justify-start !text-start">
                          <Button className="w-full !normal-case !text-left !text-[rgba(0,0,0,0.8)] !text-[16px]">
                            <Link to="/" className="w-full px-7">
                              Smart Tablet
                            </Link>
                          </Button>
                        </li>

                        <li className="w-full link list-none !flex !items-start !justify-start !text-start">
                          <Button className="w-full !normal-case !text-left !text-[rgba(0,0,0,0.8)] !text-[16px]">
                            <Link to="/" className="w-full px-7">
                              Crepe T-shirt
                            </Link>
                          </Button>
                        </li>

                        <li className="w-full  link list-none !flex !items-start !justify-start !text-start">
                          <Button className="w-full !normal-case !text-left !text-[rgba(0,0,0,0.8)] !text-[16px]">
                            <Link to="/" className="w-full px-7">
                              Leather Watch
                            </Link>
                          </Button>
                        </li>

                        <li className="w-full link list-none !flex !items-start !justify-start !text-start">
                          <Button className="w-full !normal-case !text-left !text-[rgba(0,0,0,0.8)] !text-[16px]">
                            <Link to="/" className="w-full px-7">
                              Rolling Diamond
                            </Link>
                          </Button>
                        </li>
                      </ul>
                    </>
                  )}
                </ul>
              </>
            )}
          </li>

          <li className="list-none !w-full  flex-col py-1">
            <Button className="w-full !normal-case !flex !items-center !justify-between !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !text-[16px]">
              <Link to="/">Outwear</Link>
              {submenuIdx === 1 ? (
                <CiSquareMinus
                  className="m-0 p-0 text-[25px] text-[700] cursor-pointer"
                  onClick={() => openSubmenu(1)}
                />
              ) : (
                <CiSquarePlus
                  className="m-0 p-0 text-[25px] text-[700] cursor-pointer"
                  onClick={() => openSubmenu(1)}
                />
              )}
            </Button>
            {submenuIdx === 1 && (
              <>
                <ul className="submenu">
                  <li className="list-none w-full !flex !items-center !justify-between py-1 pb-2">
                    <Button className="!w-full !normal-case !px-6 !text-left !justify-start !text-[rgba(0,0,0,0.8)] !text-[16px]">
                      <Link to="/" className="w-full">
                        Apparel
                      </Link>
                      {subinnermenuIdx === 1 ? (
                        <CiSquareMinus
                          className="m-0 p-0 text-[25px] text-[700] cursor-pointer"
                          onClick={() => openSubInnermenu(1)}
                        />
                      ) : (
                        <CiSquarePlus
                          className="m-0 p-0 text-[25px] text-[700] cursor-pointer"
                          onClick={() => openSubInnermenu(1)}
                        />
                      )}
                    </Button>
                  </li>

                  {subinnermenuIdx === 1 && (
                    <>
                      <ul className="inner-submenu">
                        <li className="w-full  link list-none !flex !items-start !justify-start !text-start">
                          <Button className="w-full !normal-case !text-left !text-[rgba(0,0,0,0.8)] !text-[16px]">
                            <Link to="/" className="w-full px-7">
                              Smart Tablet
                            </Link>
                          </Button>
                        </li>

                        <li className="w-full link list-none !flex !items-start !justify-start !text-start">
                          <Button className="w-full !normal-case !text-left !text-[rgba(0,0,0,0.8)] !text-[16px]">
                            <Link to="/" className="w-full px-7">
                              Crepe T-shirt
                            </Link>
                          </Button>
                        </li>

                        <li className="w-full  link list-none !flex !items-start !justify-start !text-start">
                          <Button className="w-full !normal-case !text-left !text-[rgba(0,0,0,0.8)] !text-[16px]">
                            <Link to="/" className="w-full px-7">
                              Leather Watch
                            </Link>
                          </Button>
                        </li>

                        <li className="w-full link list-none !flex !items-start !justify-start !text-start">
                          <Button className="w-full !normal-case !text-left !text-[rgba(0,0,0,0.8)] !text-[16px]">
                            <Link to="/" className="w-full px-7">
                              Rolling Diamond
                            </Link>
                          </Button>
                        </li>
                      </ul>
                    </>
                  )}
                </ul>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CategoryCollapse;
