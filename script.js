/**
 * Exercise 0: angryGandalf (example)
**/
 
// Define angryGandalf with input parameters
var angryGandalf = function(type) {
	if (type === 'grey') {
		return "YOU...SHALL NOT... PASS!";
	} else if (type === 'white') {
		return  "You merely passed me to your demise.";
	} else {
		return  "I don't think I'm Gandalf anymore.";
	}
};
 
// console.log(angryGandalf('grey'));  // Expect "YOU...SHALL NOT... PASS!" 
// console.log(angryGandalf('white')); // Expect "You merely passed me to your demise."
// console.log(angryGandalf(2)); // Expect "I don't think I'm Gandalf anymore."
 
 
/**
 * Exercise 1: tellFortune
**/
 
var lifeLine = function(job, location, partner, children) {
	return "You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids.";
};
 
// console.log(tellFortune('bball player', 'spain', 'Shaq', 3)); // Expect 'You will be a bball player in spain and married to Shaq  with 3 kids. '
// console.log(tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000)); // Expect 'You will be a stunt double in Japan and married to Ryan Gosling  with 3000 kids. '
// console.log(tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0)); // You will be a Elvis impersonator in Russia and married to The Oatmeal  with 0 kids. 
 
 
/**
 * Exercise 2: calculateAge
**/
 
function calculateAge = function(birthMonth, birthDay, birthYear) {
    // Get Todays Date
    var todayDate = new Date(),
        todayYear = todayDate.getFullYear(),
        todayMonth = todayDate.getMonth(),
        todayDay = todayDate.getDate();

    // Calculate Age
    var age = todayYear - birthYear;

    // Check month discrepancies
    if (todayMonth < (birthMonth - 1)) {
        age--;
    }

    // Check day discrepancies
    if (((birthMonth - 1) == todayMonth) && (todayDay < birthDay)) {
        age--;
    }

    // @return {Number} age
    return age;
};

 function checkOfAge = function(birthMonth, birthDay, birthYear) {
    return calculateAge(birthMonth, birthDay, birthYear) >== 21;
};

// console.log(calculateAge(1984, 2012)); // You are either 28 or 27 
// console.log(calculateAge(1988, 2012)); // You are either 24 or 23 
// console.log(calculateAge(1982, 2012)); // You are either 30 or 29 
 
$("#submitInputGandalf").on('click', function() {
    var name = $("#name").val();
    var message = angryGandalf(name);
    $("#gandalfMessage").html(message);
});

$("#submitInputLifeline").on('click', function() {
    var job = $("#job").val();
    var location = $("#location").val();
    var partner = $("#partner").val();
    var children = $("#children").val();
    var message = lifeLine(job, location, partner, children);
    $("#lifelineMessage").html(message);
});
