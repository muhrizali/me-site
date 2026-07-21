---
# astro: layout
layout: "../../../layouts/PostLayout.astro"

# metatdata
title: "Rust"
description: "A statically typed, compiled and memory-safe programming language with a unique ownership model. I wanted to learn a low-level compiled language for a long time and this seems like good (albiet young) choice."

# dates and times
datePublished: "2025-08-22T08:23:44"
dateModified: "2025-08-22T08:23:44"

# states
isDraft: false
tags:
  - Rust
  - Systems
  - Programming
---

## Introduction
Rust is compiled programming language with high-level interface with features like type-safety, reliability and security baked-in. Its a programming language for empowering users to write reliable and error-free software and applications.

Rust is used in many software development aspects like Web Development through web-assembly, systems development as in writing kernel code for operating systems like Linux, command-line applications and embedded development for IOT.

### Tools and Installation
Rust programming language is installed throught the `rustup` command-line tool. It manages rust installed versions and comes with associated tools for development like build system and package installer. As of writing the command for installing the `rustup` is `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh` for unix-like operating systems.

**Commonly Used Commands:**
- `rustup --version`: Displays rust version version installed.
- `rustup update`: To update `rustup` to latest stable version.
- `rustup self uninstall`: Completely uninstall rust from the system.

### RUST PROGRAM
```rust
fn main() {
  println!("Hello World");
}
```

Rust programs are written in files ending in `.rs` file extension like `main.rs`. We can use any text editor (VS code, Vim, Helix) for writing rust programs as long as it can save the output as a `.rs` file.

**USUAL RUST PROGRAM:**
The `main` function is the the entry point of every Rust program. It is a special function in every rust program that always gets runs/executed first in every program.

Macros are special kind of functions in Rust whose names end in `!` like `println!`. Normal functions are written without `!` at the end. Rust macros and functions are two different things.

Statements in rust programs end with semicolon `;` at the end.

**RUNNING RUST PROGRAM:**
**Compilation:** After we save our rust program as a `main.rs` file we have to compile it before running. Compilation of rust programs takes place with rust compiler called `rustc` that converts code into a binary executable that runs across multiple platforms.

`rustc main.rs`: Compiles our rust program file `main.rs` into single binary executable in the current directory. For unix-like systems the produced executable will be `main` and on Windows it will be `main.exe`.

`./main`: Executes and runs our Rust program from terminal for unix-like systems. Use `.\main.exe` for Windows operating systems.

### CARGO
Cargo is a Rust build system for our projects and a package manager that handles dependencies used in our projects. The libraries that our Rust program needs or depends on are called dependencies. Create a new Rust project with `cargo new <project-name>`.

**PROJECT STRUCTURE:**
`Cargo.toml` File: Contains information about our project and we will use it to configure our project too. The `[package]` section configures our project and `[dependencies]` section lists our project's dependencies. Packages of code are called as crates in Rust.

`src/` Directory: Contains our main source code for the project where we spent most of our time writing code. It already contains `main.rs` file in it.

**CARGO COMMANDS:**
`cargo new hello_cargo`: Creates a new Rust project directory in our current directory with essential files and directories generated. The project directory is initialised with git, contains a `Cargo.toml` file and a `src/` directory.

`cargo build`: Compiles our project code into an executable at `target/debug` for debugging in our project directory. Also creates a new file `Cargo.lock` which keeps track of exact dependencies of our project. We don't need to manually handle it.

`cargo run`: Compiles our project code when source code changes and then also runs/executes the program in a single step. This is more convinient than the `cargo build` command above.

`cargo check`: Checks our project code without compiling, making sure everything in our source code is fine. It is faster than `cargo build` and `cargo run` as it does not compile. Use this to check your code and if everything is working correctly then compile it.

`cargo build --release`: Builds the final executable with applied optimizations for release to public or production environment. This will create the executable in `target/release/` directory in our project directory.

### VARIABLES AND MUTABILITY
**CREATING VARIABLES** 
Variables are created using the syntax `let <name>: <type> = <value>;` consisting of the `let` keyword, name of variable, data type of variable (optional) and initial value assigned to variable. We can omit the `<type>` part, in which case rust tries to infer the data type on its own.

**Examples:**
- `let x = 5;`
- `let x: i32 = 5;`

**IMMUTABLE AND MUTABLE VARIABLES**
Variables are immutable by default in rust. This means once a variable is created with a value, we cannot change (or mutate) its value in our program. For example, we cannot change `x = 6` after declaring `let x = 5;`.

To make a variable mutable we use the `mut` keyword before the variable name like with syntax `let mut <name>: <type> = <value>;`. We are now allowed to change/mutate the value like `y = 12;` after `let mut y = 10;` and there will be no errors. 

The `mut` keyword indicates that other parts our program will be changing this variable value.

**CREATING CONSTANTS**
Constants are created using the `const` keyword, name, type and value like with syntax `const <NAME>: <type> = <value>;`. The type of the variable value must always be annotated while declaring constants. By convention, we always use all uppercase letters with underscores for constants name.
- `const THREE_HOURS: u32 = 60 * 60 * 3;`
- `const SPEED_OF_LIGHT: u32 = 3 * (10 ** 8);`

Constants in Rust are always immutable (cannot be made mutable) and their value cannot be changed after declaration. Hence, we cannot use `mut` with constants. They are valid for the entire time our program runs within the scope (`{...}`) in which they were declared in.

Constants can only be set to a constant expression, not the result that could only be computed at runtime.

### SHADOWING
```rust
fn main() {
	let x = 5;
	let x = x + 1; // shadowed: 6
	
	{
		let x = x * 2; // shadowed in scope: 12
		println!("Value of x: {x}");
	}
	
	println!("Value of x: {x}"); // 6
}
```

**WHAT AND HOW:** We can declare a new variable with the same name as a previous one. The previous variable will be shadowed by the last declared variable and the compiler will use the last declared value for future. This is called shadowing.

When a variable overshadows its previous name, it will take any uses of the variable name to itself until it itself is overshadowed by next declared variable or the scope block `{...}` ends.

**SHADOWING AND MUTATING**
Shadowing is different from making a variable mutable. By using `let` for shadowing, we can perform a few transformations on the value and still have the variable be immutable.

We are effectively creating a new variable when we use `let` (for shadowing a previous one), so we can also change the type of variable value while reusing the same name. This changing of type would not be possible for mutable variables.

### DATA TYPES
Every value in rust is of a certain data type and every value in rust must have a data type. This is because rust is a statically typed language (and not dynamically typed language like Python or JavaScript).

**Syntax For Creating And Annotating Variables:**
- **VARIABLES:** `let (var_name): (type) = (value);` like `let x: i32 = 10;`. 
- **CONSTANTS:** `const (CONST_NAME): (type) = (value);` like `const MAX: u64 = 1000;`.


**Two Kinds Of Data Types:**
1. **SCALAR TYPES:** Consists of single and elementray unit values.
2. **COMPOUND TYPES:** Consists of collection and grouping of values.

### SCALAR TYPES
Scalar data types are the most basic and fundamental types in Rust; these are integers, floats, booleans and characters.

**INTEGERS**
Integers in Rust can be signed or unsigned and have an explicit size in bits.

**Signed Integers:** Represented by `i`, these integers can be positive as well as negative. Signed variants can store numbers from $-(2^{n-1})$ to $(2^{n-1}-1)$ where $n$ is the number of bits that the variant uses. The signed integer variants are of the form `i(n)` like `i8`, `i16`, `i32`, `i64`, `i128` and `isize`.

**Unsigned Integers:** Represented by `u`, these integers can be positive only. Unsigned variants can store numbers from $0$ to $(2^{n-1}-1)$ where $n$ is the number of bits that the variant uses. The unsigned integer variants are of the form `u(n)` like `u8`, `u16`, `u32`, `u64`, `u128` and `usize`.

**Number Separators:** The underscore `_` can be used as a visual separator like `1_000` is `1000` and `1_000_000` is `1000000`.

**FLOATING POINTS**
These are the floating continuous numbers with decimal points in them. There are only two variants for floating types: `f32` and `f64` (the default).

**Basic Arithmetic Operations:** Rust supports basic arithmetic operations with simple common operators: addition -> `+`, subtraction -> `-`, multiply -> `*`, divide -> `/` and modulus (remainder) -> `%`.

**BOOLEANS**
Booleans represents the true and false values in Rust and we use the boolean type `bool` to annotate variables.

Mostly used with control flow statements like conditional statements (if, else) and loop statements (for, while).

**CHARACTERS**
Characters in Rust are a string character which stores 4 bytes of a unicode character. These types are represented by `char` type and uses only single quotes `''` for declaration.

Double quotes are reserved for creating the string types, which are not of `char` type.

For example: `let z: char = 'Z';`

### COMPOUND DATA TYPES
Compound types are data types that can store multiple values into a single type; these are tuples and arrays.

**TUPLES**
Tuple groups together a fixed number of values which can be of different data types into one value. They have fixed size length, which means once declared they cannot grow or shrink in size.

`let values = (500, 6.4, 1);`: We create tuples by writing a comma-seperated list of values inside parentheses `()`. We can also declare the types of each element in the tuple like `let tup: (i32, f64, u8) = (500, 6.4, 1);`.

**Units:** Tuple without any values like `let empt = ();` has a special name called unit. The value and the corresponding type are written as `()`. This represents an empty value or empty return type. Expressions implicitly return unit value when no other value is returned.

**Accessing Elements:** To access the elements of a tuple, Rust uses the dot-notation `.` like `values.0` or `values.2`. The index starts from 0 in Rust.

**Destructuring:** To get the individual values out of a tuple, we can use pattern matching to destructure a tuple value like `let (x, y, z) = tup;`. This way `x`, `y` and `z` refers to first, second and third value respectively of tuple `tup`.

**ARRAYS**
An array is a collection of multiple values of same data type (array elements must be of same type unlike tuples).

They have fixed size length, cannot grow or shrink once declared. Useful when we know that number of elements does not need to be changed like number of months in a year.

`let arr = [2, 4, 6];`: We create arrays by writing a comma-separated list of values inside square brackets. We can also annotate array's type with square brackets, type of each element, a semi-colon `;` and then number of elements in the array like `let iarr: [i32; 5] = [1, 2, 3, 4, 5];`. We can also replicate a value in the array as `let arr_of_3: [3; 5];` which leads to `[3, 3, 3, 3, 3]`.

**Accessing Elements:** To access elements of an array, Rust uses the square-bracket notation `[]` like `arr[0]` or `arr[2]`. The index in array starts from 0 in Rust. Accessing elements which is out of bounds leads to an error.

### FUNCTIONS

**The `main` Function:** A special function in Rust that always gets executed first in our program. It is defined just like normal functions but it has special meaning to the rust compiler.

**Convention:** Rust uses snake case (`snake_case`) for naming of functions and variables.

**CREATING FUNCTIONS**
`fn greet_user() {...}`: Functions in rust are created with the `fn` keyword, followed by a function name `our_fn`, a set of parentheses `()` for parameters and finally curly brackets `{}` which represents the function body.

`greet_user()`: After definition, we can call the function with its name, set of parentheses and parameters if needed like `our_fn()` or `our_fn(3, 4)`.

Examples: defined with `fn say() {...}` and called with `say()`.

**PARAMETERS FOR FUNCTIONS**
Parameters are special variables that are part of the function's signature/identity. They are used to pass data to the function body so that the function can use it in some way. 

**Parameters and Arguments:** Parameters are the data used to describe the inputs given to a function while defining the function. Arguments are the actual inputs passed to the function during function call.

`fn greet_user(alpha: char, age: i32) {...}`: While describing the parameters for functions we must declare the type of each parameter. When adding multiple parameters, separate the parameter declarations with commas.

Example: `fn our_fn(value: i32, unit: char) {...}`

**STATEMENTS AND EXPRESSIONS**
Statements are instructions that perform some action and does not return values. Statements usually end with semi-colon `;`. 
- Creating and assigning variables with `let` is a statement. 
- Function definitions are statements.

Expressions evaluates to a value and thus returns this value. Expressions can be a part of a statement and they do not include the ending semi-colon `;`. Calling a function is an expression just like calling a macro. A new scope block created with curly brackets `{}` is an expression whose value can be catched by outside `let`.

If we add a semi-colon to the end of an expression, you turn it into a statement and it will not return a value.

**FUNCTIONS WITH RETURN VALUES**
Function can return values to the code that calls them. Before returning values we must declare the type of value to be returned after the arrow `->` in the function definition like `fn plus_one(x: i32) -> i32 {...} `.

The final/last expression in the function body is implicitly returned. This expression is not written with ending semi-colon `;`. Like `fn five() -> i32 { 5 }` or `fn add(x: i32, y: i32) -> i32 { x + y }`. We can also return early with a `return` statement like `return 42;`.

### COMMENTS
Comments in Rust starts with two backslashes `//` and continues until the end of line. For mult-line comments use the two backslashes `//` on each line.

### CONTROL FLOW
Control flow consists of the two components in every programming language: Conditional statements and Loops.

**CONDITIONAL STATEMENTS**
Conditional statements represents a conditional construst where we check conditions and execute different code depending on whether the condition is true or not.

1. `if` expressions: Allows us to branch our code based on conditions. These are expressions, they return a value. Syntax for `if` looks like `if condition {...}` (no surrounding brackets on condition).
2. `else if` branch: Optionally add `else if` branch with `if` to check another condition after the `if` condition failed. Syntax for `else if` looks like `if cond_a {...} else if cond_b {...}`.
3. `else` branch: Optionally add `else` after `if` or `else if` to execute the block of code when all the previous conditions failed. Syntax for `else` looks like `if cond_a {...} else {...}`.

The conditions we write with `if` and `else if` should evaluate to only booleans. Otherwise it will lead to error.

Since `if` is an expression we can use it on the right side of `let` like `let num = if cond { 3 } else { 5 };`. 

### LOOPS
Loops allows us to control the repetitions of a specific block of code based on conditions or without conditions. There are three types of loops in Rust: loop, while and for.

1. `loop {...}`: This loop executes a block of code over and over again forever or until we explicitly tell it to stop in the loop body via `break`.
2. `while condition {...}`: Executes the loop based on some condition; the condition is checked after each iteration.
3. `for n in arr {...}`: Allows us to iterate over the items of a collection like a tuple or an array; we use the iterating value `n` in the loop body. We can also loop through a range like `for i in (1..4) {}`.

**Breaking Out of Loops:** `break` keyword in the loop body is used to break out of the current loop. We can also return values while breaking out of the loop like `break 42;`.

**Continuing with Loops:** `continue` keyword in the loop body allows to ignore the remaining code and skip the current iteration of the loop to jump to the next one.

**LOOP LABELS**
The loop flow controls like `break` and `continue` always applies to the current innermost loop at that point. We can label our three types of loops to explicitly break or continue the specified loops.

Useful when we have multiple loops nested inside each other.

`'our_label_a: loop {...}`: Loop labels starts with a single quote `'` and then followed by the label name of our loop; we break through this labelled loop like `break 'our_label_a;`. We can also use with while and for loops like `'our_while: while cond {...}` and `'our_for: for i in (1..6) {...}`.

### MEMORY MANAGEMENT
Stacks and Heaps are structures that manages parts of memory available to your code to use at runtime. They are structured in different ways.

**STACKS**
Stacks are used to store primitive data values that have fixed size. It stores values in Last-In-Firt-Out (LIFO) fashion. We add data to the end of stack and remove data from the end of stack.

All the data values stored in the stack have known and fixed size. Data with unknown size at compile time or size that might change later are stored on the heap.

**HEAPS**
Heaps are used to store complex and compound data values that have unknown size or whose size may change later.

When we put data on the Heap, we request a certain amount of space in the memory. The memory allocator finds an empty spot in the Heap big enough, marks it as being in use and returns a pointer address of this location. This is called allocating on the Heap.

The pointer to the spot location is of a known fixed size and so it is stored in the stack. When we want actual stored data, we follow this pointer to the location on the Heap.

**STACKS VS HEAPS:**
- Pushing and adding data to the stack is faster than allocating data on the Heap.
- Accessing data in the Heap is slower than accessing data on the stack, because we have to follow a pointer address.

### RUST OWNERSHIP MODEL
Ownership in Rust are a set of rules in Rust that govern how a program manages memory during its runtime.

**OWNERSHIP RULES:**
1. Each value at any moment of time will always have an owner.
2. There can only be one owner of a value at a time.
3. When the owner goes out of scope (out of bounds), the value is dropped.

Scopes in Rust are represented by curly brackets `{...}`. Variables are always valid in the scope they are declared in. When the scope ends, the variables with values are dropped (with the drop function).

**Moving:** The procedure of copying a variable value (or pointer) into another variable and then removing/destroying the original variable. The complex types like compound values are always moved by default.
- `let s1 = String::from("hello");`
- `let s2 = s1;` - variable `s1` is moved into `s2` and `s1` is dropped.

**Deep Copy:** The procedure of copying exactly the same variable value (cloning) into another variable. The primitive types like scalar values or tuples with scalar values are always deep copied by default. Deeply copying a complex value is an expensive operation (takes time and resources) and done like `let s2 = s1.clone();` via the `.clone` method. 
- `let s1 = 5;` - creating the variable `s1` with value `5`
- `let s2 = s1;` - variable `s1` is deep copied into `s2` and `s1` is still valid.

**Shallow Copying:** When a variable value is shallow copied into another variable, both the variables point to same pointer location in the memory. This happens in programming languages other than Rust.

The ownership model of Rust lies in basically every aspect of the programming language. Some of the common areas we can point out are:
- **Assignments:** Variables and their values are moved (in case of complex types) or copied (in case of primitive scalar types).
- **Functions:** The ownership of variable values are moved to the functions when they are passed as arguments to these functions in case of complex compound types. The values are simply copied to the functions in case of simple primitive scalar types.
- **Returning Functions:** The ownership of the variable values in the functions are moved to the catching variable when these values are returned from functions in case of complex compound types. The values are simply copied to the variables in case of simple primitive scalar types.

### VALUE REFERENCES
A reference is like a pointer location address in Rust that we can follow to access the data stored at that address. That data might be owned by some other variable. References allows us to refer to some value (with pointer address) without taking the ownership of that value.

**Creating References:** References are created with the ampersand symbol `&` in front of the variable name like `&our_variable`, `&our_reference` or `&our_name`. This notation creates a reference for the variable it points to.

**Borrowing:** The action of creating a reference is called borrowing. In borrowing, we are not passing the ownership of the values to anything, we are just giving them temporary access.

**Immutable and Mutable References:**
- The references created as `&our_reference` are immutable by default just like immutable variables. Immutable references points to immutable variables, which means we cannot modify immutable references like `&our_value`.
- Mutable references can be created like `&mut our_reference`, by adding `&mut` in front of the variable name. Mutable references always points to mutable variables, which can be modified by referring to their values like `&mut our_value`.

**Passing References to Functions:**
1. `fn greet_user(name: &String, age: &i32) {...}`: To pass references to functions as arguments, we first have to describe them in the function definition as a parameters. Add the ampersand symbol `&` in front of the data types of parameters to describe references. 
2. `greet_user(&our_name, &our_age);`: Now we can pass references to our function as arguments in the function call. 

**Passing Mutable References to Functions:**
1. `fn greet_user(name: &mut String, age: &mut i32) {...}`: We describe the mutable references in the function definition as a parameters. Add the ampersand symbol `&mut` in front of the data types of parameters to describe mutable references. 
2. `greet_user(&mut our_name, &mut our_age);`: Now we can pass mutable references to our function as arguments in the function call.

**Rules of References:**
1. We can have any number of immutable references to the same variable. It means that we can have `let a = &x;` as well as `let b = &x;`.
2. We can have only a single mutable reference to a mutable variable. No any other references (immutable or mutable) to the same variable are allowed when we have a mutable reference to it. It means that the statements `let a = &mut x;` and `let b = &x;` leads to error as well as `let a = &mut x;` and `let b = &mut x;`.
3. The scope of a reference starts from where it is first created and continues through the last time that reference is used.
4. A reference created must be valid; we cannot have a reference to a deallocated or a dropped value (a value that does not have any ownership).

## SLICES

Slices allows us to reference of contiuous partition of sequence of elements in a collection. That collection can be a string, an array, a tuple or more. A slice is a kind of reference, it does not take ownership of data.

**Creating Slices:** Slices are created using a range within square brackets like `&coll[start...end]` where `start` is the first positional index and `end` is one more than the last positional index of slice.
- If slice starts from `0` we can omit the starting index `&coll[..10]`
- If slice includes ending we can omit the ending index `&coll[2..]`
- For slicing entire collection we can both starting and ending `&coll[..]`

**STRING SLICES**
String slices allows us to reference a partition of the strings. The data type of the string slices is always `&str`.
- `let s = String::from("Hello World");` - Creating strings
- `let sliceA = &s[1..4];` - Sliced string of type `&str` returns `"ell"`
- `let sliceB = &s[4..7];` - Sliced string of type `&str` returns `"o W"`

**String Literals:** String literals are created by string characters surrounded by double quotes without the `String::from()` function like `"Hello World"`. The data type of the string literals is `&str`, the same type of string slices.
- `let s = "Hello World";` - String literals

**String Slices as Parameters:** String can be parameters of functions by annotating them with `&str` like `fn first_word(s: &str) -> &str {...}`. This allows us to point to all types of references of of strings like slices, `String` and `&str` itself.

**ARRAY SLICES**
Array slices allows us to reference a small subset (part) of the arrays. Since slices are always a reference, the data type of array slices is always `&[(type of values in array)]`.
- `let a = [1, 2, 3, 4];` - Creating arrays
- `let sliceA = &a[1..3];` - Sliced array os type `&[i32]` returns `[2, 3]`

## STRUCTS / STRUCTURES

A struct or structure is a custom data type (like classes in other programming languages) that lets you group together and name multiple related values that make up a meaningful group. A struct is a template blue print for creating our custom type struct instances.

Each struct you define is its own type, even though the fields within the struct might have the same types.

**Creating Structs:** Structs are created through the `struct` followed by its name and then enclosed block `{}` containing various field names and their value types. A struct's name should describe the significance of the pieces of data grouped together.
- `struct User { active: bool, name: String, age: i32 }`
- `struct Dog { species: String, age: i32 }`

**Creating Instances from Structs:** After defining our structs, we can create instances of structs by simply using the struct name followed by the field values in the enclosed block `{}` (their order does not matter). If we know that we will be changing or modifying the fields later, we should create a mutable instance of the struct.
- `let userA = User { active: true, name: String::from("Mob"), age: 34 }` - Creating an immutable instance of a struct, we cannot change the field values later.
- `let mut userA = User { active: true, name: String::from("Mob"), age: 34 }` - Creating a mutable instance of a struct, allows us to modify the field values later.

**Accessing Fields:** We use the dot notation `.` to get the fields from an instance of struct like `struct_inst.field_name`.
- `userA.active` - Getting `active` field from struct instance `userA`

**Modifying Fields:** To modify the fields of a struct instance, we first access the field through dot notation and then change it through assignment operator `=` like `struct_inst.field_name = new_value`.
- `userA.active = false` - Changing `active` field from struct instance `userA`

**STRUCT BUILDER FUNCTION**
Struct builder function is the function to create a new instance of a struct. As with any expression, we can construct a new instance of the struct as the last expression in the function body. It allows us to add default values for fields. I makes sense to name function parameters same as the struct fields.
- `fn build_user(name: String, age: i32) -> User { User {...} }`
- `fn build_dog (name: String, species: String) -> Dog { Dog {...} }`

**Field Init Syntax:** A shorthand that allows us to fill the field values in the struct builder function simply through their name like `User {active: true, email, username, count: 1}` where `email` and `username` will take values from function arguments.

**Struct Update Syntax:** A shorthand that allows us to update and fill the field values inside a struct from another struct instance through `..` like `let user2 = User { name: String::from("Muhriz"), ..user1 }`. 
- The `..user1` should come last inside the struct to specify that any remaining fields should get their values from the corresponding fields in `user1`.
- Struct update syntax uses assignment operator `=` to move the data. Therefore, we cannot use the struct instance used for updating after that (`..user2`).

**TUPLE STRUCTS**
Tuple structs are also structs that have the added meaning of their struct name but does not have any names associated with their fields, they just have the types for their fields.

**Creating Tuple Structs:** Tuple structs are created through the `struct` keyword, the struct name followed by the types in the tuple (in parentheses) like `struct Color(i32, i32, i32);`.
- `struct Point(f64, f64, f64);`

**Creating Instances of Tuple Structs:** Instances of tuple structs can be created by using the name of tuple followed by a tuple of values, corresponding to the same types as defined for struct like `let black = Color(0, 0, 0);`.
- `let origin = Point(0.0, 0.0, 0.0);`

**UNIT-LIKE STRUCTS**
We can also define structs that does not have any fields. These are called unit-like structs because they are similar to `()` unit type. Unit-like structs can be useful when you need to implement a trait on some type but don't have any data to store in the type itself.
- `struct AlwaysEqual;`
- `struct AlwaysGreaterThan;`

We can create instances of unit-like structs simply without any fields or values like `let subject = AlwaysEqual;`.

#TODO adding derived debugging trait

what are struct methods
**STRUCT METHODS**
Methods are just like functions but they are defined in the context of a struct (an enum or a trait) and their first parameter is always `self`. The keyword `self` represents the instance of the struct that the method is called upon.

**Creating Methods:** All methods for a struct are created in the `impl` (implementation) block. The implementation blocks are created through `impl` keyword, the struct name followed by the code block `{}` for methods.



creating methods for structs
- method signatures shorthand (self and Self)
- when to use `&self` and `&mut self` (only `self` is rare)
calling methods on the structs
creating methods with same names as fields

associated functions and methods
calling associated functions on structs

multiple impl blocks

## ENUMERATIONS

what are enumerations
meaning of "to enumerate"


## REFERENCES
