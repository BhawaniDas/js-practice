# JavaScript Type Conversion (Conversion Operations)

## 1. What is Type Conversion?

Type conversion means **changing one data type into another**.

Example:

```javascript
let score = "33"
let valueInNumber = Number(score)
```

Here:

```
"33" (string) → 33 (number)
```

---

# 2. Checking Data Type

We use the `typeof` operator to check a variable's data type.

Example:

```javascript
let score = 33

console.log(typeof score)
console.log(typeof(score))
```

Output:

```
number
number
```

Both syntaxes are valid.

---

# 3. Converting String to Number

We use the `Number()` function.

Example:

```javascript
let score = "33"
let valueInNumber = Number(score)

console.log(valueInNumber)
console.log(typeof valueInNumber)
```

Output:

```
33
number
```

---

# 4. Different Cases of Number Conversion

| Original Value | After `Number()` | Explanation                 |
| -------------- | ---------------- | --------------------------- |
| `"33"`         | 33               | Valid number string         |
| `"33abc"`      | NaN              | Invalid numeric string      |
| `true`         | 1                | Boolean converted to number |
| `false`        | 0                | Boolean converted to number |
| `null`         | 0                | Null becomes zero           |
| `undefined`    | NaN              | Undefined cannot convert    |

Example:

```javascript
console.log(Number("33"))
console.log(Number("33abc"))
console.log(Number(true))
console.log(Number(false))
console.log(Number(null))
console.log(Number(undefined))
```

---

# 5. What is NaN?

`NaN` means:

```
Not a Number
```

It appears when JavaScript **fails to convert a value into a valid number**.

Example:

```javascript
let score = "33abc"

let valueInNumber = Number(score)

console.log(valueInNumber)
```

Output:

```
NaN
```

Important:

```
typeof NaN → number
```

Even though it means "Not a Number", JavaScript still treats it as a **special value of the Number type**.

---

# 6. Boolean Conversion

We use the `Boolean()` function.

Example:

```javascript
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)
```

Output:

```
true
```

---

## Boolean Conversion Rules

| Value       | Boolean Result |
| ----------- | -------------- |
| `1`         | true           |
| `0`         | false          |
| `""`        | false          |
| `"text"`    | true           |
| `null`      | false          |
| `undefined` | false          |

Example:

```javascript
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean("Bhawani"))
```

---

# 7. Number to String Conversion

We use the `String()` function.

Example:

```javascript
let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)
```

Output:

```
33
string
```

Explanation:

```
33 → number
String(33) → "33"
```

---

# 8. Practical Example

User input usually comes as a **string**.

Example:

```javascript
let price = "100"

let total = Number(price) + 50

console.log(total)
```

Output:

```
150
```

Because the string `"100"` was converted into a number.

---

# 9. Important Conversion Functions

| Function    | Purpose                  |
| ----------- | ------------------------ |
| `Number()`  | Convert value to number  |
| `Boolean()` | Convert value to boolean |
| `String()`  | Convert value to string  |

---

# 10. Quick Conversion Rules

```
"33" → 33
"33abc" → NaN
true → 1
false → 0
null → 0
undefined → NaN
1 → true
0 → false
"" → false
"text" → true
33 → "33"
```

---

# 11. Example Code for Practice

```javascript
console.log(Number("33"))
console.log(Number("33abc"))
console.log(Number(true))
console.log(Number(false))

console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean("hello"))

console.log(String(33))
console.log(String(true))
```

---

# 12. Key Points to Remember

✔ `Number()` converts values into numbers
✔ `Boolean()` converts values into true or false
✔ `String()` converts values into strings
✔ `NaN` means conversion failed
✔ `typeof NaN` is `"number"`

---

# 13. One Line Summary

```
Type Conversion = Changing one data type into another data type
```