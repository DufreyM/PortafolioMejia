import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer style={{ backgroundColor: '#222', color: 'white', textAlign: 'center', padding: '1rem' }}>
    <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
      <a
        href="https://www.linkedin.com/in/dufrey/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white' }}
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/DufreyM"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white' }}
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.instagram.com/leonmeji/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white' }}
      >
        <FaInstagram size={24} />
      </a>
    </div>
    <p>&copy; {new Date().getFullYear()} Leonardo Mejía</p>
  </footer>
);

export default Footer;
