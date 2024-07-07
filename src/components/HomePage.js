import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    // Add sign-in logic here
    navigate('/menu');
  };

  return (
    <div style={styles.homePage}>
      <div style={styles.instructions}>
        <h1>Welcome!</h1>
        <p>Scan the QR code to access the menu.</p>
        <img
          src="https://www.oreilly.com/api/v2/epubs/9781118370711/files/images/9781118370711-fg0101_fmt.png" // Replace with your QR code image URL
          alt="QR Code"
          style={styles.image}
        />
      </div>
      <h3 style={styles.or}>OR</h3>
      <div style={styles.signInForm}>
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn} style={styles.form}>
          <input type="email" placeholder="Email" required style={styles.input} />
          <input type="password" placeholder="Password" minLength="8" required style={styles.input} />
          <button type="submit" style={styles.button}>Sign In</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  homePage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  instructions: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  signInForm: {
    width: '100%',
    maxWidth: '400px',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
  },
  image: {
    marginTop: '10px',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  '@media (max-width: 768px)': {
    homePage: {
      padding: '10px',
    },
    signInForm: {
      padding: '10px',
    },
    input: {
      padding: '8px',
      fontSize: '14px',
    },
    button: {
      padding: '8px',
      fontSize: '14px',
    },
  },
  '@media (max-width: 480px)': {
    homePage: {
      padding: '5px',
    },
    signInForm: {
      padding: '5px',
    },
    input: {
      padding: '6px',
      fontSize: '12px',
    },
    button: {
      padding: '6px',
      fontSize: '12px',
    },
    or: {
      marginBottom : '10px',
    },
  },
};

export default HomePage;
