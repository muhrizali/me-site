---
# astro: layout
layout: "../../../layouts/PostLayout.astro"

# metatdata
title: "Python"
description: "An excellent high-level, dynamically typed programming language used in web development, CLI development, scripting, APIs, artificial intelligence, data science and much much more. I consider this as one standard programming language."

# dates and times
datePublished: "2023-10-17T18:44:44"
dateModified: "2023-10-17T18:44:44"

# states
isDraft: false
tags:
  - Python
  - Programming
---

## BASICS / STARTING
Python is a dynamic high-level programming language used various technical fields like web development, cryptography, computer science and in scientific fields like data analysis, data science.

Installing Python is recommended done through tools like `miniconda` and `uv`. Start Python prompt shell by running the Python executable from terminal command line just like `python`. We can test our code here.

**Running First Program:** Tradition `"Hello World"` program in python through `print` function like `print("Hello World!")`.

Python files have the extension of ".py" and so we will save our programs in the "hello_world.py" file. To run our python file, we execute it with Python interpretor like `python hello_world.py`.

## VARIABLES
Variables can be thought as a labeled box in computer's memory where we can store data (values). We save data, the data which we will be frequently using in our program, into variables.

**Creating Variables:** Assignment statement refers to the statement in which variables are assigned some value. An assignment statement consists of a variable name, assignment operator ` = ` and the value to be stored.
- `spam = 42`
- `temperature = 36.45`
- `message = "Hello World!"`, 

Assigning some value to a variable for the first time is called initializing it. If we again assign some other value to previously created variable, the old value will be forgotten and the variable will be overwritten with the new value.

**Variable Naming Rules:** A good variable name describes the data it contains. Descriptive names will help make your code more readable. Though we can name our variables almost anything, Python does have some naming restrictions that we must keep in mind:
- Names can only contain letters, numbers and underscores `_`. They can start with a letter or an underscore but not with a number.
- Spaces are not allowed in names, underscores can be used to separate words like `this_is_fine`.
- We cannot use Python reserved keywords like `if`, `input`, `print`, `else` as our variable names.

## DATA TYPES
Data type is a category for values and every value belongs to exactly one data type. Therefore, every variable with value or any expression evaluated to some value in our program will be of some data type.

The fundamental built-in data types are divided into two categories:
- **Simple Primitive Types:** Integers, Floating-Point Numbers, Booleans, Strings
- **Complex Compound Types:** Lists, Tuples, Dictionaries, Sets

**Checking Types:** The `type()` function is used to check and display the type of a value in Python.
- `type(1)` - `<class 'int'>`
- `type(1.0)` - `<class 'float'>`
- `type("Hello")` - `<class 'str'>`
- `type([1])` - `<class 'list'>`

## NUMBERS
Numbers in Python refers to both integers as well as floating-point numbers (like in Mathematics). And so, these two are the most commonly used Number types in Python.

**INTEGERS**
An integer `int` in Python is a whole number with no decimal places or any decimal point in the number. They can refer to negative integers, zero and positive integers.
- `num = 25`
- `num: int = -25`

**Converting to Integers:** The `int()` function/constructor is used to convert (cast) various data types like strings, floats, booleans and more into integer data types.
- `int("25")` - `25`
- `int(25.43)` - `25`

**Digit Separators:** We can group and separate digits in integers by using underscores `_` in the literals.
- `1_00_000` - `100000`
- `1_000_000` - `1000000`

**FLOATING POINT NUMBERS**
A floating-point number `float` is a continuous number which consists of decimal places and a decimal point.
- `num = 1.03`
- `num: float = -1.23`
- `num: float = 0.0`

**Converting to Floats:** The `float()` function is used to convert (cast) various data types into floating-point numbers.
- `float(12)` - `12.0`
- `float("4.2")` - `4.2`

**Representations:**
- `1_000_000.0`: Floats can also contain the underscore `_` separators like integers.
- `1e+6`: Floats can also be represented via the scientific E notation.

**Infinity:** The `inf` notation in Python is also a `float` data type used to represent very large numbers, infinity (which may be beyond the maximum value allowed on computer). The `-inf` notation refers to negative infinity.

**Checking Integral:** The `value.is_integer()` method checks if the floating value is integral (no decimal parts) or not.
- `(3.0).is_integer()` - `True`
- `(3.4).is_integer()` - `False`

**ARITHMETIC OPERATORS**
Programming often consists of basic mathematical operations. In Python, we have mathematical operators that are used to carry out common mathemtical computations.

Some basic Math operators in Python are:
- Basics: `+`, `-`, `*`, `/` like `3 / 2` becomes `1.5`
- Floor Division: `//` like `3 // 2` becomes `1`
- Power/Exponent: `**` like `2 ** 3` becomes `8`
- Modulus: `%` like `5 % 2` becomes `1`

**Order of Operations:** Also called precedence, is the order in which the operations takes place. In Python, order of precedence is similar to that of Math: first `**` is evaluated, then `*`, `/`, `//`, `%` are evaluated from left to right and then `+`, `-` are evaluated last also from left to right. We can use parentheses `()` to override this precedence order.
- `(...)` - always evaluated first 
- `**` - right to left
- `*`, `/`, `//`, `%` - left to right
- `+`, `-` - left to right

Python always keep evaluating parts of the expression until it becomes a single value. 

**Operation Between Integers and Floats:** Any math operation between an integer and a floating number like `2 + 3.0` or `4.5 * 2` will always result into a floating-point number (NOT an integer).
- `2 + 3.0` - `5.0`
- `4.5 * 2` - `9.0`

**Division Between Integers:** Division operation between two integer values like `3 / 2` or `6 / 3` will also always result in a floating-point number 
- `6 / 3` - `2.0`
- `3 / 2` - `1.5`

**Useful Number Functions and Methods:**
- `round()`: The `round()` function is used to round off the floating-point numbers to desired number of decimal places like `round(value, places)`. In case of `.5`, the value will round off to nearest even integer (Banker's Rounding).
	- `round(3.4)` -> `3`
	- `round(3.5)` -> `4`
	- `round(3.6)` -> `4`
- `abs()` The `abs()` function returns the absolute positive values of the inputs passed to it like `abs(value)`:
	- `abs(-9.5)` -> `9.5`
	- `abs(95)` -> `95`
- `pow()`: The `pow()` function is used to power or exponentiate the numbers like `**` operator like `pow(value, exponent)`.
	- `pow(2, 3)` - `8`
	- `pow(2, -2)` - `0.25`

#TODO - complex numbers in Python

## BOOLEANS
Boolean `bool` values in Python allows us to represent truthy and falsy values. This data type consists of only two values: `True` and `False`.
- `some_check = True`
- `some_check: bool = True`

**Converting to Booleans:** The `bool()` function/constructor is used to convert (cast) data types into boolean values.
- `bool(4)` - `True`
- `bool([])` - `False`
- `bool("")` - `False`

Boolean values can also be considered numeric in Python; `True` often represents the value `1` and `False` represents value `0`.
- `True == 1` - `True`
- `False == 0` - `True`

**TRUTHY AND FALSY VALUES**
- All values that represents null or empty like zero `0`, empty strings `""`, empty collections like `[]`, `{}`, `(,)` are considered falsy.
- All the rest of the values which do not represent null or empty like `1`, `"Hello"`, `[1]` or `{1: 2}` are considered truthy.

**BOOLEAN/LOGICAL OPERATORS**
Logical operators allows us to check one or more boolean values (or evaluated boolean values) and returns another single boolean value based on that:

`not` operator takes one boolean argument and returns the opposite result:
- `not True` - `False`
- `not False` - `True`

`and` operator takes two or more boolean arguments and returns `True` unless a single `False` is present, in which case it returns `False`:
- `True and True` - `True`
- `True and False` - `False`
- `False and True` - `False`
- `False and False` - `False`

`or` operator takes two or more boolean arguments and returns `False` unless a single `True` is present, in which case it returns `True`:
- `True or True` - `True`
- `True or False` - `True`
- `False or True` - `True`
- `False or False` - `False`

**COMPARISON OPERATORS**
Comparison operators are used to compare two values and returns a single boolean based on that. It can be used to compare numbers, strings and even boolean values.
- Equality `==` and Non-Equality `!=`: 
  Check whether two values are exactly equal or not
	- `2 == 2` - `True`
	- `2 != 2` - `False`
- Greater-Than `>` and Less-Than `<`: 
  Check whether two values are greater than or less than each other
	- `2 > 1` - `True`
	- `2 < 1` - `False`
- Greater-Than-Or-Equal `>=` and Less-Than-Or-Equal `<=`: 
  Check whether two values are greater-than-or-equal or less-than-or-equal to each other
	- `2 >= 2` - `True`
	- `2 <= 3` - `True`

**Chaining Comparison Operators:**
Comparison operators can be chained to form a larger comparison expression. Allows us to use multiple comparison operators in a single expression:
- `1 < 2 < 3` - `(1 < 2) and (2 < 3)`
- `1 < 3 < 2` - `(1 < 3) and (3 < 2)`

**Combining Logical and Comparison Operators:**
Logical operators and comparison operators can be combined to create more complex checks or to create conditions:
- `(1 == 1) or (4 >= 2)` - `True`
- `(2 >= 3) and (3 > 2)` - `False`

## STRINGS

Strings in Python `str` are a sequence of characters in Python that handles and represents textual data. Most of the time strings are used to represents text and text-related data.

**CONSTRUCTING STRINGS**
Strings can be created via single quotes `'...'` or with double quotes `"..."`:
- `name = "Muhriz Ali"`
- `name: str = 'Muhriz Ali'`

Multiline strings can also be created via triple single quotes `'''...'''` or triple double quotes `"""..."""`:
- `msg = '''Hello World'''`
- `msg: str = """Hello World"""`

Raw strings can also be created by prefixing the string literal with `r` like `r"Hello world!"`. Raw strings allows us to include any type of characters into our string as is, without worrying about its special meanings (like escape characters).
- `r"Tab is \t"`
- `r"Newline is \n"`

**String Constructor:** The `str()` function/constructor is used create (or cast) various data types into strings.
- `str(42)` - `"42"`
- `str(42.32)` - `"42.32"`
- `str([1, 2, 3])` - `"[1, 2, 3]"`

**COMMON STRING FEATURES**
**String Concatenation:** The `+` operator can be used to add/combine multiple strings 
- `"Muhriz " + "Ali"` - `"Muhriz Ali"`
- `"Hello" + " World"` - `"Hello World"`

**String Replication:** The `*` operator can be used to repeat/replicate a string value multiple number of times (whole number only) 
- `"A" * 3` - `"AAA"`
- `"B " * 3` - `"B B B "`

**String Membership Test:** The `in` and `not in` operators allows us to check if a sub-string is present in a string or not
- `"ell" in "Hello World"` - `True`
- `"o W" not in "Hello World"` - `False`

**String Number of Characters:** The built-in `len()` function determines the length of the strings
- `len("")` - `0`
- `len("Hello")` - `5`

**Traversing Strings:** Traversing a string refers to going over each character of strings to run some transformation on the data or using the data for other purposes. The most common ways of traversing lists are: `for` loops and lists comprehension:
- `for char in our_string: ...`: Allows us to iterate/traverse over the characters of string `our_string` via the loop variable `char` that we can use inside our loop body.
- `[some_fn(char) for char in string]`: We can also use list comprehensions to perform some transformation or function over the loop variable `char`.

**String Representations:** The functions `str()` and `repr()` are used to get or convert various objects into their user-friendly and developer-friendly string representations
- `str([1])` - user string representation
- `repr([1])` - developer string representation

**WORKING WITH STRINGS**
**String Indexing:** Refers to accessing the individual characters in a string by specifying the string object followed by the character's index in square brackets `[]` like `some_string[index]`.
- `some_str[1]` - second character of string
- `some_str[2]` - third character of string

String indexing in Python is zero-based, which means that the first character has an index 0, the next has an index 1 and so on. The index of last character will be the length of string minus one like `some_str[len(some_str) - 1]`.
- `some_str[0]` - first character of string

Negative indices allows us to access the characters from the end (from right) of the string to its beginning (to left). This way `some_str[-1]` refers to the last character in the string.
- `some_str[-1]` - last character of string
- `some_str[-2]` - second-last character of string

**Out-of-bound Errors:** Attempting to access characters through indices which are out of bounds of the strings will lead to errors in Python.
- `some_str[999]` - leads to error
- `some_str[-999]` - leads to error

**String Slicing:** String slicing refers to extracting parts/substrings from a string. The syntax of string slicing looks like `some_str[m:n]` which returns the portion of `some_str` starting at index `m` and up to but not including index `n`. We can also use negative indices here too.
- `"Hello"[1:4]` - `"ell"`
- `"Hello"[0:3]` - `"Hel"`

If we omit the starting index `m` like `some_str[:n]` then the slicing starts from the beginning of the string and if we omit the stopping index `n` like `some_str[m:]`, slicing stops at the end of the string. 
- `"Hello"[:3]` - `"Hel"`
- `"Hello"[2:]` - `"llo"`
- `"Hello"[:]` - `"Hello"`

**Stride/Step:** An additional third index after the colon like `some_str[m:n:x]` can also be used, called a stride or a step. This index indicates how many characters to jump after retrieving each character in the slice. 
- `"foobar"[0:6:2]` - `"foa"`
- `"foobar"[1:6:2]` - `"obr"`
- `"foobar"[5:0:-2]` - `"rbo"`
- `"foobar"[::-1]` - `"raboof"`

**String Interpolation:** String interpolation refers to building new strings by inserting values into a string that works as a template with replacement fields for each value you insert.

**F-Strings:** Allows us to interpolate values into a string and format them. The f-strings are prefixed by `f` like `f"..."` and consists of curly brackets `{}` to insert variable values. We can also use format specifiers that use the syntax defined in string format mini-language.
- `f"Name: {name}"` - `"Name: Muhriz"`
- `f"Age: {age * 2}"` - `"Age: 30"`
- `f"Income: ${income:.2f}"` - `"Income: $123.12"`

**Format Method:** The `.format()` method of strings also allows us to format and template our strings, it can consist of the format specifiers we use in f-strings.
- `"Name: {name}".format(name=ourname)`
- `"Age: {age * 2}".format(age=ourage)`

**ESCAPE SEQUENCES**
Escape sequences in Python is a string sequence consisting of backslash `\` combined with other character or characters to interpret these characters differently.

Escape sequences allows us to interpret characters differently in two ways:
- Suppress special character meanings
- Apply special meaning to characters

**Suppress Meanings:** We can add backslash `\` in front of some characters to suppress their special meanings in the strings and present them as is
- `\'` - literal single quote
- `\"` - literal double quote
- `\\` - literal backslash character
- `\<newline>` - newline is ignored (not terminated)

**Apply Meanings:** We can add backslash `\` in front of some characters to apply special meanings in the strings and present them as is
- `\n` - ASCII linefeed (LF) character
- `\r` - ASCII carriage return (CR) character
- `\t` - ASCII horizontal tab (TAB) character
- `\v` - ASCII vertical tab (VT) character
- `\a` - ASCII bell (BEL) character
- `\f` - ASCII formfeed (FF) character

**STRING METHODS**
String methods are functions associated to string values that we can use to handle and work through common functionalities

**Manipulating Casing:** Allows us to perform case conversion on the target string; affects only letters and non-letter characters remain the same
- `.lower()`, `.upper()` 
- `.capitalize()`, `.title()`, `.swapcase()`

**Finding and Replacing Strings:** Allows us to search the target string for a specified string
- `.count(sstr)`
- `.find(sstr)`, `.rfind(sstr)` - returns -1 if not found
- `.index(sstr)`, `.rindex(sstr)` - raises error when not found
- `.startswith(sstr)`, `.endswith(sstr)`

**Classifying Strings:** Allows us to check and classify strings based on its characters
- `.isalnum()`
- `.isalpha()`, `.isdigit()`
- `.isidentifier()`
- `.isidentifier()`
- `.islower()`, `.isupper()`, `.istitle()`
- `.isspace()`

**Formatting Strings:** Allows us to modify or enhance the format of a string in many different ways.
- `.center()`
- `.ljust()`, `.rjust()`
- `.removeprefix()`, `.removesuffix()`
- `.lstrip()`, `.rstrip()`, `.strip()`
- `.replace()`
- `.zfill()`

**Joining and Splitting Strings:** Allows us to convert strings and composite data types by joining objects together to make string or by breaking a string into pieces.
- `.join()` - joins string pieces delimited by string instance
- `.partition()` - splits the target string at first occurence delimiter
- `.rpartition()`
- `.split()` - splits a string based on a separator into list of strings

## LISTS AND TUPLES

Lists in Python `list` allows us to create variable-length and mutable ordered collection of objects (items/elements). We can store elements of any type in lists and can also mix objects of different types within the same list (though list elements often share the same type). 

Lists are sequences of objects, also called collections because a single list can contain or collect arbitrary number of elements in them. Lists can also nest other lists within them.

**CONSTRUCTING LISTS**
**List Literals:** Lists can be created by a pair square brackets `[]` consisting of comma-separated series objects like.
- `empty = []`
- `nums = [1, 2, 3]`
- `names = ["Joe", "Jane", "James"]`

**List Constructor:** The `list()` function/constructor allows us to create (or convert) lists from any iterable object like other lists, tuples, sets, dictionaries, strings and more.
- `empty = list()`
- `nums = list((1, 2, 3))`
- `alphabets = list("ABCD")`

**List Comprehensions:** Allows us to quickly create and transform lists using a short loop-like syntax like `[expression(item) for item in iterable]`. The `expression` represents an expression that returns a concrete values (most of the time depends on `item`), `item` is the current object from iterable and `iterable` can be any sequence object like list, tuple, set, string or generator.
- `squares = [num ** 2 for num in nums]`
- `new_salaries = [sal * 1.2 for sal in salaries]`

**LIST FEATURES**
**Concatenating Lists:** The `+` operator is used to combine and add multiple lists togather just like strings.
- `[1, 2] + [3]` - `[1, 2, 3]`
- `[1] + [2, 3] + [4]` - `[1, 2, 3, 4]`

**Replicating Lists:** The `*` operator is used to replicate and repeat a list by a whole number just like strings.
- `[1, 2] * 2` - `[1, 2, 1, 2]`
- `[0, 1] * 3` - `[0, 1, 0, 1, 0, 1]`

**List Membership Test:** The `in` and `not in` operators allows us to check if an item is present in a list or not.
- `2 in [1, 2, 3]` - `True`
- `"Hell" not in ["Heaven", "Hell"]` - `False`

**List Number of Characters:** The built-in `len()` function determines the length of the lists
- `len([])` - `0`
- `len([1, 2, 3])` - `3`

**Traversing Lists:** Traversing a list refers to going over each element of the list to run some transformation on the data or using the data for other purposes. The most common ways of traversing lists are: `for` loops and lists comprehension:
- `for item in items: ...`: Allows us to iterate/traverse over the elements of list `items` via the loop variable `item` that we can use inside our loop body.
- `[some_fn(item) for item in items]`: We can also use list comprehensions to perform some transformation or function over the loop variable `item`.

**WORKING WITH LISTS**
**List Indexing:** Lists uses the Python standard indexing syntax like `our_list[index]` which returns the element from `our_list` at position `index`.
- `our_nums[0]` - first element
- `our_nums[len(our_nums) - 1]` - last element
- `our_nums[-1]` - last element

**List Slicing:** Lists uses the Python standard slicing syntax like `our_list[start:stop:step]` which returns a smaller list (sublist) from `our_list`, starting from index `start` upto the index `stop` but not including it. The `step` is used to skip specified number of elements starting from `start`.
- `our_nums[1:]` - sublist starting from second item
- `our_nums[:-3]` - sublist starting from beginning till third last item
- `our_list[:]` - whole list slicing

**List Copies:** Since list is a complex compound data type that can store multiple values of distinct types, alias references of lists are always created. This means that whenever a new variable is assigned the value of an existing list then both of these variables contains a pointer reference address to actual data in memory.
- `new_nums = our_nums` - alias reference
- `shallow_copy_nums = copy(our_nums)` - shallow copy from `copy` module
- `deep_copy_nums = deepcopy(our_nums)` - deep copy from `copy` module

**List Mutations:** Lists in Python are mutable, which means that we can modify or change their  underlying elements without changing the identity of entire list. These kind of changes in a list are called list mutations. There are two kinds of list mutations in lists: Index Assignments and Slice Assignments.
- **Index Assignments:** Allows us to change or modify the values of particular elements  of the list by their position index like `our_list[index] = new_value`.
	- `our_nums[0] = 2` - changing first value to `2`
	- `our_nums[-1] = 99` - changing last value to `99`
- **Slice Assignments:** Allows us to change or modify multiple values in a sub-list of a list with new list values described by their slice like `our_list[start:stop:step] = new_values`.
	- `our_nums[1:4] = [3]`
	- `our_nums[-2:] = [1, 2, 3]`

**GROWING AND SHRINKING LISTS DYNAMICALLY**
**Appending Single Item:** The `.append()` method is used to add elements to the list, it takes one item at a time and adds it to the right end of the list.
- `([1, 2]).append(3)` - `[1, 2, 3]`
- `(["A", "B"]).append("C")` - `["A", "B", "C"]`

**Extending List with Multiple Items:** The `.extend()` method is used to extend the list with multiple elements from another list (or any iterable sequence object).
- `([1, 2]).extend([3, 4])` - `[1, 2, 3, 4]`

**Inserting Item at Given Position:** The `.insert()` method allows us to insert an item to the list at a given index with the syntax `.insert(index, item)`.
- `([1, 3]).insert(1, 2)` - `[1, 2, 3]`
- `([1, 2]).insert(0, 0)` - `[0, 1, 2]`

**Delete Items by Value:** The `.remove()` method deletes/removes the first occurence of item from the list, it raises error when the item is not present in the list.
- `([1, 2, 3]).remove(2)` - `[1, 3]`
- `([1, 2, 3]).remove(3)` - `[1, 2]`

**Delete Items by Position:** The `.pop()` method deletes/removes the item from list by index and returns it. When no index is provided, the method removed the last item from the list.
- `([1, 2, 3]).pop()` - `[1, 2]` and returns `3`
- `([1, 2, 3]).pop(1)` - `[1, 3]` and returns `2`

**Clearing Lists:** The `.clear()` method removes all items from the list.
- `([1, 2, 3]).clear()` - `[]`

**ORDERING LISTS**
**Reversed Copy of List:** The `reversed()` function returns an iterator that yields the values of that sequence in reverse order like `reversed(our_list)` without modifying the input list. The `reversed(our_list)` returns an iterator (it does not modify the original list, creates a new one) which means we can use it directly with loops for traversal. To get back a new reversed list from an existing list we use the `list()` function like `list(reversed(our_list))`.
- `list(reversed([1, 2, 3]))` - `[3, 2, 1]`
- `list(reversed([1, 3, 2]))` - `[2, 3, 1]`

**Reverse Lists in Place:** The `.reverse()` method reverses the list in place and does not return anything, which means that the changes will be reflected in the original list.
- `([1, 2, 3]).reverse()` - `[3, 2, 1]`
- `([1, 3, 2]).reverse()` - `[2, 3, 1]`

**Sorted Copy of List:** The `sorted()` function returns a sorted copy of the input list in ascending order without modifying/altering the original list. We can use `reverse=True` to reverse the sorted list. To sort in a custom manner we can use `key` parameter which takes a function or lambda function (which takes a single argument) as an argument and sorts the sequence based on the value returned by it.
- `sorted([3, 2, 1])` - `[1, 2, 3]`
- `sorted([2, 3, 1], reverse=True)` - `[3, 2, 1]`
- `sorted([2, 3, 1], key=lambda num: num - 4)` - `[1, 2, 3]`

**Sort Lists in Place:** The `.sort()` method of lists sorts the list in place without creating a new copy (like `sorted()`). The original list is altered/modified in place when we call `.sort()` on it. We can use the parameters `reverse=True` and `key` just like the `sorted()` function here too.
- `([2, 3, 1]).sort()` - `[1, 2, 3]` and returns `None`
- `([2, 3, 1]).sort(reverse=True)` - `[3, 2, 1]` and returns `None`

**LISTS TRAVERSAL TOOLS**
**Enumeration:** The `enumerate()` function allows us to iterate over the list with the item index and list item itself. The `enumerate()` function takes an iterable sequence (lists, tuples, sets) and returns an iterator which yield two-item tuples during iteration. These tuples contain the index and the associated item from the list.
- `for i, color enumerate(colors): ...`: Iterating over the list `colors` with item index `i` and the looping variable (list item) `color` available inside the loop body.
- `enumerated_colors = list(enumerate(colors))`: Getting the enumerated list consisting of tuples whose first element is the index and second element is the list item.

**Zipping Lists:** The `zip()` function allows us to tie/zip multiple lists together. The `zip()` takes multiple lists as arguments and returns a list of tuples where each tuple corresponds to the items in original lists (simply allows us to traverse over multiple lists in parallel).
- `for i, l, f in zip(integers, letters, floats): ...`: Iterating over the zipped list consisting of `integers`, `letters` and `floats` where `i`, `l` and `f` are iterating loop variables from these lists respectively.
- `zipped = list(zip(integers, letters, floats))`: Returns a list of tuples where each element in the tuples corresponds to the list provided to `zip()`.

**LISTS FUNCTIONAL TOOLS**
Functional tools in Python like `map()` and `filter()` allows us to traverse a list of values, to have an internal loop that iterates over the items of an input iterable (lists, tuples, sets) and returns a given list.

**Mapping:** The `map()` function is used to process and transform the items of a list (or any iterable like lists, tuples or sets) using a transformation function. The `map()` takes a transformation function or lambda function `fn` and a list (or any iterable like tuple, set) as arguments like `map(fn, our_list)`.
- **Transformation Function:** A function that takes a single argument and processes or transform that single input. Finally it returns that transformed value.
- The `map()` returns the iterator that yields items that result from applying the transformation function to every item in list. Note that `map()` does not return a new list and we have to convert the output as `list(map(...))`.
	- `list(map(add_two, [1, 2, 3]))` - `[3, 4, 5]`
	- `list(map(lambda num: num ** 2, [1, 2, 3]))` - `[1, 4, 9]`

**Filtering:** The `filter()` function is used to filter the items of a list (or any iterable like lists, tuples or sets) using a filter function. The `filter()` takes a filter function or lambda function `fn` and a list (or any iterable like tuple, set) as arguments like `filter(fn, our_list)`. 
- **Filter Function:** A function that takes a single argument and processes the item to test for a given condition. Finally it returns a boolean value `True` or `False` indicating whether the condition is met or not.
- The `filter()` returns the iterator that yields items that meet a given condition which the filter function tests for, for every item in the list. Note that `filter()` does not return a new list and we have to convert the output as `list(filter(...))`.
	- `list(filter(is_odd, [1, 2, 3, 4]))` - `[1, 3]`
	- `list(filter(lambda num: num % 2 == 0, [1, 2, 3, 4]))` - `[2, 4]`

**More Functional Tools:** `min()`, `max()`, `any()`, `all()`, `reduce()`

## TUPLES

Tuples in Python `tuple` are a type of sequence value (like lists) which are immutable and stores a a fixed number of items. The tuples data type are mostly like lists but the number of items in the underlying tuple is fixed and the elements are unchangeable.

Tuples supports almost all of the features of lists like indexing, slicing, loop traversal and iteration, various functional tools but are much lightweight than lists. Tuples consume much less amounts of memory compared to other sequences like lists.

**CREATING TUPLES** 
To store objects in a tuple, we need to create the tuple object with all of its data at one time. There are two ways to create a tuple; Tuples Literals and Tuple Constructor.

**Tuple Literals:** Tuple literals consists of a comma-separated sequence of objects surrounded by brackets like `(item_a, item_b, item_c)`. Though it is best practice to include surrounding brackets `()`, we can also omit them and keep the commas.
- `empty = ()`
- `single_item = (1,)`
- `rgb_red = (255, 0, 0)`
- `unbounded = 1,`
- `unbounded = 1, 2`

**Tuple Constructor:** The `tuple()` function/constructor is also used to create tuples from any iterable like lists, sets, strings or from another tuple.
- `empty = tuple()` - `()`
- `from_list = tuple([1, 2, 3])` - `(1, 2, 3)`
- `from_string = tuple("ABC")` - `("A", "B", "C")`

**TUPLES IMMUTABILITY**
Tuples in Python are immutable, which means once we have created a tuple, you can't change or update its elements in place. 

This characteristic of tuples implies that we cannot change or modify the elements of a tuple through index assignments like `our_tuple[0] = 42` or slice assignments `our_tuple[2:] = 42` (will lead to errors).

This also means that tuples would not support growing or shrinking dynamically. This means we cannot use the methods like `.append()`, `.extend()`and `.insert()` for growing or `.remove()` and `.clear()` for shrinking of tuples.

Even though tuples are immutable in Python, they can store any data types including mutable ones like lists and dictionaries. These mutable values inside the tuples can be modified as usual by accessing them through chained indices:
- `our_tuple[0]['name'] = 'Muhriz'` - modifying `'name'` key of dictionary which is the first element inside the tuple.
- `our_tuple[1][0] = 42` - modifying first element of the list which is the second element inside the tuple.

**PACKING AND UNPACKING TUPLES** 
Python has the notion of packing and unpacking values from tuples. It allows us to group and ungroup multiple values.

**Packing:** The assignment statement `point = x, y, z` refers to packing of values, where the values `x`, `y` and `z` are packed as tuples into the `point` variable.
- `nums = 2, 3, 4` - where `nums` becomes `(2, 3, 4)`

**Unpacking:** The assignment statement `x, y, z = point` refers to unpacking of values, where the value of `point` (a type of sequence) is broken down into appropriate number of variables `x`, `y` and `z`.
- `x, y, z = nums` - where `x == 2`, `y == 3` and `z == 4`
- `x, y, z = (2, 3, 4)`

**Swapping:** Through packing and unpacking, we can also bring out a syntax which can be used to swap the values of two variables. This syntax looks like `x, y = y, x`.
- `a[i], b[j] = a[j], b[i]`

#TODO sets

## DICTIONARIES

Dictionaries in Python `dict` are a powerful data type that allows us to store key-value pairs for efficient data retrieval and manipulation. It allows us to create a mutable collection of key-value pairs that lets you efficiently access and mutate values through their corresponding keys.

**CONSTRUCTING DICTIONARIES**
Dictionaries can be created in three ways: dictionary literals, dictionary constructors and dictionary comprehensions.

**Dictionary Literals:** Dictionary literals consists of comma-separated series key-values paris `key: value` inside curly brackets `{}` like `{k1: v1, k2: v3, ...}`. The keys must be hashable objects like numbers, strings and tuples. In short, we cannot use mutable types (like lists and other dictionaries) as dictionary keys.
- `empty_dict = {}`
- `our_dict = {1: "A", 2: "B"}`

**Dictionary Constructor:** The `dict()` function/constructor can also be used to create dictionaries from a series of keyword arguments or a sequence of key-value pairs.
- `empty_dict = dict()`
- `our_dict = dict([(1, "A"), (2, "B")])`

**Dictionary Comprehensions:** Allows us to quickly create and populate dictionaries with syntax like `{key: value for key in iterable}`. Dictionary comprehensions are expressions build and return a new dictionary.
- `squares = {num: num ** 2 for num in range(1, 10)}`
- `squared_add = {num: (num ** 2) + 2 for num in range(1, 10)}`

**WORKING WITH DICTIONARIES**
**Accessing Dictionary Values:** The standard Python indexing syntax `our_dict[key]` is used to access the values from the dictionary using the key name. When the key does not exist in the dictionary, Python will raise errors.
- `our_dict[1]` - `"A"`
- `person["name"]` - `"John"`

**Populating Dictionary Values:** The index assignment syntax `our_dict[key] = new_value` is used to dynamically populate new key-value pairs or modify existing values of keys in the dictionary.
- `person["age"] = 35`
- `person["name"] = "Robert"`
- `our_dict["new_key"] = 42`

**Number of Items:** The `len()` function can be used to get the number of items or keys in the dictionary.
- `len({1: 'A', 3: 'C'})` - `2`
- `len({1: 'A', 2: 'B', 3: 'C'})` - `3`

**Checking Membership:** The `in` and `not in` operators are used to check the membership (existence) of a key in the dictionary. We can also check for values and items depending on the sequence we used (`.values()` or `.items()`).
- `'some_key' in our_dict` - `True`
- `'no_key' not in our_dict` - `True`

**Checking Equality:** We can use `==` and `!=` operators with dictionaries to check if the two dictionaries are equal or not. The order of keys (items) does not matter while comparing two dictionaries.
- `{1: 'A', 2: 'B'} == {2: 'B', 1: 'A'}` - `True`
- `{1: 'A', 2: 'B'} == {1: 'A', 2: 'C'}` - `False`

**More Functional Tools:** `min()`, `max()`, `any()`, `all()`, `sum()`

**TRAVERSING DICTIONARIES**
**Iterating Over Keys:** We can use a dictionary directly or with `.keys()` method (to get keys) with `for` loops for traversing through the keys of a dictionary. We can access associated key values by using `our_dict[key]` inside loops.
- `for key in our_dict: ...` - traversing through dictionary keys
- `for key in our_dict.keys(): ...` - same as above

**Iterating Over Values:** We use a dictionary with `.values()` method with `for` loops for traversing through the values of dictionary.
- `for value in our_dict.values(): ...` - traversing through dictionary values
- `[for value in our_dict.values()]` - traversing through dictionary values

**Iterating Over Items:** We use a dictionary with `.items()` method with `for` loops for traversing through the key-value pairs of dictionary.
- `for item in our_dict.items(): ...` - traversing through items as a key-value tuple
- `for key, value in our_dict.items(): ...` - traversing through items as separate key and value
- `for (key, value) in our_dict.items(): ...` - same as above

**GETTING VALUES FROM DICTIONARY**
**Safely Retrieving Individual Keys:** The `.get()` method is used to retrieve the value associated with a key and it does not raise errors when the key is not found in the dictionary. By default it returns `None` when the key is not found in the dictionary and we can also set our own `default` value to be returned when a key is not found.
- `person.get("name")` - `"Robert"`
- `our_dict.get("not_exist")` - `None`
- `our_dict.get("not_exist", default=0)` - `0`

**Retrieving Keys:** The `.keys()` method is used to get all the keys from the dictionary as a dictionary view object.
- `person.keys()` - `["name", "age", "occupation"]`
- `our_dict_keys = [key for key in our_dict.keys()]`

**Retrieving Values:** The `.values()` method is used to get all the values from the dictionary as a dictionary view object.
- `person.values()` - `["Robert", 35, "Electric Engineer"]`
- `our_dict_vals = [value for value in our_dict.values()]`

**Retrieving Items:** The `.items()` method is used to get all the items from the dictionary in the form of a list of key-value pairs `(key, value)`, as a dictionary view object.
- `new_dict = [k: v for k, v in our_dict.items()]`
- `person.items()` - `[("name", "Robert"), ("age", 35), ("occupation", "Electric Engineer")]`

**UPDATING DICTIONARIES**
**Setting One Key:** The `.setdefault()` method allows us to set default values (which is `None` by default) to keys if they do not exist and return it. We can also set our own `default` value via the second parameter. If the key does exist then it returns the value of the key.
- `our_dict.setdefault('some_key')` - returns value of key `'some_key'`
- `our_dict.setdefault('no_key', None)` - sets value `None` to `'no_key'` and returns it
- `our_dict.setdefault('no_key', default=42)` - sets value `42` to `'no_key'` and returns it

**Updating Dictionary:** The `.update()` method allows us to update a dictionary with another dictionary (or with sequence of key-value pairs). Our primary dictionary is updated with keys and values from the other dictionary. New key-value items will be added if our primary dictionary does not contain the key-value pairs in other dictionary.
- `our_dict.update(other_dict)` - `our_dict` is updated in place
- `{1: 'Z', 2: 'B'}.update({1: 'A', '3': 'C'})` - `{1: 'A', 2: 'B', 3: 'C'}`

**REMOVING DATA FROM DICTIONARIES**
**Removing Keys:** The `.pop()` method is used to remove key-values pairs from dictionaries via key names. The method removes the key and returns its associated value. Raises errors when key does not exist.
- `our_dict.pop('some_key')` - removes the pair with key `'some_key'` and returns value
- `our_dict.pop('no_key')` - raises errors when `'no_key'` does not exist

**Clearing Dictionaries:** The `.clear()` method is used to remove all key-value pairs from the dictionaries and leaves an empty dictionary behind.
- `our_dict.clear()` - all items are removed and `our_dict` becomes `{}`

`.popitem()` - removes and returns last key-value pairs from dictionaries

#TODO special dictionary structures - defaultdict, counter, ordereddict

## CREATING COPIES

Creating copies in Python refers to creating a duplicate instance of an existing object with the same data. There are three mechanisms to create copies of an existing list in Python:
- alias references
- shallow copies
- and deep copies.

**Alias References:** Alias references is a common concept in Programming, allows us to create named references to an existing data object. This is simply just creating a variable from the value of another variable with the assignment operator `=`. 

- **For Compound Complex Data Types:** For values like lists, tuples, sets, dictionaries (and more) alias references are just a pointer reference that points to an address in memory for that value. The statement `nations = countries` does not create a new value, it rather creates a reference `nations` that points to the same data as `countries`, both are pointers to the same data.

- **For Simple Primitve Data Types:** For values like numbers, booleans and strings alias references does not take place. The assignment expression here always creates a new value copied from an existing one. The statement `another_num = our_num` creates a separate new copy `another_num` of an existing value `our_num`.

**Shallow Copies:** A shallow copy of an existing data value is a new data object containing references to the objects stored in the original data value (if stored objects are compound data types, otherwise they are simply copied if simple data types). There are three ways for creating shallow copies of existing data:
- The slicing operator `[:]` for sequence data (lists, tuples, sets).
- `shallow_copy = original_data.copy()` - The `.copy()` method of original data value.
- `shallow_copy = copy(original_data)` - The `copy()` function from `copy` module imported like `from copy import copy`.

**Deep Copies:** A deep copy of an existing data is a complete copy of the original data, containing new copies of the objects stored in the original (whether they are simple primitve types or complex compound types). When you create a deep copy of a list, Python constructs a new data object and then inserts copies of the contained objects (unlike references in the shallow copy) from the orignal data.
- `deep_copy = deepcopy(original_data)` - The `deepcopy` function from `copy` module used to create deep copies of existing data objects. Imported like `from copy import deepcopy`.

## COMMENTS
Comments allows to explain our code and make notes about it within our programs. All the comments in our programs are ignored by Python when running our program.

Comments in Python are created through the hash characetr `#`. All the characters after `#` will be part of the comment.
- `# This is comment; And I can write anything here`
- `# But I should put something meaningful here`

Good comments should convey what your code is supposed to do and how you are making it work. If you want to be a better programmer or collaborate with other programmers, you should write meaningful comments.

## ESSENTIAL FUNCTIONS

There are some of the functions in Python that are very common to everyday tasks. These essential functions are: `print()`, `input()` and `len()`.

**The `print()` Function** is used to print data to the terminal or console prompt, it prints to standard output of the console. We can use it to print the values of variables and simple strings like:
- `print("Hello World! " + "This is me learning Python")`
- `print("I am " + str(age) + " years old")`

**The `input()` Function** is often used to take inputs from the user from terminal or console prompt and returns it as a string. It also recieves an optional argument to display some prompt while taking inputs. Use it like:
- `name = input("Your Name: ")`
- `age = input("Enter Your Age: ")`

## CONTROL FLOW
Flow control statements often start with a part called the condition and are always followed by a block of code called the clause. A flow control statement decides what to do (clause/block) based on whether its condition is `True` or `False`.
- **Conditions:** The boolean values and expressions could all be considered conditions, it always evaluates to a single boolean value `True` or `False`.
- **Blocks of Code:** Blocks or clauses are used to group lines of Python code together. A block begins and ends from the indentation of the lines of code, and a block of code can contain other blocks of code. Python expects a new block immediately after any statement that ends with a colon `:`.

**CONDITIONAL STATEMENT**
Conditional statements are the statements themselves that control the flow of execution of our programs:
1. `if (some condition): ...`: An "if" statement's condition will always be checked and block (clause) below will be executed if the condition is `True` otherwise the block will be skipped if it is `False`. The if statements consists of `if` keyword, some condition, a colon `:` and indented block of code on next line.
2. `elif (some condition): ...`: An "else if" statement's condition will be checked only if all the previous `if`s or `elif`s conditions are `False`. The block (clause) below will be executed if the condition is `True` otherwise the block will be skipped if it is `False`. The elif statements consists of `elif` keyword, some condition, a colon `:` and indented block of code on next line.
3. `else: ...`: An "else" statement's block will be executed if and if only all the previous `if`s and `elif`s statement conditions are `False`. The else statements consists of `else` keyword, a colon `:` and indented block of code on next line.

When creating some chain of execution in our program we should always follow the above order from `if` to `elif` and then to `else`. The `elif` and `else` statements and blocks are optional and can be skipped. We can use `if` and `else` together or can also use `if` and `elif` together. Once one of condition is found to true, the following rest will be skipped.

#TODO match and switch statements
#TODO python ternary operators; one line conditionals

## LOOPS
Loops are also part of control flow statements that executes block of code repeatedly. When we want to repeat some lines of code/program we use loops.

There are two types of loops in Python. These are
1. While Loops
2. For Loops

**WHILE LOOPS**
The 'while' loops are used to execute a block of code over and over again using the `while` statement. A `while` statement always consists of the `while` keyword, some condition, a colon `:` and an indented block of code starting on next line.

The condition is always checked at the start of each iteration (loop execution). If the condition is `True` then the clause is executed and afterward the condition is checked again. If condition is found to be `False`, then the whole `while` clause is skipped.

The code in the `while` clause will be executed as long `while` statement's condition it `True`. So the syntax of `while` 
- `while (condition): ...`
- `while age <= 18: ...`

**FOR LOOPS**
The 'for' loops are used to execute a block of code only a certain number of times using the `for` loop statement. Most of the times, the `range()` function is used with `for` loops. 

A `for` loop statement always consists of `for` keyword, a variable name treated as iterating variable, `in` keyword, some list data type to iterate over or `range()` function, a colon `:` and an indented block of code starting on next line.

The `for` loop statement will be repeated only a certain number of times. That number of times will be dependent on the list or the `range()` function we provide:
- `for i in range(5): ...`
- `for i in range(0, 5): ...`
- `for i in range(0, 10, 2): ...`

**THE RANGE FUNCTION**
The `range()` function returns or generates a list depending on the arguments we provide to it. The `range()` function can take three arguments, the first two are start and stop values and the third is step value. The stop value will never be included in `range()` function output.
- `range(startValue, stopValue, stepValue)`
- `range(1, 6, 2)` -> `[1, 3, 5]`
- `range(0, 10, 2)` -> `[0, 2, 4, 6, 8]`
- `range(0, 11, 2)` -> `[0, 2, 4, 6, 8, 10]`

**BREAK AND CONTINUE**
The break and continue statements are used to manipulate the flow of execution inside loops. These statements can be used inside the `while` and `for` loops.
- `break`: The break statement is used to break out of the loops using the `break` keyword. Whenever the execution reaches and sees `break` statement, the rest of code in loop is skipped and flow breaks out of the loop.
- `continue`: The continue statement is used to skip the current iteration of the loop using the `continue` keyword and jump back to start of the loop to reevaluate its condition. Whenever the execution reaches and sees `continue` statement, the rest of code in loop is skipped and it jumps to starting of the loop. 

## MODULES
Modules are groups of Python files consisting of groups of related functions that we can use to carry out common programming tasks. This set of modules is called standard library that comes pre-installed with Python. For example, the `math` module has mathematics-related functions and `random` module has random number related functions.

Before we can use these module functions we have to import the module. Importing of modules usually takes at the start of our Python program. We can import the module and then use its functions in two ways:

**Import Whole Module:** `import` statement is used to import the whole module like `import math` or `import random`. After importing we can use module functionalities like `module.some_function()` (function from module) or `module.some_variable` (variable from module).
- `import math` - `math.pow()`
- `import random` - `random.randint()`
- `import random, os, sys, math`

**Import Only Needed:** The `from <module> import <objects>` statement is used to import only needed functionalities from the module like `from math import pow` or `from random import randint`. After importing we can use these functionalities normally like `pow()` and `randint()`.
- `from math import pow` - `pow()`
- `from random import randint` - `randint()`

## FUNCTIONS

In programming, functions are like a mini-program within a program. They are reusable pieces of code consisting of statements that performs a certain operation. There are several built-in functions in Python like `print()`, `len()` and `input()`. We can write our own functions too.

A major purpose of functions is to group code that gets executed multiple times. 

**CREATING FUNCTIONS**
- Function definitions always consists of `def` keyword, the function name, set of parentheses `()` (with appropriate parameters), semi-colon `:` and the function body in the new indented block of code below. For example, `def hello():...` creates a `hello()` function.
- The program in the function body executes when the function is called (not when the function is defined). A function is called by writing its name and set of parentheses `()` (with appropriate arguments) like `hello()`.

**PARAMETERS AND ARGUMENTS**
- Sometimes functions need inputs to work with the program in function body. These are called parameters and arguments.
- **Parameters:** Local variables of function defined in function definition that we want the function body to use. For example, in the definition `def hello(name):...`, function `hello()` will make use of the `name` parameter to say hello to some person.
- **Arguments:** Values passed to function in function call so that these values are stored in our defined function parameters and functions make use of these values. The values of arguments and parameters are forgotten when the function returns or concludes. For example, calling `hello("Ali")` will store the argument `"Ali"` in the parameter `name`.

**RETURN VALUES AND STATEMENTS**
- The value that function call evaluates to is called the return value value of the function. It is the value that the function gives back after call.
- When creating the function using the `def` statement, we can specify the return value with return statements. A return statement consists of `return` keyword and the value or expression that the function should return. 
- For example, `return x + y` or `return 34` or `return "Muhriz Ali"`.

**THE NONE VALUE**
- The value `None` represents the absence of a value or the void value. It is a value without a value. It is useful to store something that should not be stored at the moment.
- When we try to store a return value from a function that does not return anything we will get the value `None`. Most of the built-in functions like `print()` returns `None` because it does not return anything real.
- To return the value `None` from your functions, we can omit the return statement or write just `return` without a value or explicitly write `return None`.

**GLOBAL AND LOCAL SCOPES**
The outer-most part of our program which is outside of functions or classes is called the global scope and the part consisting of blocks inside functions and classes is called the local scope.

**Global Scope:** In the outer-most part of our program, every thing described here like variables (global variables), functions or classes (global fields) is accessible to every other part in our program including other outer-most parts as well as user defined functions and classes. All the things defined here is accessible everywhere in our program file.

**Local Scope:** Inside the functions or classes, every variable or children functions defined here is only accessible inside that block only. Everything described inside the functions like parameters and the variables (called local variables/fields) is destroyed after the function/class body ends and will not be accessible after that.

**DEFAULT PARAMETERS AND ARGUMENTS**
Default arguments are the values that the function parameters takes when we don't specify values in our function call. 

`def roll_dice(sides, dices=1): ...`: Default parameters are described by specifying the default values in their function definition. This makes `dices` parameter optional as it takes the value `1` when no value is passed for it.
- `roll_dice(20)` - `sides` takes value 20 and `dices` takes `1`
- `roll_dice(20, 2)` - `sides` takes value 20 and `dices` takes `2`

**TYPES OF PARAMETERS:**
1. **Required Parameters:** These parameters are described in such a way that these are always required in the function calls. For example, the definition `def roll_dice(sides, dice): ...` always requires `sides` and `dice` to be passed.
2. **Optional/Default Parameters:** These parameters are given default values in the function definition like `def roll_dice(sides, dice=1)`; the function takes the default values when we don't pass any values for it in the function call.

Required parameters must always appear before optional/default parameters in function definition. Otherwise the program will lead to errors.

**TYPES OF ARGUMENTS:**
1. **Positional Arguments:** The argument values are passed to the function call in the order they are defined in the function definition. For example, `roll_dice(6, 2)` function call takes value `6` for `sides` and `2` for `dice`.
2. **Keyword Arguments:** The argument values are passed by parameter names/labels defined in the function. For example, `roll_dice(6, dice=2)` function call takes value `6` for `sides` and `2` for `dice`.

Positional arguments must always appear before keyword arguments in the function call. Otherwise the program will lead to errors.

**VARIADIC PARAMETERS:**
1. **Arbitrary Arguments (`*args`):** Allows us to capture/pack all the arguments passed into the function call into a single list/tuple inside the function body. In the function definition `def roll_dice(sides, *dices): ...`, all the arguments passed (after `sides`) will be packed into a single list called `dices` available inside the function body.
2. **Arbitrary Keyword Arguments (`**kwargs`):** Allows us to capture all keyword arguments passed into the function call into a single dictionary inside the function body. In the function definition `def roll_dice(sides, **kwargs)`, all the arguments passed (after `sides`) will be packed into a single dictionary `kwargs` with keys as argument names and values as argument values.

**Things to note for variadic parameters:**
- All variadic parameters must appear after any positional parameters in the function definition.
- All variadic parameters like `*args` and `**kwargs` can be empty as `[]` or `{}` respectively.

**Keyword-Only Parameters Functions:**
`def some_fn(*, sides=6, dices=1): ...`: We can use the variadic parameter symbol `*` to make a function accept only keyword arguments like `some_fn(sides=8, dices=8)`. This function cannot have positional arguments in the call.

**Positional-Only Parameters Functions:**
`def some_fn(dices=1, /, sides=6): ...`: Postional parameters and arguments always comes first in the parameter list. Placing a forward slash `/` in the parameters designates all the preceding parameters as positional-only. The definition `def some_fn(dices=1, /, sides=6)` will only accept dice as a positional argument, after that we would have to use keyword-only arguments in the function call like `some_fn(4, sides=4)`.

**Paradigm of Functional Programming:**
- Break down larger problem into smaller steps.
- Each function is pure; has exactly one purpose.
- For same inputs, same outputs are returned.
- Functions should not mutate anything; should not change the inputs.

**LAMBDAS**
A lambda is a type of of function, an anonymous nameless function made up of a single expression like `lambda x, y: x + y`. Allows us to create quick simple functions.
- Left side of colon `:` is the parameter inputs list which are optional (can be omitted).
- Right side of colon `:` is the return expression which is evaluated when lambda function is called.

We can use lambda function expressions in two ways:
1. `add_fn = lambda x, y: x + y`: Binding lambda expressions to variables so that they can be used as a function and can be called like `add_fn(1, 2)`.
2. `some_fn(items, key=lambda x: x[1])`: Passing lambda expressions as functional arguments to other functions so that they can be used as a callable object inside function body like `key(items)`.

## CLASSES AND OBJECTS

Object-oriented programming (OOP) is a programming paradigm in which data and its corresponding logic is ogranized into self-contained isolated objects.

In OOP, the programming code is organized into classes from which you create objects:
- **Classes:** The blueprint template for creating one or more instances called objects.
- **Objects:** The instances created from the blueprint template called classes.

Objects and classes are composed of associated members called member variables (attributes, properties) and member functions (methods):
- **Attributes:** The data that the object has; particular instance data.
- **Methods:** The actions that the object does; functions that work on instance data. 

**CREATING CLASSES**
`class Dog: ...`: Classes are defined using the `class` keyword, the class name, a colon `:` and an indented block of code representing class body on the next line. The name of the class usually follows `UpperCamelCase` convention.

`def __init__(self, name, age):`: A class often has an initializer method for defining the initial values of instance variables/attributes, all instance attributes must be defined in here.
- `__init__()`: The initializer method in the class, if the instance object will not have any attributes then we don't need to create the initializer method; Must never return anything via the `return` keyword.
- `self`: This parameter refers to the current self instance object that the method is presently acting on; available only inside the classes when defining. 
- `self.name = name` and `self.age = age`: Binding the instance attributes to the parameters of the initializer method as part of the initialization process; here the classes is creating the instance attributes for the instances (can be other than `__init__` parameters).

**ATTRIBUTES**
All variables belonging or associated to a class or instance are called attributes. There are two types of attributes for classes: Instance Attributes and Class Attributes.

**Instance Attributes:**
Attributes associated (or bound) to an instance object are called instance attributes. These attributes exists only at the instance level, their values are particular to instance only.
- **Declaration:** All instance attributes are created/declared in the initializer method in the class definition like `self._secrets = []` or `self.codename = codename`.
- **Access:** In the classes, these instance attributes are accessed through dot notation on the `self` like `self._secrets`, `self.codename` and `self.age`. In the instances, these are accessed through dot notation on the instances like `inst.codename` or `inst.age`.
- **Mutation:** If an instance attributedata classes, enumeration, named tuples is modified/mutated on the instance level like `inst.age = 34` or `inst.codename = "Potato"`, the changes will appear only in the instance on which the attribute is changed.

**Class Attributes:**
Attributes associated (or bound) to a class itself are called class attributes. These attributes exists on the class instead of an individual instance; the class and hence the instances created from the class all effectively shares same class attributes.
- **Declaration:** All class attributes are created/declared in the classes out of any methods, usually before the initializer method like `agency_name = "CIA"`, `_secrets = []` and `max_age = 42`.
- **Access:** In the classes, these class attributes are accessed through dot notation on the class name itself like `Dog.species`, `SecretAgent.agency` and `Car.wheels`. In the instances, these are accessed through dot notation on the class like `Car.wheels` or `Dog.species` as well as on instances like `inst.wheels` or `inst.species` (not instance attributes).
- **Mutation:** If a class attribute is modified/mutated on the class level like `Dog.species = "Shepherd"` or `SecretAgent.agency = "FBI"`, the changes will appear in the class as well as on all instances created from it. But if a class attribute is modified/mutated on instance level like `inst.species = "Shepherd"` then it will create an instance attribute with same name, which will shadow the class attribute on that instance.

**METHODS**
Methods are functions associated with classes/objects which makes encapsulation possible. There are three types of methods: Instance Methods, Class Methods and Static Methods.

**Instance Methods:**
- Methods which exists on the instances and acts only on the instance specific data (instance attributes) are called instance methods.
- **Definition:** All instance methods are defined like regular functions which always takes `self` as the first parameter like `def our_inst_method(self, name): ...`. The `self` refers to the instance objects and allows us to access to instance attributes (`self.name`) or other methods (`self.introduce()`) inside the method body.
- **Access:** Instance methods are called like `self.greet(name)` inside other instance methods inside classes and called like `inst.greet(name)` on instances outside the classes.

**Class Methods:**
- Methods which are bound or associated with the class only (instead of instance objects) and acts only on the class specific data (class attributes) are called class methods.
- **Definition:** Class methods are also defined like regular functions, preceding the function declaration with `@classmethod` decorator and then defining the method itself on the next line like `@classmethod def inform(cls, codeword): ...`. The `cls` refers to the class itself, it provides access to class attributes like `cls.name` or other class methods like `cls.introduce()`.
- **Access:** Class methods can be called like `cls.inform()` inside the class methods and called like `OurClassName.inform()` on classes outside the classes.

**Static Methods:**
- Static methods are regular functions defined within a class which accesses neither the instances attributes or the class attributes, a static method belongs to the class for namespace reasons. It is part of the class self-contained implementation logic.
- `@staticmethod def inquire(question): ...`: Static methods are defined via the `@staticmethod` decorator and then the method/function are defined below.

#TODO **PROPERTIES**

**SCOPE NAMING CONVENTIONS**
Naming conventions that indicates whether members (attributes and methods) of a class are safe to modify externally or not. These are just conventions and does not alter behaviour/functionality.
1. **Non-Public Members:** These members should not be accessed or modified outside of the classes, indicated with an underscore `_` before the member name like `_secrets` or `_get_secret()`.
2. **Public Members:** These members can be accessed or modified outside of the classes, and is NOT preceded their names by underscore `_` like `secrets` or `get_secret()`.

**CREATING INSTANCES**
Creating instances objects refers to the process of creating objects from classes. An instance is created by passing required arguments to the class (the initializer method arguments). The initializer method will be automatically called with the arguments behind the scenes.

`mouse = SecretAgent("Mouse")`: Simply create an instance object from the class by providing the required arguments.
- `mouse.codeword` - attributes
- `mouse.get_secrets()` - methods

**INHERTIANCE**
Inheritance is a powerful characteristic of object-oriented programming. It consists of creating hierarchical relationships between classes, where child classes inherit attributes and methods from their parent classes. In Python, one class can have multiple chain of parents, called ancestors.

**Implementation Inheritance:** The inheritance where the child classes implements most of the functionalities from the parent classes is called implementation inheritance. It allows us to reduce duplication and repetition by code reuse. Also makes our code more modular, organized and scalable.

**Creating Inheritances:** Creating heirarchical relationships between classes consists of creating a parent class (also called superclass) and then creating a child class (also called subclass) that inherits from the parent class. Superclasses usually define core functionalities that would be part of every children classes. Subclasses define the unique functionalities on top of the core functionalities provided by parent class.

1. `class Vehicle: ...`:
   First we will create our parent class `Vehicle` which consists of all the core attributes and methods that should be a common base to all children classes. Suppose we have `make`, `model` and `year` as core arguments for class instantiation.
2. `class Car(Vehicle): ...`:
   Then we will create our child class `Car` that will inherit our parent class `Vehicle` by passing it between parentheses `()` after the class name.
3. `super().__init__(make, model, year)`:
   Now, just inside the initializer of the child class `Car`, we will call the initializer method `__init__()` of the parent class `super()` to instantiate the parent class when instantiating child class and associate it with the child class.

**Accessing Superclass Inside Child:** The `super()` function is used to access the members (attributes and methods) in the superclass inside the child class.

**CLASS HEIRARCHIES**
Using simple inheritance as we have seen above, we can design and build class heirarchies also known as inheritance trees. An inheritance tree is a set of closely related classes that are connected through inheritance and arranged in a tree-like structure.

For example, there is the example of an inheritance tree consisting of class "Dog" which inherits from class "Mammal" which further inherits from class "Animal":
- `Animal`
	- `Mammal`
		- `Dog`
		- `Cat`
	- `Bird`
		- `Eagle`
		- `Penguin`
	- `Fish`
		- `Salmon`
		- `Shark`

#TODO built-in function `isinstance()`
#TODO data classes, enumerations, named tuples
#TODO dynamic class and instance attributes, `setattr()`

## TYPE ANNOTATIONS

**Dynamic Typing:** Python is a dynamically typed programming language which means that the Python interpreter does type checking only during the execution of code and that the data type of variable is allowed to change over its lifetime. It means that the variable `message = 42` can be turned into `message = "Hello"` and there will be no errors.

**Static Typing:** The opposite of dynamic typing is static typing which does not allow variables to change their data types. The type checking is strict here unlike dynamic typing which flexible. Languages like C and Java are statically typed languages.

Python will forever be a dynamically typed language. But we can also introduce static typing into it to write readable code and to catch type-related bugs early. Helps us debug problems faster.

**Getting Types:** We can use `type()` function to check and return the data type of a value or a variable as a string like `type(value)`. The `type()` function actually returns the class of the instance value passed to it.
- `type(1)` - `<class 'int'>`
- `type([])` - `<class 'list'>`
- `type({})` - `<class 'dict'>`

**TYPE HINTS**
Python has type hints which indicates the category or the data type that a value belongs to in our program. These type hints are simply names of our data types that are used with variables or functional parameters to designate their data type.

**Python Type Hints:** Type hints exists for simple primitve types like numbers, floats, booleans and strings to complex compound types like lists, tuples, sets and dictionaries. Apart from built-in type hints we can also use classes names (built-in or user defined) as type hints for variables/values.
- `int` - integer numbers
- `float` - floating point numbers
- `bool` - boolean values
- `str` - strings
- `list` - lists
- `tuple` - tuples
- `set` - sets
- `dict` - dictionaries
- `None` - null values
- `OurClass` - custom classes

**TYPE ANNOTATION** 
The syntax like `var_name: type = value` are used to annotate the variables with types. We can also leave out the value and write only `var_name: type` in certain scenarios (like when defining class attributes or function parameters).

**Primitive Types:** In case of primitive types like integers, floating-point numbers, booleans and strings, we can use simple type annotations to define the data type of values.
- `age: int = 42`
- `price: float = 645.75`
- `adult: bool = True`
- `message: str = "Hello"`
- `mike: Dog = Dog('Mike')`

In case of complex compound types like lists, tuples, sets and dictionaries, we can use type annotations to define the data type of the values as well as the data type of elements through square bracket `[]` notation.

**List and Set Annotations:** The `list` type hint can be used to indicate a collection which can consist of elements of any data type while type hint `list[dtype]` refers to collection of elements of only `dtype` data type. We can also use `set` hint similarly.
- `items: list = [1, "A", 0.2]`
- `nums: list[int] = [1, 2, 3]`
- `nums: set[int] = {1, 2, 3}`
- `alph: set[str] = {"A", "B", "C"}`
- `dogs: list[Dog] = [Dog('Mike'), Dog('Mini')]`

**Tuple Annotations:** For tuples of fixed sizes we specify the types of all elements through comma-separated type hints like `tuple[int, str, float]`. For tuples of variable sizes (rarely used) we use one type and ellipsis like `tuple[int, ...]`.
- `x: tuple = (1.1, 1, 0.9)`
- `x: tuple[int, ...] = (1, 2, 3)`
- `x: tuple[int, str, float] = (1, "B", 0.3)`

**Dictionary Annotations:** For dictionaries we can specify the types of keys and values through two comma-separated type hints like `dict[str, int]`.
- `office_ids: dict[int, str] = {1: 'John', 2: 'Jane'}`
- `prices: dict[str, float] = {'Bread': 150.0, 'Butter': 125.75}`

**USING TYPE HINTS**
**Union of Types:** The unions of types indicates that Python variable/value can be of more than one data types. We can declare unions of types through the `|` operator like `dtypeA | dtypeB`.
- `item: int | str = 42` - `item` can either be an `int` or a `str`
- `items: list[int] | list[str] = []` - can either be `list` of `int` or `str`

**Optional Types:** The optional refers to variables/values that can also no values, which means that these variables can also have `None` as their value. We can declare optional types by using pipe `|` operator with type `None`. This designate these values as optional.
- `item: int | None = 42`
- `name: str | None = None`

**KINDS OF TYPE ANNOTATIONS**
**Variables Annotations:** Refers to annotating types to variables, declared like `var_name: var_type = var_value`.
- `name: str = "Hello"`
- `num: int = 89`

**Function Annotations:** Refers to annotating types to function parameters and its return values. Function parameters can be annotated like `par_name: par_type` or `par_name: par_type = default` and the return values are annotated through arrow `->` after the function name like `-> return_type`.
- `def add(x: int = 0, y: int = 0) -> int: ...`
- `def log(message: str | None = None) -> None: ...`
- `def get_name(user: User) -> str: ...`
- `def get_code(alphabet: str) -> int: ...`

**Class Annotations:** Refers to annotating types to class/instance attributes and methods. Annotating class/instance attributes is similar to annotating variables while annotating class/instance methods is similar to annotating functions.
- Most of the time we annotate the instance attributes through the parameters of the constructor method like `def __init__(x: int = 0, y: int = 42) -> None`. Class attributes are simply before the constructor method just like variables like `x: int = 0` or `y: int = 42`.
- Instance methods are annotated like functions except that we don't annotate the type for `self` parameter like `def deposit(self, amount: float) -> None`.
- After creating our classes we can use these user-defined classes as valid types for annotations at various places (variables, functions, other classes) like `dog: Dog = Dog('Mike')` or `dogs: list[Dog] = [Dog('Mike'), Dog('Meena')]`.

## ERROR HANDLING

Errors in a program occurs when something unexpected happens in our program or with the data that our program is interacting with, that Python cannot understand. In Python, errors are called exceptions and exceptions are raised when something unexpected happens like some syntax error (raising `SyntaxError` exception) or dividing some number by `0` (raising `ZeroDivisionError` exception).

**EXCEPTIONS**
Exceptions (or errors) helps Python programmers write better programs because it clearly expresses where and when an occur could happen and deal with it. Python consists of various built-in exceptions for various kinds of scenarios where an error could occur. And we can create our own exceptions from built-in ones if we don't find anything for our use case.

There are 4 base exception classes in Python that all other exceptions inherit from:
- `BaseException`: Core base class for all excpetions; not designed to be inherited, to be used by regular developer.
- `Exception`: Base class for all error-type exceptions
- `ArithmeticError`: Base class for all arithmetic-related errors
- `LookupError`: Base class for any error related to finding values in collections

Some of the common built-in exceptions in Python are:
- `AttributeError`
- `ImportError`
- `IndexError`
- `NameError`
- `SyntaxError`
- `TypeError`
- `ValueError`
- `ZeroDivisonError`
- and so on...

**Tracebacks:** The block of message we receive when an exception (or error) occurs in our Python program is known as the traceback. The traceback tells us where and what went wrong in our program. It includes the details of the error that occurred (exception and description), the line where it happened and the entire call stack of functions leading directly from main function to the error.

**Raising Exceptions:** The `raise` keyword along with the exception object allows us to raise exceptions in our program. We raise exceptions or errors in our program to indicate the occurrence of a problem based on condition/criteria that our code cannot recover from automatically.
- `raise ValueError("This is our custom error")`
- `raise LookupError("The item does not exist in collection")`
- `raise Exception("Your code sucks... hehe")`

**Creating Exceptions:** Our custom exceptions can be created by creating an exception class that inherits from `Exception` or other built-in exception classes that matches our use case. The only required parameter required for instantiation is `message` which is text message that describes error in detail.
- `class OurCustomError(Exception):`: defining our exception class
- `def __init__(self, message="Something bad happened.")`: Constructor/initializer method requires only the message field.
- `super().__init__(message)`: Calling the initializer of the parent class to initialize it with the error message.

**CATCHING EXCEPTIONS**
Python embraces the EAFP approach which stands for "Easier to Ask for Forgiveness than Permission". It means that instead of preventing errors, we embrace them to handle only the exceptional situations. 

The EAFP approach is also easier to think about; instead of coming with every test possible scenario to check for erroneous inputs, we only need to anticipate about the likely exceptions, catch them and handle them accordingly.

There are three parts (blocks) in Python that allows us to catch and handle the excpetions in our program; the `try` block, the `except` block and the optional `finally` block.

**The Try Block:** The `try` keyword, a colon `:` and following an indented block of code below allows to create the `try` block. The `try` block always contains the statements or expressions that could potentially lead to exceptions, the part of our program where we have suspicion that it might lead to errors.
- When the error occurs, the execution will jump to the next `except` block that deals with the particular error, otherwise the code will be executed normally as if nothing happened, skipping the `except` block.
- `try: num / div` - `div` could be `0` and will lead to `ZeroDivisionError`

 **The Except Block:** The `except` keyword along with the exception name (like `ValueError` or `SyntaxError`), a colon `:` and following an indented block of code below allows us to create the `except` block. The `except` block is declared after the `try` block to catch the exceptions/errors occured in the `try` block. 
 - The `except` blocks are used to handle and deal with errors that have occurred like displaying a helpful message that tells the user what has he done wrong or correcting the values/variables internally.
 - **A Bad Practice:** We could use `except` without any exception name like `except: ...`. In this case, it would deal with every error/exception raised within the previous `try` block. This is bad because this might lead our program to run in an erroneous/exceptional state, where even larger problems could occur in future.
- `except ZeroDivisionError: ...` - block to deal with zero division error
- `except (ValueError, SyntaxError): ...` - dealing with multiple exceptions at same time

**The Finally Block:** The `finally` keyword along with colon `:` is used to create a `finally` block which is suited for any clean-up code we need to run whether errors are raised or not. The `finally` block will always be executed no matter what and is appropriate for the scenario where we want to execute clean-up code, undoing the things caused by errors.
- `finally: ...` - block to be executed after `try` and `except`

## REFERENCES
