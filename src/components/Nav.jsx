import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav-main'>
        <div>
            <h1>EliaFlix</h1>
        </div>
        {
          window.location.pathname === '/' && <Link to='/add-video' className='nav-main-button'>Nuevo vídeo</Link>
        }
    </nav>
  )
}

export default Nav