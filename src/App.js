import './App.css';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styles/Global.style';
import Container from './components/styles/Container.style';
import Card from './components/Card';
import Footer from './components/Footer';
import data from './data';


//! Tema objesi
  const theme = {
    colors: {
    header: '#d9d9d9',
    body: '#fff',
    footer: '#ae6282ff',
  },
  responsive: '768px',
  };

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Container>
        {/* {data.map((item, id)=>{ */}
        {data.map((item, index)=>{
          return <Card {...item} key={index}/>;
        })}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
