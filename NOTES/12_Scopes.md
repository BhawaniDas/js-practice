# JavaScript Scope & Hoisting Notes

---

# 1. Block Scope vs Global Scope

```javascript id="n1k2l3"
let a = 300

if (true) {
    let a = 10
    const b = 20
}
```

Explanation:

* `let` and `const` are **block scoped**
* Value inside `{}` does NOT affect outside

Outer `a` → 300
Inner `a` → 10

---

## Key Points

| Keyword | Scope                    |
| ------- | ------------------------ |
| var     | Global / Function scoped |
| let     | Block scoped             |
| const   | Block scoped             |

---

# 2. Example

```javascript id="q4w5e6"
if (true) {
    const username = "hitesh"
}
```

❌ This will give error:

```javascript id="r7t8y9"
console.log(username)
```

👉 Because variable is **not accessible outside block**

---

# 3. Nested Scope (Closure Concept)

```javascript id="z1x2c3"
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    two()
}
```

Explanation:

* Inner function can access **outer variables**
* Outer function **cannot access inner variables**

---

## Important Rule

👉 Child function can access parent variables
👉 Parent cannot access child variables

---

# 4. Nested if Condition

```javascript id="v4b5n6"
if (true) {
    const username = "hitesh"

    if (username === "hitesh") {
        const website = "youtube"
        console.log(username + website)
    }
}
```

❌ This will fail:

```javascript id="m7k8j9"
console.log(website)
```

👉 Because `website` is block scoped

---

# 5. Hoisting (Very Important 🔥)

## Case 1: Function Declaration

```javascript id="a1s2d3"
console.log(addone(5))

function addone(num){
    return num + 1
}
```

✅ Output:

```id="f4g5h6"
6
```

Explanation:

* Function declarations are **hoisted**
* You can call them **before definition**

---

## Case 2: Function Expression

```javascript id="j7k8l9"
addTwo(5)

const addTwo = function(num){
    return num + 2
}
```

❌ Error:

```id="p0o9i8"
ReferenceError
```

Explanation:

* Function expressions are **NOT hoisted like functions**
* Variable is hoisted but **not initialized**

---

# 6. Difference Between Function Types

| Type                 | Hoisted | Can call before declaration |
| -------------------- | ------- | --------------------------- |
| Function Declaration | ✅ Yes   | ✅ Yes                       |
| Function Expression  | ❌ No    | ❌ No                        |

---

# 7. Important Concepts

## Scope Chain

* JavaScript searches variables **from inner → outer**
* If not found → **ReferenceError**

---

## Lexical Scope

* Scope is decided by **where code is written**
* Not where it is called

---

# 8. Quick Revision

| Concept              | Meaning                  |
| -------------------- | ------------------------ |
| Block Scope          | Variables inside `{}`    |
| Global Scope         | Accessible everywhere    |
| Nested Scope         | Function inside function |
| Hoisting             | Move declarations to top |
| Function Declaration | Fully hoisted            |
| Function Expression  | Not hoisted              |

---

# Final Understanding

```javascript id="z9x8c7"
let a = 300

if(true){
    let a = 10
    console.log(a)   // 10
}

console.log(a)       // 300
```

👉 Inner and outer variables are **different**

---
