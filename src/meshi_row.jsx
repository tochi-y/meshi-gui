import React from 'react';
import PropTypes from 'prop-types';

const MeshiRow = (props) => {
  const {
    _id, name, createdAt,
  } = props.data;
  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{createdAt}</td>
    </tr>
  );
};

MeshiRow.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};

export default MeshiRow;
