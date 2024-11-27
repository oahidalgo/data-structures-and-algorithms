//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Hash Table para mayor eficiencia en la busqueda
//Con array seria O(N^2)
//Con el hash es (N)
//Esto debido a que podemos acceder a la key en lugar de buscar 1 a 1
function firstRecurringCharacter(input) {
  let map = {};
  if (input.length) {
    for (let i = 0; i < input.length; i++) {
      if (map[input[i]] !== undefined) {
        console.log(map);
        return input[i];
      } else {
        map[input[i]] = i;
      }
    }
  }
  return undefined;
}

//console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]))

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

//Con esta solucion utilizando arreglos
//Identifico apoyandome de un auxiliar que numeros son los que he
//visto anteirormente, de esta forma encontrara la primer coincidencia
//Sino utilizara auxiliar devolveria la primer coincidencia segun su orden en el arreglo
function firstRecurringCharacter2(input) {
  const second = [];
  //Recorrer input
  for (let i = 0; i < input.length; i++) {
    //Buscar en el segundo arreglo el valor
    if (second.length !== undefined) {
      for (let j = 0; j < input.length; j++) {
        //Si el valor ya existe, retornar primer ocurrencia
        if (second[j] === input[i]) return input[i];
      }
      //Si el valor no existe (no retorno), insertar
      second.push(input[i]);
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]));
