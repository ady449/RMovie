import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import { Grid, Typography, Link} from '@mui/material';
import RMovie from 'img/RMovie.png';
import LogoImage from 'img/safe-shopping.png';
import Image from 'next/image';
import React from 'react';
// import Link from ''
// const MyImage = () => {
//   return <Image src={SafeShoppingImage} alt="Picture of the author" />;
// };
const StarIconRed = () => {
  return (
    <StarIcon
      sx={{ color: 'yellow', height: '15px', width: '15px' }}
    ></StarIcon>
  );
};

const LocationWhite = () => {
  return (
    <LocationOnIcon
      sx={{ color: 'white', marginLeft: '15px', marginRight: '13px' }}
    ></LocationOnIcon>
  );
};

const MallIconWhite = () => {
  return <LocalMallIcon sx={{ color: 'white' }}></LocalMallIcon>;
};

export default function Midle() {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ padding: '10px 20px', backgroundColor: '#384E54' }}
    >
      {/* <Grid item>
        <Typography
          variant="body2"
          sx={{
            color: 'primary.contrastText',
          }}
        >
          <Image src={LogoImage} width={30} height={30} alt=" " />
          <StarIconRed />
          <StarIconRed />
          <StarIconRed />
          <StarIconRed />
          <StarIconRed />
          <Grid sx={{ padding: '1px 33px' }}>4.96/5.00</Grid>
        </Typography>
      </Grid> */}

      <Grid item>
          <Image width={108} height={60} alt=" " src={RMovie} />
      </Grid>

      <Grid item>
        <Link href="/" style={{ textDecoration: 'none', color: 'black'}}>Home</Link>
      </Grid>

      <Grid item>
        <LocationWhite />
        <MallIconWhite />
      </Grid>
    </Grid>
  );
}
