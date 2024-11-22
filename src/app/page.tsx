import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <p>This is James, This branch was created from the last commit Ryan made.</p>
      <p>There should be a merge conflict now!</p>
    </div>
  );
}
