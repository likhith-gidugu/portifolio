import React from "react";

const About =()=>{


    return(

        <section  className="container-fluid aboutcontent  " id="about">
            <center >
            <h1 style={{ textDecoration:"underline",color:"green " }}>ABOUT</h1>
            
            <p>I am a frontend developer with passion of developing different complex web sites, <br/> I have a desire to work in dynamic environment that enables continuous learning and gain 
eminence by seeking new challenges with higher responsibilities </p>
            <p>I have good knowledge in developing websites using <strong>HTML,CSS,JAVASCRIPT,BOOTSTRAP,REACT.JS</strong>  </p>
            <p>To know more about me watch my resume</p>
            
            <a href="./resume/LIKHITH.pdf"  download="LIKHITH.pdf" className="btn btn-success  justify-content center"  >Download Resume</a>
           
            </center>
           
        </section>
    )
}
export default About;