import React from 'react';

function ListAutomobiles(props) {
    console.log(props.automobiles)
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
            {props.automobiles && props.automobiles.map(automobile => (
            <tr key={automobile.vin}>
                <td>{automobile.color}</td>
                <td>{automobile.year}</td>
                <td>{automobile.model}</td>
                <td>{automobile.manufacturer}</td>
                <td>{automobile.sold}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
);
}

export default ListAutomobiles;
