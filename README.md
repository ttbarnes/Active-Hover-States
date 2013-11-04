# Active Hover States
Enhanced mouseover's for lists

Demo: http://tonybarnes.me/showcase/code-snippets/activeHoverStates/


## Note
This has not been fully tested yet. Working well in modern browsers.


## Requirments 
- jQuery: http://jquery.com/download/


### 1) Create a list
``` html
<ul id="activeHoverStateExample">
    <li>Dummy list item 1</li>
    <li>Dummy list item 2</li>
    <li>Dummy list item 3</li>
</ul>
```

### 2) Include css
``` html
<link rel="stylesheet" href="css/activeHoverStates.styles.min.css">
```

### 3) Include jQuery/JavaScript
``` html
<script src="js/jquery.min.js"></script>
<script src="js/activeHoverStates.1.1.5.min.js"></script>
```

### 4) Initialise
``` html
$("#activeHoverStateExample").activeHoverStates({
  oddEven:false,
  prevAllClasses:true
});
```

## Options
``` html
$("#activeHoverStateExample").activeHoverStates({
  target: '.activeHoverStates', //selectors
  oddEven: true, //oddEven classes
  prevAllClasses: true //prevAll classes on hover
});
```


## Contributions

Contributions are very welcome! Please contact me to discuss: tony@tonybarnes.me