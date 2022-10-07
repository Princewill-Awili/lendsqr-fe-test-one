import Main from './pages/Main/Main'
import { StateContextProvider } from './utils/context';

function App() {
  return (
    <StateContextProvider>
      <div className="App">
        <Main/>
      </div>
    </StateContextProvider> 
  );
}

export default App;
