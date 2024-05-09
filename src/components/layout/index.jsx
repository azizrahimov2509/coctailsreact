import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet,NavLink } from 'react-router-dom';

function Layout() {

  return (
    <>
     <header>
            <nav className="navbar">
                <div className="nav-center">
                    <a href="/"
                        ><img
                            src="/logo.svg"
                            alt="cocktail db logo"
                            className="logo"
                    /></a>
                    <ul className="nav-links">
                        <li><NavLink to={"/"} className={'nav-link'}>Home</NavLink></li>
                        <li><NavLink to={'/about'} className={'nav-link'}>About</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
      <main>
      <Outlet/>
      </main>
    </>
  )
}

export default Layout;
