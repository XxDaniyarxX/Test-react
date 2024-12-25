import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header style={{ width: '1700px', height: '90px', backgroundColor: 'black', color: 'white', margin: '0 auto' }}>
        <nav>
          <ul className='ul' style={{ width: '100%', display: 'flex', paddingTop: '35px', listStyle: 'none', gap: '60px', fontSize: '22px' }}>
            <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
            <li><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link></li>
            <li><Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
