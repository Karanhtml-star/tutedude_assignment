Button Hover Effect

A simple CSS hover animation that rotates and scales a button when hovered and smoothly returns it to its original state when the cursor leaves.

Features
Rotates the button by -12 degrees
Scales the button to 110%
Smooth transition in both directions
Pure CSS, no JavaScript required

CSS

.start-now {
    transition: transform 0.5s ease-in-out;
}

.start-now:hover {
    transform: rotate(-12deg) scale(1.1);
}

How It Works

transition is applied to the default state of the button.
On hover, the button:
Rotates by -12deg
Scales to 1.1
When the cursor leaves, the transition animates the button back to its original position and size.
Preview

Normal State

[ Start Now ]

Hover State

   /
[ Start Now ]
Technologies Used
HTML
CSS
Author

Karan Singh Rawat