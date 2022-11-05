
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AccountActivation, AccountActivationCompleted, AccountVerification, ArtistArtworks, ArtSecForgotPassword, ArtworkDetails, Collections, CreateAccount, DashboardOverview, Favourite, FundWallet, Login,  PortfolioPage, TrendPage, UserDocuments, UserInvestmentHistory, UserNotification, UserPaymentMethod, UserProfile, WalletPage } from "./pages";




function App() {
  return (
    <div>
     <Router>
        <Routes>

          {/* auth */}
          <Route path='/' element={<Login />} />
          <Route path='/create-account' element={<CreateAccount />} />
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

        </Routes>
     </Router>
    </div>
  );
}

export default App;
