# JavaScript Arrow Functions & `this` Keyword

---

# 1. `this` in Object

```javascript id="a1b2c3"
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
```

Explanation:

* `this` refers to the **current object**
* Here `this.username` → `"hitesh"`

---

### Example

```javascript id="d4e5f6"
user.welcomeMessage()
```

Output:

```
hitesh , welcome to website
```

---

### Updating Object

```javascript id="g7h8i9"
user.username = "sam"
user.welcomeMessage()
```

Output:

```
sam , welcome to website
```

👉 `this` always refers to **current updated object**

---

# 2. `this` in Global Scope

```javascript id="j1k2l3"
console.log(this)
```

* In browser → `window` object
* In Node → `{}` (empty object)

---

# 3. `this` inside Function

```javascript id="m4n5o6"
function chai(){
    let username = "hitesh"
    console.log(this.username);
}
```

Output:

```
undefined
```

Explanation:

* `this` does NOT refer to function variables
* Works mainly with **objects**

---

# 4. Arrow Function

### Basic Syntax

```javascript id="p7q8r9"
const chai = () => {
    let username = "hitesh"
    console.log(this);
}
```

👉 Arrow functions **do NOT have their own `this`**

They inherit `this` from **surrounding scope**

---

# 5. Arrow Function vs Normal Function

| Feature         | Normal Function | Arrow Function     |
| --------------- | --------------- | ------------------ |
| Own `this`      | ✅ Yes           | ❌ No               |
| Used in Objects | ✅ Yes           | ⚠️ Not recommended |
| Short Syntax    | ❌ No            | ✅ Yes              |

---

# 6. Arrow Function Return Styles

## Explicit Return

```javascript id="s1t2u3"
const addTwo = (num1, num2) => {
    return num1 + num2
}
```

---

## Implicit Return

```javascript id="v4w5x6"
const addTwo = (num1, num2) => num1 + num2
```

OR

```javascript id="y7z8a9"
const addTwo = (num1, num2) => (num1 + num2)
```

---

## Returning Object

```javascript id="b1c2d3"
const addTwo = (num1, num2) => ({ username: "hitesh" })
```

Output:

```javascript id="e4f5g6"
console.log(addTwo(3,4))
```

```
{ username: "hitesh" }
```

👉 Must use `()` when returning object

---

# 7. Important Points

* Arrow functions:

  * Short syntax
  * No own `this`
  * Best for callbacks

---

# 8. Example with Array

```javascript id="h7i8j9"
const myArray = [2, 5, 3, 7, 8]

myArray.forEach((num) => {
    console.log(num)
})
```

---

# 9. Quick Revision

| Concept          | Meaning                  |
| ---------------- | ------------------------ |
| this             | Refers to current object |
| this in function | Undefined                |
| this in arrow    | Inherited                |
| Arrow Function   | Short function syntax    |
| Implicit Return  | No `return` keyword      |
| Object Return    | Use `()`                 |

---

# Final Understanding

```javascript id="k1l2m3"
const user = {
    name: "hitesh",
    greet: function(){
        console.log(this.name)
    }
}
```

👉 `this.name` works because it's inside an **object method**

---

```javascript id="n4o5p6"
const test = () => {
    console.log(this)
}
```

👉 Arrow function does NOT have its own `this`

---
