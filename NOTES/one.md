# JavaScript Conditional Statements (if-else)

---

# 1. Basic `if-else`

```javascript id="a1b2c3"
const temperature = 41

if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
```

---

## Operators

| Operator | Meaning   |
| -------- | --------- |
| <        | less than |

> | greater than |
> <= | less than or equal |
> = | greater than or equal |
> == | value check |
> === | value + datatype check |
> != | not equal |
> !== | strict not equal |

---

# 2. Scope inside `if`

```javascript id="d4e5f6"
if (true) {
    let power = "fly"
    console.log(power);
}
```

❌ Error:

```javascript id="g7h8i9"
console.log(power)
```

👉 Because `let` is block scoped

---

# 3. Short-hand if

```javascript id="j1k2l3"
const balance = 1000

if (balance > 500) console.log("test"), console.log("test2");
```

👉 Can write in one line (not recommended for complex logic)

---

# 4. if-else ladder

```javascript id="m4n5o6"
const balance = 1000

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}
```

---

# 5. Logical Operators

## AND (`&&`)

```javascript id="p7q8r9"
const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}
```

👉 All conditions must be TRUE

---

## OR (`||`)

```javascript id="s1t2u3"
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
```

👉 At least ONE condition must be TRUE

---

# 6. Real Example

```javascript id="v4w5x6"
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}
```

👉 Output: ❌ Nothing prints
Because `2 == 3` is FALSE

---

# 7. Important Concepts

## Truthy & Falsy Values

### Falsy Values:

* false
* 0
* "" (empty string)
* null
* undefined
* NaN

### Truthy Values:

* "0", "false", [], {}, function(){}

---

# 8. Quick Revision

| Concept | Meaning             |          |
| ------- | ------------------- | -------- |
| if      | condition check     |          |
| else    | fallback            |          |
| else if | multiple conditions |          |
| &&      | all true            |          |
|         |                     | any true |
| ===     | strict comparison   |          |

---

# Final Understanding

```javascript id="y7z8a9"
if (true && false) {
    console.log("Won't run");
}

if (true || false) {
    console.log("Will run");
}
```

---