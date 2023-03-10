import classNames from "classnames/bind";
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1>Home</h1>
                <h2>Home Page Content</h2>
            </div>
        </div>
    );
}

export default Home;