function frequency(arr) {
    let n = arr.length;
    let count = 0;

    for(let i = 0; i<n; i++) {
        if(arr[i] === arr[i+1]){
            count++;
            i++;
        }
    }
    return count;
}

const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];
console.log(frequency(arr));