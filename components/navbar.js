import Link from 'next/Link';

const Layout = ({children}) =>{
    return(
    <>
        <nav className="py-3 font-semibold text-xl xl:w-4/5 mx-auto ">
            <Link href="/" >
                <a className="mr-10">Progress</a>
            </Link>
            <Link href="/" >
                <a className="mr-5">Dashboard</a>
            </Link>
            <Link href="/">
                Plans
            </Link>
        </nav>
        {children}
    </>
    )
}

export default Layout;