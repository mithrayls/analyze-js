const Viz = require('viz.js');
const { Module, render } = require('viz.js/full.render.js');

let viz = new Viz({ Module, render });

viz.renderString('digraph { a -> b }')
  .then(result => {
	  console.log(result);
  })
  .catch(error => {
					     viz = new Viz({ Module, render });
					             console.error(error);
					               });

