

const divideAndConquer = function (array) {
    let length = array.length;
    let split = length / 2;
    let left = array.slice(0, split);
    let right = array.slice(split);
    let sLeft = [];
    let sRight = [];

    if (left.length < 3) {
        if (left.length == 1) {
            sLeft = left;
        }
        else {
            sLeft = checkLarger(left);
        }
    }
    else {
        sLeft = divideAndConquer(left);
    }

    if (right.length < 3) {
        if (right.length == 1) {
            sRight = right;
        }
        else {
            sRight = checkLarger(right);
        }
    }
    else {
        sRight = divideAndConquer(right);
    }

    return combine(sLeft, sRight);
}

const checkLarger = (array) => {
    let a = array[0];
    let b = array[1];
    let result = [];
    if (a < b) {
        result.push(b);
        result.push(a);
        return result;
    }
    else {
        result.push(a);
        result.push(b);
        return result;
    }
}

const combine = (left, right) => {
    if (left[0] <= right[right.length - 1]) {
        let answer = right.concat(left);
        return answer;
    }
    if (right[0] <= left[left.length - 1]) {
        let answer = left.concat(right);
        return answer;
    }
    let inc = 0;

    while (left.length != 0) {
        if (left[0] >= right[inc]) {
            right.splice(inc, 0, left[0])
            left = left.slice(1);
            inc++;
        }
        else {
            if (inc == right.length) {
                right.splice(inc, 0, left[0])
                left = left.slice(1);
            }
            inc++;
        }
    }
    return right;
}
