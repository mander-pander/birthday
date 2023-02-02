import styles from "./Balloon.module.css";

const Balloons = ({ children }) => {
    return <div className={styles.balloons}>{children}</div>
}

export default Balloons;
