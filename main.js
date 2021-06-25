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

  

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75,window.innerWidth/window.innerHeight,0.1, 1000);
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene,camera);

const geometry = new THREE.TorusGeometry(10,3,16,100)
const material = new THREE.MeshStandardMaterial({color: 0xFF6347, wireframe: true});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20,20,20)

const ambientLight = new  THREE.AmbientLight(0xffffff);
scene.add(pointLight,ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper();
scene.add(lightHelper, gridHelper)
const controls = new THREE.OrbitControls(camera, renderer.domElement);



function addStar() {
	const geometry = new THREE.SphereGeometry(0.25,24,24);
	const material = new THREE.MeshStandardMaterial({color: 0xffffff, wireframe: true});
	const star = new THREE.Mesh(geometry, material);

	const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
	star.position.set(x,y,z);
	scene.add(star)
}

Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('./aurora1.jpg');
scene.background = spaceTexture;

const avibox = new THREE.TextureLoader().load('./Aviral.jpg');
const avi = new THREE.Mesh(
	new THREE.BoxGeometry(3,3,3),
	new THREE.MeshBasicMaterial({map: avibox})
);
scene.add(avi);

const moonTexture = new THREE.TextureLoader().load('./contact.jpg');
const normalTexture = new THREE.TextureLoader().load('./test1.jpg');
const moon = new THREE.Mesh(
	new THREE.SphereGeometry(3,32,32),
	new THREE.MeshStandardMaterial({map: moonTexture, normalMap: normalTexture})
)

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10);


function moveCamera(){
	const t = document.body.getBoundingClientRect().top
	moon.rotation.x += 0.05;
	moon.rotation.y += 0.075;
	moon.rotation.z += 0.05;
	
	avi.rotation.y += 0.01;
	avi.rotation.z += 0.01;

	camera.position.z = t* -0.01;
	camera.position.y = t* -0.0002;
	camera.position.x = t* -0.0002;
}
// document.body.onscroll = moveCamera
function animate(){
	requestAnimationFrame(animate);
	torus.rotation.x += 0.01;
	torus.rotation.y += 0.005;
	torus.rotation.z += 0.01;
	renderer.render(scene,camera);
	controls.update()
}

animate();