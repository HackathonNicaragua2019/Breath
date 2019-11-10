import React from 'react'

const Header_Search = () => {
    return (
        <div class="headind_srch">
            <div class="recent_heading">
                <h4>Recent</h4>
            </div>
            <div class="srch_bar">
                <div class="stylish-input-group">
                    <input type="text" class="search-bar" placeholder="Buscar" />
                    <span class="input-group-addon">
                        <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                    </span> </div>
            </div>
        </div>
    )
}

export default Header_Search
