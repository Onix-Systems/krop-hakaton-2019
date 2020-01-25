import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardView from './CardView';
import { showSuccessFlashMessage as showSuccessFlashMessageAction } from '../../../redux/actions/flashMessage';
import { showErrorFlashMessage as showErrorFlashMessageAction } from '../../../redux/actions/flashMessage'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    };
  }

  onExpandClicked = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  onShareClicked = async () => {
    const { showSuccessFlashMessage, showErrorFlashMessage } = this.props;
    const shareLink = this.createUniqueLink();
    const copied = await this.copyToClipboard(shareLink);
    if (copied) {
      showSuccessFlashMessage('Посилання на картку успішно скопійовано');
    } else {
      showErrorFlashMessage('Не вдалося скопіювати посилання на картку');
    }
  }

  createUniqueLink = () => {
    const host = window.location.origin;
    const { equipment } = this.props;
    return `${host}/search?id_u=${equipment.id_u}`;
  }

  copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const result = document.execCommand('copy');
        if (!result) {
          return false;
        }
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  render() {
    const { equipment } = this.props;
    const { expand } = this.state;
    return (
      <CardView
        equipment={equipment}
        expand={expand}
        onExpandClicked={this.onExpandClicked}
        onShareClicked={this.onShareClicked}
      />
    );
  }
}

const mapDispatchToProps = {
  showSuccessFlashMessage: showSuccessFlashMessageAction,
  showErrorFlashMessage: showErrorFlashMessageAction,
};

export default connect(null, mapDispatchToProps)(Card);
