import React from "react";
import ResultWrapper from "../components/ResultWrapper";
import SearchHeader from "../components/SearchHeader";
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <div className="SearchPage">
      <SearchHeader />
      <ResultWrapper />
    </div>
  );
};

export default SearchPage;
