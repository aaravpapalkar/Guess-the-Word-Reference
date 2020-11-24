score = 0;
function UpdateScore() {
    score = score+1;
    document.getElementById("score").innerHTML = "Score" + score;
}

function SaveScore() {
    localStorage.setItem("Score", score);
}

function NextPage() {
    window.location = "activity_2.html";
}

function GetScore() {
abc = localStorage.getItem("Score");
document.getElementById("score").innerHTML = "<h1>Score:" + abc + "</h1>";
}

function Back() {
window.location = "index.html";
}