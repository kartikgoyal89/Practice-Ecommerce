import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { IoMdClose } from "react-icons/io";
import CategoryCollapse from "../CategoryCollapse/CategoryCollapse";

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => {
    props.setIsOpenCatPanel(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation">
      <h3 className="mb-0 p-5 text-[22px] font-[500] text-center flex items-center justify-between gap-3">
        Shop By Categories{" "}
        <IoMdClose
          className="m-0 p-0 text-[30px] cursor-pointer"
          onClick={() => toggleDrawer(false)}
        />
      </h3>
      <Divider />
      <CategoryCollapse />
    </Box>
  );
  return (
    <div>
      <Drawer open={props.isOpenCatPanel} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
