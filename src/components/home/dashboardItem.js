const DashboardItem = ({ state }) => {
  const name = state[0],
    price = state[1],
    shortName = state[2],
    img = state[3];

  return (
    <>
      <div className="crypto-valute">
        <div className="crpto-names">
          <img src={img} alt="" />
          <span>{name}</span>
          <h2>{shortName}</h2>
        </div>
        <span className="price-dash">${price}</span>
      </div>
    </>
  );
};

export default DashboardItem;
