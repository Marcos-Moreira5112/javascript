 let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 function ação(arr, min, max) {

    for (let i = 0; i <= array.length; i++) {

        if (arr[i] > min && arr[i] < max) {
            arr.pop()
        } 
    }
 }

 console.log(ação(array, 3, 8))