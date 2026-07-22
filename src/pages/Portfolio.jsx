{/* <div>
      <form action="" 
              className='form' 
              style={{padding:"15px", backgroundColor:"greenyellow"}}
              onSubmit={handleProducts}
              >
        <input 
              type="text" 
              placeholder="Please enter product" 
              value={userInput}
              onChange={(e)=>{setUserInput(e.target.value)}}
              />
        <button type='submit'>
            <Search />
        </button>
      </form>
      <p></p>
      <div>
         { products.map(
            (product)=>{
              return (
                <div key={product.id}>
                  <img src={product.image} alt="" />
                  <p>{product.price}</p>
                </div>
              )
            }
          )}
      </div>
    </div> */}



    import React from 'react'
    // import product from '../../../server/product'
    const Portfolio = () => {
      return (
        <div id='product'>
          product
        </div>
      )
    }
    
    export default Portfolio
    