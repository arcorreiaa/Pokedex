import { ThemeProvider } from 'styled-components';
// import { Welcome } from './src/pages/Welcome';
import theme from './src/global/styles/theme';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        {/* <Welcome /> */}
        <Home />
    </ThemeProvider>
  );
}