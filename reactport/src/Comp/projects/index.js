import React from 'react';

function Work(props){
return(
<section className="container">
         <div className="columns is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
          {props.work.map((work) => (
            <div className="column is-half">
            <div className="card">
             <div className="card-image"></div>
              <div className="card-content">
               <div className="media">
                       <div className="media-left"></div>
                   <div className="media-content">
                      <h4 className="title">{work.title}</h4>
                                          </div>
                           </div>
                      <a href={work.live}>
                  <img id="portimg"
                    src={process.env.PUBLIC_URL + work.image}
                    class="work-image"
                    style={{  width: "500px", height: "450px" }}
                    alt="placeholder"
                  />
                </a>
                 <div id="discrip" className="content">
        {work.description}
        <br />
         <br />
                  <div className="content">
                    Made With: {work.languages}
                    <br />
                  </div>
                      <br></br>
                  <div className="card-footer">
        <footer id= "foot" class="footcard">
        <a
             href={work.github}
                className="card-footer-item"
                    target="_blank"
                      >GitHub Link
                      </a>
                      <br />
                      <a href={work.link} className="card-footer-item"target="_blank" rel="noreferrer"
                      > Active
                      </a>
                    </footer>
                  </div>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;




