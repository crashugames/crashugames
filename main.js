// Three.js Scene
let scene, camera, renderer, rocket;

function initThree() {
    const canvas = document.getElementById('three-canvas');
    if (!canvas) return;
    
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Rocket
    const geometry = new THREE.ConeGeometry(0.5, 2, 32);
    const material = new THREE.MeshPhongMaterial({ color: 0xef4444, emissive: 0xef4444 });
    rocket = new THREE.Mesh(geometry, material);
    scene.add(rocket);
    
    const light = new THREE.PointLight(0xffffff, 2);
    light.position.set(5, 5, 5);
    scene.add(light);
    
    camera.position.z = 5;
    
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    if (rocket) rocket.rotation.y += 0.01;
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    if (renderer) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
});

function startCrashGame() {
    window.location.href = 'game/playing.html';
}

// Init
window.onload = initThree;