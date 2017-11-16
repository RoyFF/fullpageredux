import React from 'react';
import Paper from 'material-ui/Paper';
import './index.css';

const ProducTitle = (props) => {
    return(
        <div className="ProductTitle">
            <Paper zDepth={1}>
                <span className="ProductName">{ props.product.name }</span>
                <span className="ProductName">{ props.product.price }</span>
                <img className="ProductImage" 
                    src={ props.product.image }
                    alt={ props.product.name }
                />
            </Paper>
        </div>
    );
}

export default ProducTitle;