import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import css from './AppBar.module.css'

export const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};
