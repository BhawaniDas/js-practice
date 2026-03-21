# JavaScript `reduce()` Method

---

# 1. What is `reduce()`?

👉 `reduce()` is used to **reduce an array into a single value**

Examples:

* Sum of numbers
* Total price
* Count values

---

## Basic Syntax

```javascript id="a1b2c3"
array.reduce((accumulator, currentValue) => {
    return result
}, initialValue)
```

---

# 2. Example (Sum of Array)

```javascript id="d4e5f6"
const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);
```

---

## Output

```id="g7h8i9"
6
```

---

# 3. How It Works 🔥

| Step | acc | curr | result |
| ---- | --- | ---- | ------ |
| 1    | 0   | 1    | 1      |
| 2    | 1   | 2    | 3      |
| 3    | 3   | 3    | 6      |

👉 Final result → 6

---

# 4. Detailed Version

```javascript id="j1k2l3"
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
```

---

## Output

```id="m4n5o6"
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
```

---

# 5. Real Example (Shopping Cart) 🛒

```javascript id="p7q8r9"
const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
```

---

## Output

```id="s1t2u3"
20996
```

---

# 6. Important Terms

| Term              | Meaning         |
| ----------------- | --------------- |
| acc (accumulator) | stores result   |
| curr              | current element |
| initial value     | starting value  |

---

# 7. Why Use `reduce()`?

👉 Best for:

* Total sum
* Calculations
* Transforming array into single value

---

# 8. Common Mistake ❌

```javascript id="v4w5x6"
myNums.reduce((acc, curr) => acc + curr)
```

👉 No initial value → can cause bugs

---

# 9. Quick Revision

| Concept | Meaning       |
| ------- | ------------- |
| reduce  | single output |
| acc     | result holder |
| curr    | current value |
| 0       | initial value |

---

# 10. Final Understanding

```javascript id="y7z8a9"
const nums = [10, 20, 30]

const total = nums.reduce((acc, curr) => acc + curr, 0)

console.log(total)
```

👉 Output:

```id="b1c2d3"
60
```

---
