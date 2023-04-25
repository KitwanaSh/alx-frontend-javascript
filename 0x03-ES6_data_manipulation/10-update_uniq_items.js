export default function updateUniqueItems(theMap) {
    if (!(theMap instanceof Map)) throw new Error("Cannot process");

    theMap.forEach((value, key) => {
        if (value === 1) {
            theMap.set(key, 100);
        };
    });
}