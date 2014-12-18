module.exports = function(name) {
    var nameArray = name.split(' ');

    function getFirstName() {
        return nameArray[0];
    }

    function getLastName() {
        return nameArray[1];
    }

    return {
        firstName: getFirstName,
        lastName: getLastName
    };
};