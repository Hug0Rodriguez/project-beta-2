import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateSalesPerson from './CreateSalesPerson';
import ListSalesPeople from './ListSalesPeople';
import AddCustomer from './AddCustomer';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="create" element={<CreateSalesPerson/>}/>
          <Route path="salespeople" element={<ListSalesPeople salespeople={props.salespeople}/>}></Route>
          <Route path="addcustomer" element={<AddCustomer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
