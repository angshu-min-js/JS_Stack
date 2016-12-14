## HTML

### Logical Section
- header `<header>`
- navigation bar `<nav>`
- main content `<main`
- side bar `<aside>`
- footer `<footer>`

```HTML
<h1></h1> <p></p> <em></em> <strong></strong> <span></span> <div></div>
<ul> <li><li></ul> <!--<ul start="4" reversed> -->
<ol> <li></li> </ol>
<dl> <!--Description list--> <dt> <!--Description title--></dt> <dd> <!--Description Description--></dd></dl>
<backquote></backquote><cite></cite> <!--quotation and citation-->
<a href=""></a>
<abbr title=""></abbr>
<address></address>
25<sup>th</sup>2001 <!-- 25th 2001 -->
H<sub>8</sub> <!--h8 -->
<pre><code></code></pre>
<sample>ping 10.230.343.23</sample>
<kbd> <!-- keyboard input -->
<figure><img src="" alt="" width="" height=""><figcaption></figcaption></figure>
<p><dfn>Something</dfn></p> <!--defination-->
<video controls><source src="" type="video/mp4"><!--similarly, audio, type="audio/mp3"-->
<h1 style="color:blue; background-color:yellow; border: 1px solid black;">
<script src=""></script> <link rel="stylesheet" href=""> <embed><iframe><object data="" type="">
<!--responsive image using srcset -->
<img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
     <select>
       <option value="volvo">Volvo</option>
       <option value="saab">Saab</option>
       <option value="mercedes">Mercedes</option>
       <option value="audi">Audi</option>
     </select>
<footer>Copyright&copy;</footer>
```
#### Navbar
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
```
#### Section->article->meter->progess->canvas->details

```html
<section>
  <article><h1>Article!!</h1></article>
  <meter value="70" min="1" max="100"></meter>
  <progress></progress>
  <canvas id="canvas" width="300" height="300"></canvas>

  <details>
    <summary><summary>
      <p></p>
    </details>
</section>
```

#### Side bar
```html
<aside>
  <div id="side-top">
    <h1>Latest</h1>
  </div>
  <div id="side-bottom">
    <h1>Oldest</h1>
  </div>
</aside>
```
#### Form->table
```html
<form action="" method="">
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
```
