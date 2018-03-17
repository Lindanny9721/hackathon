var name;
function newEventGen() {
                var eventNames = ["maintenance", "supplyrun", "Enemyship","Explosion","Ambush"];
                var ranNumber = Math.floor(Math.random() * Math.floor(eventNames.length));
                name = eventNames[ranNumber];
                // var ranEvent = events[ranNumber].text;
                // console.log(ranEvent);
                $("h3").html(events[name].text);
                $("#choice1").html(events[name].choices[0].text);
                $("#choice2").html(events[name].choices[1].text);
                $("#stats").html(Supplies + " SUPPLIES /" + Morale + " MORALE /" + Militarypower+" MILITARYPOWER /" + Conditions+" CONDITIONS ");
                
}



function checkLose() {
               if (Supplies <= 0 || Morale <= 0 || Conditions <= 0 || Militarypower <= 0) {
                    alert("GameOver!");
                } else {
                   newEventGen(); 
                }   
}

$(document).ready(function() {
            $("#secondpart").hide();
            $("#start").hide();
            $("#scenario").hide();
            $("#engine").hide;
            
            $("#name").keydown(function(e) {
                console.log(e.which);
                if (e.which === 13) {
                    $("#enter").click();
                }
            });

            $("#enter").click(function() {
                $("#container").hide();
                $("#start").show();
                var name = $("#name").val();

                $("#namedisplay").html("Welcome " + name + "!");
            });
            
            $("#start").click(function() {
                $("#namedisplay").hide();
                $("#start").hide();
                $("#secondpart").show();
                $("#containertwo").hide();
                newEventGen();
                $("#scenario").show();
                $("#engine").show();
                getImageUrl();
            });

             $("#choice1").click(function() {
                Supplies = Supplies + events[name].choices[0].supplies;
                // console.log(events[name].choices[0].supplies);
                console.log(Supplies);
                Morale = Morale + events[name].choices[0].morale;
                console.log(Morale);
                Conditions = Conditions + events[name].choices[0].conditions;
                console.log(Conditions);
                Militarypower = Militarypower + events[name].choices[0].militarypower;
                Days ++;
                checkLose();
                // $("h2").html([events[0]]);
                // if (Days >= 0 && Days <= 10) {
                //     console.log(Object.values(events));
                // }
                // else if (Days >= 11 && Days <= 20) {
                //     console.log(Object.values(events));
                // }
                // $("h2").html(events[Math.floor(Math.random() * Math.floor(event.length));]);
            });
            $("#choice2").click(function() {
                Supplies = Supplies + events[name].choices[1].supplies;
                // console.log(events[name].choices[0].supplies);
                console.log(Supplies);
                Morale = Morale + events[name].choices[1].morale;
                console.log(Morale);
                Conditions = Conditions + events[name].choices[1].conditions;
                console.log(Conditions);
                Militarypower = Militarypower + events[name].choices[1].militarypower;
                Days ++;
                checkLose();
                // $("h2").html(events[Math.floor(Math.random() * Math.floor(event.length));]);        
            });
                
});
            function getImageUrl(){
                APILink = "https://pixabay.com/api/?key=8399109-347a1179d345f8bfcade2d937&q=ship+engine&image_type=photo";
                $.get(APILink).then(res => {
                    console.log(res.hits[0].webformatURL)
                    $("body").css("background-image", "url(" + res.hits[0].webformatURL + ")");
                });
                
            }
            var events = {
               maintenance: {
                     image: "",
                     text: "Each machine on board the ship requires maintence to make sure everything is running smoothly",
                     choices: [{
                             text: "check engine room",
                             supplies: -10,
                             morale: -10,
                             conditions: 25,
                             militarypower: 0
                         },
                         {
                             text: "Ignore for now.",
                             conditions: -25,
                             morale: 13,
                             militarypower:0,
                            supplies:0,
                        }
                    ]
                },
                supplyrun: {
                    image: "",
                    text: "Supplies such as food,fire arms, and cleaning tools are needed on the ship",
                    choices: [{
                            text: "Go on a supply run",
                            supplies: 40,
                            militarypower: -15,
                            conditions: -12,
                            morale:0,
                        },
                        {
                            text: "Don't go on a supply run",
                            conditions: 13,
                            morale: 27,
                            supplies: -10,
                            militarypower:0,
                        }
                    ]
                },
                Enemyship: {
                    image: "",
                    text: "A Enemyship is approaching your ship and crew could be in danger ",
                    choices: [{
                            text: "Engage enemy ship",
                            supplies: 30,
                            morale: 40,
                            conditions: -30,
                            militarypower: -35
                        },
                        {
                            text: "Avoide enemyship.",
                            conditions: 25,
                            morale: -13,
                            supplies: -15,
                            militarypower: 25
                        }
                    ]
                },
                Explosion: {
                    image: "",
                    text: "there are two explosions on the ship one explosion in the engine room one explosion in the food court you have to chose one to take out first",
                    choices: [{
                            text: "Put out fire in the engine room first.",
                            supplies: -37,
                            conditions: 40,
                            militarypower:0,
                            morale:0,
                        },
                        {
                            text: "put out fire in the Food court first.",
                            conditions: -38,
                            supplies: 37,
                            militarypower:0,
                            morale:0,
                        }
                    ]
                },
                Ambush: {
                    image: "",
                    text: "There is an enemy ship  close by docked on a island but they are not aware of your position  do you ambush them or keep moving, they might have supplies",
                    choices: [{
                            text: "check out the island and see what you can find",
                            militarypower:-25,
                            morale:0,
                            supplies:0,
                            conditions:0,
                        },
                        {
                            text: "Keep going stick to the path",
                            morale:50,
                            supplies:0,
                            conditions:0,
                            militarypower:0,
                        }
                    ]
                }
            };

            var Supplies = 100;
            var Morale = 100;
            var Conditions = 100;
            var Militarypower = 100;
            var Days = 0;

Supplies + " " + Morale



