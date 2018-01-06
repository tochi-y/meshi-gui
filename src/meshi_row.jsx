import React from 'react';
import PropTypes from 'prop-types';

const MeshiRow = (props) => {
  const {
    a, b, c, d, e,
  } = props.data;
  return (
    <tr>
      <td>{a}</td>
      <td>{b}</td>
      <td>{c}</td>
      <td>{d}</td>
      <td>{e}</td>
    </tr>
  );
};

MeshiRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number, PropTypes.string,
  ])).isRequired,
};

export default MeshiRow;
