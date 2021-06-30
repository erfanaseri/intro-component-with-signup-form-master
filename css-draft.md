// COLOR VARIABLES
$color-primary-red: hsl(0, 100%, 74%);
$color-primary-green: hsl(154, 59%, 51%);

$color-accent-blue: hsl(248, 32%, 49%);

$color-neutral-dark-blue: hsl(249, 10%, 26%);
$color-neutral-grayish-blue: hsl(246, 25%, 77%);

// FONT VARIABLES
$font-primary: "Poppins", sans-serif;

// RESPONSIVE BREAKSPOINTS
$bp-largest: 75em; // 1200px
$bp-large: 62.5em; // 1000px
$bp-medium: 50em; // 800px
$bp-small: 37.5em; // 600px

_,
_::after,
\*::before {
margin: 0;
padding: 0;
box-sizing: inherit;
}

html {
box-sizing: border-box;
font-size: 62.5%; // 1rem = 10px
}

body {
font-family: $font-primary;
background-image: url(../img/bg-intro-desktop.png);
background-color: $color-primary-red;
background-size: cover;
font-size: 1.6rem;
}

.container {
height: 100vh;
display: grid;
grid-template-columns: 1fr 1fr;
align-content: center;
justify-content: center;
align-items: center;
justify-items: center;
}

.header {
color: #fff;
padding: 5rem;
max-width: 70rem;

&\_\_heading-1 {
font-size: 5rem;
line-height: 5rem;
margin-bottom: 2rem;
}

&\_\_text {
}
}

.main {
width: 80%;
display: grid;
row-gap: 2rem;
}

.pricing {
color: #fff;
background-color: $color-accent-blue;
padding: 1.5rem 4rem;
border-radius: 1rem;
max-width: 85%;
box-shadow: 0 0.7rem rgba(0, 0, 0, 0.1);

&\_\_free {
}
}

.form {
background-color: #fff;
padding: 4rem;
border-radius: 1rem;
display: grid;
max-width: 85%;
box-shadow: 0 1rem rgba(0, 0, 0, 0.1);
row-gap: 1rem;

&\_\_group {
border-radius: 1rem;

    // &::after {
    //   content: "!";
    //   background-color: $color-primary-red;
    //   color: #fff;
    //   display: inline-block;
    //   width: 2.5rem;
    //   height: 2rem;
    //   padding-bottom: 2.5rem;
    //   border-radius: 50%;
    //   transform: translate(990%, -150%);

    //   display: grid;
    //   justify-items: center;
    //   align-items: center;
    //   //   visibility: hidden;
    //   //   opacity: 0;
    // }

}

&\_\_input {
height: 5rem;
width: 100%;
border-radius: 5px;
border: 1px solid $color-neutral-grayish-blue;
padding: 2rem;
font-family: inherit;

    &:focus {
      border: 2px solid $color-neutral-dark-blue;
      outline: none;
      font-weight: 500;
    }

    &:focus:invalid {
      border: 2px solid $color-primary-red;
      outline: none;
    }

}

&\_\_label {
}

&\_\_btn {
font-size: inherit;
}

&\_\_policy {
font-size: 1rem;
color: $color-neutral-grayish-blue;
}

&\_\_term {
color: $color-primary-red;
}
}
