
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { AccountActivation, AccountActivationCompleted, AccountVerification, ArtistArtworks, ArtSecForgotPassword, ArtworkDetails, Collections, CreateAccount, DashboardOverview, Favourite, FundWallet, Login, PortfolioPage, TrendPage, UserDocuments, UserInvestmentHistory, UserNotification, UserPaymentMethod, UserProfile, WalletPage } from "./pages";
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/auth.slice";
import CryptoJS from "crypto-js";


const RouteGuard = ({ access_token, redirectPath = '/' }) => {
  const dispatch = useDispatch();
  const currentDate = new Date();
  if (!access_token) {
    return <Navigate to={redirectPath} replace />;
  }



  const decoded_token = jwt_decode(access_token);

  console.log(decoded_token);

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
          <Route path='/' element={<Login />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route element={<RouteGuard access_token={access_token} />}>
            <Route path='/account-verification' element={<AccountVerification />} />
            <Route path='/account-activation' element={<AccountActivation />} />
            <Route path='/fund-wallet' element={<FundWallet />} />
            <Route path='/account-activation-completed' element={<AccountActivationCompleted />} />
            <Route path='/forgot-password' element={<ArtSecForgotPassword />} />


            <Route path='/dashboard' element={<DashboardOverview />} />
            <Route path='/dashboard/overview' element={<DashboardOverview />} />
            <Route path='/dashboard/trends' element={<TrendPage />} />
            <Route path='/dashboard/favourite' element={<Favourite />} />
            <Route path='/dashboard/porfolio' element={<PortfolioPage />} />
            <Route path='/dashboard/wallet' element={<WalletPage />} />
            <Route path='/dashboard/artwork-details' element={<ArtworkDetails />} />
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

        </Routes>
      </Router>
    </div>
  );
}

export default App;
