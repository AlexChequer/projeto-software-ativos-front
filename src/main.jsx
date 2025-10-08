import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <Auth0Provider
      domain="dev-80h5se2ysgm27583.us.auth0.com"
      clientId="whL4b7BMrPMMyPrdwhgnaVeGLhGPS7I1"
      authorizationParams={{
        audience: "https://dev-80h5se2ysgm27583.us.auth0.com/api/v2/",
        redirect_uri: window.location.origin
      }}
    >
    <App />
  </Auth0Provider>,
)
