import Link from 'next/link';
import {slide as Menu} from 'react-burger-menu';

export default function Sidebar(props) {
    return (
        <Menu right width={'75%'}>
            <p><Link href='/'><a>Home</a></Link></p>
            <p><Link href='/blog'><a>Blogs</a></Link></p>
            <p><a href='https://kenryu-liveterm.vercel.app'>Terminal</a></p>
            <p><Link href='/about'><a>About Website</a></Link></p>
        </Menu>
    );
}
