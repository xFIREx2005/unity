class Peca {
	x;
	y;
	cor;
	forma;
	ctx;
	idTipo;
	
	constructor(ctx){
		this.ctx = ctx;
		this.spawn();
	}
	
	spawn(){
		this.idTipo = this.randomizePeca(CORES.length - 1);
		this.shape = FORMAS[this.idTipo];
		this.color = CORES[this.idTipo];
		this.x = 0;
		this.y = 0;
	}
	
	desenho(){
		this.ctx.fillStyle = this.color;
		this.shape.forEach((row, y) => {
			row.forEach((value, x) => {
				if (value > 0){
					this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
				}
			});
		});
		
	}
	
	mover(p) {
		this.x = p.x;
		this.y = p.y;
		this.shape = p.shape;
	}
	
	setPosicaoInicial(){
		this.x = this.typeId === 4 ? 4 : 3;
	}
	
	randomizePeca(noDeTipos){
		return Math.floor(Math.random() * noDeTipos + 1);
	}
		
}

