import React, {useState} from "react";
const SearchBar = ()=>{
    const [searchTerm,  setSearchTerm] = useState ("");

    const handleSearch =()=>{
        console.log("Searching for",  searchTerm)

    };
    return (
        <div className="flex items-center px-0 py-0 h-full justify-center align-middle">
            <input type="text"
            placeholder="Location---" 
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
            className="border rounded-l-md p-2 focus:outline-none focus:ring-2 bg-transparent" />
                <button onClick={handleSearch} className=" relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                    Search
                </button>
        </div>
    )

}
export default SearchBar;
