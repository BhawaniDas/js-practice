# JavaScript Operators & Comparisons Notes

---

# 1. Arithmetic Operators

These operators perform **mathematical operations**.

| Operator | Meaning             | Example  | Result |
| -------- | ------------------- | -------- | ------ |
| `+`      | Addition            | `2 + 2`  | 4      |
| `-`      | Subtraction         | `5 - 2`  | 3      |
| `*`      | Multiplication      | `3 * 4`  | 12     |
| `/`      | Division            | `10 / 2` | 5      |
| `%`      | Modulus (remainder) | `10 % 3` | 1      |
| `**`     | Exponent (power)    | `2 ** 3` | 8      |

Example:

```javascript
console.log(2 + 2)
console.log(5 - 2)
console.log(3 * 4)
console.log(10 / 2)
console.log(10 % 3)
console.log(2 ** 3)
```

---

# 2. Unary Operator (Negative Value)

The `-` operator can convert a number into its negative value.

Example:

```javascript
let value = 3
let negValue = -value

console.log(negValue)
```

Output:

```
-3
```

---

# 3. String Concatenation

The `+` operator is also used to **join strings**.

Example:

```javascript
let str1 = "Hello"
let str2 = " Bhawani"

let str3 = str1 + str2

console.log(str3)
```

Output:

```
Hello Bhawani
```

---

# 4. JavaScript Type Coercion

JavaScript sometimes **automatically converts data types** when using `+`.

Example:

```javascript
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2")
```

Output:

```
12
12
12
```

Explanation:

```
Number → converted to String
```

---

# 5. Important Evaluation Rule

JavaScript evaluates expressions **from left to right**.

Example:

```javascript
console.log("1" + 2 + 2)
```

Output:

```
122
```

Step:

```
"1" + 2 → "12"
"12" + 2 → "122"
```

Example:

```javascript
console.log(1 + 2 + "2")
```

Output:

```
32
```

Step:

```
1 + 2 = 3
3 + "2" = "32"
```

---

# 6. Boolean Conversion Using +

Example:

```javascript
console.log(+true)
console.log(+false)
```

Output:

```
1
0
```

Explanation:

```
true → 1
false → 0
```

---

# 7. Comparison Operators

These operators compare two values.

| Operator | Meaning               |
| -------- | --------------------- |
| `>`      | Greater than          |
| `<`      | Less than             |
| `>=`     | Greater than or equal |
| `<=`     | Less than or equal    |
| `==`     | Equal                 |
| `!=`     | Not equal             |

Example:

```javascript
console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)
```

Output:

```
true
true
false
false
true
```

---

# 8. String and Number Comparison

JavaScript automatically converts **strings into numbers** during comparison.

Example:

```javascript
console.log("2" > 1)
```

Output:

```
true
```

Explanation:

```
"2" → converted to number → 2
2 > 1 → true
```

---

# 9. Special Case with null

Example:

```javascript
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
```

Output:

```
false
false
true
```

Explanation:

```
Comparisons convert null to 0
But equality check behaves differently
```

---

# 10. undefined Comparison

Example:

```javascript
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)
```

Output:

```
false
false
false
```

Explanation:

```
undefined cannot convert to a valid number
```

---

# 11. Equality vs Strict Equality

## Loose Equality

```
==
```

It **converts data types before comparison**.

Example:

```javascript
console.log("2" == 2)
```

Output:

```
true
```

Because:

```
"2" → converted to number
```

---

## Strict Equality

```
===
```

It checks **both value and datatype**.

Example:

```javascript
console.log("2" === 2)
```

Output:

```
false
```

Because:

```
string ≠ number
```

---

# 12. Best Practice

Always use:

```
===
```

Instead of:

```
==
```

Because strict equality **avoids unexpected type conversion**.

---

# 13. Important JavaScript Rules

```
"1" + 2 = "12"
"1" + 2 + 2 = "122"
1 + 2 + "2" = "32"

true → 1
false → 0

null → treated as 0 in comparisons
undefined → always false in comparisons

=== → checks value + datatype
```

---

# One Line Summary

```
Operators perform calculations while comparison operators compare values.
```