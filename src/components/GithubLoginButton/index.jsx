import { AiFillGithub } from 'react-icons/ai';
import styles from './styles.module.css';
import { signInWithGithub } from '../../utils/firebase';

export const GithubLoginButton = () => {
    return (
        <button className={styles['button']} onClick={signInWithGithub}>
            <AiFillGithub className={styles['icon']} />
            <span>Login with Github</span>
        </button>
    )
}