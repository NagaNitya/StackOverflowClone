import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import Avatar from "../Avatar/Avatar";
import decode from "jwt-decode";
import './Navbar.css';
import { setCurrentUser } from "../../actions/currentUser";

const Navbar = () => {

    const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const handleLogout = () => {
            dispatch({type:'LOGOUT'})
            navigate('/')
            dispatch(setCurrentUser(null))
    }

    useEffect(() => {
        const token = User?.token
        if(token){
            const decodetoken=decode(token)
            if(decodetoken.exp*1000<new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }, [dispatch])

    return (
        <nav className="main-nav">
            <div className="navbar">
                <Link to="/" className="nav-item nav-logo">
                    <img src={logo} alt="logo" style={{height:40, width:140}}/>
                </Link>
                <Link to="/" className="nav-item nav-btn">About</Link>
                <Link to="/" className="nav-item nav-btn">Products</Link>
                <Link to="/" className="nav-item nav-btn">For Teams</Link>
                <form>
                    <img src={search} alt="search" className="search-icon"/>
                    <input type="text" placeholder="Search..." />
                    
                </form>
                {User===null ? 
                    <Link to="/Auth" className="nav-item nav-links">Log in</Link> :
                    <div className="log-dets">
                        <Avatar backgroundColor='#009dff' px={2} py={2} borderRadius="50%" color="white"><Link to={`/Users/${User?.result?._id}`} style={{color:'white', textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                        <button className="nav-item nav-links" onClick={handleLogout}>Log out</button>
                    </div> 
                }
            </div>
        </nav>
    )
}

export default Navbar;