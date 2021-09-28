var customerData = {
  'Joe': {visits: 1},
  'Carol': {visits: 2},
  'Howard': {visits: 3},
  'Carrie': {visits: 4}
};

function greetCustomer(firstName) {
  var greeting = '';
	

  let number = customerData[firstName]

  if(number==undefined){ greeting = 'Welcome! Is this your first time?'}
  else {
  let number_visits = number.visits
  if(number_visits==1){greeting = "Welcome back, Joe! We're glad you liked us the first time!"}
  else {greeting = 'Welcome back, Carol! So glad to see you again!'}
  }
	
  return greeting;
}


var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
