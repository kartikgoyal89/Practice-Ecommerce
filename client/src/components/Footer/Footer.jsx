import "./footer.css";

import { Link } from "react-router-dom";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { LiaGiftSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { FaHeadphonesAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <>
      <footer className="py-10 !border-t-2 border-[rgba(0,0,0,0.07)]">
        <div className="container">
          <div className="flex items-center justify-center gap-6 pb-12">
            <div className="col flex flex-col items-center justify-center group w-[17%]">
              <LiaShippingFastSolid className="text-[50px] mb-5  transition-all duration-300  group-hover:text-primary group-hover:-translate-y-1" />
              <h2 className="text-[18px] font-[500]">Free Shipping</h2>
              <p className="text-[rgba(0,0,0,0.6)] text-[14px]">
                For all Orders above $100.00
              </p>
            </div>

            <div className="col flex flex-col items-center justify-center group w-[17%]">
              <PiKeyReturnLight className="text-[50px] mb-5  transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h2 className="text-[18px] font-[500]">30 Days Return</h2>
              <p className="text-[rgba(0,0,0,0.6)] text-[14px]">
                Our For an Exchange Product
              </p>
            </div>

            <div className="col flex flex-col items-center justify-center group w-[17%]">
              <IoWalletOutline className="text-[50px] mb-5  transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h2 className="text-[18px] font-[500]">Secure Payment</h2>
              <p className="text-[rgba(0,0,0,0.6)] text-[14px]">
                Payment Cards Accepted
              </p>
            </div>

            <div className="col flex flex-col items-center justify-center group w-[17%]">
              <LiaGiftSolid className="text-[50px] mb-5  transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h2 className="text-[18px] font-[500]">Special Gifts</h2>
              <p className="text-[rgba(0,0,0,0.6)] text-[14px]">
                Our First Product Order
              </p>
            </div>

            <div className="col flex flex-col items-center justify-center group w-[17%]">
              <FaHeadphonesAlt className="text-[50px] mb-5  transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h2 className="text-[18px] font-[500]">Support 24/7</h2>
              <p className="text-[rgba(0,0,0,0.6)] text-[14px]">
                Contact us Anytime
              </p>
            </div>
          </div>
          <hr />

          <div className="footer flex py-4">
            <div className="part1 pl-5 py-3 w-[27%] border-r border-primary">
              <h2 className="text-[25px] mb-5">Contact Us</h2>
              <p className="text-[rgba(0,0,0,0.6)]">
                Classy - Mega Super Store
              </p>
              <p className="text-[rgba(0,0,0,0.6)]">507 - Union Trade Center</p>
              <p className="text-[rgba(0,0,0,0.6)] mb-4">France</p>

              <Link to="mailto:sales@yourcompany.com">
                <p className="mb-4 transition-all cursor-pointer hover:text-primary">
                  sales@yourcompany.com
                </p>
              </Link>
              <Link to="tel:(+91) 9876-543-210">
                <h3 className="text-[23px] text-primary font-bold">
                  (+91) 9876-543-210
                </h3>
              </Link>

              <div className="logo pt-4 flex items-center !gap-4">
                <TiMessages className="text-[40px] text-primary" />
                <div className="msg">
                  <h3 className="text-[20px] !mb-0 font-[600]">Online Chat</h3>
                  <h3 className="text-[20px] !mb-0 font-[600]">
                    Get Expert Help
                  </h3>
                </div>
              </div>
            </div>

            <div className="part2 py-3 w-[41%] flex pl-12 gap-24">
              <div className="part2_col1">
                <h2 className="text-[25px] mb-3">Products</h2>
                <ul className="list">
                  <li className="list-none mb-2 link2 w-full text-[16px] text-[rgba(0,0,0,0.6)]">
                    <Link>Price Drop</Link>
                  </li>
                  <li className="list-none mb-2 link2 w-full text-[16px] text-[rgba(0,0,0,0.6)]">
                    <Link>New products</Link>
                  </li>
                  <li className="list-none mb-2 link2 w-full text-[16px] text-[rgba(0,0,0,0.6)]">
                    <Link>Best Sales</Link>
                  </li>
                  <li className="list-none mb-2 link2 w-full text-[16px] text-[rgba(0,0,0,0.6)]">
                    <Link>Contact Us</Link>
                  </li>
                  <li className="list-none mb-2 link2 w-full text-[16px] text-[rgba(0,0,0,0.6)]">
                    <Link>Sitemap</Link>
                  </li>
                  <li className="list-none mb-2 link2 w-full text-[16px] text-[rgba(0,0,0,0.6)]">
                    <Link>Stores</Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col1">
                <h2 className="text-[25px] mb-3">Our Company</h2>
                <ul className="list">
                  <li className="list-none mb-2 link2 w-full text-[16px] text-[rgba(0,0,0,0.6)]">
                    <Link>Delivery</Link>
                  </li>
                  <li className="list-none mb-2 link2 w-full text-[16px] text-[rgba(0,0,0,0.6)]">
                    <Link>Legal Notice</Link>
                  </li>
                  <li className="list-none mb-2 link2 w-full text-[16px] text-[rgba(0,0,0,0.6)]">
                    <Link>Terms & Conditions of Use</Link>
                  </li>
                  <li className="list-none mb-2 link2 w-full text-[16px] text-[rgba(0,0,0,0.6)]">
                    <Link>About us</Link>
                  </li>
                  <li className="list-none mb-2 link2 w-full text-[16px] text-[rgba(0,0,0,0.6)]">
                    <Link>Secure Payment</Link>
                  </li>
                  <li className="list-none mb-2 link2 w-full text-[16px] text-[rgba(0,0,0,0.6)]">
                    <Link>Login</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part3 w-[25%]">
              <h2 className="text-[25px] mb-5">Subscribe to Newsletter</h2>
              <p className="text-[rgba(0,0,0,0.6)]">
                Subscribe to our latest newsletter to get{" "}
              </p>
              <p className="!text-[rgba(0,0,0,0.6)] mb-5">
                news about special discounts
              </p>

              <form action="">
                <input
                  type="text"
                  className="w-full  p-4 py-5 rounded-md h-[35px] outline-none"
                  placeholder="Your Email Address"
                />
                <Button className="!bg-primary !text-white !my-5 !py-3 !px-7">
                  Subscribe
                </Button>

                <div className="flex justify-start gap-3">
                  <input type="checkbox" className="w-[20px] h-[20px]" />
                  <p className="text-[rgba(0,0,0,0.6)]">
                    I agree to the terms and conditions and the privacy policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip py-5 !border-t-2 border-[rgba(0,0,0,0.1)]">
        <div className="container !flex !items-center !justify-between">
          <ul className="list flex items-center gap-3">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[40px] h-[40px] rounded-full border-2 border-[rgba(0,0,0,0.1)] !flex !items-center !justify-center"
              >
                <FaFacebook className="text-[25px] transition hover:text-primary" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[40px] h-[40px] rounded-full border-2 border-[rgba(0,0,0,0.1)] !flex !items-center !justify-center"
              >
                <FaXTwitter className="text-[26px] transition hover:text-primary" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[40px] h-[40px] rounded-full border-2 border-[rgba(0,0,0,0.1)] !flex !items-center !justify-center"
              >
                <FaYoutube className="text-[26px] transition hover:text-primary" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[40px] h-[40px] rounded-full border-2 border-[rgba(0,0,0,0.1)] !flex !items-center !justify-center"
              >
                <FaPinterest className="text-[26px] transition hover:text-primary" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[40px] h-[40px] rounded-full border-2 border-[rgba(0,0,0,0.1)] !flex !items-center !justify-center"
              >
                <FaInstagram className="text-[26px] transition hover:text-primary" />
              </Link>
            </li>
          </ul>

          <p className="text-[14px] text-center">
            &copy; 2024 - Ecommerce Template
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
