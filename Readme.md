# Laundry Wallah - CSS Orbit Animation

Laundry Wallah is a responsive landing page built with HTML and CSS. The highlight of this project is a custom CSS animation that simulates an object moving in an orbital path while dynamically squashing and stretching at specific points to create a more natural and engaging motion effect.

## Features

- Responsive Landing Page
- Modern Hero Section
- Custom CSS Orbit Animation
- Squash & Stretch Motion Effect
- Flexbox Layout
- Mobile-Friendly Design

## Animation Highlight

The washing machine image uses a custom `@keyframes` animation:

```css
@keyframes counter-revolve {
    0% {
        transform: rotate(0deg) translateX(50px) rotate(0deg) scale(1, 1);
    }

    85% {
        transform: rotate(306deg) translateX(50px)
                   rotate(-306deg) scale(0.8, 1.2);
    }

    100% {
        transform: rotate(360deg) translateX(50px)
                   rotate(-360deg) scale(1, 1);
    }
}
```

### Concepts Demonstrated

- CSS Keyframe Animations
- Orbital Motion using `rotate()` and `translateX()`
- Counter-Rotation Technique
- Squash & Stretch Animation Principles
- CSS Transform Functions
- Continuous Infinite Animation

## Technologies Used

- HTML5
- CSS3
- Flexbox
- CSS Animations
- CSS Transforms

## Learning Outcomes

- Creating orbital movement with CSS
- Combining multiple transforms
- Applying squash and stretch effects
- Building smooth, engaging UI animations
- Responsive web design fundamentals

## Author

Karan Singh Rawat
