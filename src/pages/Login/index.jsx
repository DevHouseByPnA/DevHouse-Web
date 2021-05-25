import styles from './styles.module.css';
import { GithubLoginButton } from '../../components/GithubLoginButton';

export const LoginPage = () => {
    return (
        <div className={styles['page']}>
            <div className={styles['login-card']}>
                <GithubLoginButton />
            </div>
        </div>
    )
}