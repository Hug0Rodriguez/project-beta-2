import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateSalesPerson from './CreateSalesPerson';
import ListSalesPeople from './ListSalesPeople';
import AddCustomer from './AddCustomer';
import ListCustomers from './ListCustomers';
import SaleForm from './NewSale';
import ListSales from './SalesList';
import SalespersonHistory from './SalesPersonHistory';
import ListAutomobiles from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import ModelList from './ModelList';
import ModelForm from './ModelForm';
import TechnicianList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import ServiceHistoryList from './ServiceHistoryList';


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
          <Route path="saleslist" element={<ListSales sales={props.sales}/>}></Route>
          <Route path="salespersonhistory" element={<SalespersonHistory/>}/>
          <Route path="automobilelist" element={<ListAutomobiles/>}></Route>
          <Route path="automobileform" element={<AutomobileForm/>}></Route>
          <Route path="/manufacturers" element={<ManufacturerList />} />
          <Route path="/manufacturers/create" element={<ManufacturerForm />} />
          <Route path="/models" element={<ModelList />} />
          <Route path="/models/create" element={<ModelForm />} />
          <Route path="/technicians" element={<TechnicianList />} />
          <Route path="/technicians/create" element={<TechnicianForm />} />
          <Route path="/appointments/" element={<AppointmentList />} />
          <Route path="/appointments/create" element={<AppointmentForm />} />
          <Route path="/appointments/history" element={<ServiceHistoryList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
