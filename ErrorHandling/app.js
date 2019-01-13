const user = {
    email: 'sfcxshf'
}
try {
    //myFunction(); // ReferenceError
    //let a = 1 / 0; //Infinity no execption occurs
    //null.myFunction(); // TypeError
    //eval('"asasas'); //SyntaxError
    //decodeURIComponent('%^&'); //URIError
    if (!user.name) {
        //throw 'User has no name'; //e will be a message only no object
        throw new Error('User has no name'); // Error
    }
} catch (e) {
    console.log(e); // e = 'User has no name' for throw 'User has no name'
    console.log(e.name); // e = undefined for throw 'User has no name'
    console.log(e.message); // e = undefined for throw 'User has no name'
    console.log(e instanceof TypeError);
} finally {
    console.log('finally block executed always');
}