import React from 'react';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/variables';
import {Link} from 'react-router-dom';
import {Avatar} from '@mui/material';

const MediaRow = ({file}) => {
  return (
    <tr>
      <td>
        <Avatar src={mediaUrl + file.thumbnails.w160} alt={file.title} />
      </td>
      <td>
        <h3>{file.title}</h3>
        <p>{file.description}</p>
      </td>
      <td>
        <Link to={'/Single'} state={{file}}>
          View
        </Link>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object.isRequired,
};

export default MediaRow;
