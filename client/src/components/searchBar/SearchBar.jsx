import { Search } from "@material-ui/icons";
import "./style.css";

export default function SearchBar() {
  return (
    <div className="search_wrap search_wrap_3">
    <div className="search_box">
        <input type="text" className="input" placeholder="search..."/>
        <div className="btn btn_common">
            <i className="fas fa-search">
                <Search/>
            </i>
        </div>
    </div>
    </div>
  );
}
