import PropTypes from 'prop-types';
import MediaRow from './MediaRow';

const MediaTable = (props) => {
  return (
    <table>
      <tbody>
        <MediaRow />
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {};

export default MediaTable;
