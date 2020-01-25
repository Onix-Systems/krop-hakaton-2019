import React from 'react';
import { Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { hideFlashMessage as hideFlashMessageAction } from '../../../redux/actions/flashMessage';

const FlashMessage = ({
  text, hidden, positive, negative, hideFlashMessage,
}) => {
  return (
    <div className="flash-message">
      <Message
        positive={positive}
        negative={negative}
        hidden={hidden}
        onDismiss={hideFlashMessage}
      >
        <div className="flash-message__text">
          {text}
        </div>
      </Message>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state.flashMessage,
});

const mapDispatchToProps = {
  hideFlashMessage: hideFlashMessageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);
