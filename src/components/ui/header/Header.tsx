import { Button } from '../button/button';
import './Header.css';
import logo from '../../../assets/logo.png';
import { ArrowLeft, MessageCircleCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <header className="header">
      {!isHomePage && (
        <Button size="icon" variant="ghost" asChild>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </Button>
      )}

      <img src={logo} alt="logo" className="logo__img" />

      <Button variant="accent" asChild>
        <a href="https://t.me/bring_g" target="_blank" rel="noopener noreferrer">
          <MessageCircleCheck />
          Manager
        </a>
      </Button>
    </header>
  );
}
