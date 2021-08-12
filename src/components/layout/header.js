import { RiSearchLine, RiExchangeFundsFill } from "react-icons/ri";
import { IoMdNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";
import Avatar from "../../assets/images/avatar.jpg";

const Header = () => {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  const day = date.getDay();

  return (
    <>
      <header>
        <div className="header-fcomp">
          <h2 className="logo">My wallet</h2>
          <form className="search-form">
            <RiSearchLine className="search-btn" />
            <input
              type="text"
              id="search"
              className="search"
              placeholder="Search"
              autoComplete="off"
            />
          </form>
        </div>
        <div className="header-scomp">
          <div className="notification">
            <span>
              <IoMdNotificationsOutline />
            </span>
          </div>
          <div className="notification">
            <span>
              <BiCommentDetail />
            </span>
          </div>
          <div className="notification">
            <span>
              <RiExchangeFundsFill />
            </span>
          </div>
          <div className="current-data">
            {month} {day}, {year}
          </div>
          <div className="login">
            <img className="avatar-img" src={Avatar} alt="/" />
            <IoIosArrowDown className="login-arrow" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
