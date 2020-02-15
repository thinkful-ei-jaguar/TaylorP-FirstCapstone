import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { RecipeListProvider } from './Context/recipeListContext'
import { RecipeProvider } from './Context/recipeContext'
import { SpiritListProvider } from './Context/spiritListContext'
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <RecipeListProvider>
      <RecipeProvider>
        <SpiritListProvider>
          <App />
        </SpiritListProvider>
      </RecipeProvider>
    </RecipeListProvider>
  </BrowserRouter>, 
document.getElementById('root'));