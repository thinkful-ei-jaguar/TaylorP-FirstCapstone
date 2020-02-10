import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'

export default function Footer(props) {
  return (
    <>
    <footer className='footer'>
      <ul className='footer-list'>
        <li>
          <Link to={'/recipes'}>
            Recipes
          </Link>
        </li>
        <li>
          <Link to={'/cabinet'}>
            My Cabinet
          </Link>
        </li>
        <li>
          <div><p>user icon</p></div>
        </li>
      </ul>
    </footer>
    <div className='space'></div>
    </>
  )
}