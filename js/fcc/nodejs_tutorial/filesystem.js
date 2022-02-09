const fs = require('fs');

/*
// create a file.
fs.writeFile('example.txt', "this is an example", (err) => {
	if(err) {
		console.log(err);
	} else {
		console.log("File successfully created.");
		fs.readFile('example.txt', 'utf8', (err, file) => {
			
			if(err) {
				console.log(err);
			} else {

				console.log(file);

			}

		});
	}

});

*/

/*
// rename a file
fs.rename('example.txt', 'example_renamed.txt', (err) => {
	if(err) {
		console.log(err);
	} else {
		console.log("File successfully renamed file.");

	}
});

*/

/*
fs.appendFile('example_renamed.txt', 'Some data being appended to this file.', (err) => {
	if(err) {
		console.log(err);
	} else {
		console.log("Successfully appended data to file.");

	}
});

*/

/*
fs.unlink('example_renamed.txt', (err) => {

	if(err) {
		console.log(err);
	} else {
		console.log("Successfully deleted the file.");

	}
});

*/

/*
fs.mkdir('sub_dir', (err) => {

	if(err) {
		console.log(err);
	} else {
		fs.rmdir('sub_dir', (err) => {
			if(err) {
				console.log(err);
			} else {
				console.log('Successfully deleted the folder.')
			}
		});
	}
});

*/

/*
fs.mkdir('sub_dir', (err) => {

	if(err) {
		console.log(err);
	} else {
		fs.writeFile('./sub_dir/example.txt', 'contents of this file', (err) => {
			if(err) {
				console.log(err);
			} else {
				console.log('Successfully created the file.')
			}
		});
	}
});
*/

/*
fs.unlink('./sub_dir/example.txt', (err) => {

	if(err) {
		console.log(err);
	} else {
		console.log("Successfully deleted the file.");

	}
});


fs.rmdir('sub_dir', (err) => {

	if(err) {
		console.log(err);
	} else {
				console.log('Successfully deleted the folder.')
	}
});

*/

fs.readdir('./', (err, files) => {
	if(err) {
		console.log(err);
	} else {
				console.log(files)

		// here we could use a fs.unlink() function to delete these files.
		// we don't want to do that, so we won't. :P
		for(let file of files) {
			console.log(`Yay a file: ${ file }.\n`)
		}
	}

});
