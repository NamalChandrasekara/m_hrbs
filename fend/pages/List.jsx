import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Header from "../../component/header/Header";
import SearchItem from "../../component/searchitem/Searchitem";
const List=()=> {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
    )
}
export default List;