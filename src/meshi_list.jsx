import React from 'react';

import MeshiRow from './meshi_row';

const data = [
  {
    a: 1,
    b: 'Lorem',
    c: 'ipsum',
    d: 'dolor',
    e: 'sit',
  },
  {
    a: 2,
    b: 'amet',
    c: 'consectetur',
    d: 'adipiscing',
    e: 'elit',
  },
];

/* eslint-disable react/prefer-stateless-function */
class MeshiList extends React.Component {
  render() {
    const rows = data.map(d => <MeshiRow data={d} key={d.id} />);
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MeshiList;
