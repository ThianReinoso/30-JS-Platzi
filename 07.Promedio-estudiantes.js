export function getStudentAverage(students) {
    // Creamos un array donde obtendremos los estudiantes con su promedio
    const studentsWithAverage = students.map((student) => {
      // separamos las notas en una sola variable para hacerlo más legible
      const grades = student.grades;
      // calculamos el promedio sumando todas las notas para dividirlas
      // en el total de materias
      const average =
        grades.reduce((total, item) => total + item, 0) / grades.length;
  
      return {
        // Retornamos un objeto con el nombre del estudiante
        name: student.name,
        // Junto con su promedio a 2 decimales
        // Es importante parsearlo con Number porque el método toFixed devuelve un string
        average: Number(average.toFixed(2)),
      };
    });
  
    // Después pasamos a hacer lo mismo pero obteniendo el promedio de la clase
    const classAverage =
      studentsWithAverage.reduce((total, student) => total + student.average, 0) /
      studentsWithAverage.length;
    // Sumamos todos los promedios y los dividimos entre el total de estudiantes
  
    // Al final armamos un objeto que será el que retornaremos
    const rta = {
      // De igual manera pasamos el promedio de la clase a 2 decimales
      classAverage: Number(classAverage.toFixed(2)),
      students: studentsWithAverage,
    };
  
    // Y retornamos el objeto anterior
    return rta;
  }
  