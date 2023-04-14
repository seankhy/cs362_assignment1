const figlet = require('figlet');

const input = process.argv[2];

//check input text
if (input) {

  figlet(input, function(error, text) {

    if (error) {

      console.log('Error occurred... try again');
      return;

    }

    console.log(text);
  });

} else {

  console.log('No input found... try again');
}