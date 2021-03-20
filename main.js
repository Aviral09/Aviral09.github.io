var myNav = document.getElementById("nav-bar");

window.onscroll = function () {
	"use strict";
	if (
		document.body.scrollTop >= 2100 
		// document.documentElement.scrollTop <= 300
	) {
		myNav.classList.add("scroll3");
		myNav.classList.remove("scroll1");
		myNav.classList.remove("scroll2");
		myNav.classList.remove("scroll");
	} 
	else if (
		document.body.scrollTop >= 1200 
		// document.documentElement.scrollTop <= 300
	) {
		myNav.classList.add("scroll2");
		myNav.classList.remove("scroll1");
		myNav.classList.remove("scroll");
		myNav.classList.remove("scroll3");
	}
	else if (
		document.body.scrollTop >= 600 
		// document.documentElement.scrollTop <= 300
	) {
		myNav.classList.add("scroll1");
		myNav.classList.remove("scroll");
		myNav.classList.remove("scroll2");
		myNav.classList.remove("scroll3");
	}
	else if (
		document.body.scrollTop >= 10
		// document.documentElement.scrollTop <= 300
	) {
		myNav.classList.add("scroll");
		myNav.classList.remove("scroll1");
		myNav.classList.remove("scroll2");
		myNav.classList.remove("scroll3");
	}else {
		myNav.classList.remove("scroll");
		myNav.classList.remove("scroll1");
		myNav.classList.remove("scroll2");
		myNav.classList.remove("scroll3");
	}
};

// ParticlesJS Config.
particlesJS("particles-js", {
	particles: {
		number: {
			value: 80,
			density: {
				enable: true,
				value_area: 700,
			},
		},

		color: {
			value: "#ffffff",
		},

		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000",
			},

			polygon: {
				nb_sides: 5,
			},
		},

		opacity: {
			value: 0.6,
			random: false,
			anim: {
				enable: false,
				speed: 0.1,
				opacity_min: 0.1,
				sync: false,
			},
		},

		size: {
			value: 7,
			random: true,
			anim: {
				enable: false,
				speed: 10,
				size_min: 0.1,
				sync: false,
			},
		},

		line_linked: {
			enable: true,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1,
		},

		move: {
			enable: true,
			speed: 2,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},

	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: "grab",
			},

			onclick: {
				enable: true,
				mode: "push",
			},

			resize: true,
		},

		modes: {
			grab: {
				distance: 140,
				line_linked: {
					opacity: 1,
				},
			},

			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3,
			},

			repulse: {
				distance: 200,
				duration: 0.4,
			},

			push: {
				particles_nb: 4,
			},

			remove: {
				particles_nb: 2,
			},
		},
	},

	retina_detect: true,
});
