let employee = {
  name: 'John Doe',
  streetAddress: '123 Main St'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Return a new object with updated key-value pair
  return {
    ...employee,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Mutate the original employee object
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  // Create a new object without the specified key
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // Mutate the original employee object by deleting the key
  delete employee[key];
  return employee;
}

// Example usage:
console.log("Original Employee:", employee);

// Using updateEmployeeWithKeyAndValue (non-destructive update)
let updatedEmployee1 = updateEmployeeWithKeyAndValue(employee, 'position', 'Manager');
console.log("Updated Employee (non-destructive):", updatedEmployee1);

// Using destructivelyUpdateEmployeeWithKeyAndValue (destructive update)
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'department', 'HR');
console.log("Updated Employee (destructive):", employee);

// Using deleteFromEmployeeByKey (non-destructive delete)
let updatedEmployee2 = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log("Employee after deleting (non-destructive):", updatedEmployee2);

// Using destructivelyDeleteFromEmployeeByKey (destructive delete)
destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log("Employee after deleting (destructive):", employee);

// Original employee should remain unchanged
console.log("Original Employee (unchanged):", employee);
