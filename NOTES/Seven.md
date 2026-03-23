# JavaScript `map()` + Chaining + `filter()`

---

# 1. `map()` Method

👉 `map()` is used to **transform each element of an array**

---

## Syntax

```javascript id="a1b2c3"
array.map((item) => {
    return newValue
})
```

---

## Example

```javascript id="d4e5f6"
const myNumbers = [1, 2, 3]

const newNums = myNumbers.map((num) => num + 10)

console.log(newNums);
```

---

## Output

```id="g7h8i9"
[11, 12, 13]
```

---

# 2. Chaining 🔥

👉 Applying multiple methods one after another

---

## Your Code

```javascript id="j1k2l3"
const myNumers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNums);
```

---

# 3. Step-by-Step Execution

### Step 1 → Multiply by 10

```id="m4n5o6"
[10,20,30,40,50,60,70,80,90,100]
```

---

### Step 2 → Add 1

```id="p7q8r9"
[11,21,31,41,51,61,71,81,91,101]
```

---

### Step 3 → Filter ≥ 40

```id="s1t2u3"
[41,51,61,71,81,91,101]
```

---

## Final Output

```id="v4w5x6"
[41,51,61,71,81,91,101]
```

---

# 4. `filter()` Method

👉 Used to **select elements based on condition**

---

## Syntax

```javascript id="y7z8a9"
array.filter((item) => condition)
```

---

## Example

```javascript id="b1c2d3"
const nums = [1,2,3,4,5]

const result = nums.filter((num) => num > 3)

console.log(result)
```

---

## Output

```id="e4f5g6"
[4,5]
```

---

# 5. Difference

| Method | Purpose         |
| ------ | --------------- |
| map    | transform data  |
| filter | select data     |
| reduce | calculate value |

---

# 6. Important Points 🔥

* `map()`:

  * Always returns **new array**
* `filter()`:

  * Returns only **matching elements**
* Chaining:

  * Makes code clean & powerful

---

# 7. Quick Revision

| Concept   | Meaning          |
| --------- | ---------------- |
| map       | change values    |
| filter    | keep values      |
| chaining  | multiple methods |
| new array | always returned  |

---

# Final Understanding

```javascript id="h7i8j9"
const result = [1,2,3,4]
    .map(n => n * 2)
    .filter(n => n > 4)

console.log(result)
```

👉 Output:

```id="k1l2m3"
[6,8]
```

---