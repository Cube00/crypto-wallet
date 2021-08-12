import { GET_DASH } from "./action";

export const getDash = () => {
  return async function (dispatch) {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cbinancecoin&vs_currencies=usd`
    );
    const data = await response.json();
    dispatch({ type: GET_DASH, payload: data });
  };
};
