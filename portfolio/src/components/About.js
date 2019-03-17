import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className='About'>
                <h3>A little about me:</h3>
                <p>I have always had a passion for technology and building ever since I was little. In middle school up to early high school I used to make static HTML and CSS sites for family friends.</p>
                <p>After working with the static pages, I eventually began working with Shopify and Wordpress making e-commerce sites and blogs.</p>
                <p>This passion for the web and building has led me to completing an over 500 hour 12 week coding bootcamp that taught me amazing fundamentals with everything related to web development.</p>


                <div className='Skills'>
                    <h3>My skills include:</h3>
                        <h4>Languages/Markups:</h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                        </ul>
                        <h4>Frameworks:</h4>
                        <ul>
                            <li>Express</li>
                            <li>Django</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                        </ul>
                        <h4>Other:</h4>
                        <ul>
                            <li>Git/Github</li>
                            <li>Ajax</li>
                        </ul>
                </div>
          </div>
        );
    }
}

export default About;