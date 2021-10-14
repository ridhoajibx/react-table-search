import React from 'react';
import { Table } from 'react-bootstrap';
import { useSortableData } from "../../utils/useSortTable";

const ProductTable = (props) => {
    const { products } = props;
    const { items, requestSort, sortConfig } = useSortableData(products);
    
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Items</th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('price')}
                            className={getClassNamesFor('price')}
                        >
                            Price
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => (
                    <tr key={item.id}>
                        <td>{i+1}</td>
                        <td>{item.item}</td>
                        <td>${item.price}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export { ProductTable };