//anna voloshin - full stack.NET 91448/11 - shape simulator

//variables
let shape: number;
let mesureA: number;
let mesureB: number;
let content: number;
let perimeter: number;
let area: number;

//perimeter
function calcPerimeter(mesureA, mesureB): number {
    let perimeter: number;
    if (shape == 1) {
        perimeter = mesureA * 4;
    }
    else if (shape == 2) {
        perimeter = (mesureA + mesureB) * 2;
    }
    else if (shape == 3) {
        perimeter = mesureA + mesureA + (Math.sqrt(mesureA * mesureA + mesureA * mesureA));
    }
    return perimeter;
}
function printPerimeter(perimeter): void {
    document.write("<br>");
    let resultPerimeter = calcPerimeter(mesureA, mesureB);
    resultPerimeter = Math.round(resultPerimeter * 100) / 100;
    document.write(`Perimeter: ${resultPerimeter} <br>`);
}

// area
function calcArea(mesureA: number, mesureB: number): number {
    let area: number;
    if (shape == 1) {
        area = mesureA * mesureA;
    }
    else if (shape == 2) {
        area = mesureA * mesureB;
    }
    else if (shape == 3) {
        area = (mesureA * mesureA) / 2;
    }
    return area;
}
function printArea(area): void {
    calcArea(mesureA, mesureB);
    let resultArea = calcArea(mesureA, mesureB);
    resultArea = Math.round(resultArea * 100) / 100;
    document.write(`Area: ${resultArea} <br>`);
}

//select shape
shape = +prompt(`Welcome to the best shape simulation ever in the entire world!
Please select desired shape:
    1. Square
    2. Rectangle
    3. Triangle`);

// enter mesures
if (shape <= 0 || shape >= 4) {
    alert(`Error. Please select 1 or 2 or 3, for the shape type.`);
}
else if (shape == 1) {
    mesureA = +prompt(`Please enter square side length:`);
    errorInteger();
}
else if (shape == 2) {
    mesureB = +prompt(`Please enter rectangle width:`);
    mesureA = +prompt(`Please enter rectangle height:`);
    errorInteger2();
}
else if (shape == 3) {
    mesureA = +prompt(`Please enter triangle side length:`);
    errorInteger();
}

//content
if (!(shape <= 0 || shape >= 4) && !(mesureA <= 0 || mesureB <= 0)) {
    content = +prompt(`Content, choose content:
    1. * * * * *
    2. *       *
    3. 1 2 3 4 5
    4. 5 4 3 2 1`);

    if (content <= 0 || content >= 5) {
        alert(`Error. Please select 1 or 2 or 3 or 4, for the content.`);
    }
}

//print shapes: first switch = content, second switch = shapes
switch (content) {
    case 1: switch (shape) {
        case 1: printAllStarsSquare(mesureA)
            break;
        case 2: printAllStarsRectangle(mesureA, mesureB)
            break;
        case 3: printAllStarsTriangle(mesureA)
            break;
    }
        break;

    case 2: switch (shape) {
        case 1: printSideStarsSquare(mesureA)
            break;
        case 2: printSideStarsRectangle(mesureA, mesureB)
            break;
        case 3: printSideStarsTriangle(mesureA)
            break;
    }
        break;

    case 3: switch (shape) {
        case 1: printSquare(mesureA)
            break;
        case 2: printRectangle(mesureA, mesureB)
            break;
        case 3: printTriangle(mesureA)
            break;
    }
        break;

    case 4: switch (shape) {
        case 1: printSquareInverse(mesureA)
            break;
        case 2: printRectangleInverse(mesureA, mesureB)
            break;
        case 3: printTriangleInverse(mesureA)
            break;
    }
        break;
}

//errors square, triangle
function errorInteger() {
    if (mesureA <= 0 || mesureA != Math.floor(mesureA)) {
        mesureA = 0;
        alert(`Error. Please enter a positive integer number.`);
    }
}

//errors rectangle
function errorInteger2() {
    if (mesureA <= 0 || mesureB <= 0 || mesureA != Math.floor(mesureA) || mesureB != Math.floor(mesureB)) {
        mesureB = 0;
        mesureA = 0;
        alert(`Error. Please enter a positive integer number`);
    }
}

//all stars
function printAllStarsToMesureA(mesureA) {
    for (let i = 1; i <= mesureA; i++) {
        document.write("* ");
    }
    document.write("<br>");
}
function printAllStarsSquare(mesureA) {
    for (let i = 1; i <= mesureA; i++) {
        printAllStarsToMesureA(mesureA);
    }
    printPerimeter(perimeter);
    printArea(area);
}
function printAllStarsRectangle(mesureA, mesureB) {
    for (let i = 1; i <= mesureA; i++) {
        printAllStarsToMesureA(mesureB);
    }
    printPerimeter(perimeter);
    printArea(area);
}
function printAllStarsTriangle(mesureA) {
    for (let i = 1; i <= mesureA; i++) {
        for (let j = 1; j <= i; j++) {
            document.write("* ");
        }
        document.write("<br>");
    }
    printPerimeter(perimeter);
    printArea(area);
}

//side stars
function printSideStarsSquare(mesureA) {
    for (let i = 1; i <= mesureA; i++) {
        for (let j = 1; j <= mesureA; j++) {
            if (j == 1 || j == mesureA || i == 1 || i == mesureA) {
                document.write("* ");
            }
            else {
                document.write("&nbsp&nbsp");
            }
        }
        document.write("<br>");
    }
    printPerimeter(perimeter);
    printArea(area);
}
function printSideStarsRectangle(mesureA, mesureB) {
    for (let i = 1; i <= mesureA; i++) {
        for (let j = 1; j <= mesureB; j++) {
            if (j == 1 || j == mesureB || i == 1 || i == mesureA) {
                document.write("* ");
            }
            else {
                document.write("&nbsp&nbsp");
            }
        }
        document.write("<br>");
    }
    printPerimeter(perimeter);
    printArea(area);
}
function printSideStarsTriangle(mesureA) {
    for (let i = 1; i <= mesureA; i++) {
        for (let j = 1; j <= mesureA; j++) {
            if (j == 1 || j == i || i == mesureA) {
                document.write("* ");
            }
            else {
                document.write("&nbsp&nbsp");
            }
        }
        document.write("<br>");
    }
    printPerimeter(perimeter);
    printArea(area);
}

//1 to n
function printToMesureA(mesureA) {
    for (let i = 1; i <= mesureA; i++) {
        document.write(i + " ");
    }
    document.write("<br>");
}
function printSquare(mesureA) {
    for (let i = 1; i <= mesureA; i++) {
        printToMesureA(mesureA);
    }
    printPerimeter(perimeter);
    printArea(area);
}
function printRectangle(mesureA, mesureB) {
    for (let i = 1; i <= mesureA; i++) {
        printToMesureA(mesureB);
    }
    printPerimeter(perimeter);
    printArea(area);
}
function printTriangle(mesureA) {
    for (let i = 1; i <= mesureA; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(j + " ");
        }
        document.write("<br>");
    }
    printPerimeter(perimeter);
    printArea(area);
}

//n to 1
function printInverseToMesureA(mesureA) {
    for (let j = mesureA; j >= 1; j--) {
        document.write(j + " ");
    }
    document.write("<br>");
}
function printSquareInverse(mesureA) {
    for (let i = 1; i <= mesureA; i++) {
        printInverseToMesureA(mesureA);
    }
    printPerimeter(perimeter);
    printArea(area);
}
function printRectangleInverse(mesureA, mesureB) {
    for (let i = 1; i <= mesureA; i++) {
        for (let j = mesureB; j >= 1; j--) {
            document.write(j + " ");
        }
        document.write("<br>");;
    }
    printPerimeter(perimeter);
    printArea(area);
}
function printTriangleInverse(mesureA) {
    for (let i = mesureA; i >= 1; i--) {
        for (let j = mesureA; j >= i; j--) {
            document.write(j + " ");
        }
        document.write("<br>");
    }
    printPerimeter(perimeter);
    printArea(area);
}
