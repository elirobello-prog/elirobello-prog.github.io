(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"CronopiosyFamas_atlas_", frames: [[0,1019,1004,12],[96,1033,53,53],[0,0,1013,1017],[0,1033,94,85]]}
];


// symbols:



(lib.CachedTexturedBitmap_137 = function() {
	this.initialize(ss["CronopiosyFamas_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_138 = function() {
	this.initialize(img.CachedTexturedBitmap_138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2078,1017);


(lib.CachedTexturedBitmap_139 = function() {
	this.initialize(ss["CronopiosyFamas_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_140 = function() {
	this.initialize(ss["CronopiosyFamas_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_141 = function() {
	this.initialize(ss["CronopiosyFamas_atlas_"]);
	this.gotoAndStop(3);
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
	this.instance = new lib.CachedTexturedBitmap_141();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fama_mc_Capa_1, null, null);


(lib.Escena_1_Cuadricula = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cuadricula
	this.instance = new lib.CachedTexturedBitmap_138();
	this.instance.parent = this;
	this.instance.setTransform(61,54.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Cuadricula, null, null);


(lib.cuadrado_Capa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_140();
	this.instance.parent = this;
	this.instance.setTransform(-245.35,-245.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cuadrado_Capa_1, null, null);


(lib.ch_Capa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_139();
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
	this.clip_24 = new lib.fama_mc();
	this.clip_24.name = "clip_24";
	this.clip_24.parent = this;
	this.clip_24.setTransform(998.75,128.15,1,1,44.9994,0,0,23.1,21.2);

	this.clip_23 = new lib.fama_mc();
	this.clip_23.name = "clip_23";
	this.clip_23.parent = this;
	this.clip_23.setTransform(767.75,136.5,1,1,-74.9998,0,0,23,21.2);

	this.clip_22 = new lib.fama_mc();
	this.clip_22.name = "clip_22";
	this.clip_22.parent = this;
	this.clip_22.setTransform(937.05,452.15,1,1,-29.9992,0,0,23,21.2);

	this.clip_21 = new lib.fama_mc();
	this.clip_21.name = "clip_21";
	this.clip_21.parent = this;
	this.clip_21.setTransform(998.7,226.4,1,1,0,0,0,23,21.2);

	this.clip_20 = new lib.fama_mc();
	this.clip_20.name = "clip_20";
	this.clip_20.parent = this;
	this.clip_20.setTransform(1048.55,329.2,1,1,-45,0,0,23,21.2);

	this.clip_19 = new lib.fama_mc();
	this.clip_19.name = "clip_19";
	this.clip_19.parent = this;
	this.clip_19.setTransform(821.65,432.55,1,1,-14.9992,0,0,23.1,21.2);

	this.clip_6 = new lib.fama_mc();
	this.clip_6.name = "clip_6";
	this.clip_6.parent = this;
	this.clip_6.setTransform(765.6,367.6,1,1,-45,0,0,23,21.2);

	this.clip_5 = new lib.fama_mc();
	this.clip_5.name = "clip_5";
	this.clip_5.parent = this;
	this.clip_5.setTransform(682.6,370.25,1,1,-14.9992,0,0,23,21.2);

	this.clip_4 = new lib.fama_mc();
	this.clip_4.name = "clip_4";
	this.clip_4.parent = this;
	this.clip_4.setTransform(770.35,287.05,1,1,0,0,0,23,21.2);

	this.clip_3 = new lib.fama_mc();
	this.clip_3.name = "clip_3";
	this.clip_3.parent = this;
	this.clip_3.setTransform(744.2,204.2,1,1,0,0,0,23,21.2);

	this.clip_2 = new lib.fama_mc();
	this.clip_2.name = "clip_2";
	this.clip_2.parent = this;
	this.clip_2.setTransform(684.5,140.45,1,1,-74.9998,0,0,23,21.2);

	this.clip_1 = new lib.fama_mc();
	this.clip_1.name = "clip_1";
	this.clip_1.parent = this;
	this.clip_1.setTransform(672.45,252.65,1,1,59.9996,0,0,23.1,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.clip_1},{t:this.clip_2},{t:this.clip_3},{t:this.clip_4},{t:this.clip_5},{t:this.clip_6},{t:this.clip_19},{t:this.clip_20},{t:this.clip_21},{t:this.clip_22},{t:this.clip_23},{t:this.clip_24}]}).wait(1));

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
	this.cuadrado = new lib.cuadrado();
	this.cuadrado.name = "cuadrado";
	this.cuadrado.parent = this;
	this.cuadrado.setTransform(844,299.95);

	this.clip_18 = new lib.ch();
	this.clip_18.name = "clip_18";
	this.clip_18.parent = this;
	this.clip_18.setTransform(398.75,536.65,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clip_17 = new lib.ch();
	this.clip_17.name = "clip_17";
	this.clip_17.parent = this;
	this.clip_17.setTransform(249.65,340,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clip_16 = new lib.ch();
	this.clip_16.name = "clip_16";
	this.clip_16.parent = this;
	this.clip_16.setTransform(117.35,340,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clip_15 = new lib.ch();
	this.clip_15.name = "clip_15";
	this.clip_15.parent = this;
	this.clip_15.setTransform(543.75,388.4,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clip_14 = new lib.ch();
	this.clip_14.name = "clip_14";
	this.clip_14.parent = this;
	this.clip_14.setTransform(182.75,260.25,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clip_13 = new lib.ch();
	this.clip_13.name = "clip_13";
	this.clip_13.parent = this;
	this.clip_13.setTransform(440.35,326,0.5749,0.5784,0,0,0,0.1,0.2);

	this.clip_12 = new lib.ch();
	this.clip_12.name = "clip_12";
	this.clip_12.parent = this;
	this.clip_12.setTransform(357.15,222,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clip_11 = new lib.ch();
	this.clip_11.name = "clip_11";
	this.clip_11.parent = this;
	this.clip_11.setTransform(127.85,185.1,0.5749,0.5784,0,0,0,0.1,0.2);

	this.clip_10 = new lib.ch();
	this.clip_10.name = "clip_10";
	this.clip_10.parent = this;
	this.clip_10.setTransform(502.85,138.85,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clip_9 = new lib.ch();
	this.clip_9.name = "clip_9";
	this.clip_9.parent = this;
	this.clip_9.setTransform(249.65,105.3,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clip_8 = new lib.ch();
	this.clip_8.name = "clip_8";
	this.clip_8.parent = this;
	this.clip_8.setTransform(190.75,471.65,0.5749,0.5784,0,0,0,0.1,0.1);

	this.clip_7 = new lib.ch();
	this.clip_7.name = "clip_7";
	this.clip_7.parent = this;
	this.clip_7.setTransform(122.6,109.25,0.5749,0.5784,0,0,0,0.1,0.1);

	this.cuadrado_1 = new lib.cuadrado();
	this.cuadrado_1.name = "cuadrado_1";
	this.cuadrado_1.parent = this;
	this.cuadrado_1.setTransform(305.35,298.45);

	this.instance = new lib.CachedTexturedBitmap_137();
	this.instance.parent = this;
	this.instance.setTransform(598.6,54.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.cuadrado_1},{t:this.clip_7},{t:this.clip_8},{t:this.clip_9},{t:this.clip_10},{t:this.clip_11},{t:this.clip_12},{t:this.clip_13},{t:this.clip_14},{t:this.clip_15},{t:this.clip_16},{t:this.clip_17},{t:this.clip_18},{t:this.cuadrado}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_clips, null, null);


// stage content:
(lib.CronopiosyFamas = function(mode,startPosition,loop) {
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
		this.clip_1 = this.famas.clip_1;
		this.clip_2 = this.famas.clip_2;
		this.clip_3 = this.famas.clip_3;
		this.clip_4 = this.famas.clip_4;
		this.clip_5 = this.famas.clip_5;
		this.clip_6 = this.famas.clip_6;
		this.clip_19 = this.famas.clip_19;
		this.clip_20 = this.famas.clip_20;
		this.clip_21 = this.famas.clip_21;
		this.clip_22 = this.famas.clip_22;
		this.clip_23 = this.famas.clip_23;
		this.clip_24 = this.famas.clip_24;
		this.cuadrado = this.clips.cuadrado;
		this.clip_7 = this.clips.clip_7;
		this.clip_8 = this.clips.clip_8;
		this.clip_9 = this.clips.clip_9;
		this.clip_10 = this.clips.clip_10;
		this.clip_11 = this.clips.clip_11;
		this.clip_12 = this.clips.clip_12;
		this.clip_13 = this.clips.clip_13;
		this.clip_14 = this.clips.clip_14;
		this.clip_15 = this.clips.clip_15;
		this.clip_16 = this.clips.clip_16;
		this.clip_17 = this.clips.clip_17;
		this.clip_18 = this.clips.clip_18;
		this.cuadrado = this.clips.cuadrado;
		// ====================================================================
		// 1. CONFIGURACIÓN Y VARIABLES GLOBALES
		// ====================================================================
		
		var LIMITE_DERECHO = 1100;
		var LIMITE_IZQUIERDO = 600;
		var LIMITE_INFERIOR = 562;
		var LIMITE_SUPERIOR = 55;
		
		var LIMITE_DERECHO18 = 564;
		var LIMITE_IZQUIERDO18 = 59;
		var LIMITE_INFERIOR18 = 562;
		var LIMITE_SUPERIOR18 = 55;
		
		// --- INSTANCIAS (Renombradas de mc a clip) ---
		var clip1 = this.clip_1;
		var clip2 = this.clip_2;
		var clip3 = this.clip_3;
		var clip4 = this.clip_4;
		var clip5 = this.clip_5;
		var clip6 = this.clip_6;
		var clip7 = this.clip_7;
		var clip8 = this.clip_8;
		var clip9 = this.clip_9;
		var clip10 = this.clip_10;
		var clip11 = this.clip_11;
		var clip12 = this.clip_12;
		var clip13 = this.clip_13;
		var clip14 = this.clip_14;
		var clip15 = this.clip_15;
		var clip16 = this.clip_16; 
		var clip17 = this.clip_17; 
		var clip18 = this.clip_18; 
		var clip19 = this.clip_19;
		var clip20 = this.clip_20;
		var clip21 = this.clip_21;
		var clip22 = this.clip_22;
		var clip23 = this.clip_23;
		var clip24 = this.clip_24;
		
		// --- VELOCIDADES ---
		var vx1 = 6; var vy1 = 5;
		var vx2 = -6; var vy2 = 3;
		var vx3 = 5; var vy3 = -2;
		var vx4 = -7; var vy4 = -3;
		var vx5 = 4; var vy5 = 4;
		var vx6 = -5; var vy6 = -3;
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
		var vx18 = -4; var vy18 = -3;
		var vx19 = -6; var vy19 = -3;
		var vx20 = -4; var vy20 = 5;
		var vx21 = 3; var vy21 = 5;
		var vx22 = -3; var vy22 = -4;
		var vx23 = -5; var vy23 = 5;
		var vx24 = -4; var vy24 = -4;
		
		var ANCHO = 25;
		var ALTO = 25;
		var ANCHOf = 50;
		var ALTOf = 50;
		
		// Arrancar si al menos el primer clip existe
		if (clip1) { 
			this.addEventListener("tick", fl_AnimateInBounds.bind(this));
		}
		
		// ====================================================================
		// 2. FUNCIÓN PRINCIPAL
		// ====================================================================
		
		function fl_AnimateInBounds() {
			// Movimiento Grupo 1 (Derecha)
			var res1 = manejarMovimiento(clip1, vx1, vy1, ANCHOf, ALTOf, 1);
			vx1 = res1.vx; vy1 = res1.vy;
			var res2 = manejarMovimiento(clip2, vx2, vy2, ANCHOf, ALTOf, 1);
			vx2 = res2.vx; vy2 = res2.vy;
			var res3 = manejarMovimiento(clip3, vx3, vy3, ANCHOf, ALTOf, 1);
			vx3 = res3.vx; vy3 = res3.vy;
			var res4 = manejarMovimiento(clip4, vx4, vy4, ANCHOf, ALTOf, 1);
			vx4 = res4.vx; vy4 = res4.vy;
			var res5 = manejarMovimiento(clip5, vx5, vy5, ANCHOf, ALTOf, 1);
			vx5 = res5.vx; vy5 = res5.vy;
			var res6 = manejarMovimiento(clip6, vx6, vy6, ANCHOf, ALTOf, 1);
			vx6 = res6.vx; vy6 = res6.vy;
			var res19 = manejarMovimiento(clip19, vx19, vy19, ANCHOf, ALTOf, 1);
			vx19 = res19.vx; vy19 = res19.vy;
			var res20 = manejarMovimiento(clip20, vx20, vy20, ANCHOf, ALTOf, 1);
			vx20 = res20.vx; vy20 = res20.vy;
			var res21 = manejarMovimiento(clip21, vx21, vy21, ANCHOf, ALTOf, 1);
			vx21 = res21.vx; vy21 = res21.vy;
			var res22 = manejarMovimiento(clip22, vx22, vy22, ANCHOf, ALTOf, 1);
			vx22 = res22.vx; vy22 = res22.vy;
			var res23 = manejarMovimiento(clip23, vx23, vy23, ANCHOf, ALTOf, 1);
			vx23 = res23.vx; vy23 = res23.vy;
			var res24 = manejarMovimiento(clip24, vx24, vy24, ANCHOf, ALTOf, 1);
			vx24 = res24.vx; vy24 = res24.vy;
		
			// Movimiento Grupo 2 (Izquierda)
			var res7 = manejarMovimiento(clip7, vx7, vy7, ANCHO, ALTO, 2);
			vx7 = res7.vx; vy7 = res7.vy;
			var res8 = manejarMovimiento(clip8, vx8, vy8, ANCHO, ALTO, 2);
			vx8 = res8.vx; vy8 = res8.vy;
			var res9 = manejarMovimiento(clip9, vx9, vy9, ANCHO, ALTO, 2);
			vx9 = res9.vx; vy9 = res9.vy;
			var res10 = manejarMovimiento(clip10, vx10, vy10, ANCHO, ALTO, 2);
			vx10 = res10.vx; vy10 = res10.vy;
			var res11 = manejarMovimiento(clip11, vx11, vy11, ANCHO, ALTO, 2);
			vx11 = res11.vx; vy11 = res11.vy;
			var res12 = manejarMovimiento(clip12, vx12, vy12, ANCHO, ALTO, 2);
			vx12 = res12.vx; vy12 = res12.vy;
			var res13 = manejarMovimiento(clip13, vx13, vy13, ANCHO, ALTO, 2);
			vx13 = res13.vx; vy13 = res13.vy;
			var res14 = manejarMovimiento(clip14, vx14, vy14, ANCHO, ALTO, 2);
			vx14 = res14.vx; vy14 = res14.vy;
			var res15 = manejarMovimiento(clip15, vx15, vy15, ANCHO, ALTO, 2);
			vx15 = res15.vx; vy15 = res15.vy;
			var res16 = manejarMovimiento(clip16, vx16, vy16, ANCHO, ALTO, 2);
			vx16 = res16.vx; vy16 = res16.vy;
			var res17 = manejarMovimiento(clip17, vx17, vy17, ANCHO, ALTO, 2);
			vx17 = res17.vx; vy17 = res17.vy;
			var res18 = manejarMovimiento(clip18, vx18, vy18, ANCHO, ALTO, 2);
			vx18 = res18.vx; vy18 = res18.vy;
		
			// Colisiones Grupo 1
			detectarColision(clip1, clip2, 1, 2, ANCHOf);
			detectarColision(clip1, clip3, 1, 3, ANCHOf);
			detectarColision(clip1, clip4, 1, 4, ANCHOf);
			detectarColision(clip1, clip5, 1, 5, ANCHOf);
			detectarColision(clip1, clip6, 1, 6, ANCHOf);
			detectarColision(clip1, clip19, 1, 19, ANCHOf);
			detectarColision(clip1, clip20, 1, 20, ANCHOf);
			detectarColision(clip1, clip21, 1, 21, ANCHOf);
			detectarColision(clip1, clip22, 1, 22, ANCHOf);
			detectarColision(clip1, clip23, 1, 23, ANCHOf);
			detectarColision(clip1, clip24, 1, 24, ANCHOf);
		
			detectarColision(clip2, clip3, 2, 3, ANCHOf);
			detectarColision(clip2, clip4, 2, 4, ANCHOf);
			detectarColision(clip2, clip5, 2, 5, ANCHOf);
			detectarColision(clip2, clip6, 2, 6, ANCHOf);
			detectarColision(clip2, clip19, 2, 19, ANCHOf);
			detectarColision(clip2, clip20, 2, 20, ANCHOf);
			detectarColision(clip2, clip21, 2, 21, ANCHOf);
			detectarColision(clip2, clip22, 2, 22, ANCHOf);
			detectarColision(clip2, clip23, 2, 23, ANCHOf);
			detectarColision(clip2, clip24, 2, 24, ANCHOf);
		
			detectarColision(clip3, clip4, 3, 4, ANCHOf);
			detectarColision(clip3, clip5, 3, 5, ANCHOf);
			detectarColision(clip3, clip6, 3, 6, ANCHOf);
			detectarColision(clip3, clip19, 3, 19, ANCHOf);
			detectarColision(clip3, clip20, 3, 20, ANCHOf);
			detectarColision(clip3, clip21, 3, 21, ANCHOf);
			detectarColision(clip3, clip22, 3, 22, ANCHOf);
			detectarColision(clip3, clip23, 3, 23, ANCHOf);
			detectarColision(clip3, clip24, 3, 24, ANCHOf);
		
			detectarColision(clip4, clip5, 4, 5, ANCHOf);
			detectarColision(clip4, clip6, 4, 6, ANCHOf);
			detectarColision(clip4, clip19, 4, 19, ANCHOf);
			detectarColision(clip4, clip20, 4, 20, ANCHOf);
			detectarColision(clip4, clip21, 4, 21, ANCHOf);
			detectarColision(clip4, clip22, 4, 22, ANCHOf);
			detectarColision(clip4, clip23, 4, 23, ANCHOf);
			detectarColision(clip4, clip24, 4, 24, ANCHOf);
		
			detectarColision(clip5, clip6, 5, 6, ANCHOf);	
			detectarColision(clip5, clip19, 5, 19, ANCHOf);
			detectarColision(clip5, clip20, 5, 20, ANCHOf);
			detectarColision(clip5, clip21, 5, 21, ANCHOf);
			detectarColision(clip5, clip22, 5, 22, ANCHOf);
			detectarColision(clip5, clip23, 5, 23, ANCHOf);
			detectarColision(clip5, clip24, 5, 24, ANCHOf);
			
			detectarColision(clip6, clip19, 6, 19, ANCHOf);
			detectarColision(clip6, clip20, 6, 20, ANCHOf);
			detectarColision(clip6, clip21, 6, 21, ANCHOf);
			detectarColision(clip6, clip22, 6, 22, ANCHOf);
			detectarColision(clip6, clip23, 6, 23, ANCHOf);
			detectarColision(clip6, clip24, 6, 24, ANCHOf);
			
			detectarColision(clip19, clip20, 19, 20, ANCHOf);
			detectarColision(clip19, clip21, 19, 21, ANCHOf);
			detectarColision(clip19, clip22, 19, 22, ANCHOf);
			detectarColision(clip19, clip23, 19, 23, ANCHOf);
			detectarColision(clip19, clip24, 19, 24, ANCHOf);
			
			detectarColision(clip20, clip21, 20, 21, ANCHOf);
			detectarColision(clip20, clip22, 20, 22, ANCHOf);
			detectarColision(clip20, clip23, 20, 23, ANCHOf);
			detectarColision(clip20, clip24, 20, 24, ANCHOf);
			
			detectarColision(clip21, clip22, 21, 22, ANCHOf);
			detectarColision(clip21, clip23, 21, 23, ANCHOf);
			detectarColision(clip21, clip24, 21, 24, ANCHOf);
			
			detectarColision(clip22, clip23, 22, 23, ANCHOf);
			detectarColision(clip22, clip24, 22, 24, ANCHOf);
			
			detectarColision(clip23, clip24, 23, 24, ANCHOf);
			
			// Colisiones Grupo 2
			detectarColision(clip7, clip8, 7, 8, ANCHO);
			detectarColision(clip7, clip9, 7, 9, ANCHO);
			detectarColision(clip7, clip10, 7, 10, ANCHO);
			detectarColision(clip7, clip11, 7, 11, ANCHO);
			detectarColision(clip7, clip12, 7, 12, ANCHO);
			detectarColision(clip7, clip13, 7, 13, ANCHO);
			detectarColision(clip7, clip14, 7, 14, ANCHO);
			detectarColision(clip7, clip15, 7, 15, ANCHO);
			detectarColision(clip7, clip16, 7, 16, ANCHO);
			detectarColision(clip7, clip17, 7, 17, ANCHO);
			detectarColision(clip7, clip18, 7, 18, ANCHO);
		
			detectarColision(clip8, clip9, 8, 9, ANCHO);
			detectarColision(clip8, clip10, 8, 10, ANCHO);
			detectarColision(clip8, clip11, 8, 11, ANCHO);
			detectarColision(clip8, clip12, 8, 12, ANCHO);
			detectarColision(clip8, clip13, 8, 13, ANCHO);
			detectarColision(clip8, clip14, 8, 14, ANCHO);
			detectarColision(clip8, clip15, 8, 15, ANCHO);
			detectarColision(clip8, clip16, 8, 16, ANCHO);
			detectarColision(clip8, clip17, 8, 17, ANCHO);
			detectarColision(clip8, clip18, 8, 18, ANCHO);
		
			detectarColision(clip9, clip10, 9, 10, ANCHO);
			detectarColision(clip9, clip11, 9, 11, ANCHO);
			detectarColision(clip9, clip12, 9, 12, ANCHO);
			detectarColision(clip9, clip13, 9, 13, ANCHO);
			detectarColision(clip9, clip14, 9, 14, ANCHO);
			detectarColision(clip9, clip15, 9, 15, ANCHO);
			detectarColision(clip9, clip16, 9, 16, ANCHO);
			detectarColision(clip9, clip17, 9, 17, ANCHO);
			detectarColision(clip9, clip18, 9, 18, ANCHO);
		
			detectarColision(clip10, clip11, 10, 11, ANCHO);
			detectarColision(clip10, clip12, 10, 12, ANCHO);
			detectarColision(clip10, clip13, 10, 13, ANCHO);
			detectarColision(clip10, clip14, 10, 14, ANCHO);
			detectarColision(clip10, clip15, 10, 15, ANCHO);
			detectarColision(clip10, clip16, 10, 16, ANCHO);
			detectarColision(clip10, clip17, 10, 17, ANCHO);
			detectarColision(clip10, clip18, 10, 18, ANCHO);
		
			detectarColision(clip11, clip12, 11, 12, ANCHO);
			detectarColision(clip11, clip13, 11, 13, ANCHO);
			detectarColision(clip11, clip14, 11, 14, ANCHO);
			detectarColision(clip11, clip15, 11, 15, ANCHO);
			detectarColision(clip11, clip16, 11, 16, ANCHO);
			detectarColision(clip11, clip17, 11, 17, ANCHO);
			detectarColision(clip11, clip18, 11, 18, ANCHO);
		
			detectarColision(clip12, clip13, 12, 13, ANCHO);
			detectarColision(clip12, clip14, 12, 14, ANCHO);
			detectarColision(clip12, clip15, 12, 15, ANCHO);
			detectarColision(clip12, clip16, 12, 16, ANCHO);
			detectarColision(clip12, clip17, 12, 17, ANCHO);
			detectarColision(clip12, clip18, 12, 18, ANCHO);
		
			detectarColision(clip13, clip14, 13, 14, ANCHO);
			detectarColision(clip13, clip15, 13, 15, ANCHO);
			detectarColision(clip13, clip16, 13, 16, ANCHO);
			detectarColision(clip13, clip17, 13, 17, ANCHO);
			detectarColision(clip13, clip18, 13, 18, ANCHO);
		
			detectarColision(clip14, clip15, 14, 15, ANCHO);
			detectarColision(clip14, clip16, 14, 16, ANCHO);
			detectarColision(clip14, clip17, 14, 17, ANCHO);
			detectarColision(clip14, clip18, 14, 18, ANCHO);
		
			detectarColision(clip15, clip16, 15, 16, ANCHO);
			detectarColision(clip15, clip17, 15, 17, ANCHO);
			detectarColision(clip15, clip18, 15, 18, ANCHO);
		
			detectarColision(clip16, clip17, 16, 17, ANCHO);
			detectarColision(clip16, clip18, 16, 18, ANCHO);
		
			detectarColision(clip17, clip18, 17, 18, ANCHO);
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
					case 19: vx19 *= -1; vy19 *= -1; break; case 20: vx20 *= -1; vy20 *= -1; break;
					case 21: vx21 *= -1; vy21 *= -1; break; case 22: vx22 *= -1; vy22 *= -1; break;
					case 23: vx23 *= -1; vy23 *= -1; break; case 24: vx24 *= -1; vy24 *= -1; break;
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
					case 19: vx19 *= -1; vy19 *= -1; break; case 20: vx20 *= -1; vy20 *= -1; break;
					case 21: vx21 *= -1; vy21 *= -1; break; case 22: vx22 *= -1; vy22 *= -1; break;
					case 23: vx23 *= -1; vy23 *= -1; break; case 24: vx24 *= -1; vy24 *= -1; break;
				}
				// Separación física para evitar que se peguen
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
	this.famas.setTransform(861.2,289.4,1,1,0,0,0,861.2,289.4);
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
	this.clips.setTransform(582.6,308.1,1,1,0,0,0,582.6,308.1);
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
	this.Cuadricula.setTransform(580.5,308.9,1,1,0,0,0,580.5,308.9);
	this.Cuadricula.depth = 0;
	this.Cuadricula.isAttachedToCamera = 0
	this.Cuadricula.isAttachedToMask = 0
	this.Cuadricula.layerDepth = 0
	this.Cuadricula.layerIndex = 2
	this.Cuadricula.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Cuadricula).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(635,413.1,470.20000000000005,150.10000000000002);
// library properties:
lib.properties = {
	id: '9186097CE7D8A84083C5BA05F1C1B9BC',
	width: 1150,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_138.png?1768481731821", id:"CachedTexturedBitmap_138"},
		{src:"images/CronopiosyFamas_atlas_.png?1768481731805", id:"CronopiosyFamas_atlas_"}
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