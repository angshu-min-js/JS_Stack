## HTML

```HTML
  <nav>
        <ul>
          <li>Home</li>
          <li>Dome</li>
          <li>Bomb</li>
          <li>Comb</li>
            <div style="clear:both;"></div>
        </ul>

    </nav>
    <section>
      <article><h1>Article!!</h1></article>
      <meter value="70" min="1" max="100"></meter>
      <progress></progress>
      <canvas></canvas>

      <details>
        <summary><summary>
          <p></p>
        </details>
    </section>
    <aside>
      <div id="side-top">
        <h1>Latest</h1>
      </div>
      <div id="side-bottom">
        <h1>Oldest</h1>
      </div>
    </aside>
    <div style="clear:both;"></div>
    <form>
      <table>
        <tr>
          <td>Name</td>
          <td><input type="text" autofocus></td>
          <td>Name</td>
          <td><input type="text"></td>
          <td>Name</td>
          <td><input type="text"></td>
          <td>Upload</td>
          <td><input type="file" multiple></td>
        </tr>
        <tr>
          <td>Your Skills</td>
          <td>
            <input list="skills">
            <datalist id="skills"> <!--for query seaching -->
              <option>X</options>
              <option>Y</options>
              <option>Z</options>
            </datalist>
        </td>
        </tr>
      </table>

    </form>

    <div style="background: orange; width:300px; height:300px"></div>
    <wbr></wbr> <!-- word break -->
    <audio controls autoplay loop preload="metadata"> <!-- control, autoplay, loop attributes -->
    <source src="" type="audio/mpeg"><!-- audio -->
    </audio>
    <br>
    <video controls preload="metadata" height="" width="" poster=""><!-- display poster -->
    <source src="" type="video/mpeg">
    </video>
    <footer>Copyright&copy;</footer>
```

## CSS

```
*{
margin: 0;
padding: 0;
}
body{
  font-family: arial;
}
#container{
  width: 90%;
  height: 500px;
  background: #F9F9F9;
  margin: 0 auto;
}

header{
  width: 100%;
  padding: 20px 0px;
  background: #983030;
  color:white;
}
header h1{
  margin-left: 10px;
}

nav ul{
  background: orange;
  padding: 10px 0px;
}
nav li{
  list-style: none;
  float: left;
  width: 100px;
  text-align: center;
}
nav li:hover{
  background: grey;
  cursor: pointer;
}

section{
  width: 100%;
  height: 500px;
  float: left;
}

aside{
  float: left;
  width: 30%
}

/* CSS3 */
#border-radius{
  background: blue;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  border-radius: 10px 20px 10px 50px;
  float: left;
  margin: 10px;
}

#box-shadow{
  background: blue;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  box-shadow: 5px 5px 5px gray; /*inset --> for inside the box */
  float: left;
  margin: 10px;
}

#LG{
  background: linear-gradient(10deg, blue, red, green); /*to right*/
  width: 200px;
  height: 200px;
  border: 2px solid black;
  float: left;
  margin: 10px;
}
#RG{
  background: radial-gradient(red 50%, blue 90%, green 20%);
  width: 200px;
  height: 200px;
  border: 2px solid black;
  float: left;
  margin: 10px;
}

#TS{
  margin: 20px;
  font-size: 25px;
  text-shadow: 5px 5px 5px gray;
  font-family: myF;
}

@font-face {
    src: url();
    font-family: myF;
}

#rotate{
  background: silver;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  float: left;
  margin: 10px;
  transform: rotate(170deg);
  animation: anim 10s;
}

#translate{
  background: silver;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  float: left;
  margin: 10px;
  transform: translate(10px, 50px);
  transform: scale(1);
  transform: skew(10deg, 10deg);
  transition: background 2s, transform 2s;
}
#translate:hover{
  background: blue;
  transform: skew(20deg, 20deg);
}
@keyframes anim {
  from{background: silver;}
  to{background: red;}
}

#animate{
  background: silver;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  margin: 10px;
  border-radius: 0;

}
#animate:hover{
  animation: anim1 2s linear infinite;
}
@keyframes anim1 {
  0%{
    border-radius: 0;
    margin-left: 10px;
  }
  50%{
    border-radius: 100px;
    margin-left: 200px;
  }
  100%{
    border-radius: 0;
    margin-left: 10px;
  }
}

.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 10px;
  //border-radius: 100%;
}

@keyframes anim {
  0% {
    //margin-left: 10%;
    //transform: rotate(0deg);
    //transform: translate(10px, 0);
    transform: scale(0);
    //transform: skew(0, 0);
    //background: linear-gradient(10deg, red, red, red);
  }
  50% {
    //margin-left: 50%;
    //transform: rotate(360deg);
    //transform: translate(50px, 0);
    transform: scale(1);
    //transform: skew(100deg, 100deg);
    //background: linear-gradient(10deg, blue, red, green);
  }
  100% {
    //margin-left: 10%;
    //transform: rotate(0deg);
    //transform: translate(10px, 0);
    transform: scale(0);
    //transform: skew(0, 0);
    //background: linear-gradient(10deg, green, green, green);
  }
}

.box:active {
  animation: anim 2s linear infinite;
}

#block. inline       { display: inline;       }
#block .block        { display: block;        }
#block .inline-block { display: inline-block; }

#overflow .autoscroll { overflow: auto;    }
#overflow .clipped    { overflow: hidden;  }
#overflow .default    { overflow: visible; }

.inherit a {
  color: inherit;
}

.initial a {
  color: initial
}

.unset a {
  color: unset;
}

.hoverC a:visited {
  color: blue;
  text-decoration: none;
}

.hoverC a:hover, a:active, a:focus {
  color: darkred;
  text-decoration: none;
}

.hoverC a{
  color: black;
  font-weight: bold;
}


.pseudo ul{
  padding: 0;
}

.pseudo li {
  padding: 3px;
  margin-bottom: 5px;
  list-style-type: none;
}

.pseudo a{
  text-decoration: none;
  color: black;
}

.pseudo a:hover{
  text-decoration: underline;
  color: red;
}

.pseudo li:nth-of-type(2n){
  background-color: #ccc;
}

.pseudo li:nth-of-type(2n+1){
  background-color: #eee;
}

.pseudoElement p::first-line {
  text-transform: uppercase;
}

.pseudoElement p::first-letter {
  font-size:3em;
  border: 1px solid black;
  background: red;
  display: block;
  float: left;
  padding: 2px;
  margin-right: 4px;

}

@keyframes  rotate{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

.rot p{
  color: red;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  font-size: 40px;
  border-radius: 50px;
}

.rot p:hover{
  animation-name: rotate;
  animation-duration: 0.6s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

h1{
  color: red;
  text-shadow: 1px 1px 1px black;
  background: linear-gradient(to bottom, rgba(0,0,0,0.25),
    rgba(0,0,0,0.1));
  padding: 3px;
  text-align:center;
  box-shadow: inset 2px 2px 5px rgba(0,0,0,0.5), inset -2px -2px 5px
    rgba(255,255,255,0.5);
}

.first{
  font-weight: bold;
}
.done{
  text-decoration: line-through;
}
.third{
  font-family:cursive;
  text-transform: uppercase;
}

li[lang="en-GB"] {
   background: url("http://mdn.github.io/learning-area/css/introduction-to-css/css-selectors/en-GB.png") 5px center no-repeat;
 }

li[lang="de"] {
   background: url("http://mdn.github.io/learning-area/css/introduction-to-css/css-selectors/de.png") 5px center no-repeat;
 }

li[lang="es"] {
   background: url("http://mdn.github.io/learning-area/css/introduction-to-css/css-selectors/es.png") 5px center no-repeat;
 }

li[data-perf*="inc"] {
   background-color: rgba(0,255,0,0.7);
}

li[data-perf*="same"] {
   background-color: rgba(0,0,255,0.5);
}
li[data-perf*="pro"] {
   font-weight: bold;
}
li[data-perf*="rel"] {
   font-style: italic;
  color: #666;
}

ol{
  padding: 0;

}

li{
  padding: 3px 3px 3px 32px;
  margin-bottom: 5px;
  list-style-position: inside;
}
```

```JS
var btn = document.querySelector('button');
var h = document.querySelector('h1');
btn.onclick = function() {
    h.textContent = 'Clicked';
  }
var data = document.querySelector('p');
  data.addEventListerner('click', update());

  function update(){
    var name = prompt('Whats your name doe');
    data.textContent = 'Player 1:' + name;
  }
  function createParagraph() {
    var para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }
  var buttons = document.querySelectorAll('button');
  for(var i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }

  var btn = document.querySelector('button'),
      txt = document.querySelector('p');
  //btn.addEventListener('click', updateButton);

  btn.onclick = function(){
    if(btn.textContent=='Start'){
      btn.textContent = 'Stop';
      txt.textContent = 'Machine Started';
    }
    else{
      btn.textContent = 'Start';
      txt.textContent = 'Machine Stopped';
    }
  } 

  var list = document.querySelector('.output ul');
  list.innerHTML = '';
  var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

  for(var i = 0; i < cities.length; i++) {
    var input = cities[i];
    var lower = input.toLowerCase();
    var firstLetter = lower.slice(0,1);
    var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
    var result = capitalized;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);

  }
```
