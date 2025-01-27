import "./productDetails.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useState } from "react";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ProductInfo from "../../components/ProductInfo/ProductInfo";

const ProductDetails = () => {
  const [description, setDescription] = useState(0);
  return (
    <>
      <section className="productDetailsWrapper py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb" className="py-3">
            <Link underline="hover" className="link2 transition" href="/">
              Home
            </Link>
            <Link underline="hover" className="link2 transition" href="/">
              Fashion
            </Link>
            <Link underline="hover" className="link2 transition" href="/">
              Product Name
            </Link>
          </Breadcrumbs>
        </div>

        <section className="bg-white py-5">
          <div className="container flex gap-10 items-center">
            <div className="productZoomContainer w-[40%] p-2 py-6">
              <div className="productContainer">
                <ProductZoom />
              </div>
            </div>
            <div className="productContent w-[60%] py-10 pr-8">
              <ProductInfo />
            </div>
          </div>

          <div className="container !mt-12 text-[#555] ">
            <div className="flex items-center gap-12 ps-2">
              <span
                onClick={() => setDescription(0)}
                className={`link2 text-[20px] cursor-pointer font-[500] text-[18px] ${
                  description === 0 && "text-primary"
                }`}
              >
                Description
              </span>

              <span
                onClick={() => setDescription(1)}
                className={`link2 text-[20px] cursor-pointer font-[500] text-[18px] ${
                  description === 1 && "text-primary"
                }`}
              >
                Product Details
              </span>

              <span
                onClick={() => setDescription(2)}
                className={`link2 text-[20px] cursor-pointer font-[500] text-[18px] ${
                  description === 2 && "text-primary"
                }`}
              >
                Review(s)
              </span>
            </div>

            {description === 0 && (
              <div className="shadow-md w-full p-5 rounded-md mt-6 border-2 border-[#ccc]">
                <p className="py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, aut voluptatem quia a eligendi aperiam corrupti
                  dolores ex necessitatibus consequatur adipisci nostrum
                  quibusdam unde ullam consequuntur libero dolore itaque
                  reiciendis quo delectus odio cum placeat. Facere fuga eligendi
                  voluptate autem.
                </p>

                <strong>Lorem, ipsum.</strong>
                <p className="py-2 pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem sed molestiae aliquam consequuntur, culpa hic dicta
                  reiciendis iure? Placeat quas atque illo id ipsum, quasi
                  necessitatibus unde adipisci officiis nulla tempore, rem
                  numquam corrupti quis in possimus fuga nobis dolorem.
                </p>
              </div>
            )}

            {description === 1 && (
              <div className="shadow-md w-full p-5 mt-2 border-2 mt-6 border-[#ccc] ">
                <div className="relative overflow-x-auto !text-[#555]">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray">
                    <thead className="text-xs text-gray-700 uppercase !bg-[#ff5252] dark:bg-gray-700 dark:text-gray-">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-black text-[14px]"
                        >
                          Product name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-black text-[14px]"
                        >
                          Color
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <th
                          scope="row"
                          className="px-6 text-[15px] py-4 font-medium text-black whitespace-nowrap"
                        >
                          Apple MacBook Pro 17
                        </th>
                        <td className="px-6 py-4 text-black text-[15px]">
                          $2999
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th
                          scope="row"
                          className="px-6 text-[15px] py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4 text-black text-[15px]">
                          $1999
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="px-6 text-[15px] py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4 text-black text-[15px]">
                          $99
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {description === 2 && (
              <div className="shadow-md w-full productReviewContainer mt-6 p-5 rounded-md mt-2 border-2 border-[#ccc]">
                <h2 className="text-black text-[20px] pb-3">
                  Customer Questions & Answers
                </h2>
                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden pb-2 pr-5">
                  <div className="review w-full flex items-center justify-between pb-2 border-b-2 border-[#eee] my-8">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img h-[80px] h-[80px] rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
                          alt=""
                          className="w-full h-full !object-cover rounded-full"
                        />
                      </div>

                      <div className="w-[100%]">
                        <h3 className="text-[15px]">Kartik Goyal</h3>
                        <h3 className="text-[14px]">2025-01-26</h3>
                        <p className="text-black mt-2">
                          Nice Product!! Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. Odio, nobis.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4}
                      readOnly
                      className="mt-3"
                    />
                  </div>

                  <div className="review w-full flex items-center justify-between pb-2 border-b-2 border-[#eee] my-4">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img h-[80px] h-[80px] rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
                          alt=""
                          className="w-full h-full !object-cover rounded-full"
                        />
                      </div>

                      <div className="w-[100%]">
                        <h3 className="text-[15px]">Kartik Goyal</h3>
                        <h3 className="text-[14px]">2025-01-26</h3>
                        <p className="text-black mt-2">
                          Nice Product!! Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. Odio, nobis.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4}
                      readOnly
                      className="mt-3"
                    />
                  </div>

                  <div className="review w-full flex items-center justify-between pb-2 border-b-2 border-[#eee] my-4">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img h-[80px] h-[80px] rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
                          alt=""
                          className="w-full h-full !object-cover rounded-full"
                        />
                      </div>

                      <div className="w-[100%]">
                        <h3 className="text-[15px]">Kartik Goyal</h3>
                        <h3 className="text-[14px]">2025-01-26</h3>
                        <p className="text-black mt-2">
                          Nice Product!! Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. Odio, nobis.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4}
                      readOnly
                      className="mt-3"
                    />
                  </div>
                </div>

                <br />
                <div className="reviewForm my-5 bg-[#fafafa] p-4 rounded-md">
                  <h3 className="text-[20px] text-black">Add a Review</h3>

                  <form action="" className="pt-5">
                    <textarea
                      rows={5}
                      className="w-full !border-[#ff5252]"
                      placeholder="Enter your Reviews."
                    ></textarea>

                    <Rating
                      name="size-large"
                      size="large"
                      className="mt-4"
                      value={0}
                    />

                    <div className="submit-review mt-5">
                      <Button className="!bg-[#ff5252] !text-white !p-2 !px-8">
                        Submit Review
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="bg-white">
          <div className="container pt-10">
            <h2 className="text-[25px] font-[600]">Related Products</h2>
            <ProductSlider items={6} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
