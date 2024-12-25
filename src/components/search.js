import React, {Component, useState} from "react";
import rams from "../database/productdb";
import './search.css'
const Search = () => {
    const [text, setText] = useState("");
    const [filteredRams, setFilteredRams] = useState(rams);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(18000);

    const handleTextSearch = (e) => {
        setText(e.target.value);
            const filteredRams = rams.filter(ram => {
            const isMatch = ram.name.toLowerCase().includes(e.target.value.toLowerCase());
            const isWithinPriceRange = ram.price >= minPrice && ram.price <= maxPrice;
            return isMatch && isWithinPriceRange;
        });
        console.log(filteredRams);
        setFilteredRams(filteredRams);
        return setFilteredRams(filteredRams);
    }
    

    return (
        <div className="search-container">
            <h3>Search for RAM</h3>
            <div>
                <input className="search-box" type="text" placeholder="Search RAM" value={text} onChange={handleTextSearch} />
            </div>
            <div className="search-range">
            <label>
                Min Price:${minPrice} <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            </label>
            <label>
                Max Price:${maxPrice} <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            </label>  
            </div>
            <div className="product-card">
                {filteredRams.length > 0 ?(
                    filteredRams.map(ram => (
                    
                        <div key={ram.id} className="product-card-item">
                            <div>
                                <img src={`/images/${ram.image}`} alt="ram-photo"></img>
                                <div>
                                    <h4>{ram.name}</h4>
                                    <p>D{ram.price}</p>
                                </div>
                            </div>
                        </div>
                        
                    ))
                ):(
                <div>
                    <h3>No results</h3>
                    <h4>Tips</h4>
                    <ul className="nothing-found-tips">
                        <li>
                            Check your spellings
                        </li>
                        <li>
                            Ensure the price ranges are right
                        </li>
                    </ul>
                </div>
                )} 
            </div>
        </div>
    );
}
export default Search;
