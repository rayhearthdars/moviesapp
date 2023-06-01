import React from "react";
import "./SearchBar.css";
import { Movie } from "../../../../models/movie";
import { useSearchParams } from "react-router-dom";


type SearchBarProps = {
  search: (search:string) => void;
}

export const SearchBar = ({search}:SearchBarProps) => {

    return (
      <input
onChange={(e) => search(e.currentTarget.value)} 
        placeholder='Search...'
      />)
  }