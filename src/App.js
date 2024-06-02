import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import CurrencyList from "./pages/currencyList/CurrencyList";
import CurrencyConverter from "./pages/currencyConverter/CurrencyConverter";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/currency-list" element={<CurrencyList />} />
        <Route path="/currency-converter" element={<CurrencyConverter />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
