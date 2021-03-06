import React from "react";
import { Table } from "react-bootstrap";

const Cart = () => {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 3 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
