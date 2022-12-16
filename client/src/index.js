import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ScrollTop from './helpers/ScrollToTop'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop />
      <Auth0Provider
        domain="dev-qglbvfl7wmpykdpb.us.auth0.com"
        clientId="EKDQ9ktDjc3UkhPpUGuy84F96IX3LarO"
        redirectUri={'http://localhost:3000/announcement-add-edit-delete'}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
)
