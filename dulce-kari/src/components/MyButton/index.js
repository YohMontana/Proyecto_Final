
import {Button} from "@mui/material";
import { styled } from '@mui/material/styles';

    const MyButton = styled(Button)(({ theme }) => ({
        color: '#fff',
        backgroundColor: '#C99DB4',
        border: 'none',
        margin: '25px 20px',
        fontSize: '20px',
        boxShadow: '0px 3px 5px #666666',
        textTransform: 'none',
        fontFamily: "'Roboto', sans-serif",
        '&:hover': {
          backgroundColor: '#545454',
          border: 'none',
          margin: '25px 20px',

        },
      }));
      export default MyButton;
     