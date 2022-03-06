import React, {useState}  from 'react';
import About from '../src/Comp/About';
import Footer from './Comp/Footer';
import Contactme from '../src/Comp/Contactme';
import Nav from '../src/Comp/Nav';
import Main from './Comp/Main';


function App() {
  const [categories] =useState ([
{
  name:  'ReactPortfolio',
  description: 'The work i am proud of and willing to show',
  },
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);

const [contactSelected, setContactSelected] = useState(false);
return(
<div>
<Nav 
categories={categories}
setCurrentCategory={setCurrentCategory}
currentCategory={currentCategory}
contactSelected={contactSelected}
setContactSelected={setContactSelected}
></Nav>
<main>
{!contactSelected ?  (
  <>

<About currentCategory={currentCategory}></About>
<Main></Main>
</>
) : (
<Contactme></Contactme>
)}
</main>
<Footer></Footer>

</div>


  
    
  );
}

export default App;
