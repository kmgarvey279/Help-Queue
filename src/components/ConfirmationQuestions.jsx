import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>Have you gone through all the steps to on the Learn How to Program debugging lesson?</p>
      <button onClick={props.onTroubleshootingConformation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConformation: PropTypes.func
};

export default ConfirmationQuestions;