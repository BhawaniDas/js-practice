# JavaScript `filter()` vs `forEach()`

---

# 1. Problem with `forEach()`

```javascript id="a1b2c3"
const coding = ["js", "ruby", "java"]

const values = coding.forEach((item) => {
    return item
})

console.log(values)
```

---

## Output

```id="d4e5f6"
undefined
```

👉 `forEach()` does NOT return anything ❌

---

# 2. Using `filter()` ✅

```javascript id="g7h8i9"
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => {
    return num > 4
})
```

---

## Output

```id="j1k2l3"
[5,6,7,8,9,10]
```

👉 `filter()` returns a **new array**

---

# 3. Same Work using `forEach()`

```javascript id="m4n5o6"
const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
```

👉 Works but ❌ longer & manual

---

# 4. Real Example (Books Data) 📚

```javascript id="p7q8r9"
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
```

---

# 5. Filter by Genre

```javascript id="s1t2u3"
let userBooks = books.filter((bk) => bk.genre === "History")
```

---

## Output

👉 Only History books

---

# 6. Multiple Conditions 🔥

```javascript id="v4w5x6"
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
```

---

## Output

```id="y7z8a9"
[
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }
]
```

---

# 7. Important Points

* `filter()`:

  * Returns new array
  * Needs condition (true/false)

* `forEach()`:

  * No return
  * Used for iteration only

---

# 8. Difference

| Feature      | filter      | forEach   |
| ------------ | ----------- | --------- |
| Return value | ✅ Yes       | ❌ No      |
| Use case     | select data | loop only |
| Code length  | short       | long      |

---

# 9. Quick Revision

| Concept   | Meaning                |
| --------- | ---------------------- |
| filter    | select values          |
| forEach   | loop values            |
| condition | must return true/false |
| new array | created in filter      |

---

# Final Understanding

```javascript id="b1c2d3"
const result = [10,20,30,40]
    .filter(num => num > 20)

console.log(result)
```

👉 Output:

```id="e4f5g6"
[30,40]
```

---