import DefaultLayout from "./layouts/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            index
            element={<h1 className="p-4 text-3xl">Homepage</h1>}
          ></Route>
          <Route
            path="/details"
            element={<h1 className="p-4 text-3xl">Details</h1>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
