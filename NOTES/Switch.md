# JavaScript Switch Statement

---

# 1. Basic Syntax

```javascript id="a1b2c3"
switch (key) {
    case value:
        // code
        break;

    default:
        // default code
        break;
}
```

---

# 2. Example

```javascript id="d4e5f6"
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
```

---

## Output

```id="g7h8i9"
march
```

---

# 3. How It Works

* `switch` compares `month` with each `case`
* When match found → code executes
* `break` stops further execution

---

# 4. Importance of `break` 🔥

```javascript id="j1k2l3"
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
    case "march":
        console.log("march");
    case "april":
        console.log("april");
}
```

---

## Output (Without break)

```id="m4n5o6"
march
april
```

👉 This is called **fall-through**

---

# 5. Default Case

```javascript id="p7q8r9"
default:
    console.log("default case match");
```

👉 Runs when no case matches

---

# 6. Number Example

```javascript id="s1t2u3"
const day = 2

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}
```

---

# 7. Switch vs If-Else

| Feature      | switch       | if-else            |
| ------------ | ------------ | ------------------ |
| Best for     | fixed values | complex conditions |
| Readable     | ✅ High       | ❌ Less             |
| Range checks | ❌ No         | ✅ Yes              |

---

# 8. Quick Revision

| Concept      | Meaning                 |
| ------------ | ----------------------- |
| switch       | checks multiple values  |
| case         | matching condition      |
| break        | stops execution         |
| default      | fallback case           |
| fall-through | no break → multiple run |

---

# Final Understanding

```javascript id="v4w5x6"
const fruit = "apple"

switch (fruit) {
    case "banana":
        console.log("Banana");
        break;
    case "apple":
        console.log("Apple");
        break;
}
```

👉 Only matching case executes

---
