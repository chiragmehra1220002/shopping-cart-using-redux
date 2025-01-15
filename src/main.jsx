
import { createRoot } from 'react-dom/client'
import './index.css'
import ShoppingCart from './ShoppingCart'

import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShoppingCart/>
  </BrowserRouter>,
)
