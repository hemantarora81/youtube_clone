// import React, { useState, useEffect } from 'react'
// import {Box,Stack,Typography} from '@mui/material'
// import { Sidebar, Videos } from './';
// import { fetchFromAPI } from '../utils/fetchFromAPI';



// const Feed = () => {
//   const [selectedCategory, setSelectedCategory] = useState('New');
//   const [videos, setVideos] = useState(null);
//   useEffect(() => {
//     setVideos(null);

//     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
//       .then((data) => setVideos(data.items))
//     }, [selectedCategory]);
//   return (
//     <Stack sx={{ flexDirection: { sx: 'column', md: "row" } }}>
//       <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
//         <Sidebar
//          selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
//         />
//         <Typography  className="copyright" variant="body2" sx={{mt:1.5,color:'#fff'}}>
//           Copyright 2023 Hemant Codes
//         </Typography>
//       </Box>
//       <Box p={2} sx={{overflowY:'auto',height:'90vh', flex:2}}>
//         <Typography variant='h4'  fontWeight='bold' mb={2} sx={{color:'white'}}
//         >{ selectedCategory}<span style={{ color: '#F31503' }}>Videos</span></Typography>
//         <Videos videos={videos} />
//     </Box>
//     </Stack>
//   )
// }

// export default Feed
import React, { useEffect, useState } from "react";
import { Box,  Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos} from "./";

const Feed = () => {
  const [videos, setVideos] = useState(null);
  const {searchTerm } = useParams();
  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${searchTerm}}`)
      .then((data) => setVideos(data.items))
    }, []);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "black" }}>
     Search Results for:  <span style={{ color: "#FC1503" }}>{searchTerm} </span>videos
    </Typography>

    <Videos videos={videos} />
  </Box>
  );
};

export default Feed;