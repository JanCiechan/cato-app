import { Provider } from 'react-redux';
import store from "./app/store"
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CuteCatContainer from './components/CuteCatContainer';
import { BrowserRouter as Router, Route, RouterProvider, Switch } from 'react-router-dom';
import router from "./app/router"



function App() {
  return (
    <Provider store={store}>
      <div class='App bg-primary-subtle'>
        <Header/>
        <RouterProvider router={router}/>
        <Footer/>
      </div>
      </Provider>
  );
}

export default App;
