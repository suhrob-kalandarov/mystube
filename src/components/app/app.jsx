import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { Main, Navbar, Channel, Search, VideoDetail } from '../'

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/search/:id' element={<Search />} />
        <Route path='/channel/:id' element={<Channel />} />
        <Route path='/video/:id' element={VideoDetail} />
      </Routes>
    </Box>
  )
}

export default App