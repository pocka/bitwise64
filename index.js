var 
b64=Math.pow(2,32),
padding='';
for(var i=0;i<64;i++){
	padding+='0';
}

function separate(a){
	var str=(padding+Number(a).toString(2)).slice(-64);
	return {
		hi:parseInt(str.slice(0,32),2),
		lo:parseInt(str.slice(-32),2)
	};
}

var bitwise64={
	and:function(a,b){
		var 
		left=separate(a),
		right=separate(b);
		return parseInt(
				(padding+(((left.hi&right.hi)>>>0).toString(2))).slice(-32)+
				(padding+(((left.lo&right.lo)>>>0).toString(2))).slice(-32),2);
	},
	or:function(a,b){
		var 
		left=separate(a),
		right=separate(b);
		return parseInt(
				(padding+(((left.hi|right.hi)>>>0).toString(2))).slice(-32)+
				(padding+(((left.lo|right.lo)>>>0).toString(2))).slice(-32),2);
	},
	not:function(a){
		var 
		left=separate(a);
		return parseInt(
				(padding+(((~left.hi)>>>0).toString(2))).slice(-32)+
				(padding+(((~left.lo)>>>0).toString(2))).slice(-32),2);
	},
	xor:function(a,b){
		var 
		left=separate(a),
		right=separate(b);
		return parseInt(
				(padding+(((left.hi^right.hi)>>>0).toString(2))).slice(-32)+
				(padding+(((left.lo^right.lo)>>>0).toString(2))).slice(-32),2);
	}
};

module.exports=bitwise64;
