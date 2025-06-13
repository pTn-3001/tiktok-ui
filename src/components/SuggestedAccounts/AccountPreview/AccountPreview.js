import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c14a92a8e2e23babececab98c0f67fac~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=8da2ec24&x-expires=1749873600&x-signature=r47xZQge5flJkqln8N09D4au%2FJ0%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=my"
                    alt=""
                ></img>
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>sontungmtp</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyen Thanh Tung</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
