// Продемонстрируйте пример каррирования

// Каррирование – это трансформация функций таким образом,
//  чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c).


function curry(f) { 
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }


  function sum(a,b) {
    return a+b
  }

  let result = curry(sum);
  alert(result(1)(2))