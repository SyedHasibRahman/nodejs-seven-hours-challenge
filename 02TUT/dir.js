const fs = require('fs');

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory Created')
    })
} else {
    console.log('Already Directory exist');
}


if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory removed')
    })
} else {
    console.log('Directory not exist');
}