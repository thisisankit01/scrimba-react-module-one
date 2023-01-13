import logo from './react-logo.png'

function Header() {
  return (
    <nav>
    <img src={logo} className='nav--icon'></img>
    <h3 className='nav--logo_text'>ReactFacts</h3>
    <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
  )
}

export default Header