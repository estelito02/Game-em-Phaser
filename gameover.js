var gameover = function(game){}
 
gameover.prototype = {
	
	preload: function() {
		//  Um fundo simples para o gameOver
		this.load.image('gameover', 'assets/gameover.png');
		this.load.spritesheet('botao1', 'assets/button.png', 150, 60);
	},
	
	create: function () {

        this.stage.backgroundColor = "#5E3F6B";
		
		this.add.sprite(0, 0, 'gameover');

	   	this.add.button(325, 310, 'botao1', this.IniciaJogo1, this, 1, 0, 2);
				
	},
	
	
	IniciaJogo1: function (pointer) {
			
		 window.location="GOL.html"
				
	},
    	
  	
}