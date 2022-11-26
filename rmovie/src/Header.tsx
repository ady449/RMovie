// importing material UI components
import * as React from 'react';

import Bottom from './header/Bottom';
import Midle from './header/Middle';
import Top from './header/Top';
// import { ReactComponent as Logo } from '../img/logo.svg'
// import { MenuHeader } from 'react-icons/fa';

export default function Header() {
  return (
    <div>
      <Top></Top>
      <Midle></Midle>
      <Bottom></Bottom>
    </div>
  );
}
