import { AiFillGithub } from 'react-icons/ai';
import styles from './styles.module.css';

export const GithubLoginButton = ({ signInHandler }) => {
    return (
        <button className={styles['button']} onClick={signInHandler}>
            <AiFillGithub className={styles['icon']} />
            <span>Login with Github</span>
        </button>
    );
}