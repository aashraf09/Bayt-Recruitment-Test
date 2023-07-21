const contains = (object, desiredValue) => {
    for (const key in object) {
        if(object[key] === desiredValue){
            console.log('true');
            return true;
        }
        if (typeof object[key] === 'object' && object[key] !== null){
            if(contains(object[key], desiredValue)){
                console.log('I reached here')
                return true;
            }
        }
        return false;
    }
}

const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: {
          g: 4,
        },
      },
    },
  };
  
  console.log(contains(obj, 4));