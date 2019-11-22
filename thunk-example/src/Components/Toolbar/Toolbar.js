import React from 'react';
import './Toolbar.css';


const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar_navigation'>
            <div>
            </div>
            <div className='toolbar_logo'><a href='/'>@ THE REDUCER$</a></div>
            <div className='spacer'></div>
            <div className='toolbar_navigation_items'>
                <ul>
                    <li><a href="https://ethw.org/Category:Computing_and_electronics?gclid=Cj0KCQjwjOrtBRCcARIsAEq4rW7lv372DilJCTmoEbFmVBKllyo3z-zNlhkaee30PL_XrAbJjcsHA5UaAuiaEALw_wcB">Computers</a></li>
                    <li><a href="https://sfbook.com/the-evolution-of-the-book.htm">Books</a></li>
                    <li><a href="/https://www.computerhope.com/jargon/u/user.htm">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;