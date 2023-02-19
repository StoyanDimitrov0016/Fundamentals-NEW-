function catBreakingItems(items, entryPoint, type) {
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < entryPoint; i++) {
        if (type == 'cheap') {
            if (items[i] < items[entryPoint]) {
                leftSum += items[i];
            }
        } else if (type == 'expensive') {
            if (items[i] >= items[entryPoint]) {
                leftSum += items[i];
            }
        }

    }
    for (let i = entryPoint + 1; i < items.length; i++) {
        if (type == 'cheap') {
            if (items[i] < items[entryPoint]) {
                rightSum += items[i];
            }
        } else if (type == 'expensive') {
            if (items[i] >= items[entryPoint]) {
                rightSum += items[i];
            }
        }
    }
    if (leftSum > rightSum) {
        console.log(`Left -`, leftSum);
    } else if (rightSum > leftSum) {
        console.log(`Right -`, rightSum);
    } else {
        console.log(`Left -`, leftSum);
    }
}
catBreakingItems([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, 'expensive')