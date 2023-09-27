import React, { useState } from "react";
import {
  Header,
  CategoryPath,
  Results,
  FilterContainer,
  FilterInnerContainer,
  Select,
  ResultsContainer,
} from "./styles";

export default function productsheader({ category }) {
  return (
    <Header>
      {/* <FilterContainer>
        <FilterInnerContainer>
          <CategoryPath>Home / {props.category}</CategoryPath>
          <Select>
            <option>Default Sorting</option>
            <option>Sort By Price : Low To High</option>
            <option>Sort By Price : Hight To Low</option>
          </Select>
        </FilterInnerContainer>
      </FilterContainer> */}
      <ResultsContainer>
        <Results>~ {category}~</Results>
      </ResultsContainer>
    </Header>
  );
}
