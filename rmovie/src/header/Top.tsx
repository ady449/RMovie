import { Grid, Link, Typography } from '@mui/material';
import React from 'react';

const Top = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ padding: '10px 20px', backgroundColor: '#555C64' }}
    >
      <Grid item>
        <Typography
          variant="body2"
          sx={{
            color: 'primary.contrastText',
          }}
        >
          Kostenloser und versicherter Versand • 14 Tage Widerrufsrecht
        </Typography>
      </Grid>
      <Link href="/info/kontakt">
        <Grid item>
          <Typography
            variant="body2"
            sx={{
              color: 'primary.contrastText',
            }}
          >
            +49 89 1222 893 0•Hilfe und Kontakt
          </Typography>
        </Grid>
      </Link>
    </Grid>
  );
};

export default Top;
