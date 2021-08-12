import { useEffect } from "react";
import { connect } from "react-redux";
import { getDash } from "../../redux/actions/functions";

const Dashboard = ({ getDash, dashstore }) => {
  useEffect(() => {
    getDash();
  }, [getDash]);

  if (dashstore !== undefined) {
    var { litecoin, bitcoin, ethereum, binancecoin } = dashstore;
  }

  return (
    <>
      <div className="dashboard">
        <h2>Dashboard</h2>
        {dashstore !== undefined && (
          <div className="crypto-dashboard">
            <div className="crypto-valute">
              <div className="crpto-names">
                <span>Bitcoin</span>
                <h2>BTC</h2>
              </div>
              <span>${bitcoin.usd}</span>
            </div>
            <div className="crypto-valute">
              <div className="crpto-names">
                <span>Ethereum</span>
                <h2>ETH</h2>
              </div>
              <span>${ethereum.usd}</span>
            </div>
            <div className="crypto-valute">
              <div className="crpto-names">
                <span>Litecoin</span>
                <h2>LTC</h2>
              </div>
              <span>${litecoin.usd}</span>
            </div>
            <div className="crypto-valute">
              <div className="crpto-names">
                <span>Binance Coin</span>
                <h2>BNB</h2>
              </div>
              <span>${binancecoin.usd}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const mapToStateProps = ({ dashboardReducer: { dashstore } }) => {
  return { dashstore };
};

export default connect(mapToStateProps, { getDash })(Dashboard);
