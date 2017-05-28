import React from 'react';
import { NavLink as Link } from 'react-router-dom'
const Footer = () => (
  <p>
    <Link exact activeStyle={{color: 'red'}} to="/">all</Link>
    {' '}
    <Link activeStyle={{color: 'red'}} to="/active">active</Link>
    {' '}
    <Link activeStyle={{color: 'red'}} to="/completed">completed</Link>
  </p>
)

export default Footer