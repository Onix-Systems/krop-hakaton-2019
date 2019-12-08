import React, { Component } from 'react';
import CardView from './CardView';

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

  render() {
    const { equipment } = this.props;
    const { expand } = this.state;
    return (
      <CardView
        equipment={equipment}
        expand={expand}
        onExpandClicked={this.onExpandClicked}
      />
    );
  }
}

export default Card;
