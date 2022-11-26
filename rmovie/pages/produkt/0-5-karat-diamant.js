import StarIcon from '@mui/icons-material/Star';

const StarIconRed = () => {
  return <StarIcon sx={{ color: 'red' }}></StarIcon>;
};

function SecondPage() {
  return (
    <StarIconRed></StarIconRed>
    //  <h1>0-5-karat-diamant</h1>;
  );
}

export default SecondPage;
