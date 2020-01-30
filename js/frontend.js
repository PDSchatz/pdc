(function() {
   $(function(){
   	$('.subtxt > h1').okshadow({
   		color: '#ab47bc',
   		textShadow: true,
   		downwards: false,
   		xMax: 5,
   		yMin: 10,
   		yOffset:0,
   		yMax: 100,
   		fuzzMin: 5,
   		fuzzFactor: 100,
   	});
   });
/*
   Below is the setup and execution for the background slideshow. It uses a plugin called 'jquery-background-slideshow.js'
   I found it here: https://www.jqueryscript.net/slideshow/performant-background-slideshow.html
   The docs aren't located... uh... anywhere, so I assume that those options are the only options?
*/
   var imgList = [
      "img/nighthouse2.jpg",
      "img/a_kitchen_1.jpg",
      "img/b_kit_1.jpg",
      "img/b_stair_1.jpg",
      "img/b_stair_2.jpg",
      "img/b_stair_3.jpg"
   ];

   $("body").backgroundSlideshow({
      images: imgList,
      transisitionDuration: 5000,
      delay: 2500,
      fixed: true
   })

})();


