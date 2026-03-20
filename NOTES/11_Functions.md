# JavaScript Functions Notes

---

# 1. What is a Function?

A function is a **block of code** designed to perform a specific task.

---

## Example

```javascript id="zj3k2p"
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
```

Calling function:

```javascript id="w6c1yx"
sayMyName()
```

---

# 2. Function with Parameters

```javascript id="x0u9qn"
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
```

---

# 3. Returning Values

```javascript id="j1h9rm"
function addTwoNumbers(number1, number2){
    return number1 + number2
}
```

```javascript id="t3n9p8"
const result = addTwoNumbers(3, 5)
```

Output:

```
8
```

👉 `return` sends value back to where function is called.

---

# 4. Default Parameters

```javascript id="v8d6rs"
function loginUserMessage(username = "sam"){
    return `${username} just logged in`
}
```

Example:

```javascript id="p4z8kx"
loginUserMessage()        // sam just logged in
loginUserMessage("hitesh") // hitesh just logged in
```

---

# 5. Condition Handling

```javascript id="l1k7xy"
function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
```

👉 `!username` checks if value is **undefined / empty**

---

# 6. Rest Operator (...)

Used to handle **multiple arguments**.

```javascript id="m5a2jd"
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
```

Example:

```javascript id="d7c8hp"
calculateCartPrice(200, 400, 500, 2000)
```

Output:

```
[500, 2000]
```

Explanation:

* `val1 = 200`
* `val2 = 400`
* `...num1 = [500, 2000]`

---

# 7. Passing Objects to Functions

```javascript id="v0j8lq"
const user = {
    username: "hitesh",
    price: 199
}
```

Function:

```javascript id="g3w9kz"
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
```

Call:

```javascript id="x9v2mt"
handleObject(user)
```

OR directly:

```javascript id="y4p6bn"
handleObject({
    username: "sam",
    price: 399
})
```

---

# 8. Passing Arrays to Functions

```javascript id="a8c1xm"
const myNewArray = [200, 400, 100, 600]
```

Function:

```javascript id="k3n2rd"
function returnSecondValue(getArray){
    return getArray[1]
}
```

Call:

```javascript id="r2m7pl"
returnSecondValue(myNewArray)
```

OR

```javascript id="u6p4zs"
returnSecondValue([200, 400, 500, 1000])
```

Output:

```
400
```

---

# 9. Key Concepts

| Concept             | Explanation               |
| ------------------- | ------------------------- |
| Function            | Block of reusable code    |
| Parameters          | Inputs to function        |
| Arguments           | Values passed to function |
| return              | Sends value back          |
| Default Parameter   | Predefined value          |
| Rest Operator (...) | Collect multiple values   |
| Object as Argument  | Pass object to function   |
| Array as Argument   | Pass array to function    |

---

# Quick Revision

| Function Feature     | Use                 |
| -------------------- | ------------------- |
| sayMyName()          | Simple function     |
| addTwoNumbers()      | Parameters + return |
| loginUserMessage()   | Default + condition |
| calculateCartPrice() | Rest operator       |
| handleObject()       | Object handling     |
| returnSecondValue()  | Array handling      |

---
