import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './HomePage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




{/* <BrowserRouter>
<Routes>
 <Route index element={<HomePage/>}/>
 <Route path="/Isi" element={<Isi/>}/>
</Routes>
</BrowserRouter> */}