# JavaScript Objects Notes

---

# 1. Object Creation

Objects are used to store **key-value pairs**.

### Object Literal

```javascript
const JsUser = {
    name: "Hitesh",
    age: 18,
    location: "Jaipur"
}
```

---

### Using Constructor (Singleton Object)

```javascript
const tinderUser = new Object()
```

OR

```javascript
const tinderUser = {}
```

---

# 2. Symbols in Objects

```javascript
const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    [mySym]: "mykey1"
}
```

Explanation:

* Symbols are used as **unique keys**
* Must use **[] bracket notation**

---

# 3. Accessing Object Values

```javascript
console.log(JsUser.email)
console.log(JsUser["email"])
```

Special case:

```javascript
console.log(JsUser["full name"])
```

👉 Use **bracket notation** when:

* Key has spaces
* Key is dynamic
* Using Symbol

---

# 4. Updating Object Values

```javascript
JsUser.email = "hitesh@chatgpt.com"
```

---

# 5. Freezing Object

```javascript
Object.freeze(JsUser)
```

After freezing:

```javascript
JsUser.email = "hitesh@microsoft.com"
```

❌ Changes will **not apply**

---

# 6. Adding Functions in Object

```javascript
JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
```

Calling:

```javascript
JsUser.greeting()
JsUser.greetingTwo()
```

Explanation:

* `this` refers to **current object**

---

# 7. Nested Objects

```javascript
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
```

Access:

```javascript
regularUser.fullname.userfullname.firstname
```

---

# 8. Merging Objects

### Using Object.assign()

```javascript
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({}, obj1, obj2)
```

---

### Using Spread Operator

```javascript
const obj3 = {...obj1, ...obj2}
```

✔️ Modern and preferred method

---

# 9. Array of Objects

```javascript
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "x@gmail.com"
    }
]
```

Access:

```javascript
users[1].email
```

---

# 10. Object Methods

```javascript
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
```

| Method           | Description             |
| ---------------- | ----------------------- |
| Object.keys()    | Returns all keys        |
| Object.values()  | Returns all values      |
| Object.entries() | Returns key-value pairs |

---

### hasOwnProperty()

```javascript
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
```

Returns:

```
true / false
```

---

# 11. Object Destructuring

```javascript
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
```

### Destructuring

```javascript
const {courseInstructor} = course
```

---

### Rename while Destructuring

```javascript
const {courseInstructor: instructor} = course

console.log(instructor)
```

---

# 12. JSON Format

Objects can be written in **JSON format**.

```javascript
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
```

---

### Array of JSON Objects

```javascript
[
    {},
    {},
    {}
]
```

---

# Quick Revision

| Concept         | Use                  |
| --------------- | -------------------- |
| Object Literal  | Create object        |
| Symbol          | Unique key           |
| Dot / Bracket   | Access values        |
| Object.freeze() | Prevent changes      |
| this keyword    | Refer current object |
| Nested Object   | Object inside object |
| Object.assign() | Merge objects        |
| Spread (...)    | Modern merge         |
| Object.keys()   | Get keys             |
| Object.values() | Get values           |
| Destructuring   | Extract values       |

---
