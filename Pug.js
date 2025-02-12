main.container
	.row
		.col-lg-12.p-5
			div.card
				.card-header
					h1.h3 Pug.js Demo	

				.card-body
					div
						img.mr-2(src="https://camo.githubusercontent.com/" style="width: 100px;")
						a(href="https://pugjs.org/api/getting-started.html") Pug.js Docs
					hr
					h2.h5 General Syntax
					section.preview.mb-4
						div
							| <strong>main.container</strong> //To create an element, type its name w/o the normal HTML brackets. Append classes/ID with "." & "#".
						div(style="margin-left: 10px")
							| <strong>.row</strong> //To nest an element in another, space or tab the next line to indent it. You can omit "div" if it has a class.
						div(style="margin-left: 20px")
							| <strong>.col-lg-12.p-5#test</strong> //String multiple classes or a single ID together.
						div(style="margin-left: 30px")
							| <strong>div</strong> // You do need to write out "div" if it does not have a class.
						div(style="margin-left: 40px")
							| <strong>img(src="test.jpg alt="")</strong> "//Attributes (e.g, src, alt, style, etc) are added to elements with parentheses.
					h2.h5 Built-in JavaScript Goodness
					.row
						.col-lg-6
							pre
								| Iteration ("Each") Ex:
								| - var numbers = ['one', 'two', 'three']
								| ul
								|   each number in numbers
								|     li= number
						.col-lg-6
							div.bg-light.p-3
								- var numbers = ['one', 'two', 'three']
								h3.h6 EXAMPLE
								ul
									each number in numbers
										li= number					
					a(href="https://pugjs.org/language/iteration.html" target="_blank") View more examples in the Docs!
