---
# astro: layout
layout: "../../../layouts/PostLayout.astro"

# metatdata
title: "C-Sharp"
description: "An extremely mature, statically typed, highly versatile programming language created by Microsoft. I wanted to learn and get into it from some time as I have heard very good things about it. Also I wanted to learn a mature compiled language (started this after rust which has fairly young ecosystem)."

# dates and times
datePublished: "2026-03-04T14:14:04"
dateModified: "2026-03-04T14:14:04"

# states
isDraft: false
tags:
  - C-Sharp
  - Programming
  - .NET
---

## THE C# PROGRAMMING LANGUAGE

Human language is imprecise, flexible and open to various interpretation. The binary instructions computers use formed from 0 and 1 are precise, fixed and accurate but very different from human's. Programming languages allows to bridge the gap between the two, they are precise enough for a computer to run and clear enough for a human to understand.

C# is a general-purpose programming language designed to solve virtually any problem equally well. We can use it to create games, desktop programs, web applications, mobile apps and more.

C# strikes a balance between power and ease of use. It is in the same family of languages as C, C++ and Java. It is a statically typed, garbage collected, object-oriented programming language with imperative, functional and even-driven aspects.

## DOTNET PLATFORM

C# is built upon a thing called .NET. The .NET is the entire ecosystem surrounding C# programs and the programmers that use it. It can be thought of as a framework, platform and runtime environment for C#.

.NET consists of pile of collection of code that we can use it in our own programs to carry out essential tasks. This collection is called _Base Class Library_ (BCL).

.NET ecosystem is shared by other programming languages aside from C#. These are Visual Basic, F# and PowerShell.

## TOOLS

An integrated development environment (IDE) is a combination of tools into a single application designed to streamline the writing and working with program files. Two popular tools are: 
- Visual Studio (Windows only) and 
- Visual Studio Code (all platforms).

**The `dotnet` Package:** We also need the .NET platform installed on our system to initialise and work with C# (or other languages of .NET). For this we need to install the `dotnet` package for our system (Windows, macOS, Linux).

## PROJECTS

A C# project is combination of two things: the C# source code files, the program you write in C# language and the project configuration, instructions for computer on how to compile or translate C# code into the binary output that the computer can run. The result is either a ".exe" or ".dll" file depending on project configuration which the computer understands and executes.

Both, the C# source code files and project configuration are stored as simple text files that we can replicate or manipulate. Source code files are written with the ".cs" extension and project's configuration uses the ".csproj" extension.

The computer cannot run C# code itself, it can only run low-level binary instructions. So, we need to compile it and transform it into binary code. This transformation is called compiling done by a special program called a compiler.

**Templates:** Most C# programs are started by being generated from one of several project templates. Templates are standard project starting points, it helps us get right configuration for most common project types.

**Projects and Solutions:** Larger solutions can be formed from more than one projects. For these larger solutions, adding them to the same "solution" file makes sense. But for smaller projects, it is simpler to just put projects as is into their own directory.

**Project Commands:**
- `dotnet new sln --name "solution-name"`: Creates the named solution file for adding projects.
- `dotnet new <template> --name "project-name"`: Creates the project directory with name.
- `dotnet sln "solution-name.sln" add "project-name"`: Adds the project to our solution file.

**Execution Commands:**
In our project directory,
- `dotnet run`: Compiles and executes our project.
- `dotnet build`: Compiles our project final build release.

## BASICS: THE FIRST PROGRAM
```cs
// File: Program.cs
// First "Hello World" program
Console.WriteLine("Hello World!");
```

Every programming language has its own distinct unique structure, its own set of rules that describe how to make a working program. This set of rules is called the _language's syntax_. C# code like the one above also has specific syntax that we have to follow to make programs work.

**Identifiers:** A name that allows us to refer to some existing code element. The `Console` and `WriteLine` are identifier names. As we build code elements of our own, we would also pick names for them as well.

**Expressions:** Expression are bits of code that process or evaluate to some value and gives it back. We use same word in Math to refer to something like `3 + 4` or `-2 * 4.5`. Expressions describe how to produce a value from smaller elements. C# uses expressions heavily, anywhere a value is needed an expression can be put in its place.

**Statements:** A statement is a single unit step or command for computer to run that consists of one or more expressions. Most C# statements end with a semicolon `;`. The entire line `Console.WriteLine(...);` is a statement.

**Whitespaces:** C# ignores whitespaces (spaces, tabs, newlines) as long as it can tell where one thing ends and the next begins. Therefore, we can write `Console.WriteLine("Hello");` as `Console  .  WriteLine ( "Hello"  );`.

## HEIRARCHICAL ORGANIZATION

Code elements like `Console` and `WriteLine` are organized heirarchically, the `Console` acting like a container and `WriteLine` one of its members or children. The dot operator `.` between them is called the member access operator to access the members of container `Console`.

**CLASSES AND METHODS**
Named code elements come in various categories. Here `Console` is a class and `WriteLine` is its method. Methods are only available through their classes, like we cannot call `WriteLine` on its own without its assoicated class `Console`.

Classes are primarily composed of two things: (1) the data they need to do their job (called fields) and (2) the tasks they can perform (called methods). The act of calling a method to run it is called method invocation or method call and is done by writing method name with set of parentheses `()`.

**NAMESPACES** 
Just like the methods lives inside containers called classes, classes also lives inside broader container called namespaces. Namespaces are code organization tools which contains collection of closely-related classes. The class `Console` lives inside the namespace called `System`.

**BASE CLASS LIBRARY:** The entire collection of organized namespaces, classes and methods which stores all of them together is called the Base Class Library (BCL). The Base Class Library contains many namespaces, each with many classes and each with many methods. It provides every C# program with set of fundamental building blocks.

**PROGRAM AND MAIN METHOD**
In the above program we have just used the top level statements to write our program to be executed. Behind the scenes, C# uses the concept of `Program` class and `Main` method within it. 

This `Main` method is the every program's entry point, the code that will be automatically run when the computer runs our program. Other methods will not be called if the `Main` method does not call them.

**BUILD CONFIGURATIONS**
The compiler uses your source code files and configuration data to produce the compiled output that the computer can run. 

Configuration data is organized into different build configurations, each providing different settings to compiler about building our program. The two configurations defined by default are: the "Debug" configuration and the "Release" configuration.

The "Release" configuration has optimizations turned for final production release whereas "Debug" configurations are used to debug our program during development.

## TRADITIONAL ENTRY POINT

**Top-Level Statements:** Writing your code statements directly in the file `Program.cs` refers to top-level statements. These statements and code will are placed in designated method inside a designated class behind the scenes which is responsible for being the entry-point of the project.

**THE ENTRY POINT** 
The part of the program that executes automatically when the project is run (executed) is called the entry-point of the project. The `Main` method inside the `Program` which is contained inside the `Program.cs` file is considered the traditional entry-point most C# projects.

**Program Class:** We create a regular or internal `Program` class inside the file `Program.cs`. The class can optionally be a part of the namespace with same name as the project like `namespace OurProject { internal class Program { ... } }`.

**Main Method:** After creating the `Program` class, we create a static method inside the class that returns nothing like `static void Main() {...}`. The method can consist of optional CLI parameters represented as array of strings like `static void Main(string[] args) {...}`.

## COMMENTS
Comments are bits of text placed in your program that the compiler and the computer ignores. They can provide information to help programmers understand or remember what the code does.

**SINGLE LINE COMMENTS:** We create single line comments by placing two forward slashes `//` before the text.
- `// This comment spans a single line`
- `// A single comment that overexplains`

**MUTILINE COMMENTS:** We create multi-line comments by enclosing the text between `/*` and `*/`. Comments created like this can span multiple lines starting with `/*` and ending with `*/`.
- `/* This comment spans multiple lines */`
- `/* Useful for documenting variables or methods */`

**TIP:** Create comments that adds value to your code. Don't mention things that can be inferred easily from the code itself.

## VARIABLES
Storing data and information in temporary memory is a crucial part of building efficient applications and programs. This is the "volatile" memory called RAM that sticks around while our program is running but is wiped out when the program is done or the computer reboots.

A computer's memory is very huge. That is why, each memory location has a unique numeric memory address which can be used to access any specific location's contents.

**Variables:** Variables are named locations for data which is stored in memory. They allows us to store data (like text or numbers) with a name and to be able to access it later. A variable consists of three parts in C#: its name, type and contents or value.

**Declaration of Variables:** The first step in creating a variable is to declare it. It means we are defining a variable (that there is one), technically reserving a spot for it in memory. We declare a variable only once and not after that. 

**Assignment of Variables:** After declaring a variable, we can assign values or data to it. It means we are giving some value to variable. The first time we do this is called initialization. Variables must be declared before they can be assigned. Also they can be assigned many times after declared once.

**CREATING VARIABLES**
**Declaration:** The syntax for declaring a variable is `[type] [name];`. We must know the type and name of variable before we can declare it.
- `int age;`
- `string message;`

**Assignment:** The syntax for assigning values to variables after it has been declared is `[variableName] = [initialValue];`. The equals `=` is the assignment operator used to assign values.
- `age = 18;`
- `message = "Hello";`

**Declaration and Assignment:** The declaration and assignment of variables can occur on the same line with the syntax `[variableType] [variableName] = [initialValue];`. 
- `int age = 18;`.
- `string message = "Hello";` 

If we are creating many variables of the same type, we can declare and/or assign them simulaneously like `int a, b = 10, c;`.

Variable assignments are expressions that evaluate and return whatever the assigned value was. It means we can assign the same value to many variables at once like `a = b = c = 10;`.

**VARIABLE NAMING RULES**
1. The names of variables can start with a letter or an underscore `_` character.
2. After the first letter, we can include numeric digits to our variable name.
3. We cannot name a variable after some reserved C# language keywrod. For example, `string` and `int` are two of the keywords reserved by C#.
4. The two naming conventions followed in C# are lower camel case and upper camel case (also called as pascal case). Most C# programs use `lowerCamelCase` for variable names and `UpperCamelCase` for everything else.

## C# TYPES SYSTEM

Types of variables and their values matter in C#. Therefore, the types of variables and values assigned to them must match each other appropriately.

C# has some built-in types also called primitive types that acts as the building blocks or foundation for producing more complex types.

Each type defines its own rules for representing values in binary. Different types are not interchangeable. You cannot take bits and bytes meant to represent one type and reinterpret those bits and bytes as another type to get meaning out of it.

We know the syntax for declaring and assigning variables with types as `[type] [variableName] = [initialValue];`. 

Each type in C# has a corresponding intrinsic type in the `System` namespace. There are no differences in using our keyword type annotation `int` or the intrinsic type `Int32` (or `System.Int32`), they are one and same.

**Two Kinds of Types:** C# consists of two kinds of data types in its type system: Value Types and Reference Types.

**VALUE TYPES**
These data types contain their data right there in place, have a known fixed size and store their values on the stack. 

Value types are always copied by value, their whole value are copied when assigned to other variables or passed to methods.

Value types follows value semantics, which means two objects are equal only if their values are equal.

These are simple primitive types; all integer types, all floating point types, booleans and characters are value types.

**REFERENCE TYPES**
The data types of variables which stores a reference pointer to their value, have variable or arbitrary size and store their values on the heap are called reference types.

Reference types are always copied by reference, only the reference address is copied when assigned to other variables or passed to methods.

Follows reference semantics, which means two objects are equal only if they have the same reference, that is they point to the same object.

These are complex compound types; strings, arrays, lists, dictionaries, other data objects and our created classes.

## INTEGER TYPES

Integers are used to represent mathematical integer numerical values (without the decimal part). There are total 8 different integer types which allows you to store smaller number taking small memory to bigger numbers which takes more memory. 

**Signed Integers:** Integers which can be negative as well as positive. There are four types of signed integers in the order of increasing range (magnitude):
- `sbyte` - `System.SByte`
- `short` - `System.Int16`
- `int` - `System.Int32`
- `long` - `System.Int64`

**Unsigned Integers:** Integers which can be positive only. There are four types of unsigned integers in the order of increasing range (magnitude):
- `byte` - `System.Byte`
- `ushort` - `System.UInt16`
- `uint` - `System.UInt32`
- `ulong` - `System.UInt64`

TODO: See the reference for their ranges, their storage bits and minimum and maximum values.

**EXAMPLES:**
- `sbyte aSingleByte = 34;`
- `int scorePoints = 100;`
- `ulong population = 2040956;`

**Digits Separator:** We can use underscore `_` characters to separate the long numbers like `100_000_000` in C#. These can appear anywhere in the middel of numbers.

**Choosing Appropriate Types:** We should carefully consider the possible range of values we might want for any variable and then pick the smallest (to save memory) that can fit the intended range.

**BINARY AND HEXADECIMALS LITERALS**
- To write the numbers using base 2 (binary digits) we can start our number with `0b` to represent a binary literal like `int thirteen = 0b00001101;`.
- To write the numbers using base 16 (0 to 9 and then A to F) we can start our number with `0x` to represent a hexadecimal literal like `int thirteen = 0xFF00FF;`.

## FLOATING POINT NUMBERS

Floating point numbers are used to represent decimal point numbers or continuous real numbers in mathematics.

There are three types for floating point numbers in C#. The `float` type uses 4 bytes, `double` uses 8 bytes and `decimal` uses 16 bytes to store the floating numbers.
- `float` - `System.Single`
- `double` - `System.Double`
- `decimal` - `System.Decimal`

**Literals Suffixes**
- `float` type numbers are represented by adding `f` or `F` at the end as suffix like `3.4f` or `3.4F`.
- `decimal` type numbers are represented by adding `m` or `M` like `3.4m` or `3.4M`. 
- `double` type numbers are represented by leaving off any suffixes out like `3.4`.

**Scientific Notation:** To represent very huge numbers like `6.022 * 10^23` we can use the `e` or `E` in the number like `6.022e23`.

**MATHEMATICAL OPERATIONS**
An operation is a calculation that takes usually two or more inputs and produces a single result by computing them somehow. Each particular operator symbol indicates how the numbers are to be combined (or computed). The input values or literals that an operation uses are called operands.
- In the operation `2 + 3`, `+` is an operator while `2` and `3` are operands.

Binary operations are operations which takes two operands while unary operations only needs one operand (acts on only one value).
- **Basic Arithmetic Operators:** `+` for addition, `-` for subtraction, `*` for multiplication, `/` for division.
- **Modulus Operator:** Use `%` for modulus/mod operation to compute the remainder when two numbers are divided like `5 % 2` which returns `1`.
- **Unary Operators:** `+` and `-` can be used as binary operators as well as unary operators like `+a` will return positive `a` and `-a` will return negative `a` (`a` is a numerical value).

**Update Variables:** To update existing variables with values we can use compound assignment operators or modify in place operators `+=`, `-=`, `*=`, `/=` and `%=` like `a += 3` which will increment `a` by `3` just like `a = a + 3`.

**Increment and Decrement Operators:** Use increment operator `++a` (or `a++`) to increment variables by `1` and decrement operator `--a` (or `a--`) to decrement variables by `1`.
- The prefix (`++a`) and postfix (`a++`) variants expressions itself returns different values, `++a` will return incremented value while `a++` will return current value (same with decrement).
- But both statements will increment/decrement the value after the expression.

**Compound Operations:** We can combine multiple operators in a single line like we do in Mathematical operations. These would be called compound operations. 
- `2 + 5 * 3` is a compound operation.

**ORDER OF OPERATIONS**
There is a set of rules in C# that determines what operators are evaluated first, called order of operations. This rules includes 
1. Operator precedence which determines which operation should be done before others
2. Operator associativity which determines whether two operators of same precedence should be evaluated from left to right or right to left.

**Precedence Rule of Thumb:**
- Multiplication and division are done first, left to right
- Addition and subtraction are done last, left to right
- To override precedence of some operations we can use parentheses `()` like `(2 + 5) * 2`.

**SPECIAL NUMERIC VALUES**
All 11 numeric types (integers and floats) provides `MinValue` and `MaxValue` properties like `int.MinValue` or `short.MaxValue` that represents the minimum and maximum values that the type can represent.
- `[numericType].MinValue` - Maximum value that `[numericType]` can have
- `[numericType].MaxValue` - Minimum value that `[numericType]` can have

The `float` and `double` types (NOT `decimal`) provides property values for infinity like `float.PositiveInfinity` and `double.NegativeInfinity`.
- `[floatType].PositiveInfinity` - Mathematical Positive Infinity 
- `[floatType].NegativeInfinity` - Mathematical Positive Infinity

The `float` and `double` also defines a null property value called `NaN` known as "Not a Number" which is returned when a calculation/computation results in an impossible value (such as division by zero).
- `[floatType].NaN` - "Not a Number" Value

**Integer Division:** Refers to the division of two integer type numbers, resulting into another integer type. All the fractional part (after decimal point) is dropped in integer division, so `0.9` becomes `0` and `2.4` becomes `2`.

**Floating-Point Division:** Refers to the division of two floating-point type numbers, resulting into another floating-point type. Results in accurate division without dropping the decimal part.


**DIVISION BY ZERO**
Division by zero will always lead to bad things (errors and crashes) in not just C# but also in many other programming languages.

**For Integers:** Division by zero with integer types will produce an error which will crash your program if left unhandled.

**For Floats:** Division by zero with floating-point types will result in positive infinity, negative infinity or `NaN` depending on the numerator.
- Positive numerators will result in Positive Infinity
- Negative numerators will result in Negative Infinity
- Zero numerator will lead to Not a Number `NaN`

**THE MATH CLASSES**
The two classes `Math` and `MathF` in C# allows us to do common math operations. The two classes have the same interface (same methods and properties) except that the `Math` class computes the numbers with `double` types while `MathF` computes the same with `float` types.

Some of the most common math operations defined in the `Math` and `MathF` classes are:

Some common property values provided by `Math` and `MathF` classes:
`Math.PI` - Pi Constant
`Math.E` - Euler Number $e$

Some common methods provided by `Math` and `MathF` classes:
- `Math.Pow(number, exponent)` - For exponentiation
- `Math.Sqrt(number)` - For square root
- `Math.Abs(number)` - For absolute value (positive)
- `Math.Sin(radians)`, `Math.Cos(radians)`, `Math.Tan(radians)` - Trigonometric functions
- `Math.Min(a, b, c...)`, `Math.Max(a, b, c...)` - Getting Minimum and Maximum
- `Math.Clamp(value, Start, End)` - Returns `value` if it is between the range `Start` and `End`, otherwise returns `Start` if `value` is lower than `Start` or `End` if it is greater than `End`.

## BOOLEANS
The boolean types are used to represent truthy and falsy values which are used in decision-making like `true` or `false` like `bool isAdult = false;` or `bool containsEggs = true;`. 
- `bool` - `System.Boolean`

The boolean types can only contain values `true` or `false`. For example; We can create boolean values like `bool itWorked = true;` or `bool isAdult = false;`.

**Comparison Operators:** Also known as relational operators allows us to compare two values and always results in a boolean `bool` value, `true` or `false`. There are 6 standard comparison operators:
- `==`, `!=`, `<`, `>`, `<=`, `>=`

**Logical Operators:** Logical operators allows us to combine boolean values (as a result of expressions or conditional operators) in interesting ways. There are 3 standard logical operators:
- `&&` AND operator evaluates to `true` when all operands are `true`, otherwise `false`
- `||` OR operator evaluates to `false` when all operands are `false`, otherwise `true`
- `!` NOT operator negates the input operand value, `!true` evaluates to `false` and `!false` evaluates to `true`

## CHARACTERS
The character type represents a single character. These types uses two bytes to allow for 65,536 distinct unicode characters. They are created using single quotes `''` using the `char` type like `char a = 'a';` or `char b = 'B';`.
- `char` - `System.Char`

**Hexadecimal Unicodes:** We can also create character types by using hexadecimal unicode number for a symbol after `\u` like `char aLetter = '\u0061';`.

## STRINGS

The string types `string` represents a sequence of text characters to create arbitrary text. String types are created using double quotes `""` using the `string` type annotation like `string msg = "Hello World;"`.
- `string` - `System.String`

**Escape Sequences:** Special string characters starting with `\` that carry special meaning: `\'` for escaping single quotes, `\"` for escaping double quotes, `\\` for escaping backslash, `\n` for rendering new line characetr, `\t` for rendering tab characeters, `\b` for emitting the beep character.

**Verbatim Strings:** Raw strings or verbatim strings (exactly-as-seen) are created by prefixing string literals with `@` like `@"Hello I live C:\Users\Atom"`.

**Interpolated Strings:** String interpolation can be done by prefixing string literals with `$` and inserting expressions or values through `{}` inside the string like `$"Hello {userName}, How are you?"`. There are various ways in which we can format the string outputs inside the `$"{}"`.
- **Alignment:** `$"...{stringValue, 20}..."` or `$"...{stringValue, -20}..."`
- **Formatting:** `$"...{floatValue:0.00}..."`, `$"...{Math.PI:#.##}..."` or `$"...{floatValue:0.0%}..."`

**Combining Verbatim and Interpolated Strings:** We can combine verbatim and interpolated strings by prefixing both the characters like `@$"..."` and `$@"..."`.

**THE STRINGBUILDER CLASS**
When working intensively with lots of string objects, C# has to duplicate all of the string contents in memory for every modification. 

The `StringBuilder` class in `System.Text` namespace allows us to efficiently work large amounts of strings data. It is an optimization to use when necessary, not something to use all the time.

**Creating String Builders:** The `StringBuilder` class is contained inside the `System.Text` namespace. So we either have to use the `using` directive like `using System.Text;` to import the class or refer to `System.Text.StringBuilder` class directly. We do `new StringBuilder();` or `new System.Text.StringBuilder();` to create a new string builder object.
- `StringBuilder text = new StringBuilder();` after `using System.Text;`
- `System.Text.StringBuilder text = new System.Text.StringBuilder();`

**Appending Strings:** We use the `.Append()` method of string builder object to append strings to the current state like `text.Append(textValue)`.
- `text.Append("Hello");`
- `text.Append(" World!");`

**Getting Final String:** We use the `.ToString()` method to have the final string value returned to us from the string builder object like `text.ToString()`.
- `text.ToString();`

#TODO more on stringbuidler

For working heavily large strings, we should use the `StringBuilder` class in the ``

## ARRAYS

An array is a linear collection of values of the same types. It allows us to create a collection of values.

**CREATING ARRAYS**
Before creating arrays we must know the data type of values that this array consists of and the total length/size of elements that this array should contain.
Arrays are created by first annotating their types using square brackets `[]`, their variable name, the `new` keyword for initializing the array and then again the type of array.

**Creating Arrays with Uninitialized Values:** Involves creating arrays with specific size/length whose elements/values are not initialized and are set to their default values (like `0` for integers, `false` for booleans). The syntax looks like `Type[] items = new Type[size]` where `Type[]` represents "array of type `Type`", `items` is the array variable name and `new Type[size];` initializes the new array with a specific length of `size`.
- `int[] nums;` - Empty array of integers
- `int[] nums = new int[10];` - Array of 10 integer values
- `string[] names = new string[5];` - Array of 5 String values

**Creating Arrays With Specific Elements:** Also called collection Initializer syntax, it involves creating arrays with all the elements or values initialized at the time of assignment, defining the size/length of the array is optional here. The syntax looks like `Type[] items = new Type[size] {...};` where `{...}` is the sequence of elements of the array.
- `int[] eves = new int[] {2, 4, 6};`
- `int[] odds = new int[3] {3, 5, 7};`

The syntax `SomeType[]` represents "array of `SomeType`" whereas `SomeType[][]` represents "array of arrays of `SomeType`".

The `new` keyword is used to create new instances of complex reference types like arrays, strings and more.

**Getting Array Values:** We can use indices to get values of arrays from the beginning through the index operator `[]` like `array[0]` or `array[1]`. We could also get the elements from the end of array through `[^]` like `array[^1]` or `array[^2]`.
- `nums[1]` - Second element of array `num`
- `nums[^1]` - Last element
- `nums[^2]` - Second Last element

**Setting Array Values:** We can use the index operator `[]` with assignment operator `=` to set or modify existing elements of the arrays like `nums[0] = 12` or `nums[2] = 16`.
- `nums[0] = 12` - Setting first element to 12
- `nums[^1] = 10` - Setting last element to 10

**Default Element Values In Arrays:** When we create arrays with unitialized element values, the compiler will take the array memory location and will set every bit to 0. This means that each element in the array is initialized to their default value (depending on the type). 
- For integers and floating point numbers, the default value is `0` or `0.0`
- For booleans, the default is `false`
- For characters, the default is a null character
- For strings, the default value is null

**Accessing Out-of-Bound Indices:** Attempting to access or set the elements whose indices are beyond the size of the array (from left or right), will lead to bad and even dangerous things. This is why this type of operation leads to errors.

**Getting Array Length:** We use the `.Length` property of the array object to get the total length or size of the array. It tells us how many elements the array can contain (which is declared/inferred from when we created the array).

**RANGES**
Ranges are used to get a small section or range within an array through the range operator `..` like `array[start..end]`. In the range `start..end`, the `start` represents the index to start at and the `end` represents the index to end at (but not including it). We can also leave out either ends like `start..` or `..end` to use arrays default end or start.
- `nums[0..3]` - Get array with elements at `0`, `1` and `2` indices
- `nums[..3]` - Get array with elements from beginning till `2`
- `nums[1..]` - Get array with elements at `1` till the end

**The For-Each Loop:** The `foreach` loops are used with arrays to iterate (traverse) over the elements or items of the array. The syntax looks like `foreach (Type item in items) {...}` where `item` is the loop variable we can use inside the loop body.
- `foreach (int num in nums) {...}`
- `foreach (string name in names) {...}`

**MULTI DIMENSIONAL ARRAYS**
- **Jagged Arrays:** Jagged arrays are multi-dimensional arrays that are created like `int[][] matrix = new int[3][];` which represents an array of 3 arrays of inetegers. The syntax is kind of ugly.
- **Rectangular Arrays:** Rectangular are also multi-dimensional arrays that are created like `int[,] matrix = new int[3, 2] {...};` which represents an array containing 3 rows and 2 columns.


## LISTS

The `List<T>` class in `System.Collections.Generic` namespace allows us to store objects in an ordered manner, items can be accessed through an index and more items can be added or removed easily.

The list class is kind of like an extension to the arrays we have learnt earlier. But we rarely have to use arrays after learning about lists.

**Creating Lists:** We create the list objects through `new` keyword, the `List` constructor along with its elements types in angular braces `<T>` like `new List<Type>();`. We can also create a list with specific items through collection initializer syntax like `new List<Type>() { A, B, C };`
- `List<int> numbers = new List<int>();`
- `List<int> evens = new List<int>() { 2, 4, 6, 8 };`
- `List<string> names = new List<string>() { "Jake", "Finn" };`

**Getting Elements:** We can access elements of the list objects through their index in the list like `list[index]`. Lists also uses zero-based indexing just like arrays.
- `evens[0]` - Returns `2`
- `names[1]` - Returns `"Finn"`

**Modifying Elements:** We can modify the elements in their place through their index and a new value like `list[index] = newValue;`.
- `evens [1] = 6;`
- `names[0] = "Pubs";`

**Getting Number Of Elements:** We use `.Count` property of the list object to determine the number of elements in the list object like `list.Count`.
- `evens.Count;`
- `names.Count;`

**Element Membership:** We use `.Contains` method to determine if an element is present or a member of the list object like `list.Contains(value)`. It returns a boolean value.
- `evens.Contains(3);`
- `names.Contains("Finn");`

**Getting Elements Index:** We use the `.IndexOf` method to get the index of an element by its value like `list.IndexOf(value)`. It returns `-1` if the element is not found.
- `evens.IndexOf(2)` - Returns `0`
- `evens.IndexOf("Finn")` - Returns `1`

**Adding Elements:** We use the `.Add()` method to add a new element at the end of the list object like `list.Add(value);`.
- `evens.Add(8);`
- `names.Add("Marceline");`

**Adding Multiple Elements:** We use `.AddRange()` method to add multiple elements at the end of the list object like `list.AddRange(values);`.
- `evens.AddRange(new int[] { 10, 12 });`
- `names.AddRange(new string[] { "Lady", "Pubs" });`

**Inserting Elements In Middle:** We use `.Insert` method to add new element in the middle of the list object through their index like `list.Insert(2, value)`.
- `evens.Insert(1, 2);` - Inserting `2` at second index
- `names.Insert(2, "Lady");` - Inserting `"Lady"` at third index

**Inserting Multiple Elements In Middle:** We use `.InsertRange()` method to add multiple elements in the middle of the list object like `list.InsertRange(values)`.
- `evens.InsertRange(1, new int[] { 10, 12 });`
- `names.InsertRange(2, new string[] { "John", "Doe" });`

**Removing Elements By Value:** We use the `.Remove()` method to remove an element from the list object by its value like `list.Remove(value)`. If the number of values in the list is more than one, only the first one is removed. The `.Remove()` method returns a boolean value indicating if any value is removed from list.
- `evens.Remove(2);`
- `names.Remove("Jake");`

**Removing Elements By Index:** We use the `.RemoveAt()` method to remove an element from the list object through its index like `list.RemoveAt(index)`.
- `evens.RemoveAt(0);`
- `names.RemoveAt(0);`

**Clearing All Elements:** To remove all elements and empty out the list object we use the `.Clear()` method just like `list.Clear()`.

**Iterating Over Loop:** The `foreach` loop is used to iterate over the elements of list object (or any other object implemented with `IEnumerable`) like `foreach (Type item in list) {...}`. You cannot add or remove elements in a list object while a `foreach` loop is in progress.
- `foreach (int num in evens) {...}`
- `foreach (string name in names) {...}`

Note: Every kind of collection in C# implements the interface `IEnumerable<T>` that further implements a method called `GetEnumerator()` which returns an object that implements `IEnumerator<T>`.

## DICTIONARIES

The dictionary class `Dictionary<TKey, TValue>` allows us to store values through keys in the object. It allows us to store the items as a key-value pair in the object.

**Creating Dictionaries:** We use the `Dictionary<TK, TV>` type for creating new dictionaries like `new Dictionary<int, string>();`. The type has two generic type parameters, `TKey` for the type of key and `TValue` for the type of value associated with the key.
- `Dictionary<int, int> dict = new Dictionary<int, int>();`
- `Dictionary<string, string> dict = new Dictionary<string, string>();`

**Adding Items:** We use the indexing operator `[]` with the key's name along with assignment to value add the key-value pair to the dictionary like `dict[key] = value;`.
- `dict[3] = 42;`
- `dict["India"] = "New Delhi";`

**Getting Values:** We use the indexing operator `[]` with the key's value to retrieve the value associated with it like `dict[key]`. When we try to retrieve a key that is not present in the dictionary, it throws an error.
- `dict[0]`
- `dict["India"]`

**Checking Key:** We use the `.ContainsKey()` method to check if the key is present in the dictionary or not like `dict.ContainsKey(key)`.
- `dict.ContainsKey(0)` - Returns `true`
- `dict.ContainsKey("USA")` - Returns `false`

**Getting Values Or Fallback:** We use the `.GetValueOrDefault()` to retrieve the value associated with key if it exists, otherwise a fallback default value like `dict.GetValueOrDefault(key, fallback)`.
- `dict.GetValueOrDefault(3, -1)`
- `dict.GetValueOrDefault("USA", "Unknown")`

**Remove Items:** We use the `.Remove()` method to remove the key-value pair from the dictionary object like `dict.Remove(key)`. The method returns a boolean value indicating if anything is removed or not.
- `dict.Remove(0)`
- `dict.Remove("India")`

## TYPE CONVERSION
Every variable, value and expression has some specific known type in C#. Types matter greatly in C# or in any other statically typed (compiled) language.

**Type Inference:** Often times the compiler can look at your code and figure out (infer) the type of value or expression by looking at clues/cues around it. This feature is called type inference.

Through type inference in C#, the compiler can infer the type of variable based on code that it is intialized with. We do not always need to explicitly write out a variable's type ourselves, we can use the `var` keyword.

We can initialize and create variables through `var` like `var [variableName] = [initialValue];`. We must initialize the variable on the same line it is declared in, otherwise the compiler cannot infer the type (of nothing) and throws error.

Variables created with `var` still has a specific type, we have just left it unwritten. For Example, we can create variables like `var message = "Hello World";` or `var age = 19;`. We can also take inputs like `var input = Console.ReadLine();`.

**TYPE CONVERSION AND PARSING**
Sometimes we need to convert between types. For example, when we take inputs from console `Console.ReadLine()`, the returned value is always of `string` type. 

Sometimes we must convert the input string into appropriate numeric types. There are two methods for converting types:
1. The `Convert` Class
2. The `.Parse()` Method

**THE CONVERT CLASS**
The `Convert` class is used for conversion and casting between C# types. It consists of methods in the form `Convert.To[WhateverType](SomeValue)`.

Methods for converting types to integers:
- Signed Integers: `Convert.ToSByte()`, `Convert.ToInt16()`, `Convert.ToInt32()`, `Convert.ToInt64()`. 
- Unsigned Integers: `Convert.ToByte()`, `Convert.ToUInt16()`, `Convert.ToUInt32()`, `Convert.ToUInt64()`

Methods for converting types to floating numbers:
- `Convert.ToSingle()`, `Convert.ToDouble()`, `Convert.ToDecimal()`

Methods for converting types to booleans:
- `Convert.ToBoolean()`

Methods for converting types to characters:
- `Convert.ToChar()`

Methods for converting types to strings:
- Strings: `Convert.ToString()`.

**THE PARSE METHOD**
The process of analyzing text, breaking it apart and transforming it into other data is called parsing.

Many of the types in C# consists of a method called `.Parse(someValue)` which we can use to convert some string value to that type.

The syntax for using parse method is `[type].Parse(someValue);`, like `int.Parse("3000");`.

## TYPES CASTING SYSTEMS

Most math operations are only defined for operands of the same type. So we should always keep in mind to give same numeric type to all the numbers that will be computed together mathematically.

The C# language has a proper system of conversions (casting) between different types which allows one type to be converted to another type to facilitate mixing them. There are conversions from every numeric type to every other numeric type in C#.

There are two categories of conversions of types: Narrowing Conversions and Widening Conversions.
- **Narrowing Conversion:** Conversion from a larger-ranged (more bits) type to small-ranged (less bits) type, like converting from `long` type to `byte`, which risks losing data in the process.
- **Widening Conversion:** Conversion from a smaller-ranged (less bits) type to larger-ranged (more bits) type, like converting from `byte` type to `long`, which does not risk losing any data.

Conversions between types can also be explicit or implicit:
- **Explicit Conversion:** The programmer explicitly specifies to convert from one type to another. Narrowing conversions are always explicit and are potentially dangerous because we are losing data.
- **Implicit Conversion:** Implicit conversion from one type to another takes place automatically behind the scenes by C#. Widening conversions are always implicit and are always safe to do.

**THE CASTING OPERATOR**
Widening conversions where we try to convert a smaller type (like byte `byte small = 3;`) into a larger type (like to integer `int large = small;`), would be a safe conversion and it will be implicit (happens automatically behind the scenes).

But for narrowing conversions where converting from larger type to a smaller type, we would have to do explicit conversion through the casting operator. We would have to specify the type we want to explicitly convert to before the value (or expression) like `[smallType] [smallName] = ([smallType]) [largeValue];`:
- `int larger = 20;` - Creating a large type value
- `byte smaller = (byte) larger;` - Converting large value into smaller type through `(byte)` operator

The operator `(byte)` here acts as the conversion operator which converts the `larger` value into smaller `byte` type. Typically we use the casting operators for narrowing conversions but we can also use them with widening conversions (which already does this) to be more descriptive
- `byte smaller = 3;`
- `int larger = (int) smaller;`

**NOTE:** For `short` types `a` and `b`, `int c = (int) (a + b);` and `int c = (int) a + b;` are NOT one and same, both have different meanings; The first converts whole `(a + b)` to `int` while the second converts `a` to `int` and then `b` to `int`.


**CASTING SOLVES PROBLEMS**
**Addition for Small Types:** Through casting we can store the result of sum of two smaller (`short`) types into a larger (`int`) type. Math operations like addition and multiplication are not defined for some small types like `short`.

**Float Division for Integers:** Through casting we can store result of division between two `int` types as a `double` type like `double fraction = (double) amountDone / amountPending;`.

**OVERFLOWING ERRORS**
When a mathematical operation causes a value to go beyond the maximum value that the type can represent, it is called an overflow error.

**For Integer Types:** When a signed or unsigned integer type becomes greater than its `MaximumValue` then it wraps around back to the start of the range and becomes the type's `MinimumValue`.

**For Float Types:** When a floating-point type becomes too large or too small, it switches to the type's positive infinity `PositiveInfinity` or negative infinity `NegativeInfinity` respectively. Any math operation with infinities will lead to another infinity or `NaN` value.

**ROUNDOFF ERRORS**
The `float` type only has six or seven digits of precision and cannot distinguish `10000` from `10000.00001`. For example, adding two floats `float a = 10000;` and `float b = 0.00001F;` into `float sum = a + b;` would result into `10000`. To avoid this, we can use floating-point type of larger precision types like `double` or `decimal`.


## THE CONSOLE

The `Console` in C# is used to work with the terminal output screen (display text there). There are many helpful properties and methods that we can use to work with the terminal console.

**Displaying to Console:** The methods `Console.Write()` and `Console.WriteLine()` are used to display text to the terminal console output (standard output). The `Console.Write()` method displays the stuff without jumping to the new line like `Console.WriteLine`.

**Getting Inputs from Console:** The methods `Console.ReadKey()` and `Console.ReadLine()` can be used to take inputs from the terminal user (standard input). The `Console.ReadKey()` takes any single key press as the input and concludes while `Console.ReadLine()` takes a complete text input until the Enter key is pressed.

**More Console Members:** There are many more `Console` class members like `Console.Title` for the window title of terminal, `Console.Clear()` for clearing out the terminal screen and `Console.Beep()` for making a retro beep sound.


## CONDITIONAL STATEMENTS

The C# language makes use of the `if` and `else` keywords along with their respective blocks for creating conditional constructs for handling the control flow of our program. This allows us to run or execute certain code depending on specific conditions.

Blocks in C# are created by using curly braces `{}` around the statements to enclose them. The variable values created inside the blocks `{}` are dropped/removed when the block is completed (values are scoped). If we want to use something outside of blocks, we must declare outside of the block.

All conditions we use with `if` and `else if` should only evaluate to a boolean `bool` value, to `true` or `false` only. There are three types of conditional constructs in C# (like other programming languages):
1. `if (condition) {...}`: The `if` block checks the condition and runs the multiple statements enclosed in the block below.
2. `else if (condition) {...}`: The `else if` blocks after `if` checks the conditions after all conditions in previous `if` blocks have failed.
3. `else {...}`: The `else` block is executed at last when all the previous `if` and `else if` blocks' conditions are failed.

**CONDITIONAL STATEMENTS**
We can also use `if` and `else` as statements without using any blocks, for simpler condition checking.
- `if (score == 100) Console.WriteLine("Grade is A+");`
- `if (score == 100) Console.WriteLine("Grade is A+") else Console.WriteLine("Failed");`

**CONDITIONAL OPERATOR**
The conditional operator or ternary operator allows us to use conditional statements as an expression intead of a statement. The syntax for conditional operator is `(condition) ? (expression if true) : (expression if false)`.
- `int points = (score > 70) ? 100 : 0;`
- `string text = (score > 70) ? "You passed!" : "You failed!";`

**SWITCHES**
C# has the concept for switch statements for situations where you want to go down one of many possible conditional pathways called arms, based on a single value's properties.

Every switch statement can be written with an if-else statements. There are two kinds of switches in C#; switch statements and switch expressions.

**SWITCH STATEMENTS**
Switch statements are created through various `case` blocks inside the switch block `swicth (value) {...}`. The `value` inside the parenetheses denote the value that the decisions of switch statements are based upon.
- Switch statements always observes a value in their construct `switch (value) {}`
- Case arms describes the code to be executed when the switch value matches with the case one like `case 1: ...`, `case "Name": ...` and more.

**Breaking of Arms:** The `break` statement at the end of `case` blocks signals that the flow execution should stop and resume after the `switch`. Otherwise the following `case` blocks will continue to be executed. If we want to stop the flow of `case` blocks after, we should use `break` at the end.

**Default Arm:** The `default` block is an optional block inside `switch` that provides a catch-all block when nothing else was matched in the previous `case` blocks. The `default` block can go anywhere inside `switch` but its a good convention to put it at the end.

**Multiple Cases for Same Arm:** While most of the `case` arms are independent of each other, we can include multiple `case` arms for a single arm like `case 1: .. case 2: (code here)`.

```cs
public static void Main() {
	switch (choice) {
		case 1:
			Console.WriteLine("This is 1");
			break;
		case 2:
			Console.WriteLine("This is 2");
			break;
		default:
	}
}
```

**SWITCH EXPRESSIONS**
Switch expressions are just like switch statements but in an expression form. It allows us to use the swictch statements logic inline as an expression. Switch expressions through a dependent value `value`, `switch` keyword followed by block `{}` of comma separated arms created through arrows `=>`.

`response = choice switch { 1 => "A", 2 => "B", _ => "Z" };`
- The arrows `=>` are used to separate the decision value and the response value or expression.
- The underscore `_` arm acts like the `default` arm which is executed when no match was made.

## LOOPS

**WHILE LOOPS**
A while loop repeats the code over and over as long as some given condition is true. While loops always first checks the condition of the loop before iteration. 

While loops are created with a `while` keyword, a condition and a block of code to execute when the condition is evaluates to true like `while (condition) {...}`.
- `while (num > 5) { Console.WriteLine("Greater than 5"); }`

**DO-WHILE LOOPS**
A do-while loop first execute the loop body and then checks for the given the condition after that. Do-while loops always checks the conditions after loop code is executed.

Do-while loops are created with `do` with loop body and `while` for the loop condition like `do { ... } while (condition)`.
- `do { Console.WriteLine("Hello World") } while (num > 5)`

**FOR LOOPS**
For loops allows us to repeat a loop for a specific number of times. The syntax for creating for loops is `for (init; condition; update) {...}`. `init` is the part where we initialize our loop variables, `condition` is the condition that is checked at the begining of the loop and `update` is some kind of update for the loop variable.
- `for (int i = 0; i <= 10; i++) {...}`
- `for (int i = 0; i <= 20; i =+ 2) {...}`

While most of the for loops uses all three statements, we can left out either of the statements if they are not required (we can have a working loop with `for (;;) {...}`).

**Breaking Out of Loops:** The `break` keyword, used as statement `break;`, allows us to break out of the current loop based. Most of the time, we might want to break out of loops based on certain conditions.

**Coninuing the Loops:** The `continue` keyword, used as statement `continue;`, allows us to skip the rest of the current loop iteration and continue (jump) to the next one.

**Variables Created in Block Statements:** Like any block, variables declared within the loop blocks, if-else blocks or any other block cannot be accessed outside of that block (after it has ended). If you want to access variables used in a block, prefer to declare them outside the blocks.


## FUNCTIONS AND METHODS

Functions are reusable set of statements that we can use in multiple places. This allows us to capsulate a set of instructions into a reusable directive that we can execute through name.
- **Methods:** Functions that are always associated with a specific class are called methods. They are available everywhere the associated class is available.
- **Local Functions:** Functions that are defined inside of other methods are called local functions. They will be available only inside the methods they are defined in.

**Creating Methods:** Methods can be created by first writing their return type, their name with parentheses and then the method body. The syntax looks like `[returnType] [methodName]() {...}`. Method body contains set of statements required to accomplish a certain task.
- `void CountToTen() {...}` - Method that returns nothing `void`
- `int GetItems() {...}` - Method that returns nothing `int`

**Method Name Conventions:** Methods in C# uses the upper camel case `UpperCamelCase` for their names while their parameters or argument names uses lower camel case `lowerCamelCase`.

**Scope Of Methods:** Methods or local functions get their own set of variables to work with. Variables created inside the method or local function are always local to that function/method and cannot be used outside of it. These variables are called local variables.
- Though you can use the variables defined in the outer scope (or global scope), it should not be encouraged and is not considered a good practice.

**Passing Data To Methods:** Parameters are defined while creating the method inside the parentheses separated by commas like `void OurMethod(int number, float ratio)`. They are defined by their annotated types. Arguments are values passed to parameters when we call our methods.
- `void CountTo(int num) {...}`
- `int GetCountTo(int num, string message) {...}` 

**Default Parameter Values:** We can also set default values for parameters while creating the method through assignment operator `=` like `void OurMethod(int num = 10)`. Default parameters should always come after the non-default parameters (the required parameters). 
- `void CountTo(int num = 10) {...}`
- `void GreetUser(int num, string msg = "Greeting") {...}`

Default parameters makes the arguments to the method calls optional. We don't need to pass arguments for parameters which have appropriate default values unless we want to call with different arguments.

**Returning Data Back:** For returning values from a method, we first have to define the return type while creating the method and then return the appropriate value inside the method body through `return` keyword anywhere. Flow of execution stops when it reaches the `return` statement. 
- `int GetAge(string name) { return 0; }`
- `string GetName(int id) { return "Ali"; }`

**Simple Methods:** Simple methods allows us to define a new method in a single line of code as a statement. If we can represent a method with a single expression, we can shorted our method by putting the return value arrow `=>`, after the method name. These methods are said to have expression body.
- `int DoubleNum(int value) => value * 2;`
- `int DoubleAndAddOne(int value) => (value * 2) + 1;`

The arrow `=>` usually indicates that a value or expression is coming next.

**Calling Methods:** Local functions are called by writing their names and followed by a pair of parentheses with the list of arguments separated by commas like `OurLocalFunction(42, 10)`. Methods are called similarly but they need to mention their class through dot operator `.` like `OurClass.OurMethod(42, 10)`.
- `CountToTen(10);`
- `Counter.CountToTen(10);`

**Named Arguments:** We can also explicitly write out the parameter names for each argument value we are passing in the method call through colon `:` separated by commas like `GetPoint(x: 10, y: 15)`. This allows us to call the method with parameters in any order (not just the order in which they are defined in).
- `Math.Clamp(min: 50, max: 100, value: 20)`

**Variable Number Of Arguments:** We use the `params` keyword on the parameters of methods that allows us to treat multiple arguments passed to method call as an array like `public void Method(params int[] numbers)`. We can only have one `params` parameter in the method and it must come after all the regular parameters.
- `void GetMax(params int[] numbers)` - Called like `GetMax(2, 3, 4)`
- `void Average(params int[] numbers)` - Called like `Average(2, 3, 4)`

**Method Overloading:** We can create two methods inside a class with same names that does the same job but with different set of parameters. This is called method overloading where we have more than method with same names but with different set of parameters. Local functions does not allow overloading.
- The set or collection of all overloads of a method (all methods with same names) is called the method group.
- When the compiler enounters a method call to an overloaded method, it figures out which method to use based on the type and number of arguments provided. This is called overload resolution.

**Methods Documentation:** XML documentation comments allows us to document our created methods. Just go over the line above your defined method and write `///`. The IDE will recognize this and expands the comment to include helpfule documentation.

**Recursion:** The paradigm where the method or function calls itself inside its own body. In C# we can simply call the method inside its own body, the same way we call it anywhere else.
- `int RecurMethod() { ... RecurMethod() ... }`

**PASSING OF ARGUMENT TYPES**
**Passing By Value:** When an argument which belongs to value data type or reference data type is passed to the methods, the value contents are duplicated and copied into the method parameter. This is called as passing by value.

**Passing By Reference:** When two methods share the same variable through its memory location address rather than the actual copy of value it is called passing by reference. Only the memory address pointer location is passed to the methods rather than the actual contents copy.
- Passing by reference is primarily for value types (like structs). Reference types already get most of the benefits by their nature.
- This can make your program run faster and consume less memory when passing large structs or large number of objects.

**Passing Arguments By Reference:** We use the `ref` keyword on the parameters and arguments to indicate that this value or object is to be passed by reference (memory address) and not the actual value like `void OurMethod(ref int x) {...}`. We will also use `ref` keyword when calling the method like `OurMethod(ref y)` where `int y = 3;`.
- The called methods has total access to the caller's variables shared through `ref` keyword. The method can access them and can also change them which might not be always desirable.
- Passing `ref` parameters can only be done with a variable, something that has a memory location already allocated. We cannot supply an expression or direct value to it.

#TODO output parameters, deconstructors, extension methods

## MEMORY MANAGEMENT

**MEMORY MANAGEMENT STRATEGIES**
**The Stack:** Memory management strategy that allows us to allocate or reserve spots in memory for values whose size will not change throughout the runtime (fixed sizes). It deallocates or remove the spot when we are done using the values as we move from one method to another.

**The Heap:** Memory management strategy that allows us to allocate memory for values that are of variable size, whose size can change throughout the runtime. The heap is not structured like the stack. 
- To keep track of items placed on the heap, we capture a reference to the new object when we create it. It allows us to look up the memory location when needed. 
- This reference is a value that is always of fixed size. This is the reason that references are always stored on the stack. The reference is a pointer which always points to the arbitrary-sized value stored on the heap.

Types of values depending on whether they are stored on the stack or the heap: Value Types and Reference Types.

**VALUE TYPES**
The data types of variables which contain their data right there in place, have a known fixed size and store their values on the stack are called value types. 
- These are simple primitive types; all integer types, all floating point types, booleans and characters are value types.
- These types are always copied by value, their whole value are copied when assigned to other variables.
- Follows value semantics; two objects are equal only if their values are equal. 

**REFERENCE TYPES**
The data types of variables which stores a reference pointer to their value, have variable or arbitrary size and store their values on the heap are called reference types.
- These are complex compound types; strings, arrays, other data structures and our created classes.
- These types are always copied by reference, only reference address is copied when assigned to other variables.
- Follows reference semantics; two objects are equal only if they have the same reference, that is they point to the same object. 

**AUTOMATIC MEMORY MANAGEMENT**
**Memory Leak:** If our program uses memory and fails to clean it up, it cannot be reused by something else. The memory is unused as it stands but cannot be put back into useful service either. This is called a memory leak.

**Memory Management:** C# takes the burden of tracking and cleaning up heap objects off of programmers. This task falls on the runtime that your C# programs run within. This approach is called automatic memory management or garbage collection.

## OBJECT ORIENTED PROGRAMMING

Object Oriented Programming is a paradigm of programming where large programs are split into individual components called objects. Objects are created from their blueprint template called classes which defines the attributes (the properties of each object) and methods (the functions of each object) for each object.

**Essential Rule:** Use the right type for everything you create. If the right type does not exist then create it first.

**Put New Types At the End:** New type definitions like enumerations and classes should always be put at the end of file after our main method and all the methods it contains.

## ENUMERATIONS

An enumeration or an enumerated type is type whose choices are one of a small list of possible options. We can define enumerations in our code to represent a limited set of choices that a variables or property could take like days in a week, months in a year, employment status (Employed or Unemployed) and more.

**Creating Enumerations:** Enumerations are created through the `enum` keyword, the enumeration name and a list of possible choices in the enumeration body. Enumeration members are actually integers at heart, the fields inside the enumeration are mapped to simple integer values behind the scenes. The syntax looks like `enum EnumName {...}`.
- `enum Season { Winter, Spring, Summer, Fall }`
- `enum Status { InProgress, Successful, Failed }`

**Changing Enumeration Underlying Type:** The default underlying type for enumerations is `int`. We can change the underlying type by defining it after the enumeration name with `: (IntegerType)` like 
- `enum Season : byte {...}`
- `enum Season : short {...}`

**Using Enumerations:** Defined enumerations can be simply used by just refering to their members from the enumeration just like we refer to any property of a type. These are simple values that we can use just like any other value. The syntax looks like `Enum.Member`.
- `Season.Summer`, `Season.Fall`
- `Status.InProgress`, `Status.Failed`

## TUPLES

Tuples allows us to create a composite bundle of fixed number of values into a single type that we can use for creating these types of values. Tuples always contains a fixed number of items that cannot be changed during runtime. 

**Composite Types:** A composite type is a large unit that is composed of smaller pieces of data.

**Creating Tuples:** Tuples are created by annotating the type with smaller types of values enclosed in parentheses and then providing an appropriate corresponding tuple value enclosed in parentheses like `(types) tuple = (values);`. We can also give names to the types of items inside the tuple.
- `(int, int) point = (12, 34);`
- `(int x, int y) point = (12, 34);`
- `(string, int, float) score = ("Jake", 80, 128.4);`
- `(string name, int level, float points) score = ("Jake", 80, 128.4);`

**Creating Tuples through Var:** Tuples can also be created through the `var` which allows us to assign the values without annotating the variables. We can also give names to tuple fields in the tuple literal here.
- `var point = (12, 34);`
- `var point = (x: 12, y: 34);`
- `var score = ("Jake", 80, 128.5);`
- `var score = (name: "Jake", level: 80, points: 128.5);`

**Accessing Tuple Fields:** The dot operator `.` is used to access the fields inside the tuples. By default, C# gives default names to fields inside the tuple in the form of `.ItemN` like `.Item1` for first field, `.Item2` for second field and so on. The names that we give our tuple fields can also be accessed similarly like `.name`, `.points` or `.level`.
- `point.Item1` and `point.x` points to the same value
- `score.Item1` and `score.name` points to the same value

**Tuple Annotations:** Tuple annotations like `(int, float)` or `(string, int)` works just like any other annotation where the value is expected to be a tuple with provided value types. These annotations can be used anywhere where an annotation is expected like when assigning variables, defining the parameters of methods, defining the return type of the methods and more.
- `(double X, double Y) point = (2.5, 5.5);`
- `(double X, double Y)[] points = new (double X, double Y)[3];`
- `void GetUser((string Name, int Level, float points) score) {...}`
- `(string, int, float) GetScore(...) {...}`

**Deconstructing Tuples:** Deconstruction of tuples allows us to unpack multiple fields values of tuples (some or all of them) into variables in one line. We can also use the underscore `_` to discard some field value that we do not want to use. The syntax looks very similar to defining tuples but is very different than that internally. 
- `(string name, int level, float score) = ("Jake", 80, 12.55);` - Declaring the variables inside tuple deconstructor to unpack the values from tuple value.
- `(name, level, points) = ("Jake", 80, 12.55);` - We can also unpack values of tuples from the declared variables like `string name;`, `int level;` and `float points;`.
- `(name, level, _) = ("Jake", 80, 14.34);` - Discarding the last value `14.34` through the use of discard characetr `_`.

**Swapping Values:** Through the clever use of deconstruction of tuples, we can use it to swap two values of variables in one line. The syntax looks like `(varA, varB) = (varB, varA);`
- `(x, y) = (y, x);` - `x` takes the value of `y` and `y` takes the value of `x`

**Tuples Equality:** Tuples are primitive value types and thus use value semantics when checking for equality. Two tuples are considered equal if they have same number of elements, the corresponding values are of the same type and corresponding values are equal.
- `(a == b)` - Evaluates to `true` when `a` and `b` are declared as `(int, int) a = (1, 3);` and `(int, int) b = (1, 3);`
- `(a != b)` - Evaluates to `true` when `a` and `b` are declared as `(int, int) a = (1, 3);` and `(int, int) b = (1, 2);`

## CLASSES

Object-oriented design is a big part of programming where we decide how to split our programs into objects for sharing various kind of responsibilities. It consists of deciding what types of data and methods various objects need to fulfil their responsibilties.

**Abstraction:** The principle which states that the outside world does not need to know each object or class's inner workings and can deal with it as an abstract concept. Abstraction allows the inner workings to change without affecting the outside world.
- Abstraction is essential in breaking down big problems into smaller ones because you can work on each part in isolation.

**Classes And Objects:** Classes are the blueprints or templates that describes the objects (instances) created from this class. These classes consists of various data properties (fields) and behaviours (methods) that we need every object created from this class to have.

**Classes Are Types:** Defining a class also defines a new type (data type) that we can use for creating variables. Classes are always references types like strings and arrays. Variables whose data type is a class holds only a reference, the objects data lives somewhere on the heap.

**Classes Are Reference Types:** The objects created from the classes are always reference types and therefore follows reference semantics. We only have access to their reference and the actual objects are stored on the heap.

**Encapsulation:** Encapsulation refers to combining and bundling data (fields) and the operations on that data (methods) into a well-defined unit (a class). Encapsulation helps us in building objects that solve a slice of the overall problem which allows us to build more complex and larger programs.

**CREATING CLASSES**
New classes are defined through the `class` keyword, the class name and then the class body inside curly curly braces `{}` like `class Score {...}`. Class names follows the `UpperCamelCase` convention just like enumerations and methods. The class body `{...}` consists of attributes (variables) and methods that the class needs to do its job.

**Class Members:** All the things that a class or object can have are called its members. Everything related to the class is a member of that class. There are usually three types of members for a class; fields (attributes), methods and properties. Along with members there are also modifiers to these members which describe whether these modifiers are protected or not, and whether they are static or not

**ACCESSIBILITY MODIFIERS**
Accessibility modifiers allows us to hide various members (fields, methods and properties) in our classes. The information hiding principle states that only the object itself should directly access its data fields. The outside world can reach in and mess with the object's data in ways that should not be allowed.

**Member Accessibility Level:** Every member of a class has an accessibility level to it which determines where the thing is accessible from. These access levels are put in front of the member before defining them like `[access] [member]`.
- `public [member]`: Gives the member the public accessibility which is usable everywhere, inside as well as outside the class. The outside world can access and modify the public members.
- `private [member]`: Gives the member the private accessibility which is usable only within the class itself. The outside world cannot access or modify the private members. This is the default accessibility modifier when we don't specify anything.
- `internal [member]`: Gives the member the internal accessibility which indicates that it is usable only within the context it is defined in.

**Type Accessibility Level:** Just like the members of classes, each type that we define like classes, enumerations and structures also has accessibility modifiers associated with them. These access levels are put in front of the type before creating them like `[acess] [type]`.
- `public [type]`: Gives the type the public accessibility which is usable everywhere, inside as well as outside the current project. The outside world can access and use (consume) the defined type.
- `internal [type]`: Gives the type the internal accessibility which indicates that it is usable only within the project it is defined in. The type will be accessible from the current working project but cannot be used outside in other projects. This is the default accessibility modifier when we don't specify anything explicitly.

**Allowing Access:** The class should always protect its data fields from outside access, they should always be marked be as `private`. To allow the outside world to access the type's current state, we should provide controlled access to the members through getter and setter methods.
- **Getter Methods:** Methods that retrieves current value of fields are called getter methods. These method names usually starts with `.Get*` like `.GetWidth()` or `.GetHeight()`.
- **Setter Methods:** Methods that assign new values to fields are called setter methods. These method names usually starts with `Set*` and expects the argument value to be set like `.SetWidth(width)` or `.SetHeight(height)`.

**STATIC MEMBERS**
The members of a class usually belong to the particular object instances created from the class. Each instance is independent of the others and consists of its set of distinct values.

**Static Members:** Members that are not associated to any particular objects instance but is associated to the whole class are called static members. Static members are created through the `static` keyword like `public static [member]` or `private static [member]`.

**Static Classes:** Classes that are just a collection of related utility methods, fields or properties and does not require (or need) a new object instance to be created are called static classes. `Console`, `Convert` and `Math` are all static classes that provides related set of utilities for specific tasks. Static classes are also created through the `static` keyword (just like static members) like `public static [class]`.
- `public static class DogHelper {}`
- `internal static class CatHelper {}`

**FIELDS**
Fields are variables or attributes that represent current value states of classes and object instances. They live as long as the object lives and are a part of the object itself. These are not the same as local variables or parameters that belong to methods.

**Instance Fields:** Fields that are associated with a particular object instance are called instance fields. Instance fields are created inside the class body before any methods just like variables. We can initialize the values of fields inline so that each instance of the object will take the assigned values.
- `public float x;` - public floating number field
- `private int age;` - private integer field

**Static Fields:** Fields that are associated with the whole class and not with a particular object instance are called static fields. Static fields are created by putting the `static` keyword before the fields.
- `public static int totalDogsCount;`
- `privare static float ourPI;`

**Immutable Fields:** Fields that cannot be changed (assigned a new value) once declared are called read-only fields or immutable fields. Immutable fields are created through the `readonly` keyword before the field like `readonly [field]`.
- `private readonly string ourName;`
- `public readonly int ourConstant;`

**METHODS**
Methods are simply functions that are associated with a class or an object instance. Methods are always called (invoked) through the context of either a class or an object instance through a dot `.` operator like `Console.Read()` or `dog.Bark()`.

**Instance Methods:** Methods that are associated to a particular object instance are called instance methods. These methods has access to all the fields defined inside the class itself along with its own local variables and parameters.
- `public void Bark() {...}`
- `privare void SetHeight(int height) {...}`

Instance methods commonly uses `this` special variable to refer to the current object instance of the class. It means we can retrieve various fields of our instance like `this.someField` or assign new values to them like `this.someField = newValue;`.

**Static Methods:** Methods that are associated to the whole class and not to the object are called static methods. Static methods are created through the `static` keyword before the methods.
- `private static int GetCPUCores() {...}`
- `public static void IncrementCount() => totalDogsCount++;`

**Constructor Methods:** Special methods that are called whenever an object instance is initialized to ensure that it begins its life in a good starting state are called constructor methods. Constructors must use the same name as the class name and they cannot list a return type.
- `public Point() {...}`
- `public Dog() {...}`

A constructor's job is to get new instances of classes into a legitimate starting state. The specifics will vary from class to class but assigning initial values to each field is common.

**Creating Constructors:** Constructors are special public methods which takes the same name as the class name and does not list its return type like `public Point() {...}`. We can create multiple constructors for a class as long as their parameters types and parameter lists are different.
- **Constructors with Parameters:** Constructors can have parameters that provides initial values for fields from the outside world like `public Point(float x, float y) {...}`. We can initialize our fields through `this` keyword inside the constructor like `this.x = x;` and `this.y = y;`.
- **Constructors with No Parameters:** Constructors can also be parameterless which does not accept any parameters from the outside world and initializes the fields inside the constructor body like `this.x = 0.0;` or `this.y = 0.0;`.

**Calling Other Constructors:** Sometimes we would like to reuse the code in one constructor from another. We can use one constructor to build off another one using the `this` keyword like `public Point() : this(0.0, 0.0) {}` (calling the constructor with parameters from a parameterless constructor). This allows one contructor to run another constructor without duplicating the code or creating an extra instance.
- We cannot call a constructor without `new` keyword and if we did that we will be creating a second object while creating the first which is not what you want.

**Default Constructors:** When we don't define any constructor on our class, the compiler automatically generates an empty constructor that looks like `class Point() {}`. The default empty constructor does not do anything fancy and initializes the fields to their default values. When we add our own constructor, the default constructor will no longer be generated.

Through the default constructor, the fields are initialized to their default values like 0 for integers and floating point numbers, `false` for booleans and `null` for reference type values (strings and arrays).

**PROPERTIES**
Properties are a tool which allows us information hiding and abstraction while keeping our code simple. A property pairs together a getter method and setter method under a shared name with field-like access.

**Creating Properties:** Properties are created by setting the return type of property, the name of the property (follows upper camel case convention) and the property body `{}` consisting of getter method defined via `get` keyword and setter method defined via `set` method. 
- The getter through `get` is required to return a value of same type as the property. Used like `rect.Width` or `rect.Height`.
- The setter through `set` has access to a special variable `value` in its body. This allows us to get the set value of the property like `rect.Width = 10` or `rect.Height = 20`.

Some examples
- `public float Height { get {...} set {...} }`
- `public float Width { get => _width; set => _width = value; }`

**Getter-Only and Setter-Only Properties:** Properties do not always require both of getter and setter methods. We can have a `get`-only (cannot be changed from outside) and `set`-only property (can only be changed from outside).
- `public float Width { get {...} }`
- `public float Width { set {...} }`

Properties getter and setter do not need to have the same accessibility level. Either getter or setter can reduce the accessibility level from what the whole property has.
- `public float Width { get => _width; private set => _width = value; }`

**Auto-Implemented Properties:** There is a concise way to define properties where the compiler will generate a new backing field for the property and creates basic getter and setter methods behind the scenes. We can initialize the property to a value after the property body like `= newValue`.
- `public float Width { get; set; }`
- `public float Width { get; set; } = 0.0;`

**Immutable Properties:** Properties whose values cannot be changed once declared are called immutable properties. Immutable properties can be created by defining only the `get` method of the property like `public float X { get; };`. We can initialize the value for these properties through assignment `=` operator like `public float X { get; } = 2.0;`.

**Object Initializer Syntax:** Allows us to set the properties of the class right as the object is created. We put the properties with their values inside the curly braces `{}` after the `new OurClassObject()` like `new Rect() { Width = 10, Height = 15 }`.
- `new Dog() { Name = "Mike", Age = 15 };`
- `new Cat() { Species = "Persian", Fur = "Soft" };`

**The Init Properties:** `init` TODO

**OBJECT INSTANCES**
Object instances are the products that our classes produce as a result. These are the objects in memory created from our class blueprint.

**Creating Instances:** Object instances of classes are created through the `new` keyword, the class name and then the round braces `()` like `Point ourPoint = new Point();`. The `new` keyword always indicates that a new object instance is being created and thus `new` keyword calls the vairous constructors inside the class.
- `Point ourPoint = new Point();`
- `Point ourPoint = new Point(0.0, 0.0);`

**Leaving Off Class:** When creating new instances of our classes, If the compiler has enough information to know which class we are using, we can create new instances of our classes without the class name and just use the `new` keyword with parantheses.
- `Point ourPoint = new();`
- `Point ourPoint = new(0.0, 0.0);`

## NULL REFERENCES

Reference type variables like strings or arrays can contain null values. The null reference is a special one indicating the absence of a value. These null references are created through the `null` value.

**Default Reference Value:** Null references are helpful when it is possible for our variable to not have any data available for something. The `null` value is the default value for reference types (our classes, strings, arrays) when they are declared.

#TODO default values for various types

**Indication Of Reference-Typed Variables:** When we are creating variables normally like `string name = "Ali";` we are indicating that the variable cannot contain `null` values. We can indicate that variable can contain `null` values through the use of question-mark `?` after the type annotation like `[type]? [variable]`. A `?` means that this variable can be allowed to contain `null` values.
- `string? name = null;`
- `string? name = "Ali";`

**Null Check:** We can compare reference-typed variables against the `null` through simple comparison operators like equality `==` and non-equality `!=` operators.
- `name == null` - Returns `true` if the `name` is a `null` value
- `name != null` - Returns `true` if `name` is not a `null` value

**Null-Conditional Operators:** The operators `?.` and `?[]` are called null-conditional operators which allows us to simultaneously check for null and access the members. These operators evaluate the part before it to see if they are `null`. If it is, then no further evaluation happens and whole expression evaluates to `null`. If it is not `null`, the evaluation will continue as though it had been a normal `.` or `[]` operator.
- The `?.` replaces the `.` operator to access the members of an object like `user?.name`
- The `?[]` replaces replaces the `[]` operator to access the elements of arrays or lists like `scores?[0]`.

**Null-Coallescing Operator:** The null-coallescing operator `??` takes an expression that might be `null` and provide a value or expression to use as a fallback when it is.
- `User user = getUser() ?? new User("Mike");`
- `string name = user?.name ?? "No Name";`


## INHERITANCE

Inheritance is a special relationship between two classes where one class acts as the parent or base class which provides base functionalities and the other class acts as the derived or child class which derives from the base class and also extends with additional capabilities.

Three things happen when we create an inheritance relationship between two classes:
- The derived class gets everything the base class has
- The derived class can add in extra stuff for additional functionalities
- The derived class can always be treated as though it were the original since it has all of those functionalities

**Base Class:** The original general class that we build up on is called the base class, the parent class or the superclass.

**Derived Class:** The new class that is based upon the base class and extends the it is the derived class, the child class or the subclass.

**Inheritance Heirarchy:** The collection of classes related through inheritance relationships are is called an inheritance heirarchy.

**The Object Class:** Every class we define in C# automatically has a base class called the `object`. All classes we define are derived from and extends this base `object` class.
- The `object` class has several general methods like `ToString()` which returns a string representation of the class and `Equals()` determines whether two objects are equal or not.

**CREATING INHERITANCE**
**Defining Base Class:** First we have to create the base parent class for new classes to build upon. The base classes are defined just like regular classes like `public class OurBase {...}`.
- `Animal` is the base class while `Cat`, `Dog` and `Tiger` can be derived classes
- `Vehicle` is the base class while `Car`, `Bike` and `Bus` can be derived classes

**Defining Derived Class:** After defining our base class we will be creating classes that will derive from this base class. The derived classes are defined by creating a regular class and then putting the base class after the colon `:` like `public class Derived : Base {...}`.
- `public class Dog : Animal {...}`
- `public class Car : Vehicle {...}`

**The Base Keyword:** The `base` keyword allows us to refer to the base class from the derived class. This `base` keyword allows us to access fields, properties or methods of the base class from our derived class.
- To access fields or properties of the base class from derived class we can use `base` like `base.width` or `base.Height`.
- To use the methods of the base class from derived class we can use `base` like `base.GetArea()` or `base.Bark(10)`.
- To use constructors of base class we can use `base()` or `base(...)`.

**Derived Class Constructors:** We use the `base` keyword to call the the base class contructors from the derived class constructor like `public Derived : base(...) {...}`. We can pass arguments to the base `base()` or not depending on the constructor defined in the base class.
- Constructor in the base class is not responsible for the validity of the object of a derived class. Constructors are not inherited in the derived class and therefore they must supply their own one. 
- But we must leverage the constructors defined in the base class when making new constructors in the derived class.

**BASE TYPES FOR DERIVED OBJECTS** 
Since the derived objects constains all the base functionalities of the base class, we can create derived class instances with base class types like `Base newInst = new Derived();`.
- `object point = new Point(3, 5);`
- `Vehicle carA = new Car();`

The derived class instances created in this way will be treated just like a base type instance they are defined with. It makes no promises that it has a reference to anything more specific than what the base type offers,

#TODO : `as` keyword used like `vehicle as Car` does a check and the conversion of types.

## POLYMORPHISM

Polymorphism means "many forms" and its a mechanism that allows different derived classes related by inheritance provide their own definition for a method.

**Polymorphism:** Derived classes can override methods from the base class. The correct version of method to be used will be determined at runtime, so you will get different behaviour depending on the object's class.

**OVERRIDING METHODS** 
Not every method in the base class can be leverage polymorphism in derived classes.
- We place the `virtual` keyword on methods inside the base class to indicate that it is allowed to be replaced in the derived class like `public virtual [method]`.
- Then we place the `override` keyword on methods inside the derived class to indicate that it is being overriden from the base class like `public override [method]`.

We can override most types of members except fields and constructors (which are not inherited anyway).

Just because some method is virtual does not mean a derived class must override it.

**ABSTRACT CLASSES AND METHODS**

**Abstract Methods:** Methods created with their return type, name and parameters list (the method signature) without providing the implementation body definition are called abstract methods.
- When a base class has an abstract method, the derived classes must override the method, there is nothing to fall back on.
- The `abstract` keyword is used to indicate the method is abstract like `public abstract [methodsign];`.
	- `public abstract bool IsAdult(int age);`
	- `public abstract void GetName(User user);`

**Abstract Classes:** Abstract methods can only be created inside the abstract classes. Once a class has any abstract member, the class must also be made abstract. Abstract classes itself can consist of any type of members it wants, `abstract`, `virtual` or regular normal ones.
- The regular classes we have been creating so far are called concrete classes. Concrete classes provide the implementation and definition for all methods it defines.
- The `abstract` keyword is used to indicate the class is abstract like `public abstract class Vehicle {...}`.

#TODO : `new` methods to completely create a new member in the derived class with same name as the base class.

## INTERFACES

Interfaces are types like classes that defines a contract or role that objects can fulfill or implement. It defines an object's boundary by listing the methods, properties and more that an object must have without supplying any implementation or behaviour for them.

We can think of an interface as defining a specific role or responsibility in the system without providing the code to make it happen. It is almost as though we have made a class where every member is abstract but more flexible.

**Maximum Flexibility With Interfaces:** Interfaces are perfect for situations where we know we may want to substitute entirely different or unrelated objects to fulfill a specific role or responsibility in our system.

**CREATING INTERFACES**
Interfaces are created and defined through the `interface` keyword followed by the interface name starting with `I` like `public interface IOurInterface {...}`. It is conventional to start the names of interfaces with letter `I`.
- `public interface IAnimal {...}`
- `public interface IVehicle {...}`

Interfaces should only contain capabilities (fields, methods, properties) that you expect the implementing classes to implement on their own.

**DEFINING MEMBERS**
Members of an interface are `public` and `abstract` by default, we don't need mention it. Members like properties and methods are defined with their signatures without an implementation.

**Properties:** We need to define their signature with just getter and setter keywords without defining their methods like `int Age { get; set; }` or `int Age { get; }`.

**Methods:** We need to define their signatures, the return type, name, parameters list and then semi-colon `;` without the implementation body like `int GetAge(User user);`

Interface members cannot have instance fields but can consist of properties and methods. 

**IMPLEMENTING INTERFACES** 
After our interface has been created, the next step is to build a class that fulfills the role/responsibility for this interface. This is called implementing the interface. 

**Must Implement All Of Interfaces:** When a class implements an interface, we must define each member included from the interface in the class. This is the minimum we have to to do.

**Extending The Implementing Class:** After defining each member from the interface, the class can be extended with more members. Implementing an interface indicates that the class will just have at least the capabilities defined by this interface, not just limited by it.

**Base Classes And Interfaces:** A class can derive from only one base class but it can implement from more than one interfaces. A class can have more than one interfaces to implement.

**Implementing One Interface:** We use the colon `:` after the class name followed by the interface like `class OurClass : IOurInterface {...}`.
- `public class Animal : IAnimal {...}`

**Implementing More Than One Interface:** To implement more than one interface we separate the interfaces by commas like `class OurClass : IAOurInterface, IBOurInterface {...}`.
- `public class Car : IVehicle, IFourWheeler {...}`
- `public class Car : Vehicle, IFourWheeler {...}`

**Using Interfaces To Create Objects:** We can create variables (objects) that use an interface as their type and place in it anything that implements that interface.
- `IVehicle car = new Car();`
- `ILevelBuilder levelBuilder = new LocateLevelBuilder();`

#TODO : default interface methods, multiple interfaces containing same members

## STRUCTS

Structs are like classes that allows us to define data structures without complex behaviour. While structs are not focused on behaviour, they can have properties and methods.

**Structs Are Value Types:** Struct and all the objects created from the struct are value types and therefore follows value semantics. We get access to the actual value that is stored on the stack.

**Structs For Data Concepts:** Structs are primarily useful for representing small data related concepts that do not have a lot of behaviour. We can represent a cartesian point, a circle, a line or a matrix with structs.

**Structs Cannot Inherit But Can Implement:** Structs does not support inheriting from another base struct (like classes). But structs can implement from interfaces. 

**Creating Structs:** Structs are defined through the `struct` keyword like `public struct Point {...}` and then they are defined just like the classes. They can contain fields, constructors, methods and properties just like classes.
- `public struct Node {...}`
- `public struct Point {...}`
- `public struct LineSegment {...}`

**Creating Struct Objects:** After defining our structs, we can create struct objects just like we did with classes, through the `new` keyword like `Point ourPoint = new Point(0, 0);`.
- `Node ourNode = new Node(value);`
- `LineSegment line = new LineSegment(15);`

#TODO : most of built-in types are structs, some are classes

#TODO : RECORDS

## GENERICS

Generics leave placeholders for types that can be filled in when used. A generic type is type definition (like classes, structs or interface) that leaves placeholder for some of the types it uses. It is basically allows us to define generic type parameter for data types that will be used in our classes, structs or interfaces.

**Conventions:** We can name our generic type parameters anything we want but there are two conventions that we should follow for them:
- Type parameter names should start with single capital letters like `T`, `K`, `V`
- Type parameter names starts with `T` followed by some descriptive name like `TKey`, `TValue` or `TItem`.

**Generic Type Parameters:** Generics are created by placing the type parameter inside the angular brackets like `<T>` in the type definition like `class List<T> {...}`. To add multiple generic type parameters, we separate them using commas like `class Pair<TX, TY> {...}`. 

**Using Generic Types:** After defining our generic types, we can use this generic type parameters `T` (and others) inside our types to annotate the data type of methods parameter, their return values or variables like `public T GetItem() {...}` or `public void Update(T item)`.

**Generic Type Instances:** When creating instances of the generic type classes, we annotate the required generic type inside the angular brackets (in place of `<T>`) like `List<int>`.
- `List<int> numbers = new List<int>();`
- `List<string> names = new List<string>();`

**Generics And Inheritances:** Generic classes types and inheritance can be combined. Generic classes can derive from non-generic classes and non-generic classes can derive from generic classes. And obviously generic classes can derive from other generic classes.
- `class FancyList<T> : List<T> {...}` - Opening the generic type parameter in the derived class
- `class Polygon : List<Point> {...}` - Closing the generic type parameter in the derived class

**GENERIC TYPE CONSTRAINTS**
Generic type constraints allows us to define the constraints on the type parameter `T`. It allows us to restrict which types (and their derived classes) are allowed for the place of `T`.

**All Constraints:** There are two kinds of generic type contraints that we can use in our generic classes:
- `where T : Base`: Restricts the type parameter `T` to be only of type `Base` or types that are derived from `Base`. We can only use the type `Base` or the types that derive from `Base` for the type parameter `T`.
- `where T : new()`: Restricts the type parameter `T` to be only of types that have a parameterless constructor, so that we can create new instances like `new T()`.

**Defining Generic Type Constraints:** We use the `where` keyword along with the given type parameter `T` like `where T : BaseClass` or `where T : new()` in the class definition. We can also add more than one generic type constraint to a type parameter through commas like `where T : GameObject, new()`.
- `class IDList<T> where T : GameObject`
- `class IDList<T> where T : new()`
- `class IDList<T> where T : GameObject, new()`

**Multiple Generic Type Parameters Constraints:** For multiple generic type parameters like `class Pair<TK, TV>` we can have multiple generic contraints through multiple `where` keywords like `where TK : ABase where TV : BBase`.

**TYPE DEFAULT VALUES**
The `default` operator allows us to get the default value for any type (not limited to generic types and methods).

**GENERIC METHODS**
Sometimes it is not a type that needs to be generic but a single method. We can define generic methods by putting the generic type parameter `<T>` after the methods name but before the parentheses `(...)` like 
- `public T GetItem<T>(T value) {...}`
- `public List<T> Repeat<T>(T value, int times) {...}`

**Using Generic Methods:** When calling or invoking the generic methods, we put the generic type in the angular brackets after the method name but before the parentheses like `Repeat<string>("Alright", 3)`.
- `List<int> numbers = Repeated<int>(2, 10);`
- `List<string> words = Repeated<string>("Ali", 10);`

We only need to mention the generic type when the cannot infer the type from the annotation. So we can also do `List<int> nums = Repeat(1, 100);`.

## RANDOMNESS

The `Random` class in the `System` namespace allows us to generate random and pseudo-random numbers. Pseudo-random generators have to start with an initial value called a seed. If you reuse the same seed, you will get the same random value again precisely.

**Random Class:** The `Random` class is the starting point for anything involving randomness. So we need initialize a random object to generate various kinds of random numbers.
- `Random random = new Random();` - Random object without a seed
- `Random random = new Random(42);` - Random object with seed (any number)

**Generating Random Integers:** There are various kinds of methods available for generating random integers:
- `random.Next()`: Picks any non-negative random integer (0 or positive). It can literally pick any number like `7` or `1349859`.
- `random.Next(n)`: Picks a random integer from range `0` to `n - 1`.
- `random.Next(a, b)`: Picks a random integer from range `a` to `b - 1`.

**Generating Random Floats:** There are also methods for generating random floating point numbers:
- `random.NextDouble()`: Picks a random floating value between `0` and `1.0` without including `1.0`.

## DATES AND TIMES

**THE DATETIMES**
The `DateTime` struct allows us to work with dates and times instants, and also to get the current time.

**Creating Dates And Times:** We simply instantiate the `DateTime` objects to create a new instance of time. We can do this simply with `new DateTime(...)` like
- `DateTime timeA = new DateTime(2022, 12, 31);`
- `DateTime timeA = new DateTime(2022, 12, 31, 23, 59, 59);`

**Getting Current Times:** We use the properties `DateTime.Now` and `DateTime.UtcNow` to get the current times like
- `DateTime nowLocal = DateTime.Now;` - The local time-zone time
- `DateTime nowUtc = DateTime.UtcNow;` - The global universal time

**Adding Periods:** There are also methods for getting new `DateTime` values relative to other `DateTime` objects. For example we can add days to the current datetime like
- `ourDateTime.AddDays(2);`

**THE TIMESPANS**
The `TimeSpan` struct represents a span of time or period of time. There are two ways to create values of the `TimeSpan` struct.

**The Constructors:** There are several constructors of `TimeSpan` that allows us to dictate the length of time-span. Overall we can create our time-spans through syntax `new TimeSpan(days, hours, minutes, seconds, milliseconds)`.
- `new TimeSpan(10);` - 10 ticks (1 microsecond)
- `new TimeSpan(1, 30, 59);` - 1 hour, 30 minutes, 59 seconds
- `new TimeSpan(2, 1, 30, 59);` - 2 days, 1 hour, 30 minutes, 59 seconds
- `new TimeSpan(2, 1, 30, 59, 500);` - 2 days, 1 hour, 30 minutes, 59 seconds, 500 milliseconds

**The FromX Methods:** We can also create milliseconds, seconds, minutes, hours and days from methods like `TimeSpan.FromX(value)` like
- `TimeSpan.FromDays(10)`
- `TimeSpan.FromHours(10)`
- `TimeSpan.FromMinutes(10)`
- `TimeSpan.FromSeconds(10)`
- `TimeSpan.FromMilliseconds(10)`
- `TimeSpan.FromTicks(10)`

**Getting Various Components:** The `TimeSpan` struct consists of properties that allows us to get various components from the time-span value like `Days` or `Hours`.
- `ts.Days`
- `ts.Hours`
- `ts.Minutes`
- `ts.Seconds`
- `ts.Milliseconds`

**Getting Entire Length:** The `TimeSpan` struct also consists of properties that allows us to get the entire time-span value time period in requested formats like `TotalDays` or `TotalHours`.
- `ts.TotalHours`
- `ts.TotalDays`
- `ts.TotalHours`
- `ts.TotalMinutes`
- `ts.TotalSeconds`
- `ts.TotalMilliseconds`

**No Time Period:** The `TimeSpan` struct contains one more property that represents no time period at all. This is called zero time period accessed by `TimeSpan.Zero`.

**Operation Between DateTimes and TimeSpans:** Both `DateTime` and `TimeSpan` have defined various types of operations through comparison operators like (`<`, `>`, `<=`, `>=`, `==`, `!=`) as well as addition `+` and subtraction `-`.

## THE GUID STRUCT

The `Guid` struct in the `System` namespace represents a globally unique identifier or GUID. It allows us to generate random ID identifiers that are globally unique (no two can be same).

**Creating Identifiers:** We use the method `Guid.NewGuid()` like to generate new GUIDs. If we already have our own GUID in the string form, we can also use it to create new GUID through `new Guid("...")`.
- `Guid id = Guid.NewGuid();`
- `Guid id = new Guid("10A24EC2-3008-4678-AD86-FCCCDA8CE868");`

## NAMESPACES

It is conventional in C# to put the types (like classes and structs) into their own separate files with filenames that matches the type's name contained in it. Tiny type definitions like enumerations and records can be lumped in with closely related types.

A program project can only contain one file with the main method. This is because the `Main()` method is the entry point of running the project.

**Full Qualified Names:** A descriptive way to refer to the types which combines the namespace it lives in and the type name itself like `[NameSpace].[Type]`. Any time we use a type's name, we have the option to use the type's fully qualified name.
- `System.Console` - Refers to the `Console` class inside `System` namespace
- `System.Text.StringBuilder` - Refers to the `StringBuilder` class inside `System.Text` namespace

**Namespaces:** Allows us to organize various related types into a container. A namespace is a named container or module for containing and organizing types. We have seen various namespaces like `System`, `System.Text` and `System.Collections.Generic`.

**Using Directives:** The `using` directive along with a namespace is placed at the top of the file to indicate that you will be using the types from this namespace inside current program. It allows us to use the types in that namespace without typing out their fully qualified names. We do this like `using [Namespace];`.
- `using System.Text;` - Can use types like `StringBuilder` now
- `using System.Collections.Generic;` - Can use types like `List` or `Dictionary` now

**Implicit Using Directives:** The C# projects now adds several `using` directives implicitly in the project configuration settings to import some of the most common namespaces automatically. We don't need to add them ourselves. Therefore, we only need to add `using` directives for namespaces that are not obvious and required in our program files.

**Global Using Directives:** Global using directives allows us to import namespaces globally in all of the files of the project. We use the `global using` directive to in any file to globally use the types in the included namespace like `global using [Namespace]`.
- The `global using` directive must appear before any regular `using` directives.
- It is recommended to include all the `global using` directives in a single file like `GlobalUsings.cs` or `ProjectSettings.cs`.

**Static Using Directives:** Static using directives allows us to use the members of static types (like static classes) as simple variables or local functions without mentioning the type itself. We use the `using static [Namespace.StaticType];` directive for static using directives.
- `using static System.Math;` - Allows us to use `PI` and `Sin(x)` members of static `Math` class type
- `using System.Console;` - Allows us to use `WriteLine()` and `ReadLine()` members of static `Console` class type

**Using Directives Aliases:** Using directives also allows us to use the types from some namespaces through aliases. We use the `using [Alias] = [Namespace.Type];` directive to create aliases for included types in the namespace.
- `using OurMath = System.Math;`
- `using PPoint = OurPhysicsEngine.Point;`
- `using RPoint = RayPhysicsEngine.Point;`

**ORGANIZING TYPES INTO NAMESPACES**
All the types we have used are contained in one namespace or another. Anything that is meant to be shared and reused in other projects should be in a namespace. A namespace name should convey the relationship between the related types it contains.

**Creating Namespaces:** We use the `namespace` keyword, along with the namespace name and block of body `{...}` to indicate that the following types will be contained inside this namespace like `namespace [Name] {}`. We can also end the namespace directive with semi-colon `;` to indicate that the whole file is a namespace (won't need to indent inside `{...}` now).
- `namespace OurAwesomeSpace;`
- `namespace OurAwesomeSpace {...}`

**Nesting Namespaces:** We can create nested namespaces through organizing the dot operator `.` like `namespace [Name.Nested] {...}` or `namespace [Name.Nested];`. This allows us to organize our types further.
- `namespace SpaceGame.Ships {...}`
- `namespace SpaceGame.PhysicsEngine {...}`

**Namespace Name Conventions:** Most of the times namespace names mirrors the name of the project. Project names are usually given a short and memorable name like `SpaceGame` or they are prefixed by the company name like `RBTech.SpaceGame`. Large projects are made of multiple components whose names are added at the end of project names like `SpaceGame.Client` or `RBTech.SpaceGame.Client`.


**TRADITIONAL ENTRY POINT**

**Top-Level Statements:** Writing your code statements directly in the file `Program.cs` refers to top-level statements. These statements and code will are placed in designated method inside a designated class behind the scenes which is responsible for being the entry-point of the project.

**THE ENTRY POINT**
The part of the program that executes automatically when the project is run (executed) is called the entry-point of the project. The `Main` method inside the `Program` which is contained inside the `Program.cs` file is considered the traditional entry-point most C# projects.

**Program Class:** We create a regular or internal `Program` class inside the file `Program.cs`. The class can optionally be a part of the namespace with same name as the project like `namespace OurProject { internal class Program { ... } }`.

**Main Method:** After creating the `Program` class, we create a static method inside the class that returns nothing like `static void Main() {...}`. The method can consist of optional CLI parameters represented as array of strings like `static void Main(string[] args) {...}`.

## ERRORS AND EXCEPTIONS

**Exceptions:** When some code encounters a failure condition, something exceptional and outside of the ordinary then the code creates a new object that represents these errors called exceptions. Exceptions are objects that represents problems occurred in the code. They are thrown at us when the compiler detects something that it does not know how to deal with.
- All exception objects that are generated by problematic code are instances of the class `System.Exception` or classes that are derived from it.

**Bubbling Up:** Exceptions always bubble up from the bottom. They bubble up from a method to its caller and then to that method's caller, looking to see if anything knows how to resolve the problem.

**Errors Handling Mechanism**
1. We first find the set of statements that could possibly lead to error and put it inside a `try` block. We only put the problematic code in the `try` block.
2. Then if some exception is thrown by the problematic code (some error occured), it would be catched by the `catch` block. The `catch` block contains the code that allows us to deal and recover from the errors raised. 
3. In the end we can optionally have `finally` block which always runs whether some exception is raised or not. It contains code that we want to run no matter what happens in `try` and `catch` block.

**THE TRY BLOCK** 
We create the try block through the `try` keyword followed by block body `{}` like `try {...}`. The try block always contains the problematic code that could lead to errors (dividing some number by zero, some data object not found in database and more). 

If some exception occurrs in the try block then the execution is moved to the `catch` which handles that exception. If there are no errors then the execution will skip `catch` blocks and will continue normally.

When a code statement in the `try` block first throws an exception, the rest of the code will be skipped (not run). It is important to place the right statements in the `try` block (smaller is usually better).

**THE CATCH BLOCK**
We create the catch block through the `catch` keyword, the specific exception to deal with in the previous `try` block and followed by block body `{}` like `catch (SomeException) {...}`. The catch block always contains the code that deals and recovers from the error occurred in the last `try` block.

**Specific Exceptions:** We can have more than one `catch` blocks that deal with different exceptions raised from the problematic code like `catch (SomeException) {...} catch (OtherException) {...}`.

**Don't Catch All:** We would never want to create a catch block that handles the `Exception` like `catch (Exception) {...}`. Handle only the exception types you can recover from and handle different excpetions differently.

**Using Exceptions:** We can use the exception object in the `catch` block body if we want. We can add the name of exception object after the exception in the catch block like `catch (SomeException error)`. Exception objects defines a `Message` property that we can use in catch body like `error.Message`.

> "Code that cannot reasonably resolve a specific problem type should not catch it"
> "If there is no recourse for an error, it is reasonable for the program to end"

**THE FINALLY BLOCK**
We create the finally block after try and catch block, through the the `finally` keyword followed by block body `{...}`. It contains code that should run regardless of how the flow of execution (whether any exception raised or not). A finally block allows for ensuring you can get back to your original state of the code.

**EXCEPTIONS**
Exceptions are object instances of class `System.Exception` or classes that derive from `System.Exception`. The `Exception` class is the most basic and fundamental exception that are used to create other derived exception classes. We should never use `Exception` directly.

There are various kinds of exceptions in C# for various situations that allows us. All of these exceptions are derived from `Exception` class. Some of the common ones are:
- `NotImplementedException`
- `NotSupportedException`
- `InvalidOperationException`
- `ArgumentOutOfRangeException`
- `ArgumentNullException`
- `ArgumentException`

**Creating Our Exceptions:** We can create our own exceptions by creating a class that derives from the `Exception` class or one of the various classes that derive from `Exception` class like `public class OurException : Exception {...}`. Conventionally all the exceptions name should end with `Exception` word.

Now we have to create two constructors with no statements, inside our exception class that maps to the base class like:
- `public OurException() : base() {}`
- `public OurException(string message) : base(message) {}`

After creating our exception class, we can create exception instance objects just like normal objects, through `new` and one of the constrcutors like `new OurException()` or `new OurException("Yo! shits gone south")`.

**Throwing Excpetions:** We use the `throw` directive to raise exception instances (errors) in our code like `throw new OurException();`. We can throw exceptions wherever we want in our code, which starts the process of bubbling up to find a handler (catch block) that can deal with errors.

## DELEGATES

A delegate is a type that can hold a reference to a method or local function. It allows us to pass around methods or local functions to other methods as though it were simple data. Delegates can significantly increase the flexibility of sections of code. It can allow you to define operations with replaceable elements in the middle, filled in by other methods via delegates.

**OUR OWN DELEGATE TYPES**
**Creating Delegates:** We define a delegate type through the `delegate` keyword, the return type, the name of the delegate type and the parameter list inside parentheses like `delegate returnType OurDelegate(parameters);`. Delegate type names conventionall ends with the `Delegate` word.
- `public delegate int NumberDelegate(int number);`
- `public delegate bool CheckNumberDelegate(int number);`

**Passing Delegates:** We can pass delegates to methods by annotating the parameter with a delegate type like `void OurMethod(OurDelegate operation) {...}`. Now we can pass methods to `OurMethod` that matches the `OurDelegate` signature (return type and parameters) without brackets.
- We pass methods like `OurMethod(SomeMethod)` where `SomeMethod` match the return type and parameter list of the delegate type `OurDelegate`.
- We can also pass methods from other class or objects like `OurMethod(thing.SomeMethod)` as along as it matches the delegate type `OurDelegate`.

**Calling Passed Delegates:** Inside the method body, we can use the provided delegate method just like a regular method. There are two ways in which we can call the passed delegate method: 
- We can call the method like a regular method with parentheses like `operation()` passing necessary arguments inside the parentheses.
- We can call the method through `Invoke()` method like `operation.Invoke()` passing necessary arguments inside the `Invoke()`. This allows us to check for null delegate value like `operation?.Invoke()`.

**Example**
- For the delegate type defined like `public delegate int NumberDelegate(int number);` can have all the methods that accepts an integer and returns an integer as the delegate value.
- To use this `NumberDelegate` in one of our methods we have to define it in the method like `void ChangeArray(int[] numbers, NumberDelegate operation) {...}`.
- All the following methods can be passed to the `ChangeArray` method with the delegate type `NumberDelegate` type like `ChangeArray(new int[] {1, 2, 3}, AddOne)` or `ChangeArray(new int[] {3, 4, 5}, SubtractOne)`.
	- `int AddOne(int number) => number + 1;`
	- `int SubtractOne(int number) => number - 1;`
	- `int Double(int number) => number * 2;`
- Inside the method body we can call these methods like `operation(10)` or `operation.Invoke(10)`.

**PREDEFINED DELEGATE TYPES**
The base call library provides a flexible extensive collection of delegate types that covers most of the scenarios for us. If we use one of these delegate types, we might not need to define our delegate types.

There are three kinds of generic delegate types that covers virtually all the scenarios: 
- `Action` Delegate 
- `Func` Delegate
- `Predicate` Delegate

**The Action Delegate Type:** The `Action` generic delegate type has a `void` return type. They capture all delegate methods where the method performs a job without returning any value.
- `Action`: The simplest delegate type for methods with no parameters and with `void` return type like `void DoSomething() {...}`.
- `Action<TParam>`: Delegate type for methods that recieves one parameter of type `TParam` and with `void` return type like `void DoSeomthing(string name) {...}` for `Action<string>`.
- `Action<TParamA, TParamB>`: Delegate type for methods that recieves two parameters of type `TParamA` and `TParamB` with `void` return type like `void DoSomething(int num, string msg) {...}` for `Action<int, string>`.

**The Func Delegate Type:** The `Func` generic delegate type capture all the methods where the method returns some value.
- `Func<TResult>`: The simplest delegate type for methods with no parameters which returns value of type `T` like `int DoSomething() {...}` for `Func<int>`.
- `Func<TParam, TResult>`: Delegate type for methods that receives one parameter of type `TParam` and returns a value of type `TResult` like `int DoSomething(string msg) {}` for `Func<string, int>`.
- `Func<TParamA, TParamB, TResult>`: Delegate type for methods that receives two parameters of types `TParamA` and `TParamB`, and returns a value of type `TResult` like `int DoSomething(float ratio, string msg) {}` for `Func<float, string, int>`.

**The Predicate Delegate Type:** The `Predicate` generic delegate type capture all methods where the method returns a boolean value.
- `Predicate<TParam>`: The simplest delegate type for methods that receives one parameter of type `TParam` which returns a boolean value like `bool DoSomething(int input) {...}` for `Predicate<int>`.
- `Predicate<TParamA, TParamB>`: Delegate type for methods that receives two parameters of types `TParamA` and `TParamB` which returns a boolean value like `bool DoSomething(int num, string msg) {...}` for `Predicate<int, string>`.

#TODO: multi-cast delegates, delegate method chaining

## EVENTS

Events are a mechanism that allows a class (or an object) to notify observers that something has changed or happened, so they can respond.

**Events Mechanism:** Any class can create an event as a member (like properties and methods). Any other object can act as a listener or an observer and can subscribe to the event to be notified when the event occurs. The class that owns the event can then raise or fire the event when the time is right, causing each listener's handler to run.

**Events:** Signals that lives inside a class that indicate that something has happened.
**Event Handlers:** The method that runs when an event has occurred or raised up.

**USING EVENTS**
**Creating Events:** We define events inside a class as its member through the `event` keyword followed by its delegate type and then the event name like `event [Delegate]? EventName;`. Events can be `null` (that `?` in `Delegate?`) when no event handlers are attached to them.
- `public event Action? ShipExploded;`
- `public event Action<Point>? ShipExploded;`

**Invoking Events:** After our event is created we can raise or fire the event at the appropriate moment or place by invoking it just like delegate methods like `EventName(...)` or `EventName.Invoke(...)`. The raising or firing of event can be placed anywhere inside the owned class within any method.
- `ShipExploded()`
- `ShipExploded.Invoke(location)`

**Creating Event Handlers:** Now on the observer side, we will create our event handler method inside another class that observes the event. The event handler should match the delegate type of the event in the source class like `public void OnEventName() {...}` or `public void HandleEventName(...) {...}`. Event handler method names conventionally starts with `On` or `Handle`.
- `public void OnShipExploded() {...}`
- `public void OnShipExploded(Point location) {...}`

**Subscribing To Events:** On the observer side, we attach and subscribe our event handler in observer class method to the event in the source class. We subscribe event handlers to events by simply adding the event handler to the event in-place like `source.EventName += OnEventName`. We can subscribe to events at any place we want but most of the times it is best to do it in the observer class constructor.
- `ship.ShipExploded += OnShipExploded;`
- `ship.GameLevelEnded += OnGameLevelEnded;`

**Unsubscribing To Events:** On the observer side, after we are done with the event we can detach or unsubscribe to them. We usubscribe event handlers from events by simply subtracting event handler to the event in-place like `source.EventName -= OnEventName;`.
- `ship.ShipExploded -= OnShipExploded;`
- `ship.GameLevelEnded -= OnGameLevelEnded;`

**Event Leaks:** If an object is accidentally surviving during the runtime because of an event subscription alone, it is called an event leak or an event memory leak.
- **Cleanup Method:** A common solution is to make a `Cleanup` method that ussubscribe from all the previous subscribed events. When it is time for the object to die, we call this method.
- **Dispose Methods:** Another common solution is to make a `Dispose` method and make the class implement `IDisposable` interface.

**Custom Event Accessors:** Two accessors can be defined inside events body `{}`
- `add {...}` for when attaching the event handler 
- `remove {...}` for when detaching the event handler

## LAMBDA EXPRESSIONS

Lambda expressions are small unnamed methods created using a short syntax. A lambda expression defines a single-use method inline right where it is needed. We can use lambda expressions for delegate types.

Lambda functions are created by first listing all the parameters inside parentheses `(...)` followed by an arrow operator `=>` and then the return expression or statements body.

**Parameters:** We can have zero or more than zero parameters for our lambda functions inside parentheses `(...)` like
- `() => 42`: Lambda function with no parameters
- `(n) => n > 2`: Lambda function with single parameter
- `(a, b) => a + b`: Lambda function with two parameters

**Type Inference:** Though lambda expressions are meant to be simple without the boilerplate stuff of regular methods, we can define the parameter and return types of the lambda functions.
- Return types of lambda functions are mentioned before the lambda function like 
	- `int (a, b) => a + b`
	- `bool (a) => a == 42`
- Parameter types of lambda functions are mentioned before the parameters inside `()` like
	- `bool (int a) => a == 42`
	- `int (int a, int b) => a + b`

**Discards:** We can use a discard parameter represented by `_` when you don't need to be using all the parameters in the lambda functions like
- `(a, _) => 42`
- `(int a, int _, int _) => 42`

**Lambda Expressions:** Lambda functions that makes use of simple expressions in the output which also makes use of the lambda parameters are called lambda expressions like
- `() => 42`
- `(a) => a > 2`
- `(a, b) => a * b`

**Lambda Statements:** Lambda functions that makes use of statements body `{...}` in the output which also makes use of some lambda parameters are called lambda statements like `(...) => {...}`.
- `(n) => { return (n % 2) == 0; }`
- `(n) => { Console.WriteLine("Hello"); return (n % 2) == 0; }`

## FILES

---
## MORE
- lifetimes in c#

---
## REFERENCES