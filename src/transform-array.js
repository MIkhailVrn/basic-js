const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr))
    throw 'error'

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {

    if (((arr[i - 1] === `--discard-next` && arr[i] !== `--double-next`) || arr[i] === `--discard-next`) ||
      (arr[i - 2] === `--discard-next` && (arr[i] === `--discard-prev` || arr[i] === `--double-prev`)))
      continue;


    switch (true) {
      /*case typeof arr[i] === 'number' :
      newArr.push(arr[i]);
        break;
      case arr[i] === `--discard-next` :
        i++;
        break; */
      case arr[i] === `--discard-prev`:
        if (newArr.length > 0 && !isCommand(arr[i - 1]))
          newArr.pop();
        break;
      case arr[i] === `--double-next`:
        if (arr[i + 1] !== undefined  && !isCommand(arr[i + 1]))
          newArr.push(arr[i + 1])
        break;
      case (arr[i] === `--double-prev`):
        if (newArr.length > 0 && !isCommand(arr[i - 1]))
          newArr.push(newArr[newArr.length - 1]);
        break;
      default:
        newArr.push(arr[i]);
    }
  }

  function isCommand(element) {
    return (element === `--double-next` || element === `--double-prev`
    || element === `--discard-next` || element === `--discard-prev`)
  } 
  return newArr;
};
