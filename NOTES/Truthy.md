# JavaScript Truthy, Falsy & Operators

---

# 1. Truthy vs Falsy

```javascript id="a1b2c3"
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
```

---

## Output

```id="d4e5f6"
Got user email
```

👉 Because empty array `[]` is **truthy**

---

# 2. Falsy Values ❌

* false
* 0
* -0
* BigInt `0n`
* "" (empty string)
* null
* undefined
* NaN

---

# 3. Truthy Values ✅

* "0"
* "false"
* " " (space)
* [] (empty array)
* {} (empty object)
* function(){}

---

# 4. Check Empty Array

```javascript id="g7h8i9"
const userEmail = []

if (userEmail.length === 0) {
    console.log("Array is empty");
}
```

---

# 5. Check Empty Object

```javascript id="j1k2l3"
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
```

👉 `Object.keys()` returns array of keys

---

# 6. Nullish Coalescing Operator (??)

👉 Works only with:

* null
* undefined

---

## Example

```javascript id="m4n5o6"
let val1

val1 = null ?? 10 ?? 20
```

---

## Output

```id="p7q8r9"
10
```

---

## More Cases

```javascript id="s1t2u3"
5 ?? 10        // → 5
null ?? 10     // → 10
undefined ?? 15 // → 15
```

---

## Why Use It?

👉 To provide **default values safely**

---

# 7. Ternary Operator

## Syntax

```javascript id="v4w5x6"
condition ? true : false
```

---

## Example

```javascript id="y7z8a9"
const iceTeaPrice = 100

iceTeaPrice <= 80 
    ? console.log("less than 80") 
    : console.log("more than 80")
```

---

## Output

```id="b1c2d3"
more than 80
```

---

# 8. Difference: `??` vs `||`

| Operator | Checks                |              |
| -------- | --------------------- | ------------ |
|          |                       | falsy values |
| ??       | only null & undefined |              |

---

## Example

```javascript id="e4f5g6"
0 || 10     // → 10 (wrong sometimes)
0 ?? 1
```
