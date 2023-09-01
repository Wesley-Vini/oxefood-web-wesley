import { Segment } from 'semantic-ui-react';
import './App.css';
import FormCliente  from './views/Produto/FormProduto';


function App() {

  return (

    <div className="App">
      
      <FormProduto/>

      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );

}

export default App;
