// https://aerotwist.com/tutorials/getting-started-with-three-js/
import THREE from 'three';

function init (width, height) {
  const viewAngle = 45;
  const aspect = width / height;
  const near = 0.1;
  const far = 10000;
  const container = document.getElementById('app-container');
  const renderer = new THREE.WebGLRenderer();
  const camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far);
  const scene = new THREE.Scene();

  scene.add(camera);
  camera.position.z = 300;
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  // sphere
  const radius = 50;
  const segments = 16;
  const rings = 16;
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0xCC0000
  });

  const sphere = new THREE.Mesh(
     new THREE.SphereGeometry(
       radius,
       segments,
       rings
     ),
     sphereMaterial
  );

  scene.add(sphere);

  const pointLight = new THREE.PointLight(0xFFFFFF);
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;

  scene.add(pointLight);

  renderer.render(scene, camera);
}


export default function (width, height) {
  console.log('initting', width, height);
  init(width, height);
}
