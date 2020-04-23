import React from 'react';
import CommentSharpIcon from '@material-ui/icons/CommentSharp';

function Header() {
  return (
    <header>
      <div>
        <h1>
          <CommentSharpIcon className='icon' />
          Kopper
        </h1>
      </div>
    </header>
  );
}

export default Header;
