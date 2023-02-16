import './Header.css';
import logo from '../../assets/img/logo.png'
function Header() {
  return (
    <div className='container-header'>
            <div className='logo'>
        <img src={logo} alt="Logo iHealth" />
      </div>
      <div className='Title'>
        <h1>Consultorio do João</h1>
      </div>
    </div>
  );
}

export default Header;