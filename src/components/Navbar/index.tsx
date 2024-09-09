import styles from './index.module.scss';

export default function Navbar() {
  const path = window.location.pathname;
  console.log(path);

  const navItems = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <nav className={styles.navbar}>
      <ul>
        {navItems.map((item) => (
          <li key={item.title}>
            <a className={path === item.href ? styles.active : ''} href={item.href}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
