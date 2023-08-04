import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserTemplate from "./templates/UserTemplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route path="/home" element />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
