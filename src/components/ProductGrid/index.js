import React from 'react';
import ProducTitle from '../ProductTitle';
import Frames from '../products/frames';

const ProductGrid = () => {
    return(
        <div>
            <ProducTitle product={Frames.MartianII220} />
            <ProducTitle product={Frames.Realaccx210Pro} />
            <ProducTitle product={Frames.LumenierCharpu} />
        </div>
    );
}

export default ProductGrid;