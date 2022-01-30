import React from 'react';
import classes from './ProductList.module.css'

import StarBorderIcon from '@mui/icons-material/StarBorder'
import { Button } from './Button';


const ProductList = ({ products, deletePro }) => {

    return <div className={classes.productList}>
        {products.map(product => {
            return (
                <div key={product.id} className={classes.productList_list}>
                    <img src={product.image} alt={product.title} />
                    <div>
                        <h2>{product.price} Rwf</h2>
                        <h4>{product.title}</h4>
                        <p>{product.category}</p>
                        <p><StarBorderIcon />{product.rating.rate} ({product.rating.count})</p>
                    </div>
                    <Button deletePro={() => deletePro(product.id)}>
                        Delete
                    </Button>
                </div>
            )
        })}
    </div>
};

export default ProductList;
