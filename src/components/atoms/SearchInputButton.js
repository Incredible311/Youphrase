import React from "react";
import { Input, Button } from "reactstrap";
import { Search } from "react-feather";
import "../../assets/styles/atoms/searchInputButton.css";

export default function SearchInputButton(props) {


    return (
        <div className="d-flex align-items-center position-relative">
            <Search size={16} className="search-food-icon" color={"#3CC754"}/>
            <Input className="search-food-input" type="search" />
            <Button className="search-food-btn">Find Food</Button>
        </div>
    )
}