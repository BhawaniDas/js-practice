# JavaScript `while` & `do...while` Loops

---

# 1. `while` Loop

👉 Runs **as long as condition is true**

---

## Syntax

```javascript id="a1b2c3"
while (condition) {
    // code
}
```

---

## Example

```javascript id="d4e5f6"
let index = 0

while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}
```

---

## Output

```id="g7h8i9"
0
2
4
6
8
10
```

---

## Important

👉 Must update variable inside loop
Otherwise → **infinite loop ❌**

---

# 2. Looping Array using `while`

```javascript id="j1k2l3"
let myArray = ['flash', "batman", "superman"]

let arr = 0

while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}
```

---

## Output

```id="m4n5o6"
Value is flash
Value is batman
Value is superman
```

---

# 3. `do...while` Loop

👉 Runs **at least one time**, even if condition is false

---

## Syntax

```javascript id="p7q8r9"
do {
    // code
} while (condition);
```

---

## Example

```javascript id="s1t2u3"
let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
```

---

## Output

```id="v4w5x6"
Score is 11
```

---

👉 Even though condition is false, it runs once

---

# 4. Difference: `while` vs `do...while`

| Feature            | while        | do...while             |
| ------------------ | ------------ | ---------------------- |
| Condition check    | before loop  | after loop             |
| Runs at least once | ❌ No         | ✅ Yes                  |
| Use case           | normal loops | must-run-at-least-once |

---

# 5. Common Mistake ❌

```javascript id="y7z8a9"
while (index <= 10) {
    console.log(index)
}
```

👉 Infinite loop (no increment)

---

# 6. Quick Revision

| Concept       | Meaning             |
| ------------- | ------------------- |
| while         | condition first     |
| do...while    | run once guaranteed |
| array loop    | possible            |
| infinite loop | avoid               |

---

# Final Understanding

```javascript id="b1c2d3"
let i = 1

do {
    console.log(i)
    i++
} while (i <= 3)
```

👉 Output:

```id="e4f5g6"
1
2
3
```

---
