import logo from './photograph.png'

function Header() {
  return (
    <header>
      <div className='image'>
        <img src={logo} alt="" width={250} height={260} />
      </div>
    </header>
  )
}

export default Header