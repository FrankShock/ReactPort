import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utlis/helpers';


function Nav(props){
const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

return (
<header className='flex-row px-1'>
<h2>
  
<a data-testid="link" id="title" href="/">
          Frank Schockey React Portfolio!
        </a>
</h2>
<nav   id="Nava">
<ul className="flex-row">
    <li className="mx-2">
    <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me</a>
</li>
<li  className={`mx-2 ${contactSelected && 'navActive'}`}>
<a data-testid="contact" href="#Contact" onClick={() => setContactSelected(true)}>Contact</a>
</li>
{categories.map((category) => (
    <li
    className={`mx-1 ${
        currentCategory.name === category.name && !contactSelected && 'navActive'
        }`}
        key={category.name}
        >
            <span
            onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);
            }}
            >
             {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>

  );
}

export default Nav;