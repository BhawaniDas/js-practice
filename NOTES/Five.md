# JavaScript forEach Loop

---

# 1. What is `forEach`?

👉 `forEach()` is used to **loop through array elements**

---

## Basic Syntax

```javascript id="a1b2c3"
array.forEach(function(item){
    // code
})
```

---

# 2. Using Normal Function

```javascript id="d4e5f6"
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val){
    console.log(val);
})
```

---

# 3. Using Arrow Function

```javascript id="g7h8i9"
coding.forEach((item) => {
    console.log(item);
})
```

---

# 4. Using Separate Function

```javascript id="j1k2l3"
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
```

---

# 5. Access All Parameters

```javascript id="m4n5o6"
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})
```

---

## Parameters Explained

| Parameter | Meaning       |
| --------- | ------------- |
| item      | current value |
| index     | position      |
| arr       | whole array   |

---

# 6. Array of Objects

```javascript id="p7q8r9"
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
```

---

## Access Object Values

```javascript id="s1t2u3"
myCoding.forEach((item) => {
    console.log(item.languageName);
})
```

---

## Output

```id="v4w5x6"
javascript
java
python
```

---

# 7. Important Points 🔥

* `forEach()`:

  * Does NOT return anything
  * Only used for **iteration**
  * Cannot use `break` or `continue`

---

# 8. Common Mistake ❌

```javascript id="y7z8a9"
const values = coding.forEach((item) => {
    return item
})

console.log(values)
```

👉 Output: `undefined`

---

# 9. When to Use

| Use Case         | Method  |
| ---------------- | ------- |
| Just loop        | forEach |
| Return new array | map     |
| Filter data      | filter  |
| Calculate value  | reduce  |

---

# 10. Quick Revision

| Concept   | Meaning            |
| --------- | ------------------ |
| forEach   | loop through array |
| No return | always undefined   |
| item      | current value      |
| index     | position           |
| arr       | full array         |

---

# Final Understanding

```javascript id="b1c2d3"
const arr = [1, 2, 3]

arr.forEach((num) => {
    console.log(num * 2)
})
```

👉 Output:

```id="e4f5g6"
2
4
6
```

---