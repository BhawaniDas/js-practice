# JavaScript Date Notes

---

## 1. Creating a Date Object

In JavaScript, dates are created using the **Date object**.

```javascript
let myDate = new Date()
console.log(myDate)
```

Output example

```
2026-03-16T14:20:30.123Z
```

`new Date()` returns the **current date and time**.

---

## 2. Date Formatting Methods

### toString()

Converts date into a **readable string format**.

```javascript
console.log(myDate.toString())
```

Example Output

```
Tue Mar 16 2026 19:50:30 GMT+0530 (India Standard Time)
```

---

### toDateString()

Returns **only the date portion**.

```javascript
console.log(myDate.toDateString())
```

Example Output

```
Tue Mar 16 2026
```

---

### toISOString()

Returns the date in **ISO format**.

```javascript
console.log(myDate.toISOString())
```

Example Output

```
2026-03-16T14:20:30.123Z
```

---

### toJSON()

Returns the date in **JSON format**.

```javascript
console.log(myDate.toJSON())
```

Example Output

```
2026-03-16T14:20:30.123Z
```

---

### toLocaleDateString()

Returns the date based on **local region format**.

```javascript
console.log(myDate.toLocaleDateString())
```

Example Output (India)

```
16/3/2026
```

---

### toLocaleString()

Returns **date and time in local format**.

```javascript
console.log(myDate.toLocaleString())
```

Example Output

```
16/3/2026, 7:50:30 pm
```

---

## 3. Checking Date Type

```javascript
console.log(typeof myDate)
```

Output

```
object
```

Explanation:
Date in JavaScript is an **object type**.

---

# 4. Creating Custom Dates

### Using Year, Month, Day

```javascript
let myCreatedDate = new Date(2026, 0, 23)
console.log(myCreatedDate.toDateString())
```

Output

```
Fri Jan 23 2026
```

Note:

Month index starts from **0**

| Month Number | Month    |
| ------------ | -------- |
| 0            | January  |
| 1            | February |
| 2            | March    |

---

### Adding Time

```javascript
let myCreatedDate1 = new Date(2026, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString())
```

Example Output

```
23/1/2026, 5:03:00 am
```

---

### Creating Date using String (ISO format)

```javascript
let myCreatedDate2 = new Date("2026-01-14")
console.log(myCreatedDate2.toLocaleString())
```

Output

```
14/1/2026, 12:00:00 am
```

---

### Creating Date using MM-DD-YYYY

```javascript
let myCreatedDate3 = new Date("01-14-2026")
console.log(myCreatedDate3.toLocaleString())
```

Output

```
14/1/2026, 12:00:00 am
```

---

# 5. Timestamps

### Current Timestamp

```javascript
let myTimeStamp = Date.now()
console.log(myTimeStamp)
```

Example Output

```
1760000000000
```

Explanation:
Returns **milliseconds since January 1, 1970 (Unix Epoch)**.

---

### Getting Timestamp from Date

```javascript
console.log(myCreatedDate3.getTime())
```

Returns timestamp for that specific date.

---

### Convert Timestamp to Seconds

```javascript
console.log(Math.floor(Date.now()/1000))
```

Explanation

```
Date.now() → milliseconds
/1000 → seconds
Math.floor → remove decimals
```

---

# 6. Getting Date Components

```javascript
let newDate = new Date()

console.log(newDate)
```

---

### Get Month

```javascript
console.log(newDate.getMonth() + 1)
```

Explanation:

`getMonth()` starts from **0**

Example

```
March → 2
+1 → 3
```

---

### Get Day

```javascript
console.log(newDate.getDay())
```

Returns **day of the week**.

| Value | Day       |
| ----- | --------- |
| 0     | Sunday    |
| 1     | Monday    |
| 2     | Tuesday   |
| 3     | Wednesday |
| 4     | Thursday  |
| 5     | Friday    |
| 6     | Saturday  |

---

# 7. Custom Date Formatting

```javascript
newDate.toLocaleString('default', {
    weekday: "long"
})
```

Example Output

```
Tuesday
```

You can format dates using options like:

| Option  | Example   |
| ------- | --------- |
| weekday | "long"    |
| year    | "numeric" |
| month   | "long"    |
| day     | "numeric" |

Example

```javascript
newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
})
```

Output Example

```
Tuesday, March 16, 2026
```

---

# Quick Revision

| Method           | Purpose             |
| ---------------- | ------------------- |
| new Date()       | Create current date |
| Date.now()       | Current timestamp   |
| getMonth()       | Get month           |
| getDay()         | Get weekday         |
| toString()       | Full date string    |
| toLocaleString() | Local date + time   |
| toDateString()   | Date only           |

---
