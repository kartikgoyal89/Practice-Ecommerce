import Home from "./pages/Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import ProductListing from "./pages/ProductListing/ProductListing";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { createContext, useState } from "react";
import ProductZoom from "./components/ProductZoom/ProductZoom";
import { MdClose } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Drawer from "@mui/material/Drawer";
import CartPanel from "./components/CartPanel/CartPanel";

const MyContext = createContext();
function App() {
  const [openProductModal, setOpenProductModal] = useState(false);
  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleCartPanelDrawer = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const handleClickOpenProductModal = () => {
    setOpenProductModal(true);
  };

  const handleCloseProductModal = () => {
    setOpenProductModal(false);
  };

  const values = {
    setOpenProductModal,
    setOpenCartPanel,
  };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/products"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/product/:id"}
              exact={true}
              element={<ProductDetails />}
            />

            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Dialog
        open={openProductModal}
        onClose={handleCloseProductModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
        maxWidth={"lg"}
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full absolute !top-0 !right-0 !text-black !absolute !top-[-10px] !right-[-10px]"
              onClick={handleCloseProductModal}
            >
              <IoMdClose className="text-[50px]" />
            </Button>
            <div className="col1 w-[40%] mr-8">
              <ProductZoom />
            </div>
            <div className="col2 w-[59%] mr-5 mt-3">
              <ProductInfo />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Drawer
        open={openCartPanel}
        anchor={"right"}
        onClose={toggleCartPanelDrawer(false)}
      >
        <div className="flex items-center py-3 px-4 justify-between w-[400px] border-b-2 border-[#f2f2f2] px-2 ">
          <h1 className="text-[20px]">Shopping Cart (1)</h1>
          <Button
            onClick={toggleCartPanelDrawer(false)}
            className="!text-black !min-w-[35px] !w-[35px] !h-[35px] !rounded-full"
          >
            <MdClose className="!text-[30px]" />
          </Button>
        </div>

        <CartPanel />
      </Drawer>
    </>
  );
}

export default App;
export { MyContext };
