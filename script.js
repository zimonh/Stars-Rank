/* by: ZIMONH src: https://github.com/zimonh/Stars-Rank
License: https://creativecommons.org/licenses/by-nc-sa/4.0/ */

const MakeStarSlider = inp => {
	let score = inp.maxstars / 2;
	if(inp.score !== undefined) score = inp.score;

	let	ff = '';
	if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) 	ff = '+ 10% - 10px';

	document.querySelector(`#${inp.id}`).innerHTML = `
<div id="${inp.id}sub" >
	<div class="rank" ></div>
	<input
		val="${score}"
		type="range"
		min="0" max="${inp.maxstars}" step=".1"
		class="star-rank"
		oninput="this.parentNode.querySelector('.rank').innerHTML =
		makeStars({score:Number(this.value),maxstars:${inp.maxstars},id:'${inp.id}'});"
		onchange="scoreStars({score:Number(this.value),maxstars:${inp.maxstars},id:'${inp.id}'});">
	</div>
	<style>
		#${inp.id}sub > .rank > star > halfstar > img,
		#${inp.id}sub > .rank > star > img,
		#${inp.id}sub > .rank > star,
		#${inp.id}sub{ width: ${inp.height}px;}

		#${inp.id}sub > .rank ,
		#${inp.id}sub star,
		#${inp.id}sub{height: ${inp.height}px;}

		#${inp.id}sub > input[type=range].star-rank {
			width: ${inp.height*inp.maxstars}px;
			margin: calc(2% ${ff} - 2.5%) 0 0 0;
			top: -${inp.height}px;}

		#${inp.id}sub > input[type=range].star-rank::-webkit-slider-runnable-track {height: ${inp.height}px;}
		#${inp.id}sub > input[type=range].star-rank::-moz-range-track {height: ${inp.height}px;}
		#${inp.id}sub > input[type=range].star-rank::-ms-track {height: ${inp.height}px;}
		@supports (-ms-ime-align: auto) {
		#${inp.id}sub > input[type=range].star-rank { margin: calc(${(inp.height/43)-5}px - 1.5% ) 0 0 0; }
		}
		#${inp.id}sub{width: ${inp.height*inp.maxstars}px}</style>`;
	document.querySelector(`#${inp.id} .rank`).innerHTML = makeStars({score:score,maxstars:inp.maxstars,init:true});};




const scoreStars = inp =>{

	//get the data here
	console.log(inp.score,inp.maxstars,inp.id);

};


const makeStars = inp =>{

	//Adjust settings here:
	const
		img_star 		= 'https://raw.githubusercontent.com/zimonh/Stars-Rank/master/fullstar.png',
		img_emptystar 	= 'https://raw.githubusercontent.com/zimonh/Stars-Rank/master/emptystar.png';



	if(inp.score <= inp.maxstars){
		let rest = inp.score,
			result = '',
			temp = inp.maxstars;

		while(temp>0){

			if(rest >= 1){
				result += `<star><img src="${img_star}"></star>`;
				rest = rest-1;
			}else if(rest<1&& rest>0){
				result +=
				`<star>
					<img src="${img_emptystar}">
					<halfstar style="width: calc(100% * ${rest})"><img src="${img_star}"></halfstar>
				</star>`;
				rest = 0;
			}else result += `<star><img src="${img_emptystar}"></star>`;
			temp--;

		}
		return result;
	}
};