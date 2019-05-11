var parabens = function(game){}
 
parabens.prototype = {
	
	preload: function() {
		//  Um fundo simples para o parabens
		this.load.image('parabens', 'assets/parabens.png');
		this.load.spritesheet('botao1', 'assets/button.png', 150, 60);
	},
	
	create: function () {

        this.stage.backgroundColor = "#5E3F6B";
		
		this.add.sprite(0, 0, 'parabens');

	   	this.add.button(325, 310, 'botao1', this.IniciaJogo1, this, 1, 0, 2);
				
	},
	
	
	IniciaJogo1: function (pointer) {
			
		 window.location="GOL.html"
				
	},
    	
  	
}