import 'antd/dist/antd.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import AboutUsPage from './Pages/AboutUs/AboutUs';
import SingleCityPage from './Pages/SingleCityPage/SingleCityPage';
import CitiesPage from './Pages/CitiesPage/CitiesPage';
import cities from './MockData/cities.json';
// import ErrorPage from './Pages/ErrorPage/ErrorPage';
import TourGuidePage from './Pages/TourGuide/TourGuidePage';
import ActivitiesPage from './Pages/ActivitiesPage/ActivitiesPage';
import SingleActivityPage from './Pages/SingleActivityPage/SingleActivityPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import AuthProvider from './Context/AuthContext.js';
import './App.css';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Suspense fallback="loading">
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/activities">
                <ActivitiesPage />
              </Route>
              <Route exact path="/activities/:id">
                <SingleActivityPage />
              </Route>
              <Route exact path="/cities">
                <CitiesPage data={cities} />
              </Route>
              <Route exact path="/cities/:id">
                <SingleCityPage />
              </Route>
              <Route exact path="/tour-guide">
                <TourGuidePage />
              </Route>
              <Route exact path="/user-profile">
                UserProfile page
              </Route>
              <Route exact path="/about-us">
                <AboutUsPage />
              </Route>
              <Route exact path="/sign-up">
                <SignUpPage />
              </Route>
              {/* <Route exact path="*">
              <ErrorPage />
            </Route> */}
            </Switch>
            <FooterComponent />
          </Suspense>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
