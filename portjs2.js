/*


[*]	will make later/can not make yet
[-]	have not started yet
[/] still needs a bit of work
[X]	completely done

web projects
----------------
[*]	game review site
[*]	language learning web app with user login
[*]	korean hanja spider web learning for 100 most common hanja
[/] task manager 	updated todo list, accordion click to show description with slideToggle, progress bar of completion for each task?, modal popup for task editing, tabs splitting differnet levels like planning, in progress, completed, local storage, priority, bug icon setting which gives priority higher than max, sorted by priorities, settings [to give a modal popup for deletion confirmation, to keep priority on promotion, to only show last 5 completed tasks, sort from min to max or max to min]
[*] leitner box local storage learning with pastable flashcards, paste to create cards
[/] random quote mini game
[*] react roguelike
[*] markov name generation - http://fantasygen.herokuapp.com/ http://www.samcodes.co.uk/project/markov-namegen/ https://www.reddit.com/r/rpg/comments/4r6x57/i_created_name_generators_using_markov_chain/
[*] pixel color ramp generator based on db's 32 pixel palette?
[/] simon game
[/] patatap clone	with numbers 1 to 0 (so 10 total)
[-] incremental game
[-] web mouse accuracy game
[*]	phaser pac-man clone
[/] portfolio


game projects
----------------
react roguelike 
crashyblocks - flash, android, ios
empiretile - flash, android, ios
roguelike manager
idle incremental
web mouse accuracy game
phaser pac-man clone
unity game
libgdx game
godot game


software projects
----------------
subtitle viewer - java
subtitle viewer - c#


mobile projects
----------------
java/android app
swift/ios app




*/


var  navbar = $(".navbar");
    navbarscrolled = "navbar-scrolled";

$(window).scroll(function() {
  if( $(this).scrollTop() > window.innerHeight-50) {
    navbar.addClass(navbarscrolled);
  } else {
    navbar.removeClass(navbarscrolled);
  }
});