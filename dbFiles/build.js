
var MongoClient = require('mongodb').MongoClient;

function addObject(collection, object){

	collection.insert(object, function(err, result){
		if(!err){
			console.log("Inserted : ");
			console.log(result);
		}
	});
}

MongoClient.connect("mongodb://localhost/", function(err, db) {

	var myDB = db.db("trivia_battle");
	
	myDB.dropCollection("user");
	myDB.createCollection("user", function(err, user){

		addObject(user, { 
			_id:"test1",
			password:"test1",
			email:"test1@gmail.com"
		});

		addObject(user, { 
			_id:"test2",
			password:"test2",
			email:"test2@gmail.com"
		});

		addObject(user, { 
			_id:"Helix",
			password:"planetary",
			email:"planetary@gmail.com"
		});
	});

	myDB.dropCollection("char_inform");
	myDB.createCollection("char_inform", function(err, char_inform){

		addObject(char_inform, { 
			_id: "charname1",
			user_id:"test1",
			exp: 0,
			gold: 0,
			level: 1,
			basic_value: {
				hp: 100,
				attack: 10,
				defence: 1
			},
			weapon_id: "blade1"
		});

		addObject(char_inform, { 
			_id: "charname2",
			user_id:"test2",
			exp: 0,
			gold: 0,
			level: 5,
			basic_value: {
				hp: 105,
				attack: 12,
				defence: 1
			},
			weapon_id: "blade2"
		});

		addObject(char_inform, { 
			_id: "charname3",
			user_id:"Helix",
			exp: 0,
			gold: 0,
			level: 1,
			basic_value: {
				hp: 100,
				attack: 10,
				defence: 1
			},
			weapon_id: "blade1"
		});
	});

	myDB.dropCollection("weapon");
	myDB.createCollection("weapon", function(err, weapon){

		addObject(weapon, { 

			_id:"blade1",
			level_limit: 1,
			hp_bonus:5,
			attack_bonus:1,
			defence_bonus: 1,
			special: 0
		});

		addObject(weapon, { 

			_id:"blade2",
			level_limit: 5,
			hp_bonus:10,
			attack_bonus:2,
			defence_bonus: 1,
			special: 1
		});
	});

	myDB.dropCollection("category");
	myDB.createCollection("category", function(err, category){

		addObject(category, { 

			_id:"academic"
		});

		addObject(category, { 

			_id:"spiritual"
		});

		addObject(category, { 

			_id:"dating"
		});
	});

	myDB.dropCollection("sub_category");
	myDB.createCollection("sub_category", function(err, sub_category){

		addObject(sub_category, { 

			_id:"mathematics",
			category_id:"academic"
		});

		addObject(sub_category, { 

			_id:"computer_science",
			category_id:"academic"
		});

		addObject(sub_category, { 

			_id:"devotional",
			category_id:"spiritual"
		});
	});

	myDB.dropCollection("question");
	myDB.createCollection("question", function(err, question){

		addObject(question, { 

			_id:"math0000",
			question:"1 + 1 = ?",
			sub_category_id:"mathematics",
			answer: {

				a1: "2",
				a2: "1",
				a3: "3",
				a4: "4"
			}
		});

		addObject(question, { 

			_id:"math0001",
			question:"1 + 2 = ?",
			sub_category_id:"mathematics",
			answer: {

				a1: "3",
				a2: "2",
				a3: "1",
				a4: "4"
			}
		});

		addObject(question, { 

			_id:"math0002",
			question:"2 * 2 = ?",
			sub_category_id:"mathematics",
			answer: {

				a1: "4",
				a2: "2",
				a3: "3",
				a4: "1"
			}
		});

		addObject(question, { 

			_id:"math0003",
			question:"2 - 1 = ?",
			sub_category_id:"mathematics",
			answer: {

				a1: "1",
				a2: "2",
				a3: "3",
				a4: "4"
			}
		});

		addObject(question, { 

			_id:"math0004",
			question:"6 - 4 = ?",
			sub_category_id:"mathematics",
			answer: {

				a1: "2",
				a2: "1",
				a3: "3",
				a4: "4"
			}
		});

		addObject(question, { 

			_id:"math0005",
			question:"5 / 5 = ?",
			sub_category_id:"mathematics",
			answer: {

				a1: "1",
				a2: "2",
				a3: "3",
				a4: "4"
			}
		});

		addObject(question, { 

			_id:"math0006",
			question:"28 / 7 = ?",
			sub_category_id:"mathematics",
			answer: {

				a1: "4",
				a2: "2",
				a3: "3",
				a4: "1"
			}
		});

		addObject(question, { 

			_id:"math0007",
			question:"36 / 12 + 1 = ?",
			sub_category_id:"mathematics",
			answer: {

				a1: "4",
				a2: "2",
				a3: "3",
				a4: "1"
			}
		});

		addObject(question, { 

			_id:"math0008",
			question:"1 + 24 / 8 = ?",
			sub_category_id:"mathematics",
			answer: {

				a1: "4",
				a2: "2",
				a3: "3",
				a4: "1"
			}
		});

		addObject(question, { 

			_id:"math0009",
			question:"7 - 4 = ?",
			sub_category_id:"mathematics",
			answer: {

				a1: "3",
				a2: "2",
				a3: "1",
				a4: "4"
			}
		});
	});


	myDB.dropCollection("user_question");
	myDB.createCollection("user_question", function(err, user_question){

		addObject(user_question, {
			user_id: "test1",
			question_id:"math0000",
		});
	});

	setTimeout(function(){ db.close(); }, 3000);
});
