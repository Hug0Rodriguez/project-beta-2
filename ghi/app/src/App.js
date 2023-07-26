import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateSalesPerson from './CreateSalesPerson';
import ListSalesPeople from './ListSalesPeople';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="create" element={<CreateSalesPerson/>}/>
          <Route path="salespeople" element={<ListSalesPeople salespeople={props.salespeople}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
