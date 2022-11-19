import styles from '../styles/floatmenu.module.css'

export default function FloatMenu({children}) {
    return (
        <div className={styles.container}>
            <div>
	        {children}
	    </div>
        </div>
    );
}
