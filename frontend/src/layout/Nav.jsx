import { NavLink } from 'react-router-dom';

function Nav(){
return (
    <nav>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/cadastros">Cadastros Livro</NavLink></li>
        <li><NavLink to="/aluno">Aluno</NavLink></li>
        <li><NavLink to="/util">Útil</NavLink></li>
        <li><NavLink to="/sobre">Sobre</NavLink></li>
    </ul>
    </nav>
  );
}

export default Nav;