(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"6Cronopios_atlas_", frames: [[0,521,1006,507],[0,1030,40,41],[0,0,1013,519]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["6Cronopios_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["6Cronopios_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["6Cronopios_atlas_"]);
	this.gotoAndStop(2);
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


(lib.Escena_1_Cuadricula = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cuadricula
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(61.5,55.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Cuadricula, null, null);


(lib.cuadrado_Capa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(-245.35,-245.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cuadrado_Capa_1, null, null);


(lib.ch_Capa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(-22.25,-25.55,1.1364,1.1364);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ch_Capa_1, null, null);


(lib.cuadrado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1_obj_
	this.Capa_1 = new lib.cuadrado_Capa_1();
	this.Capa_1.name = "Capa_1";
	this.Capa_1.parent = this;
	this.Capa_1.setTransform(7.9,-115.6,1,1,0,0,0,7.9,-115.6);
	this.Capa_1.depth = 0;
	this.Capa_1.isAttachedToCamera = 0
	this.Capa_1.isAttachedToMask = 0
	this.Capa_1.layerDepth = 0
	this.Capa_1.layerIndex = 0
	this.Capa_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Capa_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cuadrado, new cjs.Rectangle(-245.3,-245.3,506.5,259.5), null);


(lib.ch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1_obj_
	this.Capa_1 = new lib.ch_Capa_1();
	this.Capa_1.name = "Capa_1";
	this.Capa_1.parent = this;
	this.Capa_1.setTransform(0.5,-2.2,1,1,0,0,0,0.5,-2.2);
	this.Capa_1.depth = 0;
	this.Capa_1.isAttachedToCamera = 0
	this.Capa_1.isAttachedToMask = 0
	this.Capa_1.layerDepth = 0
	this.Capa_1.layerIndex = 0
	this.Capa_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Capa_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ch, new cjs.Rectangle(-22.2,-25.5,45.4,46.6), null);


(lib.Escena_1_clips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// clips
	this.movie_12 = new lib.ch();
	this.movie_12.name = "movie_12";
	this.movie_12.parent = this;
	this.movie_12.setTransform(336.95,203.15,0.4374,0.44,0,0,0,0.2,0.2);

	this.movie_11 = new lib.ch();
	this.movie_11.name = "movie_11";
	this.movie_11.parent = this;
	this.movie_11.setTransform(232.4,220.75,0.4374,0.44,0,0,0,0.2,0.2);

	this.movie_10 = new lib.ch();
	this.movie_10.name = "movie_10";
	this.movie_10.parent = this;
	this.movie_10.setTransform(440.4,142,0.4374,0.44,0,0,0,0.1,0.1);

	this.movie_9 = new lib.ch();
	this.movie_9.name = "movie_9";
	this.movie_9.parent = this;
	this.movie_9.setTransform(149.25,159.65,0.4374,0.44,0,0,0,0.2,0.2);

	this.movie_8 = new lib.ch();
	this.movie_8.name = "movie_8";
	this.movie_8.parent = this;
	this.movie_8.setTransform(300.9,101.15,0.4374,0.44,0,0,0,0.1,0.1);

	this.movie_7 = new lib.ch();
	this.movie_7.name = "movie_7";
	this.movie_7.parent = this;
	this.movie_7.setTransform(140.15,83.6,0.4374,0.44,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movie_7},{t:this.movie_8},{t:this.movie_9},{t:this.movie_10},{t:this.movie_11},{t:this.movie_12}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_clips, null, null);


(lib.Escena_1_bordes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bordes
	this.cuadrado = new lib.cuadrado();
	this.cuadrado.name = "cuadrado";
	this.cuadrado.parent = this;
	this.cuadrado.setTransform(305.35,298.45);

	this.timeline.addTween(cjs.Tween.get(this.cuadrado).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_bordes, null, null);


// stage content:
(lib._6Cronopios = function(mode,startPosition,loop) {
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
		this.cuadrado = this.bordes.cuadrado;
		this.movie_7 = this.clips.movie_7;
		this.movie_8 = this.clips.movie_8;
		this.movie_9 = this.clips.movie_9;
		this.movie_10 = this.clips.movie_10;
		this.movie_11 = this.clips.movie_11;
		this.movie_12 = this.clips.movie_12;
		// ====================================================================
		// 1. CONFIGURACIÓN Y VARIABLES GLOBALES
		// ====================================================================
		
		// --- LÍMITES ZONA 2 (Izquierda: Clips 7-18) ---
		var LIMITE_DERECHO18 = 562;
		var LIMITE_IZQUIERDO18 = 59;
		var LIMITE_INFERIOR18 = 305;
		var LIMITE_SUPERIOR18 = 55;
		
		// --- INSTANCIAS DE OBJETOS (Actualizadas a movie_x) ---
		var mc7 = this.movie_7;
		var mc8 = this.movie_8;
		var mc9 = this.movie_9;
		var mc10 = this.movie_10;
		var mc11 = this.movie_11;
		var mc12 = this.movie_12;
		
		// --- VELOCIDADES GLOBALES ---
		var vx7 = 7;  var vy7 = -5;
		var vx8 = -9; var vy8 = 6;
		var vx9 = 1;  var vy9 = -9;
		var vx10 = -9; var vy10 = -5;
		var vx11 = 9;  var vy11 = 3;
		var vx12 = -6; var vy12 = -4;
		
		// --- DIMENSIONES FIJAS ---
		var ANCHO = 25;
		var ALTO = 25;
		
		// --- INICIO DE LA ANIMACIÓN ---
		if (mc7 && mc12) { 
			this.addEventListener("tick", fl_AnimateInBounds.bind(this));
		} else {
			console.error("Error: Faltan instancias de movie_x en el escenario.");
		}
		
		// ====================================================================
		// 2. FUNCIÓN PRINCIPAL DEL BUCLE
		// ====================================================================
		
		function fl_AnimateInBounds() {
		
			// --- MOVIMIENTO GRUPO 2 ---
			var res7 = manejarMovimiento(mc7, vx7, vy7, ANCHO, ALTO, 2);
			vx7 = res7.vx; vy7 = res7.vy;
			var res8 = manejarMovimiento(mc8, vx8, vy8, ANCHO, ALTO, 2);
			vx8 = res8.vx; vy8 = res8.vy;
			var res9 = manejarMovimiento(mc9, vx9, vy9, ANCHO, ALTO, 2);
			vx9 = res9.vx; vy9 = res9.vy;
			var res10 = manejarMovimiento(mc10, vx10, vy10, ANCHO, ALTO, 2);
			vx10 = res10.vx; vy10 = res10.vy;
			var res11 = manejarMovimiento(mc11, vx11, vy11, ANCHO, ALTO, 2);
			vx11 = res11.vx; vy11 = res11.vy;
			var res12 = manejarMovimiento(mc12, vx12, vy12, ANCHO, ALTO, 2);
			vx12 = res12.vx; vy12 = res12.vy;
		
			// --- COLISIONES GRUPO 2 ---
			detectarColision(mc7, mc8, 7, 8, ANCHO);
			detectarColision(mc7, mc9, 7, 9, ANCHO);
			detectarColision(mc7, mc10, 7, 10, ANCHO);
			detectarColision(mc7, mc11, 7, 11, ANCHO);
			detectarColision(mc7, mc12, 7, 12, ANCHO);
		
			detectarColision(mc8, mc9, 8, 9, ANCHO);
			detectarColision(mc8, mc10, 8, 10, ANCHO);
			detectarColision(mc8, mc11, 8, 11, ANCHO);
			detectarColision(mc8, mc12, 8, 12, ANCHO);
		
			detectarColision(mc9, mc10, 9, 10, ANCHO);
			detectarColision(mc9, mc11, 9, 11, ANCHO);
			detectarColision(mc9, mc12, 9, 12, ANCHO);
		
			detectarColision(mc10, mc11, 10, 11, ANCHO);
			detectarColision(mc10, mc12, 10, 12, ANCHO);
		
			detectarColision(mc11, mc12, 11, 12, ANCHO);
		}
		
		// ====================================================================
		// 3. FUNCIONES AUXILIARES
		// ====================================================================
		
		function manejarMovimiento(clip, vx, vy, ancho, alto, zona) {
			if(!clip) return {vx: vx, vy: vy};
		
			clip.x += vx;
			clip.y += vy;
		
			var mitadAncho = ancho / 2;
			var mitadAlto = alto / 2;
		
			var limiteXMaximo = LIMITE_DERECHO18 - mitadAncho;
			var limiteXMinimo = LIMITE_IZQUIERDO18 + mitadAncho;
			var limiteYMaximo = LIMITE_INFERIOR18 - mitadAlto;
			var limiteYMinimo = LIMITE_SUPERIOR18 + mitadAlto;
		
			if (clip.x >= limiteXMaximo) { clip.x = limiteXMaximo; vx *= -1; }
			else if (clip.x <= limiteXMinimo) { clip.x = limiteXMinimo; vx *= -1; }
		
			if (clip.y >= limiteYMaximo) { clip.y = limiteYMaximo; vy *= -1; }
			else if (clip.y <= limiteYMinimo) { clip.y = limiteYMinimo; vy *= -1; }
		
			return { vx: vx, vy: vy };
		}
		
		function detectarColision(clipA, clipB, indexA, indexB, ancho) {
			if (!clipA || !clipB) return;
		
			var dx = clipA.x - clipB.x;
			var dy = clipA.y - clipB.y;
			var distancia = Math.sqrt(dx * dx + dy * dy);
			var sumaRadios = ancho; // Si ANCHO es el diámetro, el radio es ANCHO/2
		
			if (distancia < sumaRadios) {
				// 1. INVERTIR DIRECCIONES
				invertirVelocidad(indexA);
				invertirVelocidad(indexB);
		
				// 2. SEPARACIÓN FÍSICA
				var overlap = sumaRadios - distancia;
				var angle = Math.atan2(dy, dx);
				clipA.x += Math.cos(angle) * overlap * 0.5;
				clipA.y += Math.sin(angle) * overlap * 0.5;
				clipB.x -= Math.cos(angle) * overlap * 0.5;
				clipB.y -= Math.sin(angle) * overlap * 0.5;
			}
		}
		
		function invertirVelocidad(index) {
			switch (index) {
				case 7:  vx7 *= -1; vy7 *= -1; break;
				case 8:  vx8 *= -1; vy8 *= -1; break;
				case 9:  vx9 *= -1; vy9 *= -1; break;
				case 10: vx10 *= -1; vy10 *= -1; break;
				case 11: vx11 *= -1; vy11 *= -1; break;
				case 12: vx12 *= -1; vy12 *= -1; break;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bordes_obj_
	this.bordes = new lib.Escena_1_bordes();
	this.bordes.name = "bordes";
	this.bordes.parent = this;
	this.bordes.setTransform(313.2,182.8,1,1,0,0,0,313.2,182.8);
	this.bordes.depth = 0;
	this.bordes.isAttachedToCamera = 0
	this.bordes.isAttachedToMask = 0
	this.bordes.layerDepth = 0
	this.bordes.layerIndex = 0
	this.bordes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bordes).wait(1));

	// clips_obj_
	this.clips = new lib.Escena_1_clips();
	this.clips.name = "clips";
	this.clips.parent = this;
	this.clips.setTransform(290.4,151.1,1,1,0,0,0,290.4,151.1);
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
	this.Cuadricula.setTransform(313,181.9,1,1,0,0,0,313,181.9);
	this.Cuadricula.depth = 0;
	this.Cuadricula.isAttachedToCamera = 0
	this.Cuadricula.isAttachedToMask = 0
	this.Cuadricula.layerDepth = 0
	this.Cuadricula.layerIndex = 2
	this.Cuadricula.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Cuadricula).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,243.1,191.5,69.50000000000003);
// library properties:
lib.properties = {
	id: '9186097CE7D8A84083C5BA05F1C1B9BC',
	width: 630,
	height: 380,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/6Cronopios_atlas_.png?1768920934035", id:"6Cronopios_atlas_"}
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