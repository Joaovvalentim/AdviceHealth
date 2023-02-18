import './Header.css';
import logo from '../../assets/img/logo.png'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { AiTwotoneSetting } from 'react-icons/ai';


function Header({title, buttonName, newnavigate}) {
  const navigate = useNavigate();

  return (
    <div className='container-header'>
      <div className='logo'>
        <img src={logo} alt="Logo iHealth" />
      </div>
      <div className='Title'>
        <h1>{title}</h1>
      </div>
      <div className='button-agendamentos'>
        <Button variant="primary" onClick={() => {
          navigate(`/${newnavigate}`)
        }}>
         <AiTwotoneSetting/> {buttonName}
        </Button>
      </div>
    </div>
  );
}

export default Header;