import React from 'react';
import logo from './flower.jpg';
import './App.css';
console.log(logo); 


function App() {
  
  return (
    <div className="App">
      <header className="App-header">

        
         <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>
<div className="container-fluid">
  <h1 >Welcome to my website!</h1>
</div>
<div className="row">
                <div className="col">
                    <h2>HTML</h2>
                    <p>
                        HTML-Hyper Text Markup Language is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.
                    </p>
                </div>
            <div className="col">
                <h2>CSS</h2>
                <p>CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files (. css).</p>

            </div>
            </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome to React Designed Web Page</h3>
        <h2>Please enter your details..</h2>
        <form>
          <label>Name:</label>
          <input type='text'  placeholder='Enter your name'/> <br/>
          <label>Phone:</label>
          <input type='text'  placeholder='Enter your mobile number'/> <br/>
          <button onClick={() => alert('Thank you for the details')}>Submit</button><br/>
          <button onClick={() => alert('Request Canceled!')}>Cancel</button><br/> <br/>

          <p>{new Date().toLocaleTimeString()} </p>
        </form>
        <h1>Hey Its a React Application</h1>
        <p>The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.<br/>
        React is a JavaScript library for building user interfaces.
        React is used to build single-page applications.
        React allows us to create reusable UI components.

</p>
        
       
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pranaviha G P
        </a>
      </header>
    </div>
  );
}

export default App;
