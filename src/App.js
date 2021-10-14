// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component
import { ProductTable } from "./component/Tables";
import { useEffect, useState } from 'react';

const data = [
    {id: 1, item: "Susu ABC", price: 30000},
    {id: 2, item: "Susu XYZ", price: 15000},
    {id: 3, item: "Susu DEF", price: 20000},
];

function App() {
    const [searchVal, setSearchVal] = useState("");
    const [dataTable, setDataTable] = useState([]);

    const onChange = (e) => {
        e.preventDefault();
        setSearchVal(e.target.value);
    }

    useEffect(() => {
        const results = data.filter(item =>
          item.item.toLowerCase().includes(searchVal)
        );
        setDataTable(results);
      }, [searchVal]);

    return (
        <div className="App">
            <div className="container">
                <div className="row justify-content-center py-4">
                    <div className="col-8">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                            onChange={onChange}
                            value={searchVal}
                        />
                        <ProductTable products={dataTable} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
