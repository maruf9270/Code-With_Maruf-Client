import React from 'react';
import Comments from './Comments/Comments';
import { Header } from './Header';

const Homepage = () => {
    return (
        <div>
           <Header></Header>
          <Comments></Comments>
        </div>
    );
};

export default Homepage;