var selectedRow = null;

submitForm = () => {
    event.preventDefault();
    var formData = readForm();

    selectedRow ? updateData(formData) : insertData(formData);
    resetForm();
}

readForm = () => {
    var formData = {};
    formData.fname = document.getElementById('fname').value;
    formData.lname = document.getElementById('lname').value;
    formData.company = document.getElementById('company').value;

    return formData;
}

insertData = (data) => {
    var table = document.getElementById('listbody');
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.company;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<span class='diflex'>
                            <button id='edit' onclick="editData(this)">Edit</button>
                            <button id='delete' onclick="deleteData(this)">Delete</button>
                      </span>`;
}

resetForm = () => {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('company').value = '';
}

editData = (td) => {
    selectedRow = td.parentElement.parentElement.parentElement;
    document.getElementById('edit').innerHTML = "Editing";
    document.getElementById('fname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('lname').value = selectedRow.cells[1].innerHTML;
    document.getElementById('company').value = selectedRow.cells[2].innerHTML;
}

updateData = (data) => {
    selectedRow.cells[0].innerHTML = data.fname;
    selectedRow.cells[1].innerHTML = data.lname;
    selectedRow.cells[2].innerHTML = data.company;
    document.getElementById('edit').innerHTML = "Edit";
    selectedRow = null;
}

deleteData = (td) => {
    row = td.parentElement.parentElement.parentElement;
    confirm('Are you sure to delete data?') && document.getElementById('listbody').deleteRow(row.rowIndex - 1);
}