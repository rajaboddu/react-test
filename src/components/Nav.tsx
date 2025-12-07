import logo from '../assets/react.svg'

const Nav = () => {
    return <>
    <div className='container'>
        <div className="row">
            <div className="col"><img src={logo} alt="" /></div>
            <div className="col">
                <h3>Nav Bar</h3>
            </div>
        </div>
    </div>
    </>
}

export default Nav;