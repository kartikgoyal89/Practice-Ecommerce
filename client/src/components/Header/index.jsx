import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IoCartOutline } from "react-icons/io5";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { IoIosHeartEmpty } from "react-icons/io";

import { Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import Search from "../../components/Search/Search";
import "./header.css";

import Tooltip from "@mui/material/Tooltip";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <>
      <header>
        {/* TOP STRIP */}
        <div className="top-strip py-2 bg-primary border-b-[1px]">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="col1 w-[50%]">
                <p className="text-[16px] font-[500]">
                  Get upto 50% off new season styles, limited time only.
                </p>
              </div>

              <div className="flex items-center justify-end col-2">
                <ul className="flex items-center gap-4">
                  <li className="list-none">
                    <Link
                      to="help-center"
                      className="text-[16px] font-[500] link transition"
                    >
                      Help Center
                    </Link>
                  </li>

                  <li className="list-none">
                    <Link
                      to="help-center"
                      className="text-[16px] font-[500] link transition"
                    >
                      Order Tracking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="header py-3">
          <div className="container flex items-center justify-between">
            <div className="col1 w-[20%]">
              <Link to={"/"}>
                <img src={Logo} alt="" width={"200px"} />
              </Link>
            </div>
            <div className="col2 w-[45%]">
              <Search />
            </div>
            <div className="col3 w-[30%] flex items-center  pl-7">
              <ul className="flex items-center gap-3 w-full justify-end">
                <li className="list-none">
                  <Link
                    className="link2 transition text-[18px] font-[500]"
                    to="/login"
                  >
                    Login
                  </Link>{" "}
                  |{" "}
                  <Link
                    className="link2 transition text-[18px] font-[500]"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>

                <li className="pl-5">
                  <Tooltip title="Cart">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <IoCartOutline className="!text-[30px]" />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>

                <li>
                  <Tooltip title="Compare">
                    <IconButton aria-label="compare">
                      <StyledBadge badgeContent={4} color="secondary">
                        <LiaExchangeAltSolid className="!text-[30px]" />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>

                <li>
                  <Tooltip title="Wishlist">
                    <IconButton aria-label="wishlist">
                      <StyledBadge badgeContent={4} color="secondary">
                        <IoIosHeartEmpty className="!text-[30px]" />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
