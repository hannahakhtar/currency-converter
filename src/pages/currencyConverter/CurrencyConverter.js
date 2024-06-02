import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const CurrencyConverter = () => {
  // useEffect
  // here I would fetch the data (in the same way as I have done in currencyList and manipulate the data to return an array of the symbols)

  const fetchConversionRate = (event) => {
    event.preventDefault()
    // try catch block
    // try block
    // pass https://blockchain.info/tobtc?currency={symbol from dropdown}}&value={value inputted by user}
    // set this as state
    // handle error in catch block
  };

  return (
    <>
      <h1 className={styles.h1}>Currency Converter</h1>
      {/* array from useEffect would be rendered in a dropdown for users to select */}
      {/* then a box for users to input a value to convert to BTC */}
      {/* take both of the above and pass into fetchConversionRate function */}

      {/* render if state is set as result of fetchConversionRate */}
    </>
  )
}

export default CurrencyConverter;