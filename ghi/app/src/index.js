import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function fetchDataAndRenderApp() {
  const salespeopleResponse = await fetch('http://localhost:8090/api/salespeople/');
  const customersResponse = await fetch('http://localhost:8090/api/customers/');

  if (salespeopleResponse.ok && customersResponse.ok) {
    const salespeopleData = await salespeopleResponse.json();
    const customersData = await customersResponse.json();

    root.render(
      <React.StrictMode>
        <App salespeople={salespeopleData.salespeople} customers={customersData.customers} />
      </React.StrictMode>
    );
  } else {
    console.error('Error fetching data');
  }
}

fetchDataAndRenderApp();
