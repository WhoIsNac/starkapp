
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from "react-redux";
import {store} from "./store/store";
import {
  Container,
  CssBaseline,
} from '@mui/material';

import { Header } from './wallet/wallet';
import theme from './styles/theme';

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Container maxWidth="sm">
      <Header />
    </Container>
  </ThemeProvider>
  </Provider>
  );
}

export default App;
