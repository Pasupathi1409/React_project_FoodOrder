
import './App.css';
import FoodOrder from './FoodOrder.js';
import LoginPage from './LoginPage.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      

      <BrowserRouter ><Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/FoodOrder' element={<FoodOrder/>}/>
     </Routes></BrowserRouter>


    </div>
  );
}

export default App;
