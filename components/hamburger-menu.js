import Link from 'next/link';
import {slide as Menu} from 'react-burger-menu';

export default props => {
    return (
        <Menu right width={'75%'}>
            <Link href='/'><a>Home</a></Link><br/>
	    <Link href='/blog'><a>Blog</a></Link>
	    <a href='https://kenryu-liveterm.vercel.app'>Terminal</a>
	    <Link href='/about'><a>About Website</a></Link>
	</Menu>
    );
}
