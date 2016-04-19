// https://aerotwist.com/tutorials/getting-started-with-three-js/
import THREE from 'three';

let scene;
let camera;
let renderer;
let sphere = getSphere();

function getSphere () {
  const radius = 50;
  const segments = 16;
  const rings = 16;
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0xCC0000
  });

  return new THREE.Mesh(
     new THREE.SphereGeometry(
       radius,
       segments,
       rings
     ),
     sphereMaterial
  );
}

function init (width, height) {
  const viewAngle = 45;
  const aspect = width / height;
  const near = 0.1;
  const far = 10000;
  const container = document.getElementById('app-container');
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far);
  renderer = new THREE.WebGLRenderer();

  scene.add(camera);
  camera.position.z = 300;
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  scene.add(sphere);

  const pointLight = new THREE.PointLight(0xFFFFFF);
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;

  scene.add(pointLight);
  render();
}

function render () {
  sphere.position.y += 1;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}


export default function (width, height) {
  init(width, height);
}
