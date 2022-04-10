import {ImageListItem, ImageListItemBar} from '@mui/material';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {safeParseJson} from '../utils/functions';
import {mediaUrl} from '../utils/variables';

const MediaRow = ({file}) => {
  const {description, filters} = safeParseJson(file.description) || {
    description: file.description,
    filters: {},
  };
  console.log('inside dsc', description);
  console.log(filters);
  return (
    <ImageListItem
      key={file.file_id}
      component={Link}
      to={'/single'}
      state={{file}}
    >
      <img
        src={mediaUrl + file.thumbnails.w320}
        alt={file.title}
        loading="lazy"
      />
      <ImageListItemBar title={file.title} subtitle={description} />
    </ImageListItem>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object,
};

export default MediaRow;
