import styles from './header.module.css'

export const Header = () =>{
    return (
    <header className={styles.header}>
        <h1 className={styles.header__title}>Book it</h1>
        <div className={styles.filtersBox}>
            <select name="" id="" className={`${styles.filtersBox__country}${styles.input}`}>
                <option value="all">All Country</option>
                <option value="argentina">Argentina</option>
                <option value="brasil">Brasil</option>
                <option value="chile">Chile</option>
                <option value="uruguay">Uruguay</option>
            </select>
                <input type="date" className={`${styles.filtersBox__input} ${styles.input}`} />
                <input type="date" className={`${styles.filtersBox__input} ${styles.input}`} />

                <select name="" id="" className={`${styles.filtersBox__country}${styles.input}`}>
                <option value="all">All price</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$$">$$$$</option>
            </select>
                <select name="" id="" className={`${styles.filtersBox__country}${styles.input}`}>
                <option value="all">All size</option>
                <option value="smal">Smal</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>
    </header>
    )
}