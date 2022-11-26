import { Grid, Link } from '@mui/material';
import React from 'react';

// const MyImage = () => {
//   return <Image src={SafeShoppingImage} alt="Picture of the author" />;
//
export default function Bottom() {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        paddingLeft: '265.188px',
        paddingRight: '265.188px',
        backgroundColor: 'red', //#384E54
      }}
    >
      <Grid>
        <Link
          href="/produkt"
          sx={{ color: 'white' }}
          style={{ textDecoration: 'none' }}
        >
          Alle Diamanten
        </Link>
      </Grid>
      <Grid>
        <Link
          href="/produkt/0-5-karat-diamant"
          sx={{ color: 'white' }}
          style={{ textDecoration: 'none' }}
        >
          Halbkaräter
        </Link>
      </Grid>
      <Grid>
        <Link
          href="/produkt/0-7-karat-diamant"
          sx={{ color: 'white' }}
          style={{ textDecoration: 'none' }}
        >
          Dreiviertelkaräter
        </Link>
      </Grid>
      <Grid>
        <Link
          href="/produkt/1-karat-diamant"
          sx={{ color: 'white' }}
          style={{ textDecoration: 'none' }}
        >
          Einkaräter
        </Link>
      </Grid>
      <Grid>
        <Link
          href="/produkt/2-karat-diamant"
          sx={{ color: 'white' }}
          style={{ textDecoration: 'none' }}
        >
          Zweikaräter
        </Link>
      </Grid>
      <Grid>
        <Link
          href="/info/ueber-uns"
          sx={{ color: 'white' }}
          style={{ textDecoration: 'none' }}
        >
          Service
        </Link>
      </Grid>
      <Grid>
        <Link
          href="/info/kontakt"
          sx={{ color: 'white' }}
          style={{ textDecoration: 'none' }}
        >
          Kontaktacu
        </Link>
      </Grid>
    </Grid>
  );
}
