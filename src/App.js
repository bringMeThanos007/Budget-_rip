import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from '../src/component/Home';
import Navbar from '../src/component/Navbar'
import Register from './component/Register/Register';
import Hotel from './component/Hotel';
import Footer from './component/footer';
import Book_hotel from './component/Hotels/Book_Hotel/Book_hotel';
import Hotel_room from './component/Hotels/Book_Hotel/Hotel_room';
import Become_Seller from './component/Become_Seller';
import Activity from './component/Activity';
import Book_Activity from './component/Activity/Book_Activity/Book_Activity';
import Activity_booked from './component/Activity/Book_Activity/Activity_booked';
import Vendor_Register from './component/Seller/Vendor_Register';
import DashBoard from './component/Register/DashBoard';
import Profile from './component/Register/Dash_Nav_Comp/Profile';
import Login_Detail from './component/Register/Dash_Nav_Comp/Login_Detail';
import YourPlans from './component/Register/Dash_Nav_Comp/YourPlans';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact path="/"
            element={
              <Home />
            } />
          <Route
            exact path="/reg"
            element={
              // <Register/>
              <DashBoard />
            } >
            {/* nested route */}
            <Route
              exact path="/reg/"
              element={
                <Profile />
              } />
              <Route
              exact path="/reg/details"
              element={
                <Login_Detail />
              } />
            <Route
              exact path="/reg/plans"
              element={
                <YourPlans />
              } />
              
          </Route>
          <Route
            exact path="/hotel"
            element={
              <Hotel />
            } />
          <Route
            exact path="/activity"
            element={
              <Activity />
            } />
          <Route
            exact path="/book_activity"
            element={
              <Book_Activity />
            } />
          <Route
            exact path="/Activity_booked"
            element={
              <Activity_booked />
            } />
          <Route
            exact path="/book_hotel"
            element={
              <Book_hotel />
            } />
          <Route
            exact path="/hotel_room"
            element={
              <Hotel_room />
            } />
          <Route
            exact path="/seller"
            element={
              <Become_Seller />
            } />
          <Route
            exact path="/vendor_register"
            element={

              <Vendor_Register />
            } />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
