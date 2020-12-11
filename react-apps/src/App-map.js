import React from 'react'
import Product from './mapping-in-react/Product'
import productsData from './mapping-in-react/vschoolProduct'

function App() {
    const productComponents = productsData.sort((a, b) => a.name > b.name ? 1 : -1)
                                          .map(item => <Product key={item.id} product={item}/>)
    return (
        <div>
            <h1 style={{color: 'red'}}>Products</h1>
            {productComponents}
        </div>
    )   
}

export default App