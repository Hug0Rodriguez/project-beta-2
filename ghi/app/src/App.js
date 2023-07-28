import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateSalesPerson from './CreateSalesPerson';
import ListSalesPeople from './ListSalesPeople';
import AddCustomer from './AddCustomer';
import ListCustomers from './ListCustomers';
import SaleForm from './NewSale';

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
          <Route path="customerlist" element={<ListCustomers customers={props.customers}/>}></Route>
          <Route path="salesform" element={<SaleForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
