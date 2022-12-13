import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Link, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import RMovie from 'img/RMovie4.png';
import Image from 'next/image';
import React from 'react';

// import Link from ''
// const MyImage = () => {
//   return <Image src={SafeShoppingImage} alt="Picture of the author" />;
// };
const SearchIconWhite = () => {
  return <SearchIcon sx={{ color: '#b01a4d' }}></SearchIcon>;
};

const LiveTvIconBig = () => {
  return <LiveTvIcon sx={{ fontSize: '55px' }}></LiveTvIcon>;
};
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Midle() {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        padding: '10px 30px 10px 50px',
        font: 'Source Sans Pro,sans-serif',
      }}
    >
      <Grid item>
        {/* <Image width={108} height={60} alt=" " src={RMovie} /> */}
        <LiveTvIconBig></LiveTvIconBig>
        <Typography sx={{ fontSize: '15px', color: '#b01a4d', font: 'Monaco' }}>
          RMOVIE
        </Typography>
      </Grid>
      <Link
        href="/produkt/0-7-karat-diamant"
        sx={{ color: '#b01a4d' }}
        style={{ textDecoration: 'none' }}
      >
        Acasa
      </Link>
      <Link
        href="/produkt/0-7-karat-diamant"
        sx={{ color: '#b01a4d' }}
        style={{ textDecoration: 'none' }}
      >
        Filme
      </Link>
      <Link
        href="/produkt/0-7-karat-diamant"
        sx={{ color: '#b01a4d' }}
        style={{ textDecoration: 'none' }}
      >
        Seriale
      </Link>
      <Grid item>
        <Search>
          <SearchIconWrapper>
            <SearchIconWhite />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Grid>
    </Grid>
  );
}
