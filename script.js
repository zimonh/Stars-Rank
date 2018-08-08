/* by: ZIMONH src: https://github.com/zimonh/Stars-Rank
License: https://creativecommons.org/licenses/by-nc-sa/4.0/ */

const makeStars = (n,starWidth) =>{

	//Adjust settings here:
	const
		img_star 		= 'https://raw.githubusercontent.com/zimonh/Stars-Rank/master/fullstar.png',
		img_emptystar 	= 'https://raw.githubusercontent.com/zimonh/Stars-Rank/master/emptystar.png',
		maxStars = 5; // css rank > star > halfstar > img width


	if(n <= maxStars){
		let rest = n,
			result = '',
			temp = maxStars;

		while(temp>0){

			if(rest >= 1){
				result += `<star><img src="${img_star}"></star>`;
				rest = rest-1;
			}else if(rest<1&& rest>0){
				result +=
				`<star>
					<img src="${img_emptystar}">
					<halfstar style="width: ${starWidth*rest}px;"><img src="${img_star}"></halfstar>
				</star>`;
				rest = 0;
			}else result += `<star><img src="${img_emptystar}"></star>`;
			temp--;

		}
		return result;
	}
};