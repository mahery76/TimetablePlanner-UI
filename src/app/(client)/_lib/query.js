// Function to perform inner join between two tables
export const innerJoin = (table1, table2, key1, key2, columns1, columns2) => {
  let result = [];
  table1.forEach((table1Item) => {
    table2.forEach((table2Item) => {
      if (table1Item[key1] === table2Item[key2]) {
        let combined = {};

        // Add the columns from table1 to the result
        columns1.forEach((column) => {
          combined[column] = table1Item[column];
        });

        // Add the columns from table2 to the result
        columns2.forEach((column) => {
          combined[column] = table2Item[column];
        });

        result.push(combined);
      }
    });
  });
  return result;
};

export const leftJoin = (table1, table2, key1, key2, columns1, columns2) => {
  let result = [];
  table1.forEach((table1Item) => {
    if (table1Item[key1] === null) {
      let combined = {};

      columns1.forEach((column) => {
        combined[column] = table1Item[column];
      });
      columns2.forEach((column) => {
        combined[column] = null;
      });
      result.push(combined);
    } else {
      table2.forEach((table2Item) => {
        if (table1Item[key1] === table2Item[key2]) {
          let combined = {};

          columns1.forEach((column) => {
            combined[column] = table1Item[column];
          });
          columns2.forEach((column) => {
            combined[column] = table2Item[column];
          });
          result.push(combined);
        }
      });
    }
  });
  return result;
};

// const users = [
//   { id: 1, userName: "Alice" },
//   { id: 2, userName: "Bob" },
//   { id: 3, userName: "Charlie" },
// ];

// const orders = [
//   { userId: 1, product: "Apple", quantity: 5 },
//   { userId: 2, product: "Banana", quantity: 3 },
//   { userId: 1, product: "Cherry", quantity: 2 },
//   { userId: 3, product: "Date", quantity: 1 },
//   { userId: null, product: "Date", quantity: 1 },
// ];

// let columns1 = ["userId", "product", "quantity"];
// let columns2 = ["userName"];

// let leftTable = leftJoin(orders, users, "userId", "id", columns1, columns2);
// let innerTable = innerJoin(orders, users, "userId", "id", columns1, columns2);
// console.table(leftTable);
// console.table(innerTable);
