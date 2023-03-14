import { createTheme, ThemeProvider} from '@mui/material';
import ReactDOM from 'react-dom';
import App from './App';

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif"
  },
  palette:{
    primary: {
      main: "#fff",
    }
  }
})


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);


root.render(<ThemeProvider theme={theme}>
  <App></App>
</ThemeProvider>
);