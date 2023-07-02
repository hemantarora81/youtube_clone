import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'


const SearchBar = () => {
    const [searchTerm, setsearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
            setsearchTerm('');
        }
    }
    return (
        <Paper
        component='form'
        onSubmit={handleSubmit}
        sx={{
          borderRadius: 20,
          border: '1px solid #e3e3e3',
          pl: 2,
          boxShadow: 'none',
          // width:{sm:'30px'},
          mr: { sm: 5 },
        }}
      >
        <input
          className='search-bar'
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          style={{borderRight:'1px solid black',height:'100%'}}
        />
        <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
          <Search className ='search-icon' />
        </IconButton>
      </Paper>
  )
}

export default SearchBar
