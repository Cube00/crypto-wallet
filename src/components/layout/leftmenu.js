import { Link } from "react-router-dom";
import Dash from "../../assets/images/dash.png";
import Wallet from "../../assets/images/wallet.png";
import Transaction from "../../assets/images/transaction.png";
import Exchange from "../../assets/images/exchange.png";
import Trade from "../../assets/images/trade.png";
import Mts from "../../assets/images/mts.png";
import Otc from "../../assets/images/otc.png";

const LeftMenu = () => {
  return (
    <>
      <div className="menu">
        <nav className="menu-nav">
          <ul>
            <li className="active">
              <Link to="/">
                <img className="ic dash-ic" src={Dash} alt="/" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/">
                <img className="ic wall-ic" src={Wallet} alt="/" />
                My wallet
              </Link>
            </li>
            <li>
              <Link to="/">
                <img className="ic tran-ic" src={Transaction} alt="/" />
                Transaction
              </Link>
            </li>
            <li>
              <Link to="/">
                <img className="ic ex-ic" src={Exchange} alt="/" />
                Exchange
              </Link>
            </li>
          </ul>
        </nav>
        <div className="bott-ft">
          <h2>Parthner Service</h2>
          <nav>
            <ul>
              <li>
                <Link to="">
                  <img src={Otc} alt="/" />
                  OTC
                </Link>
              </li>
              <li>
                <Link to="">
                  <img src={Mts} alt="/" />
                  MT5
                </Link>
              </li>
              <li>
                <Link to="">
                  <img src={Trade} alt="/" />
                  Tradebook
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
