const parenthesesMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  const myString= "))(([]{}";
  const stack = [];
  
  const verify = (s) => {
    const parenthesesMap = {
      "(": ")",
      "[": "]",
      "{": "}",
    };
  
    for (let i = 0; i < s.length; i++) {
      if (parenthesesMap.hasOwnProperty(s[i])) {
        stack.push(s[i]);
      } else {
        const x = stack.pop();
        if (parenthesesMap[x] !== s[i]) {
          return false;
        }
      }
    }
    return stack.length === 0;
  };


  console.log(101, verify(myString))