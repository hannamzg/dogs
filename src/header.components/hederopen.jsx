function HeederOpen() {
    return(
        <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http">Home</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="http" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item" href="http">Action</a></li>
                            <li><a className="dropdown-item" href="http">Another action</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="http">Something else here</a></li>
                            </ul>
                        </li>
                        </ul>
                        <form className="d-flex mt-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
    )   
}

export default HeederOpen;