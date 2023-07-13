import Banner from './components/Banner';
import TextBox from './components/TextBox';

function App() {
  return (
    
    <div className="App">
      <Banner/>
      <TextBox label="Nome" placeholder="Digite o seu nome"/>
      <TextBox label="Cargo" placeholder="Digite o seu cargo"/>
      <TextBox label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
