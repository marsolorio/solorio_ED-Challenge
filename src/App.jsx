import './App.css'
import { Filter } from './components/Filter'
import { Navbar } from './components/Navbar'
import { ResultInfoBar } from './components/ResultInfoBar'
import { ResultTable } from './components/ResultTable'
import { SearchProvider } from './contexts/SearchContext'
import { CartProvider } from './contexts/CartContext'
import { Cart } from '/Users/martinsolorio/Desktop/easydonate/solorio_ED-Challenge-main/src/components/Cart/index.jsx'

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <Navbar />
        <ResultInfoBar />
        <div className='content-ResultandFilter'>
          <Filter/>
          <ResultTable />
        </div>
        <Cart />
      </CartProvider>
    </SearchProvider>
  )
}

export default App
