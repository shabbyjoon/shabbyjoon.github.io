import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-solid-svg-icons';

const Links = () => {
  return (
    <div className="links-container">

      <a href="https://github.com/shabbyjoon">
        {' '}Github
      </a>
      <a href="https://www.linkedin.com/in/shabnammokhtarani/">
        Link to LinkedIn
      </a>
      <a href="mailto:shabnam.mokhtarani@address.com">Email link</a>   {' '}
    </div>
  );
};

export default Links;
