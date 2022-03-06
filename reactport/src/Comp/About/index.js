import React from 'react';
import covImage  from '../image1.jpeg';


function About(){
return  (
    <section className="my-5">
        <h1 id= "about">Frank Schockey</h1> 
        <img src={covImage} className="my-2" style={{ width: "8%" }} alt="cover" />
      <div className="my-2">
<p>
    Welcome This is my portfolio. My name is Frank Schockey and I am a developer from Austin Texas.
</p>
</div>
</section>
);
}
export default About;
