import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import "./viewproduct.css";

export default function ViewProduct() {

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
      </div>
      <div className="productContainer">
        <div className="productShow">
          <div className="productShowTop">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="productShowImg"
            />
            <div className="productShowTopTitle">
              <span className="productShowUsername">Apple Airpods</span>
              <span className="productShowUserTitle">Apple</span>
            </div>
          </div>
          <div className="productShowBottom">
            <span className="productShowTitle">product Details</span>
            <div className="productShowInfo">
              <PermIdentity className="productShowIcon" />
              <span className="productShowInfoTitle">Apple Airpods</span>
            </div>
            <div className="productShowInfo">
              <CalendarToday className="productShowIcon" />
              <span className="productShowInfoTitle">10.12.2019</span>
            </div>
            <span className="productShowTitle">More Details</span>
            <div className="productShowInfo">
              <PhoneAndroid className="productShowIcon" />
              <span className="productShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="productShowInfo">
              <MailOutline className="productShowIcon" />
              <span className="productShowInfoTitle">apple@gmail.com</span>
            </div>
            <div className="productShowInfo">
              <LocationSearching className="productShowIcon" />
              <span className="productShowInfoTitle">USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
