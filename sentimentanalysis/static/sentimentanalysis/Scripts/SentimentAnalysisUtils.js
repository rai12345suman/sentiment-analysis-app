// Local machine
//var baseURL = "http://localhost:80/";
// Production machine
var baseURL = "http://13.229.119.8:80/";

var SA = {
    getSentiment: function () {
        // Retrieve text and send text to back end
        var text = document.getElementById('textarea').value;
        if (text) {
            $.ajax({
                method: "POST",
                url: baseURL + "sentimentanalysis/getSentiment/",
                data: {param: text},
                success: SA.displaySentiment
            });
        } else {
            alert("Please input some text for sentiment analysis");
        }
    },
    displaySentiment: function (data) {
        let sentiment = data[0] === "pos" ? "POSITIVE" : "NEGATIVE";
        alert("The text is " + ( 100 * data[1] ) + "% " + sentiment + ".");
    }
};

