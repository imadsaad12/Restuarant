import React from 'react'
import { ProductsLayout,PageLayout,RestaurantImage,ProductsContainer } from "./styles";
import ProductsHeader from './components/productsheader';
import Product from './components/product';

import { useParams } from 'react-router-dom';

export default function Index() {
  const { category } = useParams();

  return (
    <>
    <ProductsLayout>
        <ProductsHeader category={category}/>
        <ProductsContainer>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>

        </ProductsContainer>
    </ProductsLayout>
    </>
  )
}
