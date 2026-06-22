🎨 Hero Image Animation

This project uses CSS Keyframe Animations to create an engaging entrance effect for the hero image.

✨ Animation Sequence

The image performs two animations:

Counter Revolve Animation
Rotates in a circular path.
Completes one full revolution.
Creates a dynamic entry effect.
Squeeze Effect Animation
Starts after the rotation finishes.
Compresses the image horizontally and stretches it vertically.
Returns smoothly to its original size.

🛠️ Keyframes Explained
1. Counter Revolve
@keyframes counter-revolve {
    0% {
        transform: rotate(0deg)
                   translateX(50px)
                   rotate(0deg);
    }

    100% {
        transform: rotate(360deg)
                   translateX(50px)
                   rotate(-360deg);
    }
}
How it works
rotate(360deg) moves the image in a circular path.
translateX(50px) sets the orbit radius.
rotate(-360deg) counteracts the rotation so the image remains upright while moving.

Result:

The image revolves around an invisible center point without spinning itself.

2. Squeeze Effect
@keyframes squeezeEffect {
    0% {
        transform: scale(1, 1);
    }

    50% {
        transform: scale(0.8, 1.2);
    }

    100% {
        transform: scale(1, 1);
    }
}

How it works

scale(0.8, 1.2)
Width becomes 80%.
Height becomes 120%.
Creates a squash-and-stretch effect inspired by animation principles.
Returns smoothly to normal size.

Result:

The image briefly "squeezes" before settling into its final position.

🚀 Animation Configuration
.container-right img {
    animation:
        counter-revolve 1s linear 0s 1 normal forwards,
        squeezeEffect 2s ease-in-out 1s 1 normal forwards;
}

