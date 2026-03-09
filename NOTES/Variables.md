# JavaScript Variables – Complete Notes

## 1. What is a Variable?

A variable is a container used to store data values.

Example:

let name = "Bhawani"

Here:

* name → variable
* "Bhawani" → stored value

----------------------------------------------------------------------------------------------------------------------------------

# 2. Ways to Declare Variables in JavaScript --->

JavaScript provides three keywords:

1. var
2. let
3. const

Example:

var a = 10
let b = 20
const c = 30

----------------------------------------------------------------------------------------------------------------------------------

# 3. var (Old Method) --->

Example:

var accountPassword = "12345"


### Characteristics --->

* Can be redeclared
* Can be updated
* Has function scope
* Causes unexpected bugs

Example:

var x = 10
var x = 20

console.log(x)

Output: ---> 20

⚠ Because of these problems, developers usually avoid var.

----------------------------------------------------------------------------------------------------------------------------------

# 4. let (Modern JavaScript) --->

Example:

let accountEmail = "bhawani@gmail.com"


### Characteristics --->

* Cannot be redeclared in the same scope
* Can be updated
* Has block scope

Example (allowed):

let email = "abc@gmail.com"
email = "xyz@gmail.com"


Example (not allowed):

let email = "abc@gmail.com"
let email = "xyz@gmail.com"

Error: --->Identifier has already been declared

----------------------------------------------------------------------------------------------------------------------------------

# 5. const (Constant Variable) ---> 

Example:

const accountId = 144553


### Characteristics --->

* Cannot be redeclared
* Cannot be updated
* Must be initialized during declaration
* Has block scope

Example:

const pi = 3.14
pi = 3.14159

Error: ---> Assignment to constant variable

----------------------------------------------------------------------------------------------------------------------------------

# 6. Updating vs Redeclaring --->

### Updating (Allowed with let and var)

let city = "Bhubaneswar"
city = "Bengaluru"

### Redeclaring (Not Allowed with let)

let city = "Bhubaneswar"
let city = "Delhi"

Error occurs.

----------------------------------------------------------------------------------------------------------------------------------

# 7. Scope in JavaScript --->

Scope means the area where a variable is accessible.

## Block Scope

Variables declared with `let` and `const` only exist inside `{}`.

Example:

```javascript
{
  let a = 10
}

console.log(a)


Output: ---> ReferenceError

----------------------------------------------------------------------------------------------------------------------------------

## Different Scope Example --->

let email = "first@gmail.com"

{
  let email = "second@gmail.com"
  console.log(email)
}

console.log(email)


Output: ---> second@gmail.com
             first@gmail.com

Both variables are different because they are in different scopes.

----------------------------------------------------------------------------------------------------------------------------------

# 8. Undefined Variable --->

If a variable is declared but not assigned a value, it becomes `undefined`.

Example:

let accountState
console.log(accountState)


Output: ---> undefined

----------------------------------------------------------------------------------------------------------------------------------

# 9. Creating Variables Without let/var/const (Bad Practice) --->

Example:

accountCity = "Bhubaneswar"

This creates a global variable automatically.

⚠ This is considered bad practice.

Correct way:

let accountCity = "Bhubaneswar"

----------------------------------------------------------------------------------------------------------------------------------

# 10. Console Methods for Debugging --->

### console.log()

Prints output in console.

Example:

console.log(accountId)

----------------------------
### console.table()

Displays data in table format.

Example:

console.table([accountId, accountEmail, accountPassword])


Output appears in table format inside the console.

----------------------------------------------------------------------------------------------------------------------------------

# 11. Comments in JavaScript --->

### Single-line comment

// This is a comment

### Multi-line comment

/*
This is
a multi-line comment
*/

----------------------------------------------------------------------------------------------------------------------------------

# 12. Best Practices

✔ Prefer const by default
✔ Use let when value needs to change
❌ Avoid var
✔ Always declare variables properly
✔ Use meaningful variable names

Example:

const userId = 123
let userEmail = "user@gmail.com"

----------------------------------------------------------------------------------------------------------------------------------

# 13. Quick Comparison Table --->

| Feature         | var      | let    | const          |
| --------------- | -------- | ------ | -------------- |
| Redeclare       | Yes      | No     | No             |
| Update          | Yes      | Yes    | No             |
| Scope           | Function | Block  | Block          |
| Modern JS Usage | Rare     | Common | Most Preferred |

----------------------------------------------------------------------------------------------------------------------------------

# 14. Simple Rule --->

Use this rule in real projects:

* const → default choice
* let → when value changes
* var → avoid

Example:

const accountId = 144553
let accountEmail = "bhawani@gmail.com"
let accountPassword = "12345"
let accountCity = "Bhubaneswar"