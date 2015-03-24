angular.module('game', [])
.service('GameService', function() {
	var questionsdb = [{ //TODO - just temp stuff to test my app!
		"question1":{
			"ID":"9",
			"Question":"What is the your name?",
			"AnswerA": "Sir Galahad of Camelot",
			"AnswerB": "Sir Lancelot",
			"AnswerC": "King Arthur",
			"AnswerD": "Tony Stark"
		},
		"question2":{
			"ID":"10",
			"Question":"What is your quest?",
			"AnswerA": "To seek the holy grail",
			"AnswerB": "To get this lab done",
			"AnswerC": "To become Ironman",
			"AnswerD": "Get get 6 bushels of moon herbs"
		},
		"question3":{
			"ID":"11",
			"Question":"What is your favorite color?",
			"AnswerA": "Blue",
			"AnswerB":"Red",
			"AnswerC":"Blue...no YELLLOOWWWWWW",
			"AnswerD":"Green"
		}
	}]

	this.server_getQuestions = function () {
		;
		//TODO
		//SET server questions to the dqusetionsdb var
		//then the controller can call get questions
	}

	this.server_sendAnswer = function () {
		;
		//TODO
	}

	//TODO figure out what other server stuff to do
	this.getQuestion = function (index) {
		return questionsdb[index];
	}
	
})

.controller('GameController', function ($scope, GameService) {
	$scope.currentQuestionIndex = 0;

	$scope.question = GameService.getQuestion($scope.currentQuestionIndex);

console.log(GameService.getQuestion($scope.currentQuestionIndex));


});
