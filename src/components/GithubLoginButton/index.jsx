import styles from './styles.module.css';
import { AiFillGithub } from 'react-icons/ai';

export const GithubLoginButton = () => {
    return (
        <button className={styles['button']}>
            <AiFillGithub className={styles['icon']} />
            <span>Login with Github</span>
        </button>
    )
}