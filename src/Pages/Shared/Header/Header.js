import React from 'react';

const Header = () => {
    const menu=<>
        <li>Make Your Result</li>
        <li>Add Students</li>
        <li>List of Students</li>
    </>

    return (
    <div class="navbar bg-sky-100 px-14">
        <div class="navbar-start">
            <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li tabindex="0">
                 {menu}               
               </li>
            </ul>
            </div>
            <a class="btn btn-ghost normal-case text-3xl font-bold">Resulty</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
            <li tabindex="0">
               {menu} 
            </li>
            </ul>
        </div>
        <div class="navbar-end">
            <a class="btn glass w-32 font-semibold text-xl">Login</a>
        </div>
    </div>
    );
};

export default Header;