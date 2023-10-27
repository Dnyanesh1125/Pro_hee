const table = process.argv[2]; 

if (!table) {
  console.log('Please provide an integer as a command-line argument.');
} else {
  const length = 10;
  console.log("Multiplication table " + table + " using for loop.");
  for (let i = 1; i <= length; i++) {
    const result = i * table;
    console.log(`${table} * ${i} = ${result}`);
  }

  console.log("Multiplication table " + table + " using while loop.");
  let i = 1;
  while (i <= length) {
    const result = i * table;
    console.log(`${table} * ${i} = ${result}`);
    i++;
  }

  console.log("Multiplication table " + table + " using do-while loop.");
  i = 1;
  do {
    const result = i * table;
    console.log(`${table} * ${i} = ${result}`);
    i++;
  } while (i <= length);
}

