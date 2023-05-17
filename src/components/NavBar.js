import PropTypes from 'prop-types'
import '../sideBar.css'
const Navbar = (props) => {
    
    let count = 1
    const showBar = ()=>{
        let sideBar = document.querySelector(".sideBar")
        if(count){
            sideBar.style.left="0px"
            count--
        }
        else{
            sideBar.style.left="-200px"
            count++
        }
                
    
    }
    
    
    return(
        
        <>
            <nav>
                <div className="hamburger" onClick={showBar}>
                <span className="line" id="1st"></span>
                <span className="line" id="2st"></span>
                <span className="line" id="3st"></span>
                </div>

                <div className="logo"><a href="/">{props.title}</a></div>
                <ul>
                    <li className="item"><a href="/">Home</a></li>
                    <li className="item"><a href="/About">About</a></li>
                    <li className="item"><a href="/Contact">Contact</a></li>
                    <button onClick={()=>{props.toggleMode('dark')}} id='dark-btn'></button>
                    <button onClick={()=>{props.toggleMode('light')}} id='light-btn'></button>

                </ul>
            </nav>
            <div className="sideBar">
                <ul>
                    <li className="links"><a href="/">Link1</a></li>
                    <li className="links"><a href="/">Link2</a></li>
                    <li className="links"><a href="/">Link3</a></li>
                    <li className="links"><a href="/">Link4</a></li>
                    <li className="links"><a href="/">Link5</a></li>
                </ul>
            </div>
        </>
        
    )
}

Navbar.propTypes = {title:PropTypes.string}

Navbar.defaultProps = {
    title:'Set title here'
}

export default Navbar






