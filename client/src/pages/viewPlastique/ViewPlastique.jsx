import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import plastique from "../../images/plastique.png"
import "./viewplastique.css";

export default function ViewPlastique() {

  return (
    <div className="plastique">
      <div className="plastiqueTitleContainer">
        <h1 className="plastiqueTitle">Product</h1>
      </div>
      <div className="plastiqueContainer">
        <div className="plastiqueShow">
          <div className="plastiqueShowTop">
            <img
              src={plastique}
              alt=""
              className="plastiqueShowImg"
            />
            <div className="plastiqueShowTopTitle">
              <span className="plastiqueShowUsername">bottle</span>
              <span className="plastiqueShowUserTitle">2L</span>
            </div>
          </div>
          <div className="plastiqueShowBottom">
            <span className="plastiqueShowTitle">Plastique Details</span>
            <div className="plastiqueShowInfo">
              <PermIdentity className="plastiqueShowIcon" />
              <span className="plastiqueShowInfoTitle">bottle</span>
            </div>
            <div className="plastiqueShowInfo">
              <CalendarToday className="plastiqueShowIcon" />
              <span className="plastiqueShowInfoTitle">weight=50g</span>
            </div>
            <span className="plastiqueShowTitle">More Details</span>
            <div className="plastiqueShowInfo">
              <PhoneAndroid className="plastiqueShowIcon" />
              <span className="plastiqueShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="plastiqueShowInfo">
              <MailOutline className="plastiqueShowIcon" />
              <span className="plastiqueShowInfoTitle">apple@gmail.com</span>
            </div>
            <div className="plastiqueShowInfo">
              <LocationSearching className="plastiqueShowIcon" />
              <span className="plastiqueShowInfoTitle">USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
