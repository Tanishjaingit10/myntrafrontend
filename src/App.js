import './App.css';
import ContextProvider from './context/Context'
import Router from './Router'

function App() {
  return (
    <ContextProvider>
      <Router/>
    </ContextProvider>
  );
}

export default App;
