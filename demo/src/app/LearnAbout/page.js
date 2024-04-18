'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import style from "./LearnAbout.module.css";
import Header from '../Header/page';

// Separate component to display item details
function ItemDetails({ selectedItem }) {
    if (!selectedItem) return null;

    return (
        <div className={style.itemDetails}>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            {/* Add more details as needed */}
        </div>
    );
}

export default function LearnAbout() {
    const [searchQuery, setSearchQuery] = useState('');
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        // Fetch data from the server when component mounts
        fetchData();
    }, []);

    useEffect(() => {
        // Filter items whenever searchQuery changes
        filterItems(searchQuery);
    }, [searchQuery]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/item');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const filterItems = (query) => {
        const filtered = items.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setSelectedItem(null); // Reset selected item when searching
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
            <div className={style.body}>
                <div className={style.center}>
                    <Header></Header>
                    <div className={style.box}>
                        <div className={style.left}>
                            <img src="learn.png" className={style.image}></img>
                            <div className={style.O}></div>
                            <img src="doligon.png" className={style.doligon}></img>
                            <img src="tseg.png" className={style.tseg}></img>
                            <img src="ugalz.png" className={style.ugalz}></img>
                            <img src="tsagirag.png" className={style.tsagirag}></img>
                            <img src="tseg.png" className={style.tseg1}></img>
                        </div>
                        <div className={style.right}>
                            <div className={style.column}>
                                <div className={style.Name}>
                                    Welcome
                                </div>
                                <div className={style.bottomText}>To MHChat</div>
                                <div className={style.text}>This site was made for people to talk and learn about their mental health issues. So seek out help from others who are in the same place as you and talk to our professional psychologist and get better. </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Search input */}

                <div className={style.search}>
                    <div className={style.searchBox}>
                        <input className={style.searchInput} type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} />
                        <button className={style.searchButton}>
                            <img src="search.png" className={style.searchImg}></img>
                        </button>
                    </div>
                    <div className={style.searchName}>
                        <p>
                            Practice relaxation<br />
                            Cognitive<br />
                            Regular exercise<br />
                            Limit caffeine
                        </p>
                    </div>
                </div>

                {/* Display filtered items */}
                <div className={style.itemsContainer}>
                    {filteredItems.map((item, index) => (
                        <div key={index} className={style.item} onClick={() => handleItemClick(item)}>
                            {/* Render item details */}
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>{item.description}</p>
                            <div style={{ padding: "1vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div>
                                    <p style={{ fontSize: "3vw" }}>{item.titled}asdf</p>
                                    <p style={{ fontSize: "1vw" }}>{item.description}</p>
                                </div>
                                <img src={item.imageUrl} className={style.img}></img>
                            </div>
                            <div style={{ padding: "1vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src="gunig.png" className={style.img}></img>
                                <div>x
                                    <p style={{ fontSize: "1vw" }}>solution</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Display item details */}
                <ItemDetails selectedItem={selectedItem} />
            </div>
    );
}