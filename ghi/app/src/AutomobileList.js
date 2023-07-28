import React, {useState, useEffect} from 'react';


async function fetchData(){
    const automobilesFetch = await fetch('http://localhost:8100/api/automobiles/');
    if (automobilesFetch.ok){
        const automobileData = await automobilesFetch.json();
        return automobileData;
    } else {
        console.error('Error fetching sale data');
    }
}


function ListAutomobiles(props) {
    const[automobileData, setAutomobileData]= useState([]);
    useEffect(()=>{
        fetchData().then(data => {
            setAutomobileData(data.autos);
        })
    }, []);
return (
    <div>
        <h1>Automobile List</h1>
        <table className="table table-striped">
        <thead>
            <tr>
                <th>VIN</th>
                <th>Color</th>
                <th>Year</th>
                <th>Model</th>
                <th>Manufacturer</th>
                <th>Sold</th>
            </tr>
        </thead>
        <tbody>
            {automobileData.map(auto => (
            <tr key={auto.id}>
                <td>{auto.vin}</td>
                <td>{auto.color}</td>
                <td>{auto.year}</td>
                <td>{auto.model.name}</td>
                <td>{auto.model.manufacturer.name}</td>
                <td>{auto.sold.toString()}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
);
}

export default ListAutomobiles;
