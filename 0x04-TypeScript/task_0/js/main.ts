 interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "Accra",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 23,
  location: "Kumasi",
};

const studentsList: Student[] = [student1, student2];

// Create the table
const table: HTMLTableElement = document.createElement("table");
const tableHead: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = tableHead.insertRow();
const headerCell1: HTMLTableCellElement = headerRow.insertCell();
headerCell1.textContent = "First Name";
const headerCell2: HTMLTableCellElement = headerRow.insertCell();
headerCell2.textContent = "Location";

// Add student rows
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell();
  const cell2: HTMLTableCellElement = row.insertCell();
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the body
document.body.appendChild(table);
