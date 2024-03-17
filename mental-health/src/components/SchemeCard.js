

import React, { Component } from 'react';

class SchemeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  }

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  }

  render() {
    const { scheme } = this.props;
    const { isHovered } = this.state;

    const cardStyle = {
      width: '20rem',
      fontSize: '14px', // Reduce font size of the text
      border: '2px solid transparent', // Add initial border
      backgroundImage: 'linear-gradient(to right, #ff6363, #7b5dd2)', // Add gradient border
      backgroundClip: 'padding-box', // Ensure gradient border doesn't overlap content
      transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s', // Add transition for smooth hover effect
      transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Scale up the card on hover
      boxShadow: isHovered ? '0px 8px 16px rgba(0, 0, 0, 0.2)' : 'none' // Add shadow effect on hover
    };

    return (
      <div className="scheme-card" style={cardStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <div className="card" style={{ width: '20rem' }}>
          <img src={scheme.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{scheme.title}</h5>
            <p className="card-text">{scheme.description}</p>
            <p className="card-text">{scheme.eligibility}</p>
            <p className="card-text">{scheme.benefits}</p>
            <a href={scheme.link} className="btn btn-primary">Apply</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SchemeCard;