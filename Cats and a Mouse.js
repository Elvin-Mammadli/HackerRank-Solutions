function catAndMouse(x, y, z) {
    let distAC = Math.abs(x-z);
    let distBC = Math.abs(y-z);
    return distAC < distBC ? "Cat A" : distAC > distBC ? "Cat B" : 'Mouse C'
}