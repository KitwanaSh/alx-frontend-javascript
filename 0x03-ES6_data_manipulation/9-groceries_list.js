export default function groceriesList() {
    const arr = [
        ['Apples', 10],
        ['Tomatoes', 10],
        ['Pasta', 1],
        ['Rice', 1],
        ['Banana', 5],
    ];

    const theMap = new Map();

    for (let el of arr) {
        theMap.set(el[0], el[1]);
    }
    return theMap
}