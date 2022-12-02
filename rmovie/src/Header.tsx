import { Grid } from '@mui/material';
import * as React from 'react';

import Midle from './header/Middle';
// import { ReactComponent as Logo } from '../img/logo.svg'
// import { MenuHeader } from 'react-icons/fa';

export default function Header() {
  return (
    <Grid
      sx={{
        background: 'linear-gradient(135deg, #374049 50%, #495159 50%);',
        // backgroundColor: 'black',
      }}
    >
      <Midle></Midle>
    </Grid>
  );
}
