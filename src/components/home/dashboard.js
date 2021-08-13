import { useEffect } from "react";
import { connect } from "react-redux";
import { getDash } from "../../redux/actions/functions";
import DashboardItem from "./dashboardItem";
import Btc from "../../assets/images/btc.png";
import Eth from "../../assets/images/eth.png";
import Bnb from "../../assets/images/bnb.png";
import Ltc from "../../assets/images/ltc.png";

const Dashboard = ({ getDash, dashstore }) => {
  useEffect(() => {
    getDash();
  }, [getDash]);

  if (dashstore !== undefined) {
    var dashboard = [];
    let index = 0;
    let def = ",";

    const value = Object.values(dashstore).map((e) => {
      return e;
    });

    for (var key of Object.keys(dashstore)) {
      switch (key) {
        case "bitcoin":
          dashboard.push(
            key + def + value[index].usd + def + "BTC" + def + Btc
          );
          break;
        case "binancecoin":
          dashboard.push(
            key + def + value[index].usd + def + "BNB" + def + Bnb
          );
          break;
        case "ethereum":
          dashboard.push(
            key + def + value[index].usd + def + "ETH" + def + Eth
          );
          break;
        case "litecoin":
          dashboard.push(
            key + def + value[index].usd + def + "LTC" + def + Ltc
          );
          break;
        default:
          return "Crypto valute not found";
      }

      index++;
    }
    var mapDashboard = dashboard.map((e) => e.split(","));
  }

  return (
    <>
      <div className="dashboard">
        <h2 className="dash-head">Dashboard</h2>
        {dashstore !== undefined && (
          <div className="crypto-dashboard">
            {mapDashboard.map((state, index) => {
              return <DashboardItem state={state} key={index} />;
            })}
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
