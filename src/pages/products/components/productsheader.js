import React, { useState } from "react";
import {
  Header,
  CategoryPath,
  Results,
  FilterContainer,
  FilterInnerContainer,
  Select,
  ResultsContainer
} from "./styles";

export default function productsheader(props) {
  // const [filter,setfilter]=useState()
  return (
    <Header>
      <FilterContainer>
        <FilterInnerContainer>
          <CategoryPath>Home / {props.category}</CategoryPath>
          <Select>
            <option>Default Sorting</option>
            <option>Sort By Popularity</option>
            <option>Sort By Price : Low To High</option>
            <option>Sort By Price : Hight To Low</option>
          </Select>
        </FilterInnerContainer>
      </FilterContainer>
      <ResultsContainer>
            <Results>Showing All 32 Items</Results>
        </ResultsContainer>
    </Header>
  );
}
