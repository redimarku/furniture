import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import {Container, Row} from 'react-bootstrap';
import { FaSearch, FaTimes } from "react-icons/fa";
import './index.css';
import { useLocation } from "react-router-dom";

const SearchBar = () =>{

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        // console.log(location.pathname);
        if(location.pathname.includes('collection')){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }, [location])

        const handleChange = (event) => {
        const value = event.target.value.trim().toLowerCase();
        setSearch(value);
    }

    return showSearch && visible ?(
        <div>
            <Container className="text-center my-5" >
              <div className="search-input text-center">
                <FaSearch className="search-icon" size={24} />

                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleChange}
                />

                <span onClick={() => setShowSearch(false)} className="close-icon">
                    <FaTimes />
                </span>
</div>

                 
            </Container>
        </div>
    ) : null
}

export default SearchBar;