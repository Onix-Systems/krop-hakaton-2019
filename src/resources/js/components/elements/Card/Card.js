import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardView from './CardView';
import {
  showSuccessFlashMessage as showSuccessFlashMessageAction,
  showErrorFlashMessage as showErrorFlashMessageAction,
} from '../../../redux/actions/flashMessage';
import { toggleMap as toggleMapAction } from '../../../redux/actions/map';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    };
  }

  onShowOnMapClicked = () => {
    const { history, equipment, selectedEquipment, toggleMap, resize } = this.props;
    if (resize.laptopOrSmallerScreen && selectedEquipment) {
      toggleMap();
    } else {
      const uniqueUrl = `search?id_u=${equipment.id_u}`;
      history.push(uniqueUrl);
    }
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
        onShowOnMapClicked={this.onShowOnMapClicked}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  selectedEquipment: state.equipments.selected,
  resize: state.resize,
});

const mapDispatchToProps = {
  showSuccessFlashMessage: showSuccessFlashMessageAction,
  showErrorFlashMessage: showErrorFlashMessageAction,
  toggleMap: toggleMapAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Card),
);
