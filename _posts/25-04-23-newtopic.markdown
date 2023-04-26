---
layout: post
title:  New Topic
date:   2023-04-25 12:00:00
categories: new
permalink: blog/new-topic
---

> Advanced PHP topics which will empower the reader to create dynamic web pages.

<h3>Superglobals</h3>

A global variable is a variable declared at the top of the script outside the function. This variable is available to the complete script. Superglobal variables are arrays built into PHP. These superglobal variables are populated automatically with useful elements, and they are available in any scope. A superglobal array can be accessed within a function or a method without using the global keyword.

<h3>PHP Superglobals</h3>

* $_COOKIE – It contains values provided to the script via HTTP cookies.
* $_GET – It contains variables submitted to the script using HTTP get method.
* $_POST – It contains variables submitted to the script using HTTP post method.
* $_REQUEST – It is a combined array containing values from the $_GET, $_POST, and $_COOKIES superglobal arrays.
* $_ENV – It contains keys and values set by the script’s shell.
* $_FILES – It contains information about uploaded files.
* $_SERVER – It contains variables made available by the server.
* $GLOBALS – It contains all the global variables associated with the current script.

<h3>Instanceof Operator</h3>

The instanceof operator in PHP is used to determine whether a given object, the parents of that object, or its implemented interfaces are of a specified object class.

<h5>Example</h5>

```javascript
<?php
class X { }
class Y { }
$thing = new X;
if ($thing instanceof X) {
echo 'X';
}
if ($thing instanceof Y) {
echo 'Y';
}
?>
```

<h3>Declare</h3>

The declare statement is used to set execution directives for a block of code. The syntax of the declare statement is similar to the syntax of other flow control statements.

<h5>Syntax</h5>

```
declare (directive)
statement
```

The directive section allows the behavior of the declare block to be set. In this only one directive is recognized, which is the ticks directive.

The statement part of the declare block will be executed according to the directives set in the directive block.

<h5>Example</h5>

```javascript
<?php
// how to use declare:
// the first way:
declare(ticks=1) {
// entire script here
}
// the second way:
declare(ticks=1);
// entire script here
?>
```

<h3>Require</h3>

The require() statement includes and evaluates a specific file. The require() and include() statements are similar in every way except how they handle errors. When there is an error the include() statement produces a warning but the require() statement results in a fatal error. The require statement is used when you want a missing file to halt the processing of the page. In this case, if include() is used even then the script will keep on running regardless of the missing file.

<h5>Example</h5>

```javascript
<?php
require 'welcome.php';
require $welcomefile;
require ('welcomefile.txt');
?>
```

<h3>Include</h3>

The include() statement includes and evaluates a specified file. The include() statement works in the same way as the require() statement. The basic difference between them is that when an error occurs the include() statement gives a warning whereas the require() statement gives a fatal error.

<h5>Example</h5>

```javascript
fruit.php
<?php
$color = 'red';
$fruit = 'apple';
?>
test.php
<?php
echo "A $color $fruit"; // A
include 'vars.php';
echo "A $color $fruit"; // A red apple
?>
```
 
<h3>Variable Functions</h3>

There is a concept of variable functions in PHP. The concept of variable function is that if a variable name has parentheses appended to it, then PHP will look for the function with the same name as the variable and will try to execute it. This can be used to implement callbacks and function tables.

<h5>Example</h5>

```javascript
<?php
function fun() {
echo "In fun()<br />\n";
}
function abc
($arg = '')
{
echo "In abc(); argument was '$arg'.<br />\n";
}
// This is a wrapper function around echo
function echoit($string)
{
echo $string;
}
$func = 'fun';
$func(); // This calls fun()
$func = 'abc';
$func('test'); // This calls abc()
$func = 'echoit';
$func('test'); // This calls echoit()
?>
```
