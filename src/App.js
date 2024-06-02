import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CurrencyList from "./pages/CurrencyList";
import CurrencyConverter from "./pages/CurrencyConverter";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
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
