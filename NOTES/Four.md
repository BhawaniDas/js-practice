# JavaScript `for...in` Loop

---

# 1. What is `for...in`?

👉 Used to **iterate over object keys**

---

## Basic Syntax

```javascript id="a1b2c3"
for (const key in object) {
    // code
}
```

---

# 2. Looping Object

```javascript id="d4e5f6"
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
```

---

## Output

```id="g7h8i9"
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
```

---

# 3. Looping Array

```javascript id="j1k2l3"
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}
```

---

## Output

```id="m4n5o6"
js
rb
py
java
cpp
```

---

## Important

👉 In arrays:

* `key` = index (0,1,2...)
* Value accessed using → `array[key]`

---

# 4. Difference: `for...in` vs `for...of`

| Feature      | for...in     | for...of |
| ------------ | ------------ | -------- |
| Returns      | keys (index) | values   |
| Best for     | objects      | arrays   |
| Use in array | ⚠️ Not ideal | ✅ Best   |

---

# 5. Map with `for...in` ❌

```javascript id="p7q8r9"
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States")
```

```javascript id="s1t2u3"
for (const key in map) {
    console.log(key);
}
```

---

## Output

```id="v4w5x6"
(No output)
```

👉 Because `Map` is **not iterable with `for...in`**

---

# 6. Correct Way for Map ✅

```javascript id="y7z8a9"
for (const [key, value] of map) {
    console.log(key, value);
}
```

---

# 7. Important Points 🔥

* `for...in`:

  * Works best with **objects**
  * Returns **keys**
* Avoid for arrays → use `forEach` or `for...of`

---

# 8. Quick Revision

| Concept     | Meaning        |
| ----------- | -------------- |
| for...in    | loop over keys |
| object[key] | access value   |
| array[key]  | index access   |
| Map         | not supported  |

---

# Final Understanding

```javascript id="b1c2d3"
const obj = { a: 1, b: 2 }

for (const key in obj) {
    console.log(key, obj[key])
}
```

👉 Output:

```id="e4f5g6"
a 1
b 2
```

---