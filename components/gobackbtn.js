import style from '../styles/markdown.module.css';
import Link from 'next/link';

const GoBackBtn = ({series}) => {
    const url = "/blog/" + series;
    return (
        <Link href={url}>
        <div className={style.goBackButton}>
                Go Back
        </div>
        </Link>
    );
}

export default GoBackBtn;