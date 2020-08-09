import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AdsScreen from 'components/AdsScreen'
import ShowingCampaignAdsProvider from 'contexts/ShowingCampaignAds'
import HomePage from 'pages/HomePage'

function App() {
  return (
    <ShowingCampaignAdsProvider>
      <Router>
        <Switch>
          <Route path="/:kiosTag">
            <AdsScreen />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </ShowingCampaignAdsProvider>
  )
}

export default App
