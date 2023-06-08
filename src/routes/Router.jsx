import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import AddVideo from '../pages/addVideo/AddVideo'
import AddCategory from '../pages/addCategory/AddCategory'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-video' element={<AddVideo />} />
        <Route path='/add-category' element={<AddCategory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router