function customFilterUnique (array, callback) {
    const res = []
    const unique = new Map()

    array.forEach(element => {
        const key = callback(element)
        if (!unique.has(key)) {
            unique.set(key, true)
            res.push(element)
        }
    })

    return res
}

const arr = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 1, name: "Bob"},
]

const callback = element => element.id

console.log(customFilterUnique(arr, callback))




function chunkArray (array, chunk) {
    const res = []

    for (let i = 0; i < array.length; i += chunk) {
        const c = array.slice(i, i + chunk)
        res.push(c)
    }

    return res
}


const arr2 = [4, 5, 6, 2, 3, 7, 8, 1, 9, 0]

console.log(chunkArray(arr2, 2))




function customShuffle (array) {
    const shuffled = array.slice()

    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let k = shuffled[i]
        shuffled[i] = shuffled[j]
        shuffled[j] = k
    }

    return shuffled
}


const arr3 = [1, 2, 3, 4, 5]

console.log(customShuffle(arr3))




function getArrayIntersection (array, array2) {
    const set = new Set(array)

    const intersection = array2.filter(element => set.has(element))

    return intersection
}


function getArrayUnion (array, array2) {
    const union = []

    const unique = (arr) => {
        arr.forEach(element => {
            if (!union.includes(element))
                union.push(element)
        })
    }

    unique(array)
    unique(array2)

    return union
}

const arr4 = [4, 5, 1, 2, 7, 0]
const arr5 = [8, 2, 9, 4, 5, 5]


console.log(getArrayIntersection(arr4, arr5))
console.log(getArrayUnion(arr4, arr5))




function measureArrayPerformance(fun, array) {
    const t1 = performance.now()

    const res = fun(array)

    const t2 = performance.now()

    console.log("time:", t2 - t1)

    return res
}

console.log(measureArrayPerformance(customShuffle, arr4))


console.log(measureArrayPerformance(arr => arr.map(el => el + 1), arr4))
console.log(measureArrayPerformance(arr => arr.filter(el => el != 4), arr4))
console.log(measureArrayPerformance(arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0), arr4))