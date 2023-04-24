export default function hasValuesFromArray(set, arr) {
    for (let i of arr) {
        if(!set.has(i)) return false;
    }
    return true
}