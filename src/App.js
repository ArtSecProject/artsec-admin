

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { AccountActivation, AccountActivationCompleted, AccountVerification, ArtistArtworks, ArtSecForgotPassword, ArtworkDetails, Collections, CreateAccount, DashboardOverview, Favourite, FundWallet, Login, NotMatch, PortfolioPage, TrendPage, UserDocuments, UserInvestmentHistory, UserNotification, UserPaymentMethod, UserProfile, WalletPage } from "./pages";
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/auth.slice";
import { ToastContainer } from "react-toastify";


const RouteGuard = ({ access_token, redirectPath = '/' }) => {

  console.log(access_token);
  const dispatch = useDispatch();
  const currentDate = new Date();
  if (!access_token) {
    return <Navigate to={redirectPath} replace />;
  }
  const decoded_token = jwt_decode(access_token);


  
  console.log(new Date(decoded_token.exp * 1000));

  if (decoded_token.exp * 1000 < currentDate.getTime()) {
   
    dispatch(logout());
  }

  return access_token && <Outlet />;
};


function App() {
  const { access_token } = useSelector(state => state.auth);


  return (
    <div>
      <Router>
        <Routes>

          {/* auth */}
          <Route path='/' element={access_token !== '' ? <Navigate replace to="/dashboard" /> : <Login />} />
          <Route path='/create-account'  element={access_token !== '' ? <Navigate replace to="/dashboard" /> : <CreateAccount />}  />
          <Route path='/account-verification' element={<AccountVerification />} />
          <Route path='/account-activation' element={<AccountActivation />} />
          <Route path='/forgot-password' element={<ArtSecForgotPassword />} />
          <Route element={<RouteGuard access_token={access_token} />}>
            <Route path='/fund-wallet' element={<FundWallet />} />
            <Route path='/account-activation-completed' element={<AccountActivationCompleted />} />


            <Route path='/dashboard' element={<DashboardOverview />} />
            <Route path='/dashboard/overview' element={<DashboardOverview />} />
            <Route path='/dashboard/trends' element={<TrendPage />} />
            <Route path='/dashboard/favourite' element={<Favourite />} />
            <Route path='/dashboard/porfolio' element={<PortfolioPage />} />
            <Route path='/dashboard/wallet' element={<WalletPage />} />
            <Route path='/dashboard/artwork-details/:id' element={<ArtworkDetails />} />
            <Route path='/dashboard/artist-artworks' element={<ArtistArtworks />} />
            <Route path='/dashboard/collection-details' element={<Collections />} />

            {/* user account page */}
            <Route path='/dashboard/user-account' element={<UserProfile />} />
            <Route path='/dashboard/user-account/investment-history' element={<UserInvestmentHistory />} />
            <Route path='/dashboard/user-account/payment-method' element={<UserPaymentMethod />} />
            <Route path='/dashboard/user-account/documents' element={<UserDocuments />} />
            <Route path='/dashboard/user-account/notification-setting' element={<UserNotification />} />

            {/* end of user account page */}
          </Route>
          <Route path='*' element={<NotMatch />} />

        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
