import React from 'react'
import { ProductsLayout,PageLayout,RestaurantImage,ProductsContainer } from "./styles";
import ProductsHeader from './components/productsheader';
import Product from './components/product';

import { useParams } from 'react-router-dom';

export default function Index() {
  const { category } = useParams();

  return (
    <PageLayout>
    <ProductsLayout>
        <RestaurantImage style={{backgroundImage: "url(https://dccool.com/sites/default/files/2023-07/Untitled%20design%20%2812%29.jpg)"}}  />
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
    </PageLayout>
  )
}
