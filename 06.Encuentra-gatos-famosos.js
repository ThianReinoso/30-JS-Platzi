export function findFamousCats(cats) {
    // Creamos un objeto en el cual guardaremos los nombres
    // de los gatitos y el número máximo de seguidores
    let famousStats = {
      // El array de nombres empieza vacío
      catNames: [],
      // Y el número máximo de seguidores en 0
      maxNumOfFollowers: 0,
    };
  
    for (let i = 0; i < cats.length; i++) {
      // Iteramos por cada gatito recibido en el array
      const cat = cats[i];
      // Obtenemos la suma total de seguidores con reduce
      const totalFollowers = cat.followers.reduce(
        (acum, currentVal) => acum + currentVal,
        0
      );
  
      // comparamos si el total de followers del actual gatito es IGUAL
      // al del objeto que declaramos al inicio
      if (totalFollowers === famousStats.maxNumOfFollowers) {
        // De ser así, solo agregamos el nombre del gatito
        famousStats.catNames.push(cat.name);
      }
  
      // Por otro lado, si es MAYOR
      if (totalFollowers > famousStats.maxNumOfFollowers) {
        // Reiniciamos el array de nombres
        famousStats.catNames = [];
        // Agregamos a nuestro gatito influencer
        famousStats.catNames.push(cat.name);
        // Para al final asignar el número máximo de seguidores
        // a la debida propiedad del objeto
        famousStats.maxNumOfFollowers = totalFollowers;
      }
    }
  
    // Al final solo retornamos LOS NOMBRES
    return famousStats.catNames;
  }