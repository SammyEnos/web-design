let progress = document.querySelectorAll('.progress');
let progress_text = document.querySelectorAll('.data-progress');
progress.forEach((pro) => {
	let percentage = pro.getAttribute('data-value');
	let color = pro.getAttribute('data-stroke');
	let radius = pro.r.baseVal.value;
	let circumfrence = radius * 2 * Math.PI;
	let stroke = circumfrence - (circumfrence * percentage) / 100;
	pro.style.setProperty('stroke-dashoffest', stroke);
	pro.style.setProperty('stroke-dasharray', circumfrence);
	pro.style.setProperty('stroke', color);
	pro.style.setProperty('animation-time', '${percentage * 100}ms');
});


const menuToggle = document.querySelector('-menuToggle');
const navigation = document.querySelector('-navigation');
menuToggle.onclick = function(){
	navigation.classlist.toggle('open')
}