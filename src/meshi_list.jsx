import React from 'react';

import MeshiRow from './meshi_row';
import config from './config';

function getMeshiList() {
  const url = `${config.meshiUrl}/meshi`;
  const options = {
    method: 'get',
    mode: 'cors',
    headers: { Accept: 'application/json' },
  };
  return fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`StatusCodeError: ${res.status}`);
    });
}

class MeshiList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    getMeshiList()
      .then((meshiList) => {
        this.setState({ data: meshiList });
      })
      .catch((err) => {
        console.error(err); // eslint-disable-line no-console
      });
  }

  render() {
    const header = this.state.data.length > 0
      ? (
        <tr>
          <th>_id</th>
          <th>name</th>
          <th>createdAt</th>
        </tr>
      )
      : <tr />;
    const rows = this.state.data.map(d => (
      <MeshiRow data={d} key={d._id} /> // eslint-disable-line no-underscore-dangle
    ));
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            {header}
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
