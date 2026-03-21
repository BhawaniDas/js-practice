# JavaScript `for` Loop

---

# 1. Basic `for` Loop

```javascript id="a1b2c3"
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
```

---

## Structure

```javascript id="d4e5f6"
for (initialization; condition; increment/decrement) {
    // code
}
```

---

## Explanation

| Part      | Meaning   |
| --------- | --------- |
| let i = 0 | start     |
| i <= 10   | condition |
| i++       | increment |

---

# 2. Using Condition inside Loop

```javascript id="g7h8i9"
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("5 is best number");
    }
    console.log(i);
}
```

---

# 3. Scope of Variable

```javascript id="j1k2l3"
for (let i = 0; i < 5; i++) {
    const element = i;
}
```

❌ Error:

```javascript id="m4n5o6"
console.log(element)
```

👉 Because `element` is block scoped

---

# 4. Nested Loop 🔥

```javascript id="p7q8r9"
for (let i = 1; i <= 10; i++) {
   for (let j = 1; j <= 10; j++) {
       console.log(i + '*' + j + ' = ' + i*j);
   }
}
```

👉 Used for:

* Tables
* Patterns
* Matrix problems

---

# 5. Looping Array

```javascript id="s1t2u3"
let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}
```

---

# 6. `break` Statement

```javascript id="v4w5x6"
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        break;
    }
    console.log(i);
}
```

---

## Output

```id="y7z8a9"
1
2
3
4
Detected 5
```

👉 Loop stops completely

---

# 7. `continue` Statement

```javascript id="b1c2d3"
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${i}`);
}
```

---

## Output

```id="e4f5g6"
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
Value of i is 6
...
```

👉 Skips only that iteration

---

# 8. break vs continue

| Feature         | break     | continue   |
| --------------- | --------- | ---------- |
| Stops loop      | ✅ Yes     | ❌ No       |
| Skips iteration | ❌ No      | ✅ Yes      |
| Use case        | exit loop | skip value |

---

# 9. Quick Revision

| Concept     | Meaning          |
| ----------- | ---------------- |
| for loop    | repeat code      |
| nested loop | loop inside loop |
| array loop  | using index      |
| break       | stop loop        |
| continue    | skip iteration   |

---

# Final Understanding

```javascript id="h7i8j9"
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
```

👉 Output:

```id="k1l2m3"
1
2
4
5
```

---
