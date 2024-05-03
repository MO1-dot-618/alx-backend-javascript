export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const reds: Student = {
  firstName: 'rah',
  lastName: 'dan',
  age: 20,
  location: 'zagreb',
}
const radas: Student = {
  firstName: 'sah',
  lastName: 'san',
  age: 22,
  location: 'tagreb',
}
const studentsList: Student[] = [reds ,radas];

export const renderTable = (studentsList: Array<Student>): void =>  {
  const table = document.createElement('table');
  table.style.width = '500px';
  table.style.marginLeft = 'auto';
  table.style.marginRight = 'auto';

  const headRow = document.createElement('tr');
  headRow.style.backgroundColor = '#f2f2f2';
  table.appendChild(headRow);

  // Create table headers with styling
  const firstNameHeader = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  firstNameHeader.style.padding = '8px';
  firstNameHeader.style.textAlign = 'center';
  headRow.appendChild(firstNameHeader);

  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';
  locationHeader.style.padding = '8px';
  locationHeader.style.textAlign = 'center';
  headRow.appendChild(locationHeader);

  for (const student of studentsList) {
    const studentRow = document.createElement('tr');
    studentRow.style.borderBottom = '1px solid #ddd';
    table.appendChild(studentRow);

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    studentRow.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    studentRow.appendChild(locationCell);
  }

  document.body.appendChild(table);
}

renderTable(studentsList);