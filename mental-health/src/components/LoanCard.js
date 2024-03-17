

import React, { Component } from 'react';

class LoanCard extends Component {
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
    const { loan } = this.props;
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

    const hoverStyle = {
      transform: isHovered ? 'scale(1.1)' : 'scale(1)' /* Scale up the card on hover */
    };

    return (
      <div className="loan-card" style={{...cardStyle, ...hoverStyle}}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <div className="card" style={{ width: '20rem' }}>
          <img src={loan.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{loan.title}</h5>
            <p className="card-text">{loan.description}</p>
            <p className="card-text">{loan.eligibility}</p>
            <p className="card-text">{loan.benefits}</p>
            <a href={loan.link} className="btn btn-primary">Apply</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoanCard;