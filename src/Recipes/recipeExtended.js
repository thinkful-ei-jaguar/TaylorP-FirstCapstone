import React, { Component } from 'react'
import './recipeExtended.css'

class RecipeExtended extends Component {
  render(){
    return (
      <main className='expanded-main'>
        <button className='go-back'>Go Back</button>
        <section className='recipe-expanded'>
         <div className='recipe-name-icon-div'>
           <p>img</p>
           <h2>Margarita</h2>
           <label className='checkbox'>
            Favorite
            <input type='checkbox' />
          </label>
         </div>
         <div className='recipe-specs-make-div'>
           <div className='specs-div'>
             <h3>What you'll need:</h3>
             <ul>
               <li>2oz Tequila</li>
               <li>1oz Lime</li>
               <li>.75oz Agave Simple</li>
             </ul>
           </div>
           <div className='make-div'>
            <p>Combine all ingredients in a shaker with ice  and  shake away. Optional garnish with salt rim.   Serve on   the rocks or up. Enjoy!</p>
           </div>
         </div>
        </section>
      </main>
    )
  }
}

export default RecipeExtended;