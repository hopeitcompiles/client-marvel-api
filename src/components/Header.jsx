import marvelicon from '../assets/images/marvel.svg'
import   {Link} from 'react-router-dom';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useQuery } from '../hooks/useQuery';
import { useEffect } from 'react';
export function Header() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate(); //de React Router, agregar elemento a la ruta
    const query=useQuery();
    const searchInPath=query.get("search");

    useEffect(() => {
        setSearchText(searchInPath || ""); //si searchInPath es null, set empty ""
    }, [searchInPath]);

    const submitSearch = (e) => {
        e.preventDefault();
        navigate("/?search="+searchText);//agrega a la ruta
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">
                <img src={marvelicon} height="30" className="d-inline-block align-top" alt=""/>
            </Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav ">
                <Link to="/" className="nav-item nav-link active text-white">Home</Link>
                {/* No se emplea Link ya que se espera que se recargue la página para obtener datos aleatorios */}
                <a href="/heroes" className="nav-item nav-link text-white">Discover</a>
                    <div className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown">Quick Access</Link>
                    <div className="dropdown-menu">
                        <Link to="/heroes"  className="dropdown-item">Heroes</Link>
                        <Link to="/comics"  className="dropdown-item">Comics</Link>
                        <Link to="/events"  className="dropdown-item">Events</Link>
                    </div>
                    </div>
                </div>
                <form className="d-flex" onSubmit={submitSearch}>
                    <div className="input-group">
                        <input type="text" className="form-control" value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder="Search" name="searching" aria-label="Search" required/>
                        <button type="submit" className="btn btn-secondary"><i className="fa fa-search"></i></button>
                    </div>
                </form>
                <div className="navbar-nav">
                    <Link to="/login" className="nav-item nav-link text-white" id="login">Log in</Link>
                    <Link  to="/register" className="nav-item nav-link text-white">Register</Link>
                </div>
            </div>
        </div>
    </nav>
  );
}
