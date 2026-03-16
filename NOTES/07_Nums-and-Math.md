# JavaScript Number & Math Notes

---

## 1. JavaScript Numbers

In JavaScript, numbers can be created in two ways.

### Primitive Number

```javascript
const score = 400
console.log(score)   // 400
```

This is a **primitive numeric value**.

### Number Object

```javascript
const balance = new Number(100)
console.log(balance)   // [Number: 100]
```

Here a **Number object** is created using `new Number()`.

---

## 2. Number Methods

### toString()

Converts a number into a **string**.

```javascript
const balance = new Number(100)

console.log(balance.toString())
```

Output

```
"100"
```

Example

```javascript
console.log(balance.toString().length)
```

Explanation:

`"100"` contains **3 characters**, so the length is **3**.

---

### toFixed()

Used to **fix the number of digits after the decimal point**.

```javascript
console.log(balance.toFixed(2))
```

Output

```
100.00
```

Example

```
12.456 → 12.46
5.1 → 5.10
```

This method is commonly used in:

* E-commerce applications
* Currency formatting
* GST calculations

---

### toPrecision()

Returns a number with **specified total digits**.

```javascript
const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3))
```

Output

```
23.9
```

Examples

```
23.8966 → 23.9
123.8966 → 124
1123.8966 → 1.12e+3
```

Range: **1 – 21**

Sometimes large numbers are converted into **exponential form**.

---

### toLocaleString()

Formats numbers according to **regional numbering systems**.

```javascript
const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN'))
```

Output

```
10,00,000
```

Examples

US Format

```
1,000,000
```

Indian Format

```
10,00,000
```

---

## 3. JavaScript Math Object

```javascript
console.log(Math)
```

Output

```
Object [Math] {}
```

`Math` is a **built-in JavaScript object** used for performing mathematical operations.

---

## 4. Important Math Methods

### Math.abs()

Returns the **absolute value**.

```javascript
console.log(Math.abs(-4))
```

Output

```
4
```

It converts **negative numbers into positive numbers**.

---

### Math.round()

Rounds the number to the **nearest integer**.

```javascript
console.log(Math.round(4.3))
```

Examples

```
4.3 → 4
4.6 → 5
```

---

### Math.ceil()

Returns the **next greater integer**.

```javascript
console.log(Math.ceil(4.2))
```

Examples

```
4.1 → 5
4.2 → 5
```

---

### Math.floor()

Returns the **largest integer less than or equal to the number**.

```javascript
console.log(Math.floor(4.9))
```

Example

```
4.9 → 4
```

---

### Math.min()

Returns the **smallest number**.

```javascript
console.log(Math.min(4, 3, 6, 8))
```

Output

```
3
```

---

### Math.max()

Returns the **largest number**.

```javascript
console.log(Math.max(4, 3, 6, 8))
```

Output

```
8
```

---

## 5. Random Numbers

### Math.random()

Generates a random number between

```
0 ≤ value < 1
```

```javascript
console.log(Math.random())
```

Example Output

```
0.567832
```

---

## 6. Random Number Between 1–10

```javascript
console.log(Math.floor(Math.random() * 10) + 1)
```

Steps

```
Math.random() → 0–1
*10 → 0–10
floor → 0–9
+1 → 1–10
```

---

## 7. Random Number Between Custom Range

```javascript
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
```

Formula

```
Math.floor(Math.random() * (max - min + 1)) + min
```

Range

```
10 – 20
```

---