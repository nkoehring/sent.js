# sent.js

A [sent](http://tools.suckless.org/sent/) fork for the browser.

Someone in the suckless mailinglist mentioned the problem of distributing sent
slides to other systems:

> Indeed, there are times where you can't connect your own equipment
> to a projector, and it's reasonable for other people to not want you
> to install stuff on their computer (and in the case of MacOSX or
> Windows, installing quite a bit of stuff to get to the point of
> being able to compile and run sent).

And…

> I propose some masochist makes a little sent -> html convertor (with
> a light sprinkling of javascript to advance to the next slide with
> one keypress). It wouldn't be hard, but it also wouldn't be very
> satisfying. But it would be useful.

So here I am, the masochist that wrote this. Just not as static html generator
but in-browser Javascript application.

To use, just put the slides into a single element with id="slides" and load 
the script. The test directory shows the original sent example.
