### OOP

```Javascript
function Checking(amount){
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

function deposit(amount){
  this.balance += amount;
}

function withdraw(amount){
  if(amount<=this.balance){
    this.balance *= amount;
  }
  if(amount>this.balance){
    console.log("Chudoo, Paisa Nahi Hai");
  }
}
function toString(){
  return "Balance: "+this.balance;
}

var account = new Checking(500);
account.deposit(1000);
console.log(account.toString());
account.withdraw(500);
console.log(account.toString());
```

### Arrays

- JS Arrays are Object

```Javascript
var sentence = "this is a sentence";
var words = sentence.split(" ");
for(varr i =0; i<words.length; i++){
  console.log("word "+i+" : "+word[i]);
}
```
- ForEach
```Javascript
function square(num) {
 print(num, num * num);
}
var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);
```
- Every/Some
```Javascript
function isEven(num) {
 return num % 2 == 0;
}
var nums = [2,4,6,8,10];
var even = nums.every(isEven); // nums.some
if (even) {
 print("all numbers are even");
}
else {
 print("not all numbers are even");
}
```
- Reduce, reduceRight, mao
```
//Reduce -> Single Output, Reduced to the output
function concat(accumulatedString, item) {
 return accumulatedString + item;
}
var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduce(concat);
print(sentence); // displays "the quick brown fox"

//Map -> New Array
function first(word) {
 return word[0];
}
var words = ["for","your","information"];
var acronym = words.map(first);
print(acronym.join("")); // displays "fyi"

//Filer -> New filter array
function afterc(str) {
 if (str.indexOf("cie") > -1) {
 return true;
 }
 return false;
}
var words = ["recieve","deceive","percieve","deceit","concieve"];
var misspelled = words.filter(afterc);
print(misspelled); // displays recieve,percieve,concieve
```

### Lists

```Javascript
function List() {
 this.listSize = 0;
 this.pos = 0;
 this.dataStore = []; // initializes an empty array to store list elements
 this.clear = clear;
 this.find = find;
 this.toString = toString;
 this.insert = insert;
 this.append = append;
 this.remove = remove;
 this.front = front;
 this.end = end;
 this.prev = prev;
 this.next = next;
 this.length = length;
 this.currPos = currPos;
 this.moveTo = moveTo;
 this.getElement = getElement;
 this.length = length;
 this.contains = contains;
}
```

### Stack --> Array

```Javascript
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
 }
```

-  Converting numbers to base 2 and base 8
```Javascript
function mulB(num, base){
  var s = new Stack();
  do{
    s.push(num%base);
    num = Math.floor(num/=base);
  }while(num>0);
  var converted = "";
  while(s.length()>0){
    coverted += s.pop();
  }return converted;
}
```

### Queue

```Javascript
function Queue() {
 this.dataStore = [];
 this.enqueue = enqueue;
 this.dequeue = dequeue; // use of shift()
 this.front = front;
 this.back = back;
 this.toString = toString;
 this.empty = empty;
}
```

### LinkedList

```Javascript
function Node(element) {
 this.element = element;
 this.next = null;
}

function LList() {
 this.head = new Node("head");
 this.find = find;
 this.insert = insert;
 this.remove = remove;
 this.display = display;
}

function find(item) {
 var currNode = this.head;
 while (currNode.element != item) {
 currNode = currNode.next;
 }
 return currNode;
}

function insert(newElement, item) {
 var newNode = new Node(newElement);
 var current = this.find(item);
 newNode.next = current.next;
 current.next = newNode;
}

function display() {
 var currNode = this.head;
 while (!(currNode.next == null)) {
 print(currNode.next.element);
 currNode = currNode.next;
 }
}
```

### Dictionary

```Javascript
function Dictionary(){
  this.add = add;
  this.data = new Array();
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
}
function add(key, value){
  this.data[key] = value;
}
function remove(key){
  delete this.data[key];
}
function find(key) {
 return this.datastore[key];
}
function showAll(){
  forEach(var key in Object.keys(this.data))
  {
    print(key + " -> " + this.data[key]);
  }
}
```

### BST

```Javascript
function Node(data, left, right) {
 this.data = data;
 this.left = left;
 this.right = right;
 this.show = show;
}
function show() {
 return this.data;
}

function insert(data) {
 var n = new Node(data, null, null);
 if (this.root == null) {
 this.root = n;
 }
 else {
 var current = this.root;
 var parent;
 while (true) {
 parent = current;
 if (data < current.data) {
 current = current.left;
 if (current == null) {
 parent.left = n;
 break;
 }
 }
 else {
 current = current.right;
 if (current == null) {
 parent.right = n;
 break;
 }
 }
 }
 }
}
```

### Graphs
```Javascript
function Graph(v) {
 this.vertices = v;
 this.edges = 0;
 this.adj = [];
 for (var i = 0; i < this.vertices; ++i) {
 this.adj[i] = [];
 this.adj[i].push("");
 }
 this.addEdge = addEdge;
 this.toString = toString;
}
```

### Merge Sort

```Javascript
function MergeSort(arr){
  if(arr.length<2) return arr;
  var mid = Math.floor(arr.length/2)
  var l = MergeSort(arr.slice(0,mid))
  var r = MergeSort(arr.slice(mid))
  return merge(l,r);
}

function merge(r,l){
  var result = [];
  while(r.length>0 && l.length>0)
    result.push(a[0]<b[0]?a.shift():b.shift())
  return result.concat(a.length?a:b);
}
```

### Binary Search

```Javascript
function binSearch(arr, data){
  var u = arr.length-1;
  var l = 0;
  while(l<=u){
    var mid = Math.floor((l+u)/2);
    if(arr[mid]<data){
      l = mid+1;
    }
    else if(arr[mid]>data){
      u=mid-1;
    }
    else{
      return mid;
    }
    }
    return -1;
  }
}
```

### Concepts

- Prototype

```Javascript
function Person(name){
  this.name=name;
}
Person.prototype.walk = function(){
  console.log(this.name+ "  something");
}
var person = new Person("Angshu");
person.walk();
```

- Currying -> step wise argument passing as function

```Javascript
let something =
  name=> //function1
    name2=> //function2
      name3=> //function3
        name + name2 + name3 //return Output

console.log(something('A')('B')('C'))
//ABC
```
- Promises -> bit more powerfull than callbacks
- Factory function -> Factory of objects

```Javascript
const dog = () => {
  const sound = 'woof'
  return {
    talk: () => console.log(sound)
  }
}
const sniffles = dog()
sniffles.talk() //woof
```
- Composition over Inheritance -> Do vs Are, bark vs animal, hasA vs isA
- Event delegation: Use of Event Bubbling and Target Element
      - Event Bubbling: When one event is trigger its also triggered on all its DOM ancestors. The event bubbles up from the originating element to the top of the DOM tree.
      - Target Element: Originating Event
      - Capturing: the event is first captured by the outermost element and propagated to the inner elements. (opp of event bubbling)

-  Execution Context is the wrapper that wraps the code
- JavaScript makes a placeholder and defines all the variables and functions as ‘undefined’ before its execution
- Prototype
```JavaScript
String.prototype.reverse = function (){
  if(!this || this.length <2) return this;

  return this.split('').reverse().join('');
}
```
### Document, DOM, Events
```Javascript
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
- onfocus, onblur, ondbclick, window.onkeypress, onmouseover, addEventListerner(), removeEventListener()
```
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.responseType = "json";
oReq.send();
```
