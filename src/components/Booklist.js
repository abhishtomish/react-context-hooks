import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'

const Booklist = () => {

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg }} >
            <ul>
                <li style={{ background: theme.ui }}>The way of kings</li>
                <li style={{ background: theme.ui }}>Name of the wind</li>
                <li style={{ background: theme.ui }}>The final empire</li>
            </ul>
        </div>
    );
}
 
export default Booklist;