var game;

document.addEventListener("DOMContentLoaded", function(event){
	//create a new game and run it
	game = new Phaser.Game(Config.size.width, Config.size.height, Phaser.OPENGL, 'game', null, false, false);

	//add the game states
	game.state.add('StartupState', new StartupState());
	game.state.add('LoadState', new LoadState());
	game.state.add('MainState', new MainState());

	//kickoff the starting state, logo if not on localhost, mainstate otherwise
    if(isDev()){
        game.state.start('LoadState');
    }else{
        game.state.start('StartupState');
    }
});