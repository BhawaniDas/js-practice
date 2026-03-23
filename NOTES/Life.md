# JavaScript IIFE (Immediately Invoked Function Expression)

---

# 1. What is IIFE?

👉 IIFE = Function that runs **immediately after it is defined**

---

## Syntax

```javascript id="a1b2c3"
(function(){
    // code
})();
```

---

# 2. Named IIFE

```javascript id="d4e5f6"
(function chai(){
    console.log(`DB CONNECTED`);
})();
```

Explanation:

* Function has a name → `chai`
* Runs immediately after definition

---

## Output

```id="g7h8i9"
DB CONNECTED
```

---

# 3. Arrow Function IIFE

```javascript id="j1k2l3"
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
```

---

## Output

```id="m4n5o6"
DB CONNECTED TWO hitesh
```

---

# 4. Why Use IIFE?

### Main Reasons:

* Avoid **global scope pollution**
* Create **private scope**
* Execute code immediately

---

## Example Problem

```javascript id="p7q8r9"
var a = 10
```

👉 This variable becomes global ❌

---

## Solution with IIFE

```javascript id="s1t2u3"
(function(){
    var a = 10
})();
```

👉 `a` is now private ✅

---

# 5. Important Rule (VERY IMPORTANT 🔥)

```javascript id="v4w5x6"
(function one(){
    console.log("First");
})()

(function two(){
    console.log("Second");
})()
```

❌ This will give error!

---

## Correct Way

```javascript id="y7z8a9"
(function one(){
    console.log("First");
})();

(function two(){
    console.log("Second");
})()
```

👉 Must use `;` to end IIFE

---

# 6. Types of IIFE

### 1. Named IIFE

```javascript id="b1c2d3"
(function hello(){
    console.log("Hello");
})();
```

---

### 2. Anonymous IIFE

```javascript id="e4f5g6"
(function(){
    console.log("Hello");
})();
```

---

### 3. Arrow IIFE

```javascript id="h7i8j9"
(() => {
    console.log("Hello");
})();
```

---

# 7. Passing Parameters

```javascript id="k1l2m3"
(function(name){
    console.log(`Hello ${name}`);
})("Hitesh");
```

---

# 8. Quick Revision

| Concept   | Meaning                 |
| --------- | ----------------------- |
| IIFE      | Runs immediately        |
| Purpose   | Avoid global pollution  |
| Syntax    | `(function(){})()`      |
| Semicolon | Required between IIFEs  |
| Types     | Named, Anonymous, Arrow |

---

# Final Understanding

```javascript id="n4o5p6"
(function(){
    console.log("Executed instantly");
})();
```

👉 Function runs **without calling explicitly**

---