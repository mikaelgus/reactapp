import React from 'react';
import PropTypes from 'prop-types';

const MediaRow = (props) => {
  return (
    <tr>
      <td>
        <img src="http://placekitten.com/160/160" alt="cat" />
      </td>
      <td>
        <h3>Porro</h3>
        <p>Something is happening</p>
      </td>
      <td>
        <a href="http://yle.fi">Link</a>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {};

export default MediaRow;
