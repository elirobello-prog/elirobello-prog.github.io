(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"desafio4_atlas_", frames: [[0,1019,1008,1012],[1010,1019,253,572],[1010,1680,53,53],[0,0,1013,1017],[1010,1593,94,85]]}
];


// symbols:



(lib.CachedTexturedBitmap_197 = function() {
	this.initialize(ss["desafio4_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_198 = function() {
	this.initialize(ss["desafio4_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_199 = function() {
	this.initialize(ss["desafio4_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_200 = function() {
	this.initialize(ss["desafio4_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_201 = function() {
	this.initialize(ss["desafio4_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.fama_mc_Capa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_201();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fama_mc_Capa_1, null, null);


(lib.Escena_1_signo_de_pregunta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// signo_de_pregunta
	this.instance = new lib.CachedTexturedBitmap_198();
	this.instance.parent = this;
	this.instance.setTransform(665.35,180.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_signo_de_pregunta, null, null);


(lib.Escena_1_Cuadricula = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cuadricula
	this.instance = new lib.CachedTexturedBitmap_197();
	this.instance.parent = this;
	this.instance.setTransform(61,54.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Cuadricula, null, null);


(lib.cuadrado_Capa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_200();
	this.instance.parent = this;
	this.instance.setTransform(-245.35,-245.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cuadrado_Capa_1, null, null);


(lib.ch_Capa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_199();
	this.instance.parent = this;
	this.instance.setTransform(-22.3,-25.5,0.8645,0.8645);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ch_Capa_1, null, null);


(lib.fama_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1_obj_
	this.Capa_1 = new lib.fama_mc_Capa_1();
	this.Capa_1.name = "Capa_1";
	this.Capa_1.parent = this;
	this.Capa_1.setTransform(23,21.2,1,1,0,0,0,23,21.2);
	this.Capa_1.depth = 0;
	this.Capa_1.isAttachedToCamera = 0
	this.Capa_1.isAttachedToMask = 0
	this.Capa_1.layerDepth = 0
	this.Capa_1.layerIndex = 0
	this.Capa_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Capa_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.fama_mc, new cjs.Rectangle(-0.5,0,47,42.5), null);


(lib.Escena_1_famas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// famas
	this.clipi_6 = new lib.fama_mc();
	this.clipi_6.name = "clipi_6";
	this.clipi_6.parent = this;
	this.clipi_6.setTransform(802.05,339.7,1,1,-45,0,0,23,21.2);

	this.clipi_5 = new lib.fama_mc();
	this.clipi_5.name = "clipi_5";
	this.clipi_5.parent = this;
	this.clipi_5.setTransform(754.85,530.8,1,1,-14.9992,0,0,23,21.2);

	this.clipi_4 = new lib.fama_mc();
	this.clipi_4.name = "clipi_4";
	this.clipi_4.parent = this;
	this.clipi_4.setTransform(665.35,381.4);

	this.clipi_3 = new lib.fama_mc();
	this.clipi_3.name = "clipi_3";
	this.clipi_3.parent = this;
	this.clipi_3.setTransform(786.7,169,1,1,0,0,0,23,21.2);

	this.clipi_2 = new lib.fama_mc();
	this.clipi_2.name = "clipi_2";
	this.clipi_2.parent = this;
	this.clipi_2.setTransform(684.5,140.45,1,1,-74.9998,0,0,23,21.2);

	this.clipi_1 = new lib.fama_mc();
	this.clipi_1.name = "clipi_1";
	this.clipi_1.parent = this;
	this.clipi_1.setTransform(672.45,252.65,1,1,59.9996,0,0,23.1,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.clipi_1},{t:this.clipi_2},{t:this.clipi_3},{t:this.clipi_4},{t:this.clipi_5},{t:this.clipi_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_famas, null, null);


(lib.cuadrado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1_obj_
	this.Capa_1 = new lib.cuadrado_Capa_1();
	this.Capa_1.name = "Capa_1";
	this.Capa_1.parent = this;
	this.Capa_1.setTransform(7.9,8.9,1,1,0,0,0,7.9,8.9);
	this.Capa_1.depth = 0;
	this.Capa_1.isAttachedToCamera = 0
	this.Capa_1.isAttachedToMask = 0
	this.Capa_1.layerDepth = 0
	this.Capa_1.layerIndex = 0
	this.Capa_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Capa_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cuadrado, new cjs.Rectangle(-245.3,-245.3,506.5,508.5), null);


(lib.ch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1_obj_
	this.Capa_1 = new lib.ch_Capa_1();
	this.Capa_1.name = "Capa_1";
	this.Capa_1.parent = this;
	this.Capa_1.setTransform(0.6,-2.6,1,1,0,0,0,0.6,-2.6);
	this.Capa_1.depth = 0;
	this.Capa_1.isAttachedToCamera = 0
	this.Capa_1.isAttachedToMask = 0
	this.Capa_1.layerDepth = 0
	this.Capa_1.layerIndex = 0
	this.Capa_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Capa_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ch, new cjs.Rectangle(-22.3,-25.5,45.8,45.8), null);


(lib.Escena_1_clips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// clips
	this.clipi_18 = new lib.ch();
	this.clipi_18.name = "clipi_18";
	this.clipi_18.parent = this;
	this.clipi_18.setTransform(398.75,536.65,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clipi_17 = new lib.ch();
	this.clipi_17.name = "clipi_17";
	this.clipi_17.parent = this;
	this.clipi_17.setTransform(249.65,340,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clipi_16 = new lib.ch();
	this.clipi_16.name = "clipi_16";
	this.clipi_16.parent = this;
	this.clipi_16.setTransform(117.35,340,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clipi_15 = new lib.ch();
	this.clipi_15.name = "clipi_15";
	this.clipi_15.parent = this;
	this.clipi_15.setTransform(543.75,388.4,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clipi_14 = new lib.ch();
	this.clipi_14.name = "clipi_14";
	this.clipi_14.parent = this;
	this.clipi_14.setTransform(182.75,260.25,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clipi_13 = new lib.ch();
	this.clipi_13.name = "clipi_13";
	this.clipi_13.parent = this;
	this.clipi_13.setTransform(440.35,326,0.5749,0.5784,0,0,0,0.1,0.2);

	this.clipi_12 = new lib.ch();
	this.clipi_12.name = "clipi_12";
	this.clipi_12.parent = this;
	this.clipi_12.setTransform(357.15,222,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clipi_11 = new lib.ch();
	this.clipi_11.name = "clipi_11";
	this.clipi_11.parent = this;
	this.clipi_11.setTransform(127.85,185.1,0.5749,0.5784,0,0,0,0.1,0.2);

	this.clipi_10 = new lib.ch();
	this.clipi_10.name = "clipi_10";
	this.clipi_10.parent = this;
	this.clipi_10.setTransform(502.85,138.85,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clipi_9 = new lib.ch();
	this.clipi_9.name = "clipi_9";
	this.clipi_9.parent = this;
	this.clipi_9.setTransform(249.65,105.3,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clipi_8 = new lib.ch();
	this.clipi_8.name = "clipi_8";
	this.clipi_8.parent = this;
	this.clipi_8.setTransform(190.75,471.65,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clipi_7 = new lib.ch();
	this.clipi_7.name = "clipi_7";
	this.clipi_7.parent = this;
	this.clipi_7.setTransform(122.6,109.25,0.5749,0.5784,0,0,0,0.1,0.1);

	this.cuadrado = new lib.cuadrado();
	this.cuadrado.name = "cuadrado";
	this.cuadrado.parent = this;
	this.cuadrado.setTransform(305.35,298.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cuadrado},{t:this.clipi_7},{t:this.clipi_8},{t:this.clipi_9},{t:this.clipi_10},{t:this.clipi_11},{t:this.clipi_12},{t:this.clipi_13},{t:this.clipi_14},{t:this.clipi_15},{t:this.clipi_16},{t:this.clipi_17},{t:this.clipi_18}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_clips, null, null);


// stage content:
(lib.desafio4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.clipi_1 = this.famas.clipi_1;
		this.clipi_2 = this.famas.clipi_2;
		this.clipi_3 = this.famas.clipi_3;
		this.clipi_4 = this.famas.clipi_4;
		this.clipi_5 = this.famas.clipi_5;
		this.clipi_6 = this.famas.clipi_6;
		this.cuadrado = this.clips.cuadrado;
		this.clipi_7 = this.clips.clipi_7;
		this.clipi_8 = this.clips.clipi_8;
		this.clipi_9 = this.clips.clipi_9;
		this.clipi_10 = this.clips.clipi_10;
		this.clipi_11 = this.clips.clipi_11;
		this.clipi_12 = this.clips.clipi_12;
		this.clipi_13 = this.clips.clipi_13;
		this.clipi_14 = this.clips.clipi_14;
		this.clipi_15 = this.clips.clipi_15;
		this.clipi_16 = this.clips.clipi_16;
		this.clipi_17 = this.clips.clipi_17;
		this.clipi_18 = this.clips.clipi_18;
		// ====================================================================
		// 1. CONFIGURACIÓN Y VARIABLES GLOBALES
		// ====================================================================
		// grupos 1 a 6
		var LIMITE_DERECHO = 850;
		var LIMITE_IZQUIERDO = 600;
		var LIMITE_INFERIOR = 562;
		var LIMITE_SUPERIOR = 55;
		// grupos 7 a 19
		var LIMITE_DERECHO18 = 564;
		var LIMITE_IZQUIERDO18 = 59;
		var LIMITE_INFERIOR18 = 562;
		var LIMITE_SUPERIOR18 = 55;
		
		// --- INSTANCIAS (Renombradas a clipi_x, del 1 al 18) ---
		var clipi_1 = this.clipi_1;
		var clipi_2 = this.clipi_2;
		var clipi_3 = this.clipi_3;
		var clipi_4 = this.clipi_4;
		var clipi_5 = this.clipi_5;
		var clipi_6 = this.clipi_6;
		var clipi_7 = this.clipi_7;
		var clipi_8 = this.clipi_8;
		var clipi_9 = this.clipi_9;
		var clipi_10 = this.clipi_10;
		var clipi_11 = this.clipi_11;
		var clipi_12 = this.clipi_12;
		var clipi_13 = this.clipi_13;
		var clipi_14 = this.clipi_14;
		var clipi_15 = this.clipi_15;
		var clipi_16 = this.clipi_16; 
		var clipi_17 = this.clipi_17; 
		var clipi_18 = this.clipi_18; 
		
		// --- VELOCIDADES (1 al 18) ---
		var vx1 = 4; var vy1 = 6;
		var vx2 = -3; var vy2 = 4;
		var vx3 = 4; var vy3 = -5;
		var vx4 = -5; var vy4 = -3;
		var vx5 = 7; var vy5 = 4;
		var vx6 = -4; var vy6 = -6;
		var vx7 = 7; var vy7 = -5;
		var vx8 = -9; var vy8 = 6;
		var vx9 = 1; var vy9 = -9;
		var vx10 = -9; var vy10 = -5;
		var vx11 = 9; var vy11 = 3;
		var vx12 = -6; var vy12 = -4;
		var vx13 = -2; var vy13 = -3;
		var vx14 = -6; var vy14 = 5;
		var vx15 = 6; var vy15 = 8;
		var vx16 = -7; var vy16 = -7;
		var vx17 = -8; var vy17 = 8;
		var vx18 = -4; var vy18 = -1;
		
		var ANCHO = 25;
		var ALTO = 25;
		var ANCHOf = 50;
		var ALTOf = 50;
		
		// Arrancar si el primer clip existe
		if (clipi_1) { 
			this.addEventListener("tick", fl_AnimateInBounds.bind(this));
		}
		
		// ====================================================================
		// 2. FUNCIÓN PRINCIPAL
		// ====================================================================
		
		function fl_AnimateInBounds() {
			// Movimiento Grupo 1 (Derecha: 1 al 6)
			var res1 = manejarMovimiento(clipi_1, vx1, vy1, ANCHOf, ALTOf, 1);
			vx1 = res1.vx; vy1 = res1.vy;
			var res2 = manejarMovimiento(clipi_2, vx2, vy2, ANCHOf, ALTOf, 1);
			vx2 = res2.vx; vy2 = res2.vy;
			var res3 = manejarMovimiento(clipi_3, vx3, vy3, ANCHOf, ALTOf, 1);
			vx3 = res3.vx; vy3 = res3.vy;
			var res4 = manejarMovimiento(clipi_4, vx4, vy4, ANCHOf, ALTOf, 1);
			vx4 = res4.vx; vy4 = res4.vy;
			var res5 = manejarMovimiento(clipi_5, vx5, vy5, ANCHOf, ALTOf, 1);
			vx5 = res5.vx; vy5 = res5.vy;
			var res6 = manejarMovimiento(clipi_6, vx6, vy6, ANCHOf, ALTOf, 1);
			vx6 = res6.vx; vy6 = res6.vy;
		
			// Movimiento Grupo 2 (Izquierda: 7 al 18)
			var res7 = manejarMovimiento(clipi_7, vx7, vy7, ANCHO, ALTO, 2);
			vx7 = res7.vx; vy7 = res7.vy;
			var res8 = manejarMovimiento(clipi_8, vx8, vy8, ANCHO, ALTO, 2);
			vx8 = res8.vx; vy8 = res8.vy;
			var res9 = manejarMovimiento(clipi_9, vx9, vy9, ANCHO, ALTO, 2);
			vx9 = res9.vx; vy9 = res9.vy;
			var res10 = manejarMovimiento(clipi_10, vx10, vy10, ANCHO, ALTO, 2);
			vx10 = res10.vx; vy10 = res10.vy;
			var res11 = manejarMovimiento(clipi_11, vx11, vy11, ANCHO, ALTO, 2);
			vx11 = res11.vx; vy11 = res11.vy;
			var res12 = manejarMovimiento(clipi_12, vx12, vy12, ANCHO, ALTO, 2);
			vx12 = res12.vx; vy12 = res12.vy;
			var res13 = manejarMovimiento(clipi_13, vx13, vy13, ANCHO, ALTO, 2);
			vx13 = res13.vx; vy13 = res13.vy;
			var res14 = manejarMovimiento(clipi_14, vx14, vy14, ANCHO, ALTO, 2);
			vx14 = res14.vx; vy14 = res14.vy;
			var res15 = manejarMovimiento(clipi_15, vx15, vy15, ANCHO, ALTO, 2);
			vx15 = res15.vx; vy15 = res15.vy;
			var res16 = manejarMovimiento(clipi_16, vx16, vy16, ANCHO, ALTO, 2);
			vx16 = res16.vx; vy16 = res16.vy;
			var res17 = manejarMovimiento(clipi_17, vx17, vy17, ANCHO, ALTO, 2);
			vx17 = res17.vx; vy17 = res17.vy;
			var res18 = manejarMovimiento(clipi_18, vx18, vy18, ANCHO, ALTO, 2);
			vx18 = res18.vx; vy18 = res18.vy;
		
			// Colisiones Grupo 1
			detectarColision(clipi_1, clipi_2, 1, 2, ANCHOf);
			detectarColision(clipi_1, clipi_3, 1, 3, ANCHOf);
			detectarColision(clipi_1, clipi_4, 1, 4, ANCHOf);
			detectarColision(clipi_1, clipi_5, 1, 5, ANCHOf);
			detectarColision(clipi_1, clipi_6, 1, 6, ANCHOf);
		
			detectarColision(clipi_2, clipi_3, 2, 3, ANCHOf);
			detectarColision(clipi_2, clipi_4, 2, 4, ANCHOf);
			detectarColision(clipi_2, clipi_5, 2, 5, ANCHOf);
			detectarColision(clipi_2, clipi_6, 2, 6, ANCHOf);
		
			detectarColision(clipi_3, clipi_4, 3, 4, ANCHOf);
			detectarColision(clipi_3, clipi_5, 3, 5, ANCHOf);
			detectarColision(clipi_3, clipi_6, 3, 6, ANCHOf);
		
			detectarColision(clipi_4, clipi_5, 4, 5, ANCHOf);
			detectarColision(clipi_4, clipi_6, 4, 6, ANCHOf);
		
			detectarColision(clipi_5, clipi_6, 5, 6, ANCHOf);	
			
			// Colisiones Grupo 2
			detectarColision(clipi_7, clipi_8, 7, 8, ANCHO);
			detectarColision(clipi_7, clipi_9, 7, 9, ANCHO);
			detectarColision(clipi_7, clipi_10, 7, 10, ANCHO);
			detectarColision(clipi_7, clipi_11, 7, 11, ANCHO);
			detectarColision(clipi_7, clipi_12, 7, 12, ANCHO);
			detectarColision(clipi_7, clipi_13, 7, 13, ANCHO);
			detectarColision(clipi_7, clipi_14, 7, 14, ANCHO);
			detectarColision(clipi_7, clipi_15, 7, 15, ANCHO);
			detectarColision(clipi_7, clipi_16, 7, 16, ANCHO);
			detectarColision(clipi_7, clipi_17, 7, 17, ANCHO);
			detectarColision(clipi_7, clipi_18, 7, 18, ANCHO);
		
			detectarColision(clipi_8, clipi_9, 8, 9, ANCHO);
			detectarColision(clipi_8, clipi_10, 8, 10, ANCHO);
			detectarColision(clipi_8, clipi_11, 8, 11, ANCHO);
			detectarColision(clipi_8, clipi_12, 8, 12, ANCHO);
			detectarColision(clipi_8, clipi_13, 8, 13, ANCHO);
			detectarColision(clipi_8, clipi_14, 8, 14, ANCHO);
			detectarColision(clipi_8, clipi_15, 8, 15, ANCHO);
			detectarColision(clipi_8, clipi_16, 8, 16, ANCHO);
			detectarColision(clipi_8, clipi_17, 8, 17, ANCHO);
			detectarColision(clipi_8, clipi_18, 8, 18, ANCHO);
		
			detectarColision(clipi_9, clipi_10, 9, 10, ANCHO);
			detectarColision(clipi_9, clipi_11, 9, 11, ANCHO);
			detectarColision(clipi_9, clipi_12, 9, 12, ANCHO);
			detectarColision(clipi_9, clipi_13, 9, 13, ANCHO);
			detectarColision(clipi_9, clipi_14, 9, 14, ANCHO);
			detectarColision(clipi_9, clipi_15, 9, 15, ANCHO);
			detectarColision(clipi_9, clipi_16, 9, 16, ANCHO);
			detectarColision(clipi_9, clipi_17, 9, 17, ANCHO);
			detectarColision(clipi_9, clipi_18, 9, 18, ANCHO);
		
			detectarColision(clipi_10, clipi_11, 10, 11, ANCHO);
			detectarColision(clipi_10, clipi_12, 10, 12, ANCHO);
			detectarColision(clipi_10, clipi_13, 10, 13, ANCHO);
			detectarColision(clipi_10, clipi_14, 10, 14, ANCHO);
			detectarColision(clipi_10, clipi_15, 10, 15, ANCHO);
			detectarColision(clipi_10, clipi_16, 10, 16, ANCHO);
			detectarColision(clipi_10, clipi_17, 10, 17, ANCHO);
			detectarColision(clipi_10, clipi_18, 10, 18, ANCHO);
		
			detectarColision(clipi_11, clipi_12, 11, 12, ANCHO);
			detectarColision(clipi_11, clipi_13, 11, 13, ANCHO);
			detectarColision(clipi_11, clipi_14, 11, 14, ANCHO);
			detectarColision(clipi_11, clipi_15, 11, 15, ANCHO);
			detectarColision(clipi_11, clipi_16, 11, 16, ANCHO);
			detectarColision(clipi_11, clipi_17, 11, 17, ANCHO);
			detectarColision(clipi_11, clipi_18, 11, 18, ANCHO);
		
			detectarColision(clipi_12, clipi_13, 12, 13, ANCHO);
			detectarColision(clipi_12, clipi_14, 12, 14, ANCHO);
			detectarColision(clipi_12, clipi_15, 12, 15, ANCHO);
			detectarColision(clipi_12, clipi_16, 12, 16, ANCHO);
			detectarColision(clipi_12, clipi_17, 12, 17, ANCHO);
			detectarColision(clipi_12, clipi_18, 12, 18, ANCHO);
		
			detectarColision(clipi_13, clipi_14, 13, 14, ANCHO);
			detectarColision(clipi_13, clipi_15, 13, 15, ANCHO);
			detectarColision(clipi_13, clipi_16, 13, 16, ANCHO);
			detectarColision(clipi_13, clipi_17, 13, 17, ANCHO);
			detectarColision(clipi_13, clipi_18, 13, 18, ANCHO);
		
			detectarColision(clipi_14, clipi_15, 14, 15, ANCHO);
			detectarColision(clipi_14, clipi_16, 14, 16, ANCHO);
			detectarColision(clipi_14, clipi_17, 14, 17, ANCHO);
			detectarColision(clipi_14, clipi_18, 14, 18, ANCHO);
		
			detectarColision(clipi_15, clipi_16, 15, 16, ANCHO);
			detectarColision(clipi_15, clipi_17, 15, 17, ANCHO);
			detectarColision(clipi_15, clipi_18, 15, 18, ANCHO);
		
			detectarColision(clipi_16, clipi_17, 16, 17, ANCHO);
			detectarColision(clipi_16, clipi_18, 16, 18, ANCHO);
		
			detectarColision(clipi_17, clipi_18, 17, 18, ANCHO);
		}
		
		// ====================================================================
		// 3. FUNCIONES AUXILIARES
		// ====================================================================
		
		function manejarMovimiento(clip, vx, vy, ancho, alto, zona) {
			if (!clip) return {vx: vx, vy: vy};
			clip.x += vx;
			clip.y += vy;
			var mAncho = ancho / 2;
			var mAlto = alto / 2;
			var lim = {};
			if (zona === 1) {
				lim.der = LIMITE_DERECHO; lim.izq = LIMITE_IZQUIERDO;
				lim.inf = LIMITE_INFERIOR; lim.sup = LIMITE_SUPERIOR;
			} else {
				lim.der = LIMITE_DERECHO18; lim.izq = LIMITE_IZQUIERDO18;
				lim.inf = LIMITE_INFERIOR18; lim.sup = LIMITE_SUPERIOR18;
			}
			if (clip.x >= (lim.der - mAncho)) { clip.x = lim.der - mAncho; vx *= -1; }
			else if (clip.x <= (lim.izq + mAncho)) { clip.x = lim.izq + mAncho; vx *= -1; }
			if (clip.y >= (lim.inf - mAlto)) { clip.y = lim.inf - mAlto; vy *= -1; }
			else if (clip.y <= (lim.sup + mAlto)) { clip.y = lim.sup + mAlto; vy *= -1; }
			return { vx: vx, vy: vy };
		}
		
		function detectarColision(clipA, clipB, indexA, indexB, ancho) {
			if (!clipA || !clipB) return;
			var dx = clipA.x - clipB.x;
			var dy = clipA.y - clipB.y;
			var dist = Math.sqrt(dx * dx + dy * dy);
			if (dist < ancho) {
				// Invertir Velocidades de A
				switch(indexA) {
					case 1: vx1 *= -1; vy1 *= -1; break; case 2: vx2 *= -1; vy2 *= -1; break;
					case 3: vx3 *= -1; vy3 *= -1; break; case 4: vx4 *= -1; vy4 *= -1; break;
					case 5: vx5 *= -1; vy5 *= -1; break; case 6: vx6 *= -1; vy6 *= -1; break;
					case 7: vx7 *= -1; vy7 *= -1; break; case 8: vx8 *= -1; vy8 *= -1; break;
					case 9: vx9 *= -1; vy9 *= -1; break; case 10: vx10 *= -1; vy10 *= -1; break;
					case 11: vx11 *= -1; vy11 *= -1; break; case 12: vx12 *= -1; vy12 *= -1; break;
					case 13: vx13 *= -1; vy13 *= -1; break; case 14: vx14 *= -1; vy14 *= -1; break;
					case 15: vx15 *= -1; vy15 *= -1; break; case 16: vx16 *= -1; vy16 *= -1; break;
					case 17: vx17 *= -1; vy17 *= -1; break; case 18: vx18 *= -1; vy18 *= -1; break;
				}
				// Invertir Velocidades de B
				switch(indexB) {
					case 1: vx1 *= -1; vy1 *= -1; break; case 2: vx2 *= -1; vy2 *= -1; break;
					case 3: vx3 *= -1; vy3 *= -1; break; case 4: vx4 *= -1; vy4 *= -1; break;
					case 5: vx5 *= -1; vy5 *= -1; break; case 6: vx6 *= -1; vy6 *= -1; break;
					case 7: vx7 *= -1; vy7 *= -1; break; case 8: vx8 *= -1; vy8 *= -1; break;
					case 9: vx9 *= -1; vy9 *= -1; break; case 10: vx10 *= -1; vy10 *= -1; break;
					case 11: vx11 *= -1; vy11 *= -1; break; case 12: vx12 *= -1; vy12 *= -1; break;
					case 13: vx13 *= -1; vy13 *= -1; break; case 14: vx14 *= -1; vy14 *= -1; break;
					case 15: vx15 *= -1; vy15 *= -1; break; case 16: vx16 *= -1; vy16 *= -1; break;
					case 17: vx17 *= -1; vy17 *= -1; break; case 18: vx18 *= -1; vy18 *= -1; break;
				}
				// Separación física
				var overlap = ancho - dist;
				var angle = Math.atan2(dy, dx);
				clipA.x += Math.cos(angle) * overlap * 0.5;
				clipA.y += Math.sin(angle) * overlap * 0.5;
				clipB.x -= Math.cos(angle) * overlap * 0.5;
				clipB.y -= Math.sin(angle) * overlap * 0.5;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// famas_obj_
	this.famas = new lib.Escena_1_famas();
	this.famas.name = "famas";
	this.famas.parent = this;
	this.famas.setTransform(738,334.9,1,1,0,0,0,738,334.9);
	this.famas.depth = 0;
	this.famas.isAttachedToCamera = 0
	this.famas.isAttachedToMask = 0
	this.famas.layerDepth = 0
	this.famas.layerIndex = 0
	this.famas.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.famas).wait(1));

	// clips_obj_
	this.clips = new lib.Escena_1_clips();
	this.clips.name = "clips";
	this.clips.parent = this;
	this.clips.setTransform(313.2,307.4,1,1,0,0,0,313.2,307.4);
	this.clips.depth = 0;
	this.clips.isAttachedToCamera = 0
	this.clips.isAttachedToMask = 0
	this.clips.layerDepth = 0
	this.clips.layerIndex = 1
	this.clips.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.clips).wait(1));

	// Cuadricula_obj_
	this.Cuadricula = new lib.Escena_1_Cuadricula();
	this.Cuadricula.name = "Cuadricula";
	this.Cuadricula.parent = this;
	this.Cuadricula.setTransform(313,307.7,1,1,0,0,0,313,307.7);
	this.Cuadricula.depth = 0;
	this.Cuadricula.isAttachedToCamera = 0
	this.Cuadricula.isAttachedToMask = 0
	this.Cuadricula.layerDepth = 0
	this.Cuadricula.layerIndex = 2
	this.Cuadricula.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Cuadricula).wait(1));

	// signo_de_pregunta_obj_
	this.signo_de_pregunta = new lib.Escena_1_signo_de_pregunta();
	this.signo_de_pregunta.name = "signo_de_pregunta";
	this.signo_de_pregunta.parent = this;
	this.signo_de_pregunta.setTransform(728.6,323.4,1,1,0,0,0,728.6,323.4);
	this.signo_de_pregunta.depth = 0;
	this.signo_de_pregunta.isAttachedToCamera = 0
	this.signo_de_pregunta.isAttachedToMask = 0
	this.signo_de_pregunta.layerDepth = 0
	this.signo_de_pregunta.layerIndex = 3
	this.signo_de_pregunta.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.signo_de_pregunta).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(510,413.1,323.79999999999995,148.5);
// library properties:
lib.properties = {
	id: '9186097CE7D8A84083C5BA05F1C1B9BC',
	width: 900,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/desafio4_atlas_.png?1768484808968", id:"desafio4_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9186097CE7D8A84083C5BA05F1C1B9BC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;