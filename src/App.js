import { store } from './model';
import { StoreProvider} from 'easy-peasy';
import ADDTODO from './component/ADDTODO';
import TODO from './component/TODO';
import './App.css';


function App() {

  return (
    <StoreProvider store={store}>
      <div className="container">
        <TODO/>
        <ADDTODO/>
      </div>

    </StoreProvider>
  );
}

export default App;
