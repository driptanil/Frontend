const user = {
    name: 'Driptanil',
    age: 19,
    prof: `Student`,

    info: function() {
        console.log(`Name: ${user.name}`);
        console.log(`Age: ${user.age}`);
        console.log(`Profession: ${user.prof}`);
    }
}

console.log();
user.info();