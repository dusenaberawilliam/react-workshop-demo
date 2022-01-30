import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './design/Loading';
import ProductList from './ProductList';

const Products = () => {
    const [products, setProducts] = useState([])

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://fakestoreapi.com/products/')
            .then((response) => {
                setIsLoading(false)
                setProducts(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deletePro = (id) => {
        setIsLoading(true)
        axios.delete(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setIsLoading(false)
                setProducts(prevProduct => prevProduct.filter(prod => prod.id !== id))
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return <div>
        {isLoading ?
            <Loading />
            :
            <ProductList products={products} deletePro={deletePro} />
        }
    </div>
};

export default Products;
