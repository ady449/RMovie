import { Grid, Link} from "@mui/material";
import RMovie from "img/RMovie4.png";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import React from "react";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


// import Link from ''
// const MyImage = () => {
//   return <Image src={SafeShoppingImage} alt="Picture of the author" />;
// };
const SearchIconWhite = () => {
	return (
		<SearchIcon sx={{ color: "white"}}
		></SearchIcon>
	);
};
const SearchWhite = () => {
	return (
		<SearchIcon sx={{ color: "white" }}
		></SearchIcon>
	);
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
const styleHomeButton: CSS.Properties = {
  color: "red",
  textDecoration: "none",
  '&hover': {
    opacity:0.5,
    color:"black"
  },
}

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
			sx={{ padding: "10px 20px", backgroundColor: "#384E54" }}
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
				<Link href="/" style={styleHomeButton }>Home</Link>
			</Grid>

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
