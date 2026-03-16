# JavaScript Arrays Notes

---

# 1. Creating Arrays

Arrays are used to **store multiple values in a single variable**.

### Example

```javascript
const myArr = [0, 1, 2, 3, 4, 5]
```

Another way to create arrays:

```javascript
const myHeros = ["ShaktiMan", "SpiderMan", "SuperMan"]

const myArr1 = new Array(1, 2, 3, 4)
```

Accessing array elements:

```javascript
console.log(myArr[1])
```

Output

```
1
```

---

# 2. Array Methods

## push()

Adds element to the **end of the array**.

```javascript
myArr.push(6)
myArr.push(7)
```

Example

```
[0,1,2,3,4,5] → [0,1,2,3,4,5,6,7]
```

---

## pop()

Removes the **last element**.

```javascript
myArr.pop()
```

Example

```
[0,1,2,3,4,5,6] → [0,1,2,3,4,5]
```

---

## unshift()

Adds element to the **start of the array**.

```javascript
myArr.unshift(9)
```

Example

```
[0,1,2,3] → [9,0,1,2,3]
```

---

## shift()

Removes the **first element**.

```javascript
myArr.shift()
```

Example

```
[9,0,1,2,3] → [0,1,2,3]
```

---

# 3. Searching Methods

## includes()

Checks if a value **exists in the array**.

```javascript
console.log(myArr.includes(9))
```

Output

```
false
```

---

## indexOf()

Returns the **index position** of the element.

```javascript
console.log(myArr.indexOf(9))
```

Output

```
-1
```

Explanation

If the element **does not exist**, it returns **-1**.

Example

```javascript
console.log(myArr.indexOf(3))
```

Output

```
3
```

---

# 4. join()

Converts array into a **string**.

```javascript
const newArr = myArr.join()
```

Example

```
[0,1,2,3,4,5] → "0,1,2,3,4,5"
```

Code

```javascript
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)
```

Output

```
[0,1,2,3,4,5]
"0,1,2,3,4,5"
string
```

---

# 5. slice() vs splice()

These methods extract elements from arrays.

---

# slice()

Returns a portion of array **without modifying original array**.

```javascript
console.log("A", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
```

Explanation

```
slice(start, end)
```

* Start index included
* End index not included

Example

```
[0,1,2,3,4,5]

slice(1,3) → [1,2]
```

Original array remains

```
[0,1,2,3,4,5]
```

---

# splice()

Removes elements **and modifies original array**.

```javascript
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)

console.log(myn2)
```

Example

```
Array → [0,1,2,3,4,5]

splice(1,3) → [1,2,3]
```

Original array becomes

```
[0,4,5]
```

---

# 6. Merging Arrays

## push() with array

```javascript
const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

marvelHeros.push(dcHeros)
```

Result

```
["Thor","Ironman","Spiderman",["Superman","Flash","Batman"]]
```

Array goes **inside another array**.

---

## concat()

Merges arrays and returns **new array**.

```javascript
const allHeros = marvelHeros.concat(dcHeros)
```

Output

```
["Thor","Ironman","Spiderman","Superman","Flash","Batman"]
```

---

## Spread Operator (...)

Modern way to merge arrays.

```javascript
const allNewHeros = [...marvelHeros, ...dcHeros]
```

Output

```
["Thor","Ironman","Spiderman","Superman","Flash","Batman"]
```

---

# 7. Flattening Arrays

Sometimes arrays contain **nested arrays**.

Example

```javascript
const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
```

Using **flat()**

```javascript
const realAnotherArr = anotherArr.flat(Infinity)
```

Output

```
[1,2,3,4,5,6,7,6,7,4,5]
```

Explanation

`Infinity` means flatten **all nested levels**.

---

# 8. Array Utility Methods

## Array.isArray()

Checks if value is an **array**.

```javascript
console.log(Array.isArray("Bhawani"))
```

Output

```
false
```

---

## Array.from()

Converts values into **arrays**.

```javascript
console.log(Array.from("Bhawani"))
```

Output

```
["B","h","a","w","a","n","i"]
```

Interesting case

```javascript
console.log(Array.from({name:"Bhawani"}))
```

Output

```
[]
```

Because it **cannot directly convert object to array**.

---

## Array.of()

Creates array from **individual elements**.

```javascript
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
```

Output

```
[100,200,300]
```

---

# Quick Revision

| Method          | Purpose                        |
| --------------- | ------------------------------ |
| push()          | Add element at end             |
| pop()           | Remove last element            |
| unshift()       | Add element at start           |
| shift()         | Remove first element           |
| includes()      | Check element exists           |
| indexOf()       | Find index                     |
| join()          | Convert array to string        |
| slice()         | Extract without changing array |
| splice()        | Extract and modify array       |
| concat()        | Merge arrays                   |
| spread (...)    | Modern array merge             |
| flat()          | Flatten nested arrays          |
| Array.isArray() | Check if array                 |
| Array.from()    | Convert to array               |
| Array.of()      | Create array from values       |

---
