const obj = {
    
    values: [
       {
           val1: 0,
           val2: 0
       }
    ],

    runDivision: function (value1, value2)  {
        obj.values.val1 = value1;
        obj.values.val2 = value2;

        return obj.values.val1 / obj.values.val2;
    }
}

module.exports = obj;