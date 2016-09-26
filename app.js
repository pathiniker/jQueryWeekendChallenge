$( document ).ready(function() {

  $('#employee-info').on('submit', function(event) {
    event.preventDefault();

    var employee = {};

    var fields = $('#employee-info').serializeArray();
    console.log('fields', fields);

    fields.forEach(function (element, index) {
      employee[element.name] = element.value;
    });

    console.log('employee object', employee);

//clear form data upon submission
    $('#employee-info').find('input[type=text]').val('');
    $('#employee-info').find('input[type=number]').val('');


// appending to the DOM
  appendDom(employee);

  calculateSum();


  $('#employee-data').on('click', '.delete', function () {
    $(this).closest('tr').remove();
    calculateSum();


  });

  });

  // This is one way:
  // function appendDom(emp) {
  //   $('employee-data').append('<div class="employee"></div>');
  //
  //   var $el = $('#employee-data').children().last();
  //
  //   $el.append('<p>' + emp['employee-first-name'] + ' ' + emp['employee-last-name'] + '</p>');
  // }

 // This does the same thing, but is simpler:
  function appendDom(emp) {
    var $emp = $('<tr class="employee"></tr>');


// first name + last name + id number + job title + annual salary

    $emp.append('<td>' + emp['employee-first-name'] + '</td>');
    $emp.append('<td>' + emp['employee-last-name'] + '</td>');
    $emp.append('<td>' + emp['employee-id-number'] + '</td>');
    $emp.append('<td>' + emp['employee-job-title'] + '</td>');
    $emp.append('<td class ="salary">' + emp['employee-annual-salary'] + '</td>');
    $emp.append('<td><input type="image" src="redx.png" class="delete"></button></td>');

    $('#employee-data').append($emp);

  };


  function calculateSum() {
 var sum = 0;
  $('.salary').each(function () {
    var value = $(this).text();
    if (!isNaN(value)) {
      sum += parseInt(value);
    }

  });

  $('#result').text('$' + parseInt(sum/12));

}



});

//updateMonthlySalaryDisplay();
//var totalMonthlySalary;
// totalMonthlySalary = totalMonthlySalary + employee['employee-salary'] / 12;
//updateMonthlySalary
//function updateMonthlySalaryDisplay() {
//
// }


//var $button = $('<button>Remove</button>');
// function removeEmployee() {
//   var $button =
// }
