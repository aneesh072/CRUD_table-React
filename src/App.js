import React, { Component } from 'react';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Address</th>
            <th> Phone Number </th>
            <th> Email </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Henny Chen</td>
            <td> 3 waterfoot road</td>
            <td> 123 123 1234</td>
            <td>j.channey@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
