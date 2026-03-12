# JavaScript Strings Notes

## 1. What is a String?

A **string** is used to store text data in JavaScript.

Example:

```
let name = "Bhawani"
let city = 'Chennai'
```

---

## 2. String Concatenation

String concatenation means **joining two or more strings together**.

Example:

```
const name = "Bhawani"
const repoCount = 60

console.log(name + repoCount + " Value")
```

Output:

```
Bhawani60 Value
```

---

## 3. Template Literals

Template literals allow us to **insert variables inside strings** using backticks.

Example:

```
const name = "Bhawani"
const repoCount = 60

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
```

---

## 4. Accessing Characters

Strings behave like arrays, so characters can be accessed using indexes.

Example:

```
const gameName = "bhawani"

console.log(gameName[0])
console.log(gameName.charAt(2))
```

---

## 5. String Property

The **length** property returns the number of characters.

Example:

```
const gameName = "bhawani"

console.log(gameName.length)
```

---

## 6. Case Conversion

Used to convert text into uppercase or lowercase.

Example:

```
const gameName = "bhawani"

console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
```

---

## 7. Searching Methods

Used to find characters inside a string.

Example:

```
const text = "JavaScript"

console.log(text.indexOf("S"))
console.log(text.lastIndexOf("a"))
console.log(text.includes("Java"))
```

---

## 8. Extracting Strings

Used to extract part of a string.

Example:

```
const gameName = "bhaw_ani"

const str1 = gameName.substring(0,4)
const str2 = gameName.slice(-7,4)

console.log(str1)
console.log(str2)
```

---

## 9. Removing Spaces

Used to remove extra spaces from a string.

Example:

```
const name = "   bhawani   "

console.log(name.trim())
console.log(name.trimStart())
console.log(name.trimEnd())
```

---

## 10. Replace Methods

Used to replace characters inside a string.

Example:

```
const url = "google%20.com"

console.log(url.replace("%20","-"))
```

---

## 11. Split Method

The **split()** method converts a string into an array.

Example:

```
const gameName = "bhaw_ani"

console.log(gameName.split("_"))
```

Output:

```
["bhaw","ani"]
```

---

## 12. Other Useful Methods

Example:

```
let word = "Hi"

console.log(word.repeat(3))
console.log(word.concat(" JavaScript"))
```

---

## 13. Important Points

1. Strings are **immutable** in JavaScript
2. Strings use **0-based indexing**
3. `slice()` supports negative values
4. `substring()` does not support negative values
5. `split()` converts string to array