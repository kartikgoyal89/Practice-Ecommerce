import { Link } from "react-router-dom";

function bannerBox(props) {
  return (
    <div className="box bannerBox overflow-hidden !rounded-lg">
      <div className="container w-[380px] !h-[220px] !rounded-lg">
        <Link className="!rounded-lg">
          <img src={props.img} alt="" className="w-full h-full !rounded-lg" />
        </Link>
      </div>
    </div>
  );
}

export default bannerBox;
