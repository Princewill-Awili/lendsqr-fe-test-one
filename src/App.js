import Main from './components/Main/Main'
import { StateContextProvider } from './utils/context';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <StateContextProvider>
      <div className="App">
        <Router>
          <Main/>
        </Router> 
      </div>
    </StateContextProvider> 
  );
}

export default App;
