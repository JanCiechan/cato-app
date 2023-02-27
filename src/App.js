import { Provider } from 'react-redux';
import store from "./app/store"
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CuteCatContainer from './components/CuteCatContainer';

function App() {
  return (
    <Provider store={store}>
      <div class='App bg-primary-subtle'>
        <Header/>
          <CuteCatContainer/>
        <Footer/>
      </div>
      </Provider>
  );
}

export default App;
