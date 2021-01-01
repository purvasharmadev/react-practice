import React ,{useState} from "react";
import "./styles.css";

myDictionary = {
  "1":"one",
  "2":"two",
  "3":"three",
  "4":"four",
  "5":"five",
}


export default function App() {
  var bg = "blue";
  var name = "jane";
  var welcome = "Welcome !!";
  var pf = "https://repl.it/@purvasharmadev";

  // LikeHandler
  var [like,setlike] = useState(0);
  function likeHandler(){
    console.log("cliked")
    var newLike = like + 1;
    setlike(newLike)
  }
// InputHandler
  var [uName,setUname] = useState("");
  function inputHandler(event){
    // console.log("user is typing...")
    var newUname = event.target.value;
    var uName = myDictionary[newUname];
    if(uName === undefined){
      uName = "sorry :( no more numbers"
    }
    setUname(uName);
  }

  return (
    <div className="App">
      <h1>Time To learn React</h1>
      <br />
      <h2>What is Declaritive?</h2>
      <p>
        In Declaritive we dont have to worry about creating a DOM logic. like in
        js we do using createElement , innerText, innerHtml etc.
        <strong>REACT</strong> is a Declaritive Liabrary so it takes care of DOM
        logic and makes it painless to create interactive UI's.
      </p>

      <br />
      <h2>What is Component-Based?</h2>
      <p>
        Building functioning components like a "like button" to make complex
        UI's using JS and React JS which will run same in all the apps you make.
      </p>

      <br />
      <h2>Learn Once, Write Anywhere</h2>
      <p>
        React has a huge eco-system , It can render on the server using node and
        also power mobile apps using ReactNative.
      </p>
      <br />
      <h2>File flow in codeSandbox</h2>
      <p>
        A react project in has following files:
        <br /> <br />
        1. index.html : <strong>Main file</strong> , this file is shown as
        output i.e in browser. <br />
        2. app.js : <strong>Main JS file</strong> , here all the coding will be
        done for react. <br />
        3. index.js : File to create the DOM for App.js elements. <br />
        4. style.css : to style the index.html.
      </p>
      <h2>What is ReactDOM?</h2>
      <p>
        ReactDom as the name implies : React + DOM,{" "}
        <strong>it is the glue between react and DOM</strong>. <br />
        React is used to create components and React-DOM is used to render those
        components in DOM.
      </p>
      <br />
      <h2>What is JSX?</h2>
      <p>
        JSX is <strong>Javascript XML</strong> , it can be used as templating
        engine. JSX lets you write HTML in a JS file.
        <br />
        <h4>Writing my first JSX component</h4>
        1. create a var user = "jane doe" <br />
        2. render the variable inside curly braces.
      </p>
      {/* <h2 style={{ color:bg }}>hi {name} </h2>
         <h4><a style={{ color:"blue" }} href={pf} target="blank">My RepliD</a></h4> */}
      <br />

      <h2>create a JSX welcome message</h2>
      <h3 style={{ color: bg }}>
        {welcome} {name}
      </h3>

      <h2>OnClick</h2>
      <p>In react we dont need to declare eventListners </p>
      <button onClick={likeHandler}>you liked me {like} times</button>

      <h2>Render Cycle</h2>
      <p> <strong>VISER</strong> <br/> <br/>
      Render a <strong>V</strong>iew <br/>
      User will <strong>I</strong>nteract <br/> Update the <strong>S</strong>tate in <strong>E</strong>vent Handler <br/>
      After the update we <strong>R</strong>ender it again.
      </p>

      <h2>Handling data with input element</h2>
      <p> we use <strong>OnChange event </strong> to get the value user is typing. <br/>
      Update the value using <strong>useState</strong> <br/>
      get the value in view using <strong>Event.target</strong> </p>


      <h3>Enter a digit <small>e.g 1, 2, 3</small></h3>
      <input onChange={inputHandler}/>
      <h4>number:  {uName} </h4>
    </div>
  );
}
