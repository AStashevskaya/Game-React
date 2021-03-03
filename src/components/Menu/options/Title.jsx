import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text }) => (
  <div className="title">
    <h2>

      { text }

    </h2>
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
