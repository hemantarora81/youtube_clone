import React from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './Components'



const App = () => {
  
    return(
       <BrowserRouter>
    
    <Box sx={{backgroundColor:'#e6dfdf'}}>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        
      </Routes>
    </Box>
  </BrowserRouter>
    
    )
 
}

export default App