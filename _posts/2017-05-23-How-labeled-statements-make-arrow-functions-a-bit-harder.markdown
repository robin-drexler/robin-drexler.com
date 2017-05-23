---
layout: post
title:  'How labeled statements make arrow functions a bit harder'
date:   2017-05-23 00:00:00
---

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) are awesome. They bind `this` lexically, and even allow implied `return` when they only contain one expression.

{% highlight javascript %}
const add = (a, b) => a + b;
add(1, 3);  // 4
{% endhighlight %}

Unfortunately, it's easy to get it wrong.
Imagine we wanted to return a result object instead of only the integer.
Something I often see in code (and write too often myself) is:

{% highlight javascript %}
const add = (a, b) => {result: a + b}
add(1,2) // undefined
{% endhighlight %}

The expected result probably is:
{% highlight javascript %}
{
  result: 3
}
{% endhighlight %}

However, it will be `undefined` instead. This is because the curly braces, we intended to use to create an object literal, open a new block and therefore we'd need to add an explicit return or parenthesis around the implicit return statement to get it to work. 
That's pretty nasty and often hard to spot.

Here's two versions that would fix the error:

{% highlight javascript %}
const add = (a, b) => ({result: a + b})
const add = (a, b) => {return {result: a + b}}
{% endhighlight %}

After making this error a couple of times and simply accepting the way to fix it, I began to ask why doesn't it throw an error, which would make my life a lot easier.
Since enclosing the statement in curly braces does not create an object literal, but opens a new block, there's only the following function body left:

{% highlight javascript %}
result: a + b
{% endhighlight %}

To showcase it a little bit better, here's how the entire function would look like in es5.

{% highlight javascript %}
function add(a, b) {
  result: a + b
}
{% endhighlight %}

How is that valid javascript, I wondered. I've never seen anything like this, yet neither browsers nor node complained about it.
It turns out there's [labeled statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) in javascript, which coincidentally follow such syntax. They're usually used to label loops to be able to break out of them later.

Example by [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label):

{% highlight javascript %}
var i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
         continue loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}
{% endhighlight %}

