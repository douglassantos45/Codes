const obj = new Object;

const mult = (value1, value2) => {
    obj.value1 = value1;
    obj.value2 = value2;

    return obj.value1 * obj.value2;
}

module.exports = mult;