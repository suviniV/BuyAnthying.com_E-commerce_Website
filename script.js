function validateFeedbackForm() {
    let name = document.feedback.name.value;
    let comment = document.feedback.comment.value;
    let rating = document.feedback.rating.value;
    let email = document.feedback.email.value;

    if (name == null || name == "") {
        alert("Name field should be filled!");
        return false;
    }
    if (email == "") {
        alert("Email should be filled");
        return false;

    }
    if (email == "" && name == "") {
        alert("Name and Email should be filled")
    }
    if (rating == "") {
        alert("Rating should be filled");
        return false;
    }
    if (name != "" && email != "") {
        alert("Dear " + name + ", Thank you very much for your Feedback. You have rated our site as " + rating + " and your feed back was, " + comment)
    }


}

function validateAll() {

    validateFeedbackForm();
}

function openForm() {
    document.getElementById("feedbackForm").style.display = "block";
}

function closeForm() {
    document.getElementById("feedbackForm").style.display = "none";
}

function openQuiz() {
    let scoreAchieved = 0;
    let badgeEarned = "";
    if (prompt("What is our website based on? a) Ecommerce b) Job services c) Gaming based ") == "a") {
        scoreAchieved = scoreAchieved + 2;
    } else {
        scoreAchieved = scoreAchieved - 1;
    }
    if (prompt("Which one of the below is not our partners? a) sony b) cargills c) Samsung") == "b") {
        scoreAchieved = scoreAchieved + 2;
    } else {
        scoreAchieved = scoreAchieved - 1;
    }
    if (prompt("What is the latest ios version released? a) 11.4.1 b) 12.5.5 c) 14.81") == "c") {
        scoreAchieved = scoreAchieved + 2;
    } else {
        scoreAchieved = scoreAchieved - 1;
    }
    if (prompt("Who is the CEO of Google? a) Mukesh Ambani b) Jeff Bezos c) Sundar Pichai") == "c") {
        scoreAchieved = scoreAchieved + 2;
    } else {
        scoreAchieved = scoreAchieved - 1;
    }
    if (prompt("Who is Apple founder? a) Steve Job b) Steve Henry c) Steve Waugh ") == "a") {
        scoreAchieved = scoreAchieved + 2;
    } else {
        scoreAchieve = scoreAchieved - 1;
    }
    if (scoreAchieved <= 0) {
        scoreAchieved = 0;
        badgeEarned = "empty"
    }
    if (scoreAchieved >= 8) {
        badgeEarned = "Gold"
    } else if (scoreAchieved > 5) {
        badgeEarned = "Silver"
    } else {
        badgeEarned = "bronze"
    }
    if (scoreAchieved > 0 && scoreAchieved < 11) {
        alert("Congratulations you have earned " + scoreAchieved + " points and have recived a " + badgeEarned + " badge. Thank you for taking part in this quiz")
    } else {
        alert("Thank you for playing")
    }

}