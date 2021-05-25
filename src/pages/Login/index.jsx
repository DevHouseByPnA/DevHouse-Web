import { useHistory, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import { GithubLoginButton } from '../../components/GithubLoginButton';
import { signInWithGithub } from '../../utils/firebase';

export const LoginPage = () => {
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: '/' } };

    const loginWithGithub = async () => {
        const { token, user, errorCode, errorMessage } = await signInWithGithub();

        if (token && user) {
            history.replace(from);
        } else if (errorCode && errorMessage) {
            console.log({
                errorCode,
                errorMessage,
            });
        }
    }

    return (
        <div className={styles['page']}>
            <div className={styles['login-card']}>
                <GithubLoginButton signInHandler={loginWithGithub} />
            </div>
        </div>
    )
}