//Load the data from the friend array

var friendData = require("../data/friends.js");

//Routing

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });
    
    app.post("/api/friends", function(req, res) {
        var bestCuddle = {
            name: "",
            photo: ""  
        };
        var lowestDiff = Infinity;

        var userInfo = req.body;

        var userScores = userInfo.scores;

        for (var i=0; i<friendData.length; i++) {
            var currentFriend = friendData[i];
            var currentFriendDiff = 0;
            for (var j=0; j<currentFriend.scores.length; j++){
                var userScoreOne = userScores[j];
                var currentFriendScoreOne = currentFriend.scores[j];
                currentFriendDiff += Math.abs(userScoreOne - currentFriendScoreOne);
                console.log(currentFriendDiff);
            }
            
            if (currentFriendDiff < lowestDiff){
                bestCuddle.name = currentFriend.name;
                bestCuddle.photo = currentFriend.photo;
            }
        console.log(bestCuddle);
        }

        friendData.push(req.body);
          res.json(bestCuddle);
      });
}