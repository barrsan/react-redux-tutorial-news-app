import { memo } from 'react';
import { Logo } from '@components/Logo';

const Header = () => (
  <header className="container max-w-4xl mx-auto py-3">
    <Logo />
  </header>
);

export default memo(Header);
