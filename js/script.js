// jQuery Document Ready
$(function(){
	
	var nameBoxes = 0;
	//an object that holds the names of the players
	var playerNames = {};
	var playerNameTurn = [];

	// Hide sections
	$('.playerQuestions').hide();
	$('.1').on('click', function(){
		$('.playerQuestions').show();
		$('.main').slideUp(3000);
	});

	$('.typeDrink').hide();
	$('.2').on('click', function(){
		console.log('nameBoxes ~> ' + nameBoxes);
		if(nameBoxes === 3){
			playerNameTurn.push($('input.player1').val());
			playerNameTurn.push($('input.player2').val());
			playerNameTurn.push($('input.player3').val());
			
		}else if(nameBoxes === 2){
			playerNameTurn.push($('input.player1').val());
			playerNameTurn.push($('input.player2').val());
		}else{
			playerNameTurn.push($('input.player1').val());
		}
		console.log("playerNameTurn: " + playerNameTurn);

		$('.typeDrink').show();
		$('.playerQuestions').slideUp(5000);
	});

	$('.questions').hide();
	$('.3').on('click', function(){
		$('.questions').fadeIn(3000);
		$('.typeDrink').slideUp(2000);
	});

	// HIDE BUTTON
	$('.endGame').hide();
	
	//about box pop up function
	var hiddenBox = $('.hiddenBox');
		$('.about').on('click', function(){
		hiddenBox.show();
	});

		$('i').on('click', function(){
		hiddenBox.hide();
	});

	//randomize function
	var takeDrink = function(){
    	var test = Math.floor((Math.random() * 3));
       	return test;
    }

    // $('.startButtton').on('click', function{

    // });

    //array for the three types of drinks
	var drinks = [
	    	{
	    		name: "Beer",
	    		image: "assets/beer.png",
	    		options: [
	    		"Have two sips",
	    		"Have one sip",
	    		"clean that bottle"	
	    		]
	    	},
	    	{
	    		name: "Tequila",
	    		image: "assets/shots.png",
	    		options: [
	    		"Have two shots",
	    		"Have one shot",
	    		"Have three shots"	
	    		]
	    	},
	    	{
	    		name: "Wine",
	    		image: "assets/wine.png",
	    		options: [
	    		"Have one glass",
	    		"Have one sip",
	    		"Have three sips"	
	    		]
	    	}
    ];


//////////////////////////HOW MANY PLAYERS////////////////////////////

	// Get selected value from dropdownlist
	$('.player').hide();
	$('.nextButton').hide();
	$('select').on('change', function(){
			if(this.value === '3'){
				$('.player').fadeIn(2000);
				$('.nextButton').fadeIn(2000);
				nameBoxes = 3;
		
			
			}else if(this.value === '2'){
				$('.player1').fadeIn(2000);
				$('.player2').fadeIn(2000);
				$('.player3').fadeOut(1000);
				$('.nextButton').fadeIn(2000);
				nameBoxes = 2;
		
			
			}else if(this.value === '1'){	
				$('.player1').fadeIn(3000);
				$('.player2').fadeOut(1000);
				$('.player3').fadeOut(1000);
				$('.nextButton').fadeIn(2000);
				nameBoxes = 1;
			}

	 }); //End of change function




////////////////////////WHAT YOU DRINK/////////////////////////////
// Display the drinks images and append to ul
       		for(items in drinks){
       			var drinkPics = drinks[items].image;
       			var drinkName = drinks[items].name;
       			var listDrinks = '<li><button class="option'+ items +'"><img src="' + drinkPics + '" alt="'+ drinkName +'"/></button></li>';
       			$('ul').append(listDrinks);
       		}

       		var option1 = $('button.option0');
       		var option2 = $('button.option1');
       		var option3 = $('button.option2');

       		var testButton = "";
       		$(option1).on('click', function(){
       			textButton = drinks[0].options;
       		});

       		$(option2).on('click', function(){
       			textButton = drinks[1].options;
       		});

       		$(option3).on('click', function(){
       			textButton = drinks[2].options;
       		});


       		$('h3.choice').hide();
       		$('img').on('click', function(){
       			var name = $(this).attr("alt");
       			$('ul li.hightlight').removeClass('hightlight');
       			$(this).closest('li').addClass('hightlight');
       			
       			$('h3.choice').html('What a wonderful choice you picked ' + '<span class="bold">' + name + '</span>');
       			$('h3.choice').fadeIn(2000);
       			
       			if(name === "Beer"){
       				storeDrink = drinks[0].options;
       			
       			}else if(name === "Tequila"){
       				storeDrink = drinks[1].options;	
       			
       			}else{
       				storeDrink = drinks[2].options;
       			}
       		});

//////////////////////////////QUESTIONS/////////////////////////// 

	$('.questions').hide();

	$('.startTheGame').on('click', function(){
		$('.questions').show();
	});

	var quiz = [
		{
			question: "What do you call a male sheep?",
			options: ["Stud", "Bull", "Goat", "Ram"],
			answer: "Ram"
		},
		{
			question: "Which US President used to be an actor?",
			options: ["Bill Clinton", "Ronald Regan", "John F. Kennedy", "George Bush Jr."],
			answer: "Ronald Regan"
		},

		{	question: "How many states make of the United States of America?",
			options: ["49", "50", "51", "52"],
			answer: "50"
		},
		{
			question: "What kind of tree has acorns?",
			options: ["Oak", "Maple", "Spruce", "Cherry"],
			answer: "Oak"
		},
		{
			question: "Who was the first African American to host a TV show?",
			options: ["Bill Cosby", "Whoppi Goldberg", "Oprah Winfrey", "Steve Harvey"],
			answer: "Oprah Winfrey"
		},
		{
			question: "The mouth of the Mississippi River is located in which state?",
			options: ["Kentucky", "Texas", "Mississippi", "Louisiana"],
			answer: "Louisiana"
		},
		{
			question: "What is the only officially bilingual province in Canada? ",
			options: ["New Brunswick", "Quebec", "Nova Scotia", "Alberta"],
			answer: "New Brunswick"
		},
		{
			question: "In what direction does the Nile River flow?",
			options: ["North", "South", "East", "West"],
			answer: "North"
		},
		{
			question: "Where in the United States is coffee grown?",
			options: ["California", "Texas", "Seatle", "Hawaii"],
			answer: "Hawaii"
		},
		{
			question: "What is a group of feral horses called?",
			options: ["Herd", "Quarrel", "Stock", "Band"],
			answer: "Band"
		},
		{
			question: "What mission was the first successful manned mission to land on the Moon?",
			options: ["Apollo 12", "Apollo 13", "Mission Success", "Apollo 11"],
			answer: "Apollo 11"
		},
		{
			question: "What is the only mammal that can't jump?",
			options: ["Hippo", "Moose", "Elephant", "Giraffe"],
			answer: "Elephant"
		},
		{
			question: "Where in your body would you find your hippocampus? ",
			options: ["Brain", "Eye", "Mouth", "Heart"],
			answer: "Brain"
		},
		{
			question: "Which eye color is normally dominant in humans?",
			options: ["Blue", "Green", "Brown", "Hazel"],
			answer: "Brown"
		},
		{
			question: "What period saw the first dinosaurs?",
			options: ["Jurassic", "Triassic", "Paleolithic", "Chris Pratt"],
			answer: "Jurassic"
		},
		{
			question: "What sense is most closely linked to memory?",
			options: ["Sight", "Smell", "Hearing", "Touch"],
			answer: "Smell"
		},
		{
			question: "How long is a round in boxing?",
			options: ["1 hour", "1 minute", "5 minutes", "3 minutes"],
			answer: "3 minutes"
		},
		{
			question: "Who now owns the rights to MySpace?",
			options: ["Steve Jobs", "Bill Gates", "Mark Zuckerburg", "Justin Timberlake"],
			answer: "Justin Timberlake"
		},
		{
			question: "What did the Seven Dwarfs do for a living?",
			options: ["Miners", "Welders", "Bandits", "Nothing"],
			answer: "Miners"
		},
		{
			question: "What is the name of Garfield's dog friend?",
			options: ["Odie", "Joey", "Yogi", "Lasagne"],
			answer: "Odie"
		},
		{
			question: "What is the least popular month to get married?",
			options: ["January", "February", "November", "April"],
			answer: "January"
		},
		{
			question: "How many keys are on a conventional piano? ",
			options: ["70", "78", "100", "88"],
			answer: "88"
		},
		{
			question: "What's the most malleable metal?",
			options: ["Silver", "Steel", "Gold", "Iron"],
			answer: "Gold"
		},
		{
			question: "How many U.S. states border the Gulf of Mexico?",
			options: ["1", "3", "5", "7"],
			answer: "5"
		},
		{
			question: "Where is the Highest Elevation on Earth?", 
			options: ["Mount Fuji", "Mount Everest", "Mount St. Helens", "Mount Kilimajara"],
			answer: "Mount Everest"
		}
	];

/////////////////////////MAKE A LOOP TO CHANGE PLAYERS' TURNS ONCE AND ANSWER QUESTIONS////////////////////////////
			
var currentQuestion = 0;
     	var currentOptions = 0;
     	// var playerNameTurn = ["tavo", "stacie", "magic"];
     	var playerTurn = 0;	

     	//function to restart page
     	var restart = function(){
     		location.reload();
     	}

     	
 		$('.ready').on('click', function(){
 			$('.questions .begin').fadeOut(1000);
 			$('.endGame').fadeIn(2000);
 			$('.options').empty();
			var question = quiz[currentQuestion].question;
			var options = quiz[currentQuestion].options;
			// $('.options').hide();
			var answer = quiz[currentQuestion].answer;
			// console.log(answer);
			for(var c = 0; c < options.length; c++){
				var inputs = '<input type="button" class="btn_game btn'+c+'" value="' + options[c] +'" />';
				
				$('.options').append(inputs);
				$("input.btn"+c).on('click', function(){
				var nameOptions = $(this).attr("value");
					// console.log(nameOptions);

				// check if user clicks the right answer
					if(nameOptions === answer){
						$('.box_right').fadeIn();
						$('.box_right .ready').on('click', function(){
							$('.box_right').fadeOut();
						});
					}else{
						$('.box_wrong').fadeIn();
						$('.box_wrong p').html(storeDrink[takeDrink()]);
						$('.box_wrong .ready').on('click', function(){
							$('.box_wrong').fadeOut();						
						});
					}
				}); 
			}

			$('.yourQuestion').html(question);
			currentQuestion++;
			// change the player
			playerTurn = (playerTurn + 1) % playerNameTurn.length;
			$('.whoPlays').html(playerNameTurn[playerTurn]);
			if(currentQuestion === quiz.length){
				$('.box_wrong, .box_right').hide();
				$('.box_stop').fadeIn();
				$('.close').on('click', function(){
					restart();
				});
				
			}
		});

		$('.endGame').on('click', function(){
			restart();
		});

		$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top+100
		        }, 1000);
		        return false;
		      }
		    }
	    });

});

//smooth scroll


  







