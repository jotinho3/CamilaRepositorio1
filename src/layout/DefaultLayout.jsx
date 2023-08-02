import { Outlet, NavLink } from 'react-router-dom'

function DefaultLayout() {


    return (
      <div>

        <h1>Esse é meu layout</h1>

        <NavLink to='/welcomekit' title='Pagina Welcome Kit Link'>
            Va para Welcome Kit
        </NavLink>

        <NavLink to='/' title='Pagina Home Link'>
            Va para Home
        </NavLink>

        <Outlet/>
      </div>
    )
  }
  
  export default DefaultLayout
  