import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const CurrencyList = () => {

  const [currencyData, setCurrencyData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await axios.get("https://blockchain.info/ticker");
      const arrayOfObjects = Object.values(data.data);
      console.log(arrayOfObjects)
      setCurrencyData(arrayOfObjects);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <h1 className={styles.h1} data-testid="currency-list-heading">Currency List</h1>
      {currencyData &&
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Currency code</th>
                <th>Most recent market price (last)</th>
              </tr>
            </thead>
            <tbody>
              {currencyData.map((obj) => (
                <tr key={obj.symbol}>
                  <td className={styles.tableData}>{obj.symbol}</td>
                  <td className={styles.tableData}>{`${obj.symbol} ${obj.last}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
      {error &&
        <p>There has been an issue: {error}</p>
      }
    </>
  )
}

export default CurrencyList;