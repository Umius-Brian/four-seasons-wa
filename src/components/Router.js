import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import NPS from './NPS'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/NPS' element={<NPS />} />
    </Routes>
  )
}

export default Router

