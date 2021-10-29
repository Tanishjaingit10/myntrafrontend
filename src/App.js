import './App.css';
import ContextProvider from './Store/Context'
import Router from './Router'

function App() {
  return (
    <ContextProvider>
      <Router/>
    </ContextProvider>
  );
}

export default App;
