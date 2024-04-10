// import Link from "next/link"
// import style from "./main.module.css"
 
// export default function LearnAbout() {
//     return (
//         <div>
//             <div className={style.body}>
//                 <div className={style.center}>
//                     <div className={style.header}>
//                         <div className={style.logo}>
//                             <img src="logo.png" className="h-24 w-24"></img>
//                             MHChat
//                         </div>
//                         <div className={style.flex}>
//                             <div className={style.NameFlex}>
//                                 <Link
//                                     href={"./AboutUs"}>
//                                     <div className={style.PageName}>About Us</div>
//                                 </Link>
//                                 <Link
//                                     href={"./LearnAbout"}>
//                                     <div className={style.PageName}>Learn About</div>
//                                 </Link>
//                                 <Link
//                                     href={"./WhatToWatch"}>
//                                     <div className={style.PageName}>What To Watch</div>
//                                 </Link>
//                                 <Link
//                                     href={"./TalkTo"}>
//                                     <div className={style.PageName}>Talk To</div>
//                                 </Link>
//                                 <Link
//                                     href={"./Chat"}>
//                                     <div className={style.PageName}>Help ?</div>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={style.box}>
//                         <div className={style.left}>
//                             <img src="learn.png" className={style.image}></img>
//                             <div className={style.O}></div>
//                             <img src="doligon.png" className={style.doligon}></img>
//                             <img src="tseg.png" className={style.tseg}></img>
//                             <img src="ugalz.png" className={style.ugalz}></img>
//                             <img src="tsagirag.png" className={style.tsagirag}></img>
//                             <img src="tseg.png" className={style.tseg1}></img>
//                         </div>
//                         <div className={style.right}>
//                             <div className={style.column}>
//                                 <div className={style.Name}>
//                                     Welcome
//                                 </div>
//                                 <div className={style.bottomText}>To MHChat</div>
//                                 <div className={style.text}>This site was made for people to talk and learn about their mental health issues. So seek out help from others who are in the same place as you and talk to our professional psychologist and get better. </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             <div className={style.twoCenter}>

//                     <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
//                         <input placeholder="Search" style={{border: "solid", borderColor: "black", borderWidth: "2px", borderRadius: "48px", width: "50vw", height: "5vh", padding: "1vw", fontSize: "1vw"}}/>
//                         <button style={{backgroundColor: " rgba(77, 189, 152, 0.846)", width:"5vw", height: "5vh", borderRadius: "48px", color: "white", fontSize: "20px"}}>Search</button>
//                         <button style={{backgroundColor: " rgba(77, 189, 152, 0.846)", width:"5vw", height: "5vh", borderRadius: "48px", color: "white", fontSize: "20px"}}>Add something we didn't</button>
//                     </div>

//                     <div style={{padding: "1vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
//                         <div>
//                             <p style={{fontSize: "3vw"}}>Depression</p>
//                             <p style={{fontSize: "1vw"}}>In 2019, 280 million people, including 23 million children and adolescents, 
//                                 lived with depression. Unlike typical <br />mood swings, 
//                                 depression entails persistent feelings of sadness, 
//                                 emptiness, or loss of interest in activities for at <br /> least two weeks. 
//                                 Symptoms may include poor concentration, excessive guilt, hopelessness, 
//                                 suicidal thoughts,<br /> sleep disturbances, appetite changes, and fatigue. 
//                                 Depression poses a heightened risk of suicide, but effective <br /> psychological treatments and, 
//                                 in some cases, medication are available.</p>
//                         </div>
//                         <img src="gunig.png" className={style.img}></img>
//                     </div>
//                     <div style={{padding: "1vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
//                         <img src="gunig.png" className={style.img}></img>
//                         <div>
//                             <p style={{fontSize: "3vw"}}>Depression</p>
//                             <p style={{fontSize: "1vw"}}>In 2019, 280 million people, including 23 million children and adolescents, 
//                                 lived with depression. Unlike typical <br />mood swings, 
//                                 depression entails persistent feelings of sadness, 
//                                 emptiness, or loss of interest in activities for at <br /> least two weeks. 
//                                 Symptoms may include poor concentration, excessive guilt, hopelessness, 
//                                 suicidal thoughts,<br /> sleep disturbances, appetite changes, and fatigue. 
//                                 Depression poses a heightened risk of suicide, but effective <br /> psychological treatments and, 
//                                 in some cases, medication are available.</p>
//                         </div>
//                     </div>
//                     <div style={{padding: "1vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
//                         <div>
//                             <p style={{fontSize: "3vw"}}>Depression</p>
//                             <p style={{fontSize: "1vw"}}>In 2019, 280 million people, including 23 million children and adolescents, 
//                                 lived with depression. Unlike typical <br />mood swings, 
//                                 depression entails persistent feelings of sadness, 
//                                 emptiness, or loss of interest in activities for at <br /> least two weeks. 
//                                 Symptoms may include poor concentration, excessive guilt, hopelessness, 
//                                 suicidal thoughts,<br /> sleep disturbances, appetite changes, and fatigue. 
//                                 Depression poses a heightened risk of suicide, but effective <br /> psychological treatments and, 
//                                 in some cases, medication are available.</p>
//                         </div>
//                         <img src="gunig.png" className={style.img}></img>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import style from "./main.module.css";

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
        <div>
            <div className={style.body}>
                <div className={style.center}>
                    <div className={style.header}>
                        <div className={style.logo}>
                            <img src="logo.png" className="h-24 w-24"></img>
                            MHChat
                        </div>
                        <div className={style.flex}>
                            <div className={style.NameFlex}>
                                <Link
                                    href={"./AboutUs"}>
                                    <div className={style.PageName}>About Us</div>
                                </Link>
                                <Link
                                    href={"./LearnAbout"}>
                                    <div className={style.PageName}>Learn About</div>
                                </Link>
                                <Link
                                    href={"./WhatToWatch"}>
                                    <div className={style.PageName}>What To Watch</div>
                                </Link>
                                <Link
                                    href={"./TalkTo"}>
                                    <div className={style.PageName}>Talk To</div>
                                </Link>
                                <Link
                                    href={"./Chat"}>
                                    <div className={style.PageNames}>Help ?</div>
                                </Link>
                            </div>
                        </div>
                    </div>
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
                <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                        style={{border: "solid", borderColor: "black", borderWidth: "2px", borderRadius: "48px", width: "50vw", height: "5vh", padding: "1vw", fontSize: "1vw"}}
                    />
                        {/* <input placeholder="Search" s/>
                        <button style={{backgroundColor: " rgba(77, 189, 152, 0.846)", width:"5vw", height: "5vh", borderRadius: "48px", color: "white", fontSize: "20px"}}>Search</button> */}
                        <button style={{backgroundColor: " rgba(77, 189, 152, 0.846)", width:"5vw", height: "5vh", borderRadius: "48px", color: "white", fontSize: "20px"}}>Add something we didn't</button>
                </div>

                {/* Display filtered items */}
                <div className={style.itemsContainer}>
                    {filteredItems.map((item, index) => (
                        <div key={index} className={style.item} onClick={() => handleItemClick(item)}>
                            {/* Render item details */}
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>{item.description}</p>
                            <div style={{padding: "1vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div>
                            <p style={{fontSize: "3vw"}}>{item.titled}</p>
                            <p style={{fontSize: "1vw"}}>{item.description}</p>
                        </div>
                        <img src={item.imageUrl} className={style.img}></img>
                    </div>
                    <div style={{padding: "1vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img src="gunig.png" className={style.img}></img>
                        <div>
                            <p style={{fontSize: "1vw"}}>solution</p>
                        </div>
                    </div>
                        </div>
                    ))}
                </div>

                {/* Display item details */}
                <ItemDetails selectedItem={selectedItem} />
            </div>

        </div>
    );
}