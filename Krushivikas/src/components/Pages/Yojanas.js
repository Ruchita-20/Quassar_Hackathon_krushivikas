import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Background from "../../assests/back.jpg";

const Yojanas = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Government Schemes and Private Loans</h1>
      <div style={styles.container}>
        <div
          style={{ ...styles.card, ...(hoveredCard === 'schemes' && styles.cardHovered) }}
          onMouseEnter={() => setHoveredCard('schemes')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Link to="/schemes" className="card-link" style={styles.cardLink}>
            <div style={styles.cardBody}>
              <h5 className="card-title" style={styles.cardTitle}>Government Schemes</h5>
              <p className="card-text" style={styles.cardText}>Explore government schemes for agriculture</p>
            </div>
          </Link>
        </div>
        <div
          style={{ ...styles.card, ...(hoveredCard === 'loans' && styles.cardHovered) }}
          onMouseEnter={() => setHoveredCard('loans')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Link to="/loans" className="card-link" style={styles.cardLink}>
            <div style={styles.cardBody}>
              <h5 className="card-title" style={styles.cardTitle}>Private Loans</h5>
              <p className="card-text" style={styles.cardText}>Discover private loans for agricultural projects</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#000', // Change header color to black
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  card: {
    width: '400px',
    height: '300px',
    margin: '20px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s, filter 0.3s',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent black background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
  },
  cardBody: {
    padding: '20px',
    color: '#fff', // Text color for card content
  },
  cardLink: {
    textDecoration: 'none',
    color: '#fff', // Text color for card link
  },
  cardTitle: {
    fontSize: '24px', // Font size for card title
    marginBottom: '10px', // Add margin bottom for spacing
  },
  cardText: {
    fontSize: '18px', // Font size for card text
  },
  cardHovered: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
};

export default Yojanas;
