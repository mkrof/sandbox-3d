import THREE from 'three';
import Stats from 'stats.js';

const stats = new Stats();

// const pointCloudGeom = new THREE.SphereGeometry(100, 32, 16);
const pointCloudGeom = new THREE.Geometry();
Array.apply(null, Array(20000)).forEach(() => {
  pointCloudGeom.vertices.push(new THREE.Vector3(
    Math.random() * 800 - 400,
    Math.random() * 800 - 400,
    Math.random() * 800 - 400
  ));
});

const pointCloudMaterial = new THREE.PointsMaterial({
  size: 10,
  transparent: true,
  opacity: 1,
  map: new THREE.TextureLoader().load('skittle.gif')
  // vertexColors: THREE.VertexColors
});

const pointCloud = new THREE.Points(pointCloudGeom, pointCloudMaterial);

let scene;
let camera;
let renderer;

function init (w, h) {
  stats.showPanel(0);
  document.body.appendChild(stats.dom);
  camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
  camera.position.z = 400;
  scene = new THREE.Scene();
  scene.add(camera);
  scene.add(pointCloud);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(w, h);
  document.getElementById('app-container').appendChild(renderer.domElement);
  render();
}

function update () {
  pointCloud.rotation.x += 0.005;
  pointCloud.rotation.y += 0.005;
  stats.update();
  renderer.render(scene, camera);
}

function render () {
  update();
  requestAnimationFrame(render);
}

export default function (w, h) {
  init(w, h);
};
