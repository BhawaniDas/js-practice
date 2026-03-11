# JavaScript DataTypes Summary

---

# 1. JavaScript Data Types

JavaScript data types are divided into **two categories**:

```text
1. Primitive Data Types
2. Reference (Non-Primitive) Data Types
```

---

# 2. Primitive Data Types

Primitive types store **actual values directly in memory**.

JavaScript has **7 Primitive Data Types**:

```text
String
Number
Boolean
Null
Undefined
Symbol
BigInt
```

---

## Example

```javascript
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail
```

### Explanation

| Variable    | Value     | Type      |
| ----------- | --------- | --------- |
| score       | 100       | number    |
| scoreValue  | 100.3     | number    |
| isLoggedIn  | false     | boolean   |
| outsideTemp | null      | null      |
| userEmail   | undefined | undefined |

---

# 3. Symbol (Used for Uniqueness)

Symbol is used to create **unique identifiers**.

Example:

```javascript
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
```

Output:

```text
false
```

Explanation:

Even if both Symbols contain `"123"`, they are **always unique**.

```text
Symbol('123') !== Symbol('123')
```

---

# 4. BigInt

BigInt is used for **very large numbers beyond the normal Number limit**.

Example:

```javascript
const bigNumber = 5418465125454618n
```

Check datatype:

```javascript
console.log(typeof bigNumber)
```

Output:

```text
bigint
```

---

# 5. Reference (Non-Primitive) Data Types

Reference types store **memory reference (address) instead of actual value**.

Main Reference Types:

```text
Array
Object
Function
```

---

## Array Example

```javascript
const heros = ["shaktiman", "naagraj", "doga"]
```

Check datatype:

```javascript
console.log(typeof heros)
```

Output:

```text
object
```

---

## Object Example

```javascript
let myObj = {
    name: "Bhawani",
    age: 21
}
```

Objects store data in **key-value pairs**.

Example structure:

```text
key : value
```

---

## Function Example

```javascript
const myFunction = function() {
    console.log("Hello World")
}
```

Check datatype:

```javascript
console.log(typeof myFunction)
```

Output:

```text
function
```

---

# 6. typeof Results

| Expression         | Output |
| ------------------ | ------ |
| typeof bigNumber   | bigint |
| typeof outsideTemp | object |
| typeof scoreValue  | number |
| typeof anotherId   | symbol |

---

# 7. Special Case (typeof null)

```javascript
console.log(typeof null)
```

Output:

```text
object
```

Reason:

This is a **historical bug in JavaScript**, but it still exists.

So remember:

```text
null → primitive value
typeof null → object
```

---

# 8. Primitive vs Reference Memory

### Primitive Types → Stored in Stack Memory

```text
String
Number
Boolean
Null
Undefined
Symbol
BigInt
```

### Reference Types → Stored in Heap Memory

```text
Array
Object
Function
```

---

# 9. Important Difference

### Primitive Example

```javascript
let a = 10
let b = a

b = 20
```

Result:

```text
a = 10
b = 20
```

Because **value is copied**.

---

### Reference Example

```javascript
let obj1 = {name: "Bhawani"}
let obj2 = obj1

obj2.name = "Ashish"
```

Result:

```text
obj1.name = Ashish
obj2.name = Ashish
```

Because both variables point to **the same memory reference**.

---

# 10. Quick Summary

### Primitive Types

```text
String
Number
Boolean
Null
Undefined
Symbol
BigInt
```

### Reference Types

```text
Array
Object
Function
```

---

# Golden Rule

```text
Primitive → value copied
Non-Primitive → reference copied
```
