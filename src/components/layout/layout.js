import Header from "./header";
import LeftMenu from "./leftmenu";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="content">
        <LeftMenu />
        <div className="in-container">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
