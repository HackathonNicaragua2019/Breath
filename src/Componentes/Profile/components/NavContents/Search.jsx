import React from 'react'

const Search = () => {
    return (
        <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div className="form-group mb-0">
                <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-search"></i></span>
                    </div>
                    <input className="form-control" placeholder="Search" type="text" />
                </div>
            </div>
        </form>
    )
}

export default Search
