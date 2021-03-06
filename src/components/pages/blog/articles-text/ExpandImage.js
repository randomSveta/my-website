import React from 'react';
import ImageModal from './ImageModal';

export default class ExpandImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.src,
      title: this.props.title,
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <React.Fragment>
        <img
          onClick={() => this.toggle()}
          className={'article-expand-image mb-3' + this.props.class}
          width='100%'
          src={this.state.image.default}
          alt={this.state.title}
        />
        <ImageModal title={this.state.title} img={this.state.image} modal={this.state.modal} toggle={this.toggle} />
      </React.Fragment>
    );
  }
}
