import React from 'react';
import Search from 'react-search';
import './Dashboard.css';


const HiItems = (items) => {
    console.log(items)
  }

let items = [
    { id: 0, value: 'ruby' },
    { id: 1, value: 'javascript' },
    { id: 2, value: 'lua' },
    { id: 3, value: 'go' },
    { id: 4, value: 'julia' }
]




const SearchBar = (props) => {

    return (
        <div className="searchBar">
            <h2>Start <span>Here</span></h2>
            <div className="fullBar">
            <Search items={items}                 
                placeholder='Select a song'
                maxSelected={3}
                multiple={true}
                onItemsChanged={HiItems.bind(this)} />
                </div>
        </div>
    )
}

export default SearchBar

