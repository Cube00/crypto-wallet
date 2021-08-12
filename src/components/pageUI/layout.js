import Header from "./home/header";
import LeftMenu from "./home/leftmenu";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="content">
        <LeftMenu />
        {props.children}
      </div>
    </>
  );
};

export default Layout;
