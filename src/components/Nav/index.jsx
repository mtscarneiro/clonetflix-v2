import React, {useState, useEffect} from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => {
            window.removeEventListener('scroll', transitionNavBar)
        }
    }, [])

    return (
        <div className={`nav ${show  && 'nav_black'}`}>
            <div className="nav_contents">
                <img
                    className="netflix_logo"
                    src="https://i.imgur.com/8iFl7tN.png"
                    alt="netflix banner logo"
                />

                <img
                    className="user_avatar"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Nav
