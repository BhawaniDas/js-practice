=# JavaScript Memory (Stack vs Heap)

---

## 1. Types of Memory in JavaScript

JavaScript uses **two types of memory** to store data:

1. **Stack Memory**
2. **Heap Memory**

These memory types handle **primitive and non-primitive values differently**.

---

## 2. Stack Memory

Stack memory is used for **Primitive Data Types**.

Primitive values are **stored directly in the stack**, and when assigned to another variable, **a copy of the value is created**.

### Primitive Data Types

JavaScript has **7 Primitive Data Types**:

* String
* Number
* Boolean
* Null
* Undefined
* Symbol
* BigInt

### Important Rule

Primitive values follow **Copy by Value**.

This means:

* A **new copy** of the value is created when assigning variables.
* Changing one variable **does not affect the other**.

### Example

```javascript
let myFullName = "Bhawani Sankar Das"

let anotherName = myFullName
anotherName = "Ashish Das"

console.log(myFullName)
console.log(anotherName)
```

### Output

```
Bhawani Sankar Das
Ashish Das
```

### Explanation

* `anotherName` gets a **copy** of `"Bhawani Sankar Das"`.
* Changing `anotherName` **does not change** `myFullName`.

---

## 3. Heap Memory

Heap memory is used for **Non-Primitive (Reference) Data Types**.

These include:

* Objects
* Arrays
* Functions

In this case:

* The **actual object is stored in Heap memory**
* Variables store the **reference (memory address)** of that object.

### Important Rule

Non-primitive values follow **Copy by Reference**.

This means:

* When assigning one object variable to another,
* Both variables **point to the same object in memory**.

---

### Example

```javascript
let userOne = {
  email: "bhawani@gmail.com",
  upi: "bhawani@ybl"
}

let userTwo = userOne

userTwo.email = "bhawani05@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
```

### Output

```
bhawani05@gmail.com
bhawani05@gmail.com
```

### Explanation

* `userOne` and `userTwo` both reference the **same object**.
* Changing the object through `userTwo` **also affects `userOne`**.

---

## 4. Memory Visualization

### Primitive Values (Stack)

```
Stack Memory
---------------------
myFullName   → "Bhawani Sankar Das"
anotherName  → "Ashish Das"
```

Each variable stores **its own copy** of the value.

---

### Objects (Heap)

```
Stack                     Heap
------                    --------------------
userOne  ─────────────→   { email: "...", upi: "..." }

userTwo  ─────────────→   Same Object
```

Both variables point to **the same memory location**.

---

## 5. Golden Rule

| Data Type     | Memory Location | Behavior            |
| ------------- | --------------- | ------------------- |
| Primitive     | Stack           | Value is Copied     |
| Non-Primitive | Heap            | Reference is Copied |

---

## 6. Quick Example for Revision

### Primitive Example

```javascript
let a = 10
let b = a

b = 20

console.log(a)
console.log(b)
```

Output

```
10
20
```

---

### Object Example

```javascript
let obj1 = { name: "Bhawani" }
let obj2 = obj1

obj2.name = "Ashish"

console.log(obj1.name)
console.log(obj2.name)
```

Output

```
Ashish
Ashish
```

---

## Summary

* **Stack Memory** → Used for Primitive Types → Value is copied
* **Heap Memory** → Used for Objects, Arrays, Functions → Reference is copied
