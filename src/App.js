import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import NavMenu from "./Pages/NavMenu/NavMenu";
import BlogsPage from "./Pages/BlogsPage/BlogsPage";
import About from "./Pages/About/About";
import CheckOut from "./Pages/CheckOut/CheckOut";
import NotAPage from "./Pages/NotAPage/NotAPage";
import Footer from "./Pages/Footer/Footer";
import SignUp from "./Pages/SignUp/SignUp";
import LogIn from "./Pages/LogIn/LogIn";
import RequireAuth from "./RequireAuth/RequireAuth";
import CheckOutDetails from "./Pages/CheckOutDetails/CheckOutDetails";

function App() {
  return (
    <div className="App">
      <NavMenu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route
          path="checkout/:id"
          element={
            <RequireAuth>
              <CheckOutDetails />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotAPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
