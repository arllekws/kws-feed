import styles from './Header.module.css'
import igniteLogo from '../assets/symbol.svg';

console.log(igniteLogo);


export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="" />
        </header>
    );
}