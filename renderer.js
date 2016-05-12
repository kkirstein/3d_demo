// renderer.js
// Render a 3D scene with three.js
// Example taken from the book
// 3D Game Programming for Kids
// http://www.gamingJS.com
//

// This is where stuff in our game will happen:
var scene = new THREE.Scene();

// This is what sees the stuff:
var aspect_ratio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 10000);
camera.position.z = 500;
scene.add(camera);

// This will draw what the camera sees onto the screen:
var renderer = new THREE.CanvasRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Start with the content:
var shape = new THREE.SphereGeometry(100, 20, 15);
var cover = new THREE.MeshNormalMaterial();
var ball = new THREE.Mesh(shape, cover);
scene.add(ball);


// Now, show what the camera sees on the screen:
renderer.render(scene, camera);

