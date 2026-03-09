# JavaScript Data Types – Notes

## 1. Strict Mode

```javascript
"use strict";
```

Strict mode tells JavaScript to run the code using **modern JavaScript rules**.

### Benefits

* Prevents unsafe coding practices
* Throws errors for mistakes
* Makes debugging easier

Example:

```javascript
"use strict"
x = 10
```

Error occurs because `x` was not declared.

---

# 2. Node.js vs Browser Functions

Example:

```javascript
// alert("Hello")
```

`alert()` works in the **browser** but not in **Node.js**.

Why?

* Browser has **window and DOM**
* Node.js runs on the **server environment**

So in Node.js we use:

```javascript
console.log("Hello")
```

---

# 3. Code Readability

Readable code is important for:

* Team collaboration
* Debugging
* Maintainability

Good example:

```javascript
console.log(3 + 3)
console.log("Bhawani")
```

Bad example:

```javascript
console.log(3+3);console.log("Bhawani")
```

---

# 4. JavaScript Data Types

JavaScript has **8 data types**.

## Primitive Data Types

1. string
2. number
3. boolean
4. null
5. undefined
6. symbol
7. bigint

## Non-Primitive

8. object

---

# 5. String

String represents **text data**.

Example:

```javascript
let name = "Ashish"
```

Other examples:

```javascript
let city = "Delhi"
let language = "JavaScript"
```

Strings can use:

```
" "
' '
` `
```

---

# 6. Number

Number represents **numeric values**.

Example:

```javascript
let age = 21
```

Examples:

```javascript
let price = 199
let score = 98.5
```

### Number Range

Safe integer range:

```
-(2^53 - 1) to (2^53 - 1)
```

Example:

```javascript
Number.MAX_SAFE_INTEGER
```

---

# 7. BigInt

BigInt is used for **very large numbers** beyond the safe integer limit.

Example:

```javascript
let bigNumber = 123456789012345678901234567890n
```

Notice the `n` at the end.

Used in:

* Cryptography
* Financial systems
* Blockchain
* Large databases

---

# 8. Boolean

Boolean has only two values:

```
true
false
```

Example:

```javascript
let isLoggedIn = false
```

Used in conditions:

```javascript
if(isLoggedIn){
    console.log("Welcome")
}
```

---

# 9. null

`null` represents an **intentional empty value**.

Example:

```javascript
let temperature = null
```

Meaning:

* Value exists
* But currently empty

Example use case:

```
Data will come later
```

---

# 10. undefined

`undefined` means:

```
Variable declared but value not assigned
```

Example:

```javascript
let state
console.log(state)
```

Output:

```
undefined
```

---

# 11. Difference Between null and undefined

| Feature     | undefined          | null                    |
| ----------- | ------------------ | ----------------------- |
| Meaning     | value not assigned | intentional empty value |
| Assigned by | JavaScript         | Programmer              |
| Type        | undefined          | object                  |

Example:

```javascript
let a
let b = null

console.log(a)
console.log(b)
```

Output:

```
undefined
null
```

---

# 12. Symbol

Symbol is used to create **unique identifiers**.

Example:

```javascript
const id1 = Symbol("123")
const id2 = Symbol("123")

console.log(id1 === id2)
```

Output:

```
false
```

Even though both contain `"123"`, they are **unique values**.

Symbols are often used in:

* Frameworks
* Internal object properties
* Advanced JavaScript

---

# 13. Object

Objects store **key-value pairs**.

Example:

```javascript
let user = {
  name: "Bhawani",
  age: 21,
  isLoggedIn: true
}
```

Objects are one of the **most important data structures in JavaScript**.

---

# 14. typeof Operator

`typeof` tells the **data type of a value**.

Examples:

```javascript
console.log(typeof "Bhawani")
```

Output:

```
string
```

Example:

```javascript
console.log(typeof age)
```

Output:

```
number
```

---

# 15. Strange JavaScript Behavior

### typeof null

```javascript
console.log(typeof null)
```

Output:

```
object
```

This is a **historical bug in JavaScript**.

---

### typeof undefined

```javascript
console.log(typeof undefined)
```

Output:

```
undefined
```

---

# 16. Quick Summary

Primitive Data Types:

```
string
number
boolean
null
undefined
symbol
bigint
```

Non-Primitive:

```
object
```

---

# 17. Important Rule to Remember

```
undefined → value not assigned yet
null → value intentionally empty
```

Example:

```javascript
let a
let b = null
```

Output:

```
a → undefined
b → null
```
