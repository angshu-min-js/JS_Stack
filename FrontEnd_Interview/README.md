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
```
