import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, title }) {
  return (
    <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
