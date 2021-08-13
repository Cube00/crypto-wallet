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
    var { litecoin, bitcoin, ethereum, binancecoin } = dashstore;
    var dashboard = [];
    let index = 0;
    let def = ",";

    const value = Object.values(dashstore).map((e) => {
      return e;
    });

    for (var i of Object.keys(dashstore)) {
      if (i === "bitcoin") {
        dashboard.push(i + def + value[index].usd + def + "BTC" + def + Btc);
      }
      if (i === "binancecoin") {
        dashboard.push(i + def + value[index].usd + def + "BNB" + def + Bnb);
      }
      if (i === "ethereum") {
        dashboard.push(i + def + value[index].usd + def + "ETH" + def + Eth);
      }
      if (i === "litecoin") {
        dashboard.push(i + def + value[index].usd + def + "LTC" + def + Ltc);
      }
      index++;
    }
    var mapDashboard = dashboard.map((e) => e.split(","));
  }

  return (
    <>
      <div className="dashboard">
        <h2>Dashboard</h2>
        {dashstore !== undefined && (
          <div className="crypto-dashboard">
            {mapDashboard.map((state) => {
              return <DashboardItem state={state} />;
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
