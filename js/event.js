$(document).ready(function() {
            $("#start").hide();

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
            });
            var Supplies = 100;
            var Morale = 100;
            var Conditions = 100;
            var Strength = 100;
            var Days = 0;
            var events = [{
                maintenance: {
                    image: "",
                    text: "Each machine on board the ship requires maintence to make sure everything is running smoothly",
                    choices: [{
                            text: "check engine room",
                            supplies: -10,
                            morale: -13,
                            conditions: +25
                        },
                        {
                            text: "Ignore for now.",
                            conditions: -25,
                            morale: +13
                        }
                    ]
                },
                supplyrun: {
                    image: "",
                    text: "Supplies such as food,fire arms, and cleaning tools are needed on the ship",
                    choices: [{
                            text: "Go on a supply run",
                            supplies: +30,
                            morale: -15,
                            conditions: -5
                        },
                        {
                            text: "Don't go on a supply run",
                            conditions: -25,
                            morale: +13
                        }
                    ]
                },
                maintenance: {
                    image: "",
                    text: "Each machine on board the ship requires maintence to make sure everything is running smoothly",
                    choices: [{
                            text: "check engine room",
                            supplies: -10,
                            morale: -13,
                            conditions: +25
                        },
                        {
                            text: "Ignore for now.",
                            conditions: -25,
                            morale: +13
                        }
                    ]
                },
                maintenance: {
                    image: "",
                    text: "Each machine on board the ship requires maintence to make sure everything is running smoothly",
                    choices: [{
                            text: "check engine room",
                            supplies: -10,
                            morale: -13,
                            conditions: +25
                        },
                        {
                            text: "Ignore for now.",
                            conditions: -25,
                            morale: +13
                        }
                    ]
                },
                maintenance: {
                    image: "",
                    text: "Each machine on board the ship requires maintence to make sure everything is running smoothly",
                    choices: [{
                            text: "check engine room",
                            supplies: -10,
                            morale: -13,
                            conditions: +25
                        },
                        {
                            text: "Ignore for now.",
                            conditions: -25,
                            morale: +13
                        }
                    ]
                }
            }];
            var ranEvent = events[Math.floor(Math.random() * Math.floor(event.length))].text;
            $("h2").html(ranEvent);
            $("choice1").click(function() {
                        Morale ++;
                        Conditions = Conditions + 20;
                        Day++;
                        $("h2").html([events[0]]);
                        if (Days >= 0 && Days <= 10) {
                            console.log(Object.values(events));
                        }
                        else if (Days >= 11 && Days <= 20) {
                            console.log(Object.values(events));
                        }
                        // $("h2").html(events[Math.floor(Math.random() * Math.floor(event.length));]);
                    }); $("choice2").click(function() {
                    Days++;
                    Morale++;
                    Conditions - 1;
                    // $("h2").html(events[Math.floor(Math.random() * Math.floor(event.length));]);        
                });
            });
