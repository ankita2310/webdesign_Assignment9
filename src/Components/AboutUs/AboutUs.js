import React, { Component } from 'react'
import jane from './images/jane.jpg'
import janet from './images/janet.jpg'
import john from './images/john.jpg'
import './index1.css'


// const useStyles = makeStyles((theme) => ({

//   }));
class AboutUs extends Component {
  render() {
    return (
      <div>
        <div class='about-section'>
          <p className='aboutPara'>We are a startup, founded in 2017.</p>
          <p className='aboutPara'>
            We are world’s leading car-sharing network. We provide on-demand access to cars by the hour or the day in cities and campuses around the globe.
          </p>
        </div>

        <div class='row'>
          <div class='column'>
            <div class='card'>
              <img src={jane} class='img-class' alt='Jane' />
              <div class='container'>
                <h2>Jane Sully</h2>
                <p class='title'>CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button class='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class='column'>
            <div class='card'>
              <img src={janet} class='img-class' alt='janet' />
              <div class='container'>
                <h2>Janet Ryder</h2>
                <p class='title'>Operations Head</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>janet@example.com</p>
                <p>
                  <button class='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class='column'>
            <div class='card'>
              <img src={john} class='img-class' alt='John' />
              <div class='container'>
                <h2>John Doe</h2>
                <p class='title'>Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p>
                  <button class='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs
