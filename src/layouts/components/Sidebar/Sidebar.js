import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      {
        <Menu>
          <MenuItem to={config.routes.home} title="Home" />
          <MenuItem to={config.routes.manhua} title="Manhua" />
          <MenuItem to={config.routes.manhwa} title="Manhwa" />
          <MenuItem to={config.routes.manga} title="Manga" />
          <MenuItem to={config.routes.novel} title="Novel" />
        </Menu>
      }
    </aside>
  );
}

export default Sidebar;
