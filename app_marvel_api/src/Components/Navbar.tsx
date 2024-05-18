'use client'
import * as React from 'react'
import Link from 'next/link'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { Button } from '@mui/material'
import { FC, useState } from 'react'
import { useRouter } from 'next/navigation'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
}))

const SearchAppBar: FC = () => {
  const [querySearch, setQuerySearch] = useState<string>('')
  const router = useRouter()
  
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {

    if(event.key === 'Enter' && querySearch.trim() !== ''){
      setQuerySearch('')
      router.push(`/search?query=${querySearch}`)
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Link href="/" passHref>
              <Button color="inherit">Marvel</Button>
            </Link>
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{ display: { xs: 'none', sm: 'block' }, cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}
              >
                Marvel
              </Typography>
            </Link>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={querySearch}
              onChange={(e) => setQuerySearch(e.target.value)}
              onKeyDown={handleSearch}
            />
          </Search>
        </Toolbar>
      </StyledAppBar>
    </Box>
  )
}

export default SearchAppBar
