import Link from 'next/link'
import classes from '../components/main-header.module.css'

function MainHeader(){
    return(
       <>
       <header className={classes.header}>
        <div className={classes.logo}>
            <Link href='./'> NextEvent </Link>
        </div>
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <Link href='/events'> Browse all Events </Link>
                </li>
            </ul>
        </nav>
       </header>
       </> 
    )
}
export default MainHeader;