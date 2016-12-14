## CSS

#### Animation
```CSS
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

@keyframes anim {
  from{background: silver;}
  to{background: red;}
}



/* media */
@@media (min-width: 801px) {
  body{
    margin: 0 auto;
    width: 800px;
  }
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
/* inset for inside of the box */
```
#### Border Radius
```CSS
#border-radius{
  background: blue;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  border-radius: 10px 20px 10px 50px;
  float: left;
  margin: 10px;
  letter-spacing: normal;
  word-spacing: normal;
}
```
#### box-shadow
```CSS
#box-shadow{
  background: blue;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  box-shadow: 5px 5px 5px gray; /*inset --> for inside the box */
  float: left;
  margin: 10px;
}
```
#### Linear/Radial Gradient
```CSS
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
```
#### Text Shadow, font-face
```CSS
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
```
#### Pseudo Class and Element
```CSS
.pseudo ul{
  padding: 0;
}

.pseudo li {
  padding: 3px;
  margin-bottom: 5px;
  list-style-type: none; /*list style -> upper-roman, cursive, etc. Similarly, list-style-postion: inside */
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
```
- AA (Both classes), A B (any child B of A), A>B (direct child B, of A), A~B (one of the next child)

#### Selectors
```CSS
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
```
- attr |= ->Val, ^= ->start with, $= -> end with, *= -> all val (space too), ~= -> all val without space

#### Display,inherit, overflow
```CSS
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
```
- !important>ID>Class>Elements
