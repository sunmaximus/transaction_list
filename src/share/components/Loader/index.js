import React from 'react';
import './loader.scss';

export default function Loader() {
  return (
  <div className='loader__container'>
    <div className='loader' />
    <h3>Loading...</h3>
  </div>)
}