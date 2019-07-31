const flavors = 'Baunilha,Chocolate,Nutella,Oreo';
const list = document.getElementById('cookies');

const init = () => {
	const html = flavors
		.split(',')
		.map(element => `<li>${element}</li>`);

		list.innerHTML = html.join('');
};
