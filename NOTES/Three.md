# JavaScript `for...of` Loop & Map

---

# 1. What is `for...of`?

👉 Used to **iterate over values** (arrays, strings, maps, etc.)

---

## Syntax

```javascript id="a1b2c3"
for (const value of iterable) {
    // code
}
```

---

# 2. Looping Array

```javascript id="d4e5f6"
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}
```

---

## Output

```id="g7h8i9"
1
2
3
4
5
```

---

# 3. Looping String

```javascript id="j1k2l3"
const greetings = "Hello world!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
```

---

👉 Loops through each character

---

# 4. Map (Important 🔥)

```javascript id="m4n5o6"
const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // duplicate not allowed
```

---

## Key Features of Map

* Stores **key-value pairs**
* Maintains **insertion order**
* No duplicate keys

---

# 5. Looping Map

```javascript id="p7q8r9"
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
```

---

## Output

```id="s1t2u3"
IN :- India
USA :- United States of America
Fr :- France
```

---

# 6. Object with `for...of` ❌

```javascript id="v4w5x6"
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, value);
}
```

---

## Output

```id="y7z8a9"
TypeError: myObject is not iterable
```

👉 Objects are **NOT iterable with `for...of`**

---

# 7. Correct Way for Object ✅

```javascript id="b1c2d3"
for (const key in myObject) {
    console.log(key, myObject[key]);
}
```

---

# 8. Difference: `for...of` vs `for...in`

| Feature  | for...of             | for...in  |
| -------- | -------------------- | --------- |
| Returns  | values               | keys      |
| Best for | arrays, strings, map | objects   |
| Readable | ✅ Easy               | ⚠️ Medium |

---

# 9. Quick Revision

| Concept  | Meaning        |
| -------- | -------------- |
| for...of | loop values    |
| array    | works          |
| string   | works          |
| map      | works          |
| object   | ❌ not directly |

---

# Final Understanding

```javascript id="e4f5g6"
const nums = [10, 20, 30]

for (const n of nums) {
    console.log(n * 2);
}
```

👉 Output:

```id="h7i8j9"
20
40
60
```

---