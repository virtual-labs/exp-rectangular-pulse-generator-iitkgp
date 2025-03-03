/* global flag */
/**
 * 
 *  Document     : scene.js
 *  Created on   : Marn9, 2017, 4:35:25 PM
 *  Author       : Subir Sekhar
 *  Co-Author    : Pabitra K Jana
 *  Organization : IIT Khatagpur
 *  
 */
var CUBEScene = {
    scene: null,
    cube1: null,
    cube2: null,
    cube4: null,
    cube5: null,
    cube6: null,
    cube8: null,
    cube7: null,
    cube9: null,
    cube11: null,
    cube12: null,
    cube13: null,
    cube14: null,
    cube15: null,
    cube16: null,
    cube17: null,
    cube18: null,
    cube19: null,
    cube20: null,
    cube21: null,
    cube22: null,
    cube220: null,
    cube23: null,
    cube24: null,
    cube25: null,
    cube26: null,
    cube28: null,
    cube29: null,
    cube30: null,
    cube31: null,
    cube27: null,
    torus1: null,
    torus2: null,
    torus3: null,
    torus4: null,
    torus5: null,
    torus6: null,
    torus21: null,
    torus22: null,
    torus23: null,
    torus24: null,
    torus25: null,
    torus26: null,
    torus27: null,
    cylinder16: null,
    cylinder17: null,
    cylinder19: null,
    cylinder20: null,
    cylinder21: null,
    cylinder22: null,
    cylinder12: null,
    cylinder13: null,
    table: null,
    sphere1: null,
    tableColumn1: null,
    tableColumn2: null,
    tableColumn3: null,
    tableColumn4: null,
    cylinder23: null,
    cylinder24: null,
    cylinder26: null,
    cylinder27: null,
    cylinder28: null,
    cylinder29: null,
    cylinder1: null,
    cylinder2: null,
    cylinder5: null,
    cylinder6: null,
    cylinder3: null,
    cylinder4: null,
    cylinder7: null,
    cylinder8: null,
    cylinder9: null,
    cylinder10: null,
    cylinder41: null,
    cylinder42: null,
    cylinder43: null,
    cylinder44: null,
    cylinder45: null,
    cylinder46: null,
    cylinder47: null,
    cylinder48: null,
    cylinder49: null,
    cylinder51: null,
    cylinder50: null,
    cylinder52: null,
    cylinder53: null,
    cylinder54: null,
    cylinder56: null,
    cylinder57: null,
    cylinder58: null,
    cylinder59: null,
    cylinder60: null,
    cylinder61: null,
    cylinder62: null,
    cylinder63: null,
    cylinder64: null,
    cylinder65: null,
    cylinder66: null,
    sphere2: null,
    cylinder166: null,
    star: null,
    camera: null,
    container: null,
    stats: null,
    controls: null,
    renderer: null,
    CONTAINER_WIDTH: null,
    CONTAINER_HEIGHT: null,
    spring:null,
    spring1:null,
    grp1:null,
    grp2:null,
    init: function () {

// create main scene
        this.scene = new THREE.Scene();
        this.scene.position.set(-100, 60, 0);

        this.container = document.getElementById("canvas3d-view");

        this.CONTAINER_WIDTH = this.container.offsetWidth;
        this.CONTAINER_HEIGHT = this.container.offsetHeight;


//  renderer
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
        this.renderer.setSize(this.CONTAINER_WIDTH, this.CONTAINER_HEIGHT);
        this.renderer.setClearColor(0x000000, 1); // Set the background color of the canvas to black
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;
        this.container.appendChild(this.renderer.domElement);

// camera
        var VIEW_ANGLE = 45, ASPECT = this.CONTAINER_WIDTH / this.CONTAINER_HEIGHT, NEAR = 1, FAR = 10000;
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        //this.camera.position.z = 500;
        this.camera.position.set(0, 20, 680);
        //this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.camera.lookAt(this.scene.position);
//        this.scene.add(this.camera);


        var dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(0, 150, 400);
        this.scene.add(dirLight);

        var dirLight1 = new THREE.DirectionalLight(0xffffff, 1);
        dirLight1.position.set(0, 150, -400);
        this.scene.add(dirLight1);

//var dirLight2 = new THREE.DirectionalLight(0xffffff, 1);
//dirLight2.position.set(-400, 150, 0);
//this.scene.add(dirLight2);
//
//var dirLight3 = new THREE.DirectionalLight(0xffffff, 1);
//dirLight3.position.set(400, 150, 0);
//this.scene.add(dirLight3);


        // And some sort of controls to move around
        // We'll use one of THREE's provided control classes for simplicity
        this.controls = new THREE.TrackballControls(this.camera);

        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;

        this.controls.noZoom = false;
        this.controls.noPan = false;

        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;

        this.controls.keys = [65, 83, 68];
        this.controls.enabled = false;
        // this.controls.addEventListener('change', render);

// Stats preparing
//        this.stats = new Stats();
//        this.stats.domElement.style.position = 'absolute';
//        this.stats.domElement.style.top = '45px';
//        this.container.appendChild(this.stats.domElement);

// scene
//        this.scene = new THREE.Scene();

// Add axes, The X axis is red. The Y axis is green. The Z axis is blue.
//        axes = buildAxes(200);
//        this.scene.add(axes);

        
        var geo = new THREE.PlaneBufferGeometry(2000, 2000, 8, 8);
        var mat = new THREE.MeshPhongMaterial({color: 0x222222, side: THREE.DoubleSide});
        var plane = new THREE.Mesh(geo, mat);
        plane.position.set(0, -160, 0);
        plane.rotateX(-Math.PI / 2);
               
                                                      
                                                                                                      
// table starts

        this.table = new THREE.Mesh(new THREE.BoxGeometry(795, 10, 300), new THREE.MeshNormalMaterial({wireframe: false, color: 0xee0022}));
        this.table.overdraw = true;
        this.table.position.set(90, -10, -25.0);
        this.table.rotation.x = Math.PI * 0;
        this.table.rotation.y = Math.PI * 0;

        this.cube11 = new THREE.Mesh(new THREE.BoxGeometry(500, 3, 60), new THREE.MeshPhongMaterial({wireframe: false, color: 0xaaaaaa}));
        this.cube11.overdraw = true;
        this.cube11.position.set(58.5, -5, 71.8);
        this.cube11.rotation.x = Math.PI * 0;
        this.cube11.rotation.y = Math.PI * 0;

        this.cube12 = new THREE.Mesh(new THREE.BoxGeometry(510, 3, 60), new THREE.MeshPhongMaterial({wireframe: false, color: 0xaaaaaa}));
        this.cube12.overdraw = true;
        this.cube12.position.set(107, -5, -142.15);
        this.cube12.rotation.x = Math.PI * 0;
        this.cube12.rotation.y = Math.PI * 0;

        this.cube13 = new THREE.Mesh(new THREE.BoxGeometry(196, 3, 60), new THREE.MeshPhongMaterial({wireframe: false, color: 0xaaaaaa}));
        this.cube13.overdraw = true;
        this.cube13.position.set(-225, -5, 5);
        this.cube13.rotation.x = Math.PI * 0;
        this.cube13.rotation.y = Math.PI * -0.30;

        this.cube14 = new THREE.Mesh(new THREE.BoxGeometry(180, 3, 60), new THREE.MeshPhongMaterial({wireframe: false, color: 0xaaaaaa}));
        this.cube14.overdraw = true;
        this.cube14.position.set(-203, -5, -95);
        this.cube14.rotation.y = Math.PI * 0.2;
        this.cube14.rotation.x = Math.PI * 0;


        this.tableColumn1 = new THREE.Mesh(new THREE.BoxGeometry(25, 150, 25), new THREE.MeshNormalMaterial({wireframe: false, color: 0xee0022}));
        this.tableColumn1.overdraw = true;
        this.tableColumn1.position.set(425, -80, -125);
        this.tableColumn1.rotation.x = Math.PI * 0;
        this.tableColumn1.rotation.y = Math.PI * 0;

        this.tableColumn2 = this.tableColumn1.clone();
        this.tableColumn2.position.set(425, -80, 75);

        this.tableColumn3 = this.tableColumn1.clone();
        this.tableColumn3.position.set(-250, -80, -125);

        this.tableColumn4 = this.tableColumn1.clone();
        this.tableColumn4.position.set(-250, -80, 75);
        
        //table ends
        
        

        // electromagnetic switch starts

        this.cube5 = new THREE.Mesh(new THREE.BoxGeometry(5, 100, 25), new THREE.MeshPhongMaterial({wireframe: false, color: 0xaaaaaa}));
        this.cube5.overdraw = true;
        this.cube5.position.set(390, 45, -120);
        this.cube5.rotation.y = Math.PI * 0;
        this.cube5.rotation.x = Math.PI * 0;

        this.cube6 = new THREE.Mesh(new THREE.BoxGeometry(5, 100, 25), new THREE.MeshPhongMaterial({wireframe: false, color: 0xaaaaaa}));
        this.cube6.overdraw = true;
        this.cube6.position.set(480, 45, -120);
        this.cube6.rotation.y = Math.PI * 0;
        this.cube6.rotation.x = Math.PI * 0;

        this.cube7 = new THREE.Mesh(new THREE.BoxGeometry(25, 5, 10), new THREE.MeshPhongMaterial({wireframe: false, color: 0xaaaaaa}));
        this.cube7.overdraw = true;
        this.cube7.position.set(435, 142.5, -120);
        this.cube7.rotation.y = Math.PI * 0.5;
        this.cube7.rotation.z = Math.PI * 0;

        this.cube9 = new THREE.Mesh(new THREE.BoxGeometry(15, 1.5, 10), new THREE.MeshPhongMaterial({wireframe: false, color: 0xbe7333}));
        this.cube9.overdraw = true;
        this.cube9.position.set(397, 25, -120);
        this.cube9.rotation.y = Math.PI * 0;
        this.cube9.rotation.x = Math.PI * 0;

        this.cube8 = new THREE.Mesh(new THREE.BoxGeometry(15, 1.5, 10), new THREE.MeshPhongMaterial({wireframe: false, color: 0xbe7333}));
        this.cube8.overdraw = true;
        this.cube8.position.set(475, 25, -120);
        this.cube8.rotation.y = Math.PI * 0;
        this.cube8.rotation.x = Math.PI * 0;

        this.cube15 = new THREE.Mesh(new THREE.BoxGeometry(15, 1.5, 10), new THREE.MeshPhongMaterial({wireframe: false, color: 0xbe7333}));
        this.cube15.overdraw = true;
        this.cube15.position.set(395, 70, -120);
        this.cube15.rotation.y = Math.PI * 0;
        this.cube15.rotation.x = Math.PI * 0;

        this.cube16 = new THREE.Mesh(new THREE.BoxGeometry(15, 1.5, 10), new THREE.MeshPhongMaterial({wireframe: false, color: 0xbe7333}));
        this.cube16.overdraw = true;
        this.cube16.position.set(475, 70, -120);
        this.cube16.rotation.y = Math.PI * 0;
        this.cube16.rotation.x = Math.PI * 0;

        this.cube17 = new THREE.Mesh(new THREE.BoxGeometry(7.5, 10, 10), new THREE.MeshPhongMaterial({wireframe: false, color: 0xbe7333}));
        this.cube17.overdraw = true;
        this.cube17.position.set(390, 30, -120);
        this.cube17.rotation.y = Math.PI * 0;
        this.cube17.rotation.x = Math.PI * 0;

        this.cube18 = new THREE.Mesh(new THREE.BoxGeometry(7.5, 10, 10), new THREE.MeshPhongMaterial({wireframe: false, color: 0xbe7333}));
        this.cube18.overdraw = true;
        this.cube18.position.set(480, 30, -120);
        this.cube18.rotation.y = Math.PI * 0;
        this.cube18.rotation.x = Math.PI * 0;

        this.cube19 = new THREE.Mesh(new THREE.BoxGeometry(7.5, 10, 10), new THREE.MeshPhongMaterial({wireframe: false, color: 0xbe7333}));
        this.cube19.overdraw = true;
        this.cube19.position.set(390, 75, -120);
        this.cube19.rotation.y = Math.PI * 0;
        this.cube19.rotation.x = Math.PI * 0;

        this.cube20 = new THREE.Mesh(new THREE.BoxGeometry(7.5, 10, 10), new THREE.MeshPhongMaterial({wireframe: false, color: 0xbe7333}));
        this.cube20.overdraw = true;
        this.cube20.position.set(480, 75, -120);
        this.cube20.rotation.y = Math.PI * 0;
        this.cube20.rotation.x = Math.PI * 0;


        var torusgeometry = new THREE.TorusGeometry(13, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0xb87333, shading: THREE.FlatShading});
        this.torus1 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus1.position.set(435, 135, -120);
        this.torus1.rotation.x = Math.PI * 0.4;

        var torusgeometry = new THREE.TorusGeometry(13, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0xb87333, shading: THREE.FlatShading});
        this.torus2 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus2.position.set(435, 127.5, -120);
        this.torus2.rotation.x = Math.PI * 0.4;

        var torusgeometry = new THREE.TorusGeometry(13, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0xb87333, shading: THREE.FlatShading});
        this.torus3 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus3.position.set(435, 120, -120);
        this.torus3.rotation.x = Math.PI * 0.4;

        var torusgeometry = new THREE.TorusGeometry(13, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0xb87333, shading: THREE.FlatShading});
        this.torus4 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus4.position.set(435, 113.5, -120);
        this.torus4.rotation.x = Math.PI * 0.4;

        var torusgeometry = new THREE.TorusGeometry(13, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0xb87333, shading: THREE.FlatShading});
        this.torus3 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus3.position.set(435, 120, -120);
        this.torus3.rotation.x = Math.PI * 0.4;

        var torusgeometry = new THREE.TorusGeometry(13, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0xb87333, shading: THREE.FlatShading});
        this.torus4 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus4.position.set(435, 112.5, -120);
        this.torus4.rotation.x = Math.PI * 0.4;

        var torusgeometry = new THREE.TorusGeometry(13, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0xb87333, shading: THREE.FlatShading});
        this.torus5 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus5.position.set(435, 105, -120);
        this.torus5.rotation.x = Math.PI * 0.4;

        var torusgeometry = new THREE.TorusGeometry(13, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0xb87333, shading: THREE.FlatShading});
        this.torus6 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus6.position.set(435, 98.5, -120);
        this.torus6.rotation.x = Math.PI * 0.4;
        
        var cylindergeometry = new THREE.CylinderGeometry(0.5, 0.5, 4.5, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xb87333});
        this.cylinder66 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder66.overdraw = true;
        this.cylinder66.position.set(426, 93.5, -129);
        this.cylinder66.rotation.x = Math.PI * 0;
        this.cylinder66.rotation.z = Math.PI * 0;


        var cylindergeometry = new THREE.CylinderGeometry(12.5, 12.5, 45, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x4863a0});
        this.cylinder47 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder47.overdraw = true;
        this.cylinder47.position.set(435, 117.5, -120);
        this.cylinder47.rotation.x = Math.PI * 0;
        this.cylinder47.rotation.z = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 150, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xcccccc});
        this.cylinder48 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder48.overdraw = true;
        this.cylinder48.position.set(435, 70, -80);
        this.cylinder48.rotation.x = Math.PI * 0;
        this.cylinder48.rotation.z = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 150, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xcccccc});
        this.cylinder49 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder49.overdraw = true;
        this.cylinder49.position.set(435, 70, -160);
        this.cylinder49.rotation.x = Math.PI * 0;
        this.cylinder49.rotation.z = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 82.5, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xcccccc});
        this.cylinder51 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder51.overdraw = true;
        this.cylinder51.position.set(435, 142.5, -120);
        this.cylinder51.rotation.x = Math.PI * 0.5;
        this.cylinder51.rotation.z = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 23, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xbe7333});
        this.cylinder54 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder54.overdraw = true;
        this.cylinder54.position.set(435, 61, -120);
        this.cylinder54.rotation.x = Math.PI * 0;
        this.cylinder54.rotation.z = Math.PI * 0;


        this.cube21 = new THREE.Mesh(new THREE.BoxGeometry(75, 1, 10), new THREE.MeshPhongMaterial({wireframe: false, color: 0xbe7333}));
        this.cube21.overdraw = true;
        this.cube21.position.set(435, 50, -120);
        this.cube21.rotation.y = Math.PI * 0;
        this.cube21.rotation.x = Math.PI * 0;


        // electromagnetic switch ends
        
        
        
        
        
        //capacitor starts

        var group1 = new THREE.Object3D();//create an empty container
        //create an empty container
        this.cube1 = new THREE.Mesh(new THREE.BoxGeometry(30, 85, 50), new THREE.MeshPhongMaterial({wireframe: false, color: 0xff0000}));
        this.cube1.overdraw = true;
        this.cube1.position.set(225, 0, 10.0);
        this.cube1.rotation.x = Math.PI * 0;
        this.cube1.rotation.y = Math.PI * 0;








//        var SphereGeometry = new THREE.SphereGeometry(3, 160, 160);
//        var Spherematerial = new THREE.MeshNormalMaterial({wireframe: false, color: 0xb87333});
//        var sphere45 = new THREE.Mesh(SphereGeometry, Spherematerial);
//        sphere45.overdraw = true;
//        sphere45.position.set(23, 100, 32);


        var cylindergeometry = new THREE.CylinderGeometry(30, 30, 60, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x444444});
        this.cylinder3 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder3.overdraw = true;
        this.cylinder3.position.set(165.0, -5, 15);
        this.cylinder3.rotation.x = Math.PI * 0;
        this.cylinder3.rotation.z = Math.PI * 0;


        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 20, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xbbbbbb});
        this.cylinder7 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder7.overdraw = true;
        this.cylinder7.position.set(150.0, 25, 15);
        this.cylinder7.rotation.x = Math.PI * 0;
        this.cylinder7.rotation.z = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 20, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xbbbbbb});
        this.cylinder8 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder8.overdraw = true;
        this.cylinder8.position.set(180.0, 25, 15);
        this.cylinder8.rotation.x = Math.PI * 0;
        this.cylinder8.rotation.z = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(0.5, 0.5, 85, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder9 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder9.overdraw = true;
        this.cylinder9.position.set(115.0, 48, 13);
        this.cylinder9.rotation.z = Math.PI * 0.38;
        this.cylinder9.rotation.x = Math.PI * -0.075;


        var cylindergeometry = new THREE.CylinderGeometry(0.5, 0.5, 55, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder10 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder10.overdraw = true;
        this.cylinder10.position.set(205.0, 50, 14);
        this.cylinder10.rotation.z = Math.PI * -0.31;
        this.cylinder10.rotation.x = Math.PI * -0.07;


        this.cube2 = new THREE.Mesh(new THREE.BoxGeometry(5, 30, 5), new THREE.MeshNormalMaterial({wireframe: false, color: 0xaa33bb}));
        this.cube2.overdraw = true;
        this.cube2.position.set(225, 50, 10);
        this.cube2.rotation.x = Math.PI * 0;
        this.cube2.rotation.y = Math.PI * 0;

        
        
       


        var cylindergeometry = new THREE.CylinderGeometry(35, 35, 5, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xccdddd});
        this.cylinder43 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder43.overdraw = true;
        this.cylinder43.position.set(325.0, -5, -140);
        this.cylinder43.rotation.y = Math.PI * 1;
        this.cylinder43.rotation.z = Math.PI * 0;


        var cylindergeometry = new THREE.CylinderGeometry(35, 35, 2.5, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xccdddd});
        this.cylinder45 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder45.overdraw = true;
        this.cylinder45.position.set(325.0, 50, -140);
        this.cylinder45.rotation.y = Math.PI * 1;
        this.cylinder45.rotation.z = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(35, 35, 2.5, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xccdddd});
        this.cylinder50 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder50.overdraw = true;
        this.cylinder50.position.set(165.0, 25, 15);
        this.cylinder50.rotation.x = Math.PI * 0;
        this.cylinder50.rotation.z = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(35, 35, 2.5, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xccdddd});
        this.cylinder46 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder46.overdraw = true;
        this.cylinder46.position.set(165.0, -33, 15);
        this.cylinder46.rotation.x = Math.PI * 0;
        this.cylinder46.rotation.z = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(1, 1, 300, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder1 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder1.overdraw = true;
        this.cylinder1.position.set(5, 94, -135);
        this.cylinder1.rotation.y = Math.PI * 1;
        this.cylinder1.rotation.z = Math.PI * 0.5;

        var cylindergeometry = new THREE.CylinderGeometry(1, 1, 450, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder2 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder2.overdraw = true;
        this.cylinder2.position.set(50, 94, 70);
        this.cylinder2.rotation.y = Math.PI * 0;
        this.cylinder2.rotation.z = Math.PI * 0.5;
//        
        var cylindergeometry = new THREE.CylinderGeometry(1, 1, 145, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder5 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder5.overdraw = true;
        this.cylinder5.position.set(-222.0, 94, 9);
        this.cylinder5.rotation.y = Math.PI * -0.305;
        this.cylinder5.rotation.z = Math.PI * 0.5;

        var cylindergeometry = new THREE.CylinderGeometry(1, 1, 140, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder6 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder6.overdraw = true;
        this.cylinder6.position.set(-203.0, 94, -91);
        this.cylinder6.rotation.y = Math.PI * 0.2;
        this.cylinder6.rotation.z = Math.PI * 0.5;

        group1.add(this.cube1);
        group1.add(this.cube2);
        group1.add(this.cylinder3);
        group1.add(this.cylinder9);
        group1.add(this.cylinder10);
        group1.add(this.cylinder7);
        group1.add(this.cylinder8);
        group1.add(this.cylinder50);
        group1.add(this.cylinder46);
//        group1.add(sphere45);
        group1.rotation.y = Math.PI * -0.3;
        group1.position.set(-300, 30, -120);

        var group2 = new THREE.Object3D();
        group2 = group1.clone();
        group2.overdraw = true;
        group2.position.set(-250, 30, 60);
        group2.rotation.y = Math.PI * 0;

        var group3 = new THREE.Object3D();
        group3 = group1.clone();
        group3.overdraw = true;
        group3.position.set(-100, 30, 60);
        group3.rotation.y = Math.PI * 0;

        var group4 = new THREE.Object3D();
        group4 = group1.clone();
        group4.overdraw = true;
        group4.position.set(50, 30, 60);
        group4.rotation.y = Math.PI * 0;

        var group5 = new THREE.Object3D();
        group5 = group1.clone();
        group5.overdraw = true;
        group5.position.set(380, 30, -125);
        group5.rotation.y = Math.PI * 1;

        var group6 = new THREE.Object3D();
        group6 = group1.clone();
        group6.overdraw = true;
        group6.position.set(230, 30, -125);
        group6.rotation.y = Math.PI * 1;

        var group7 = new THREE.Object3D();
        group7 = group1.clone();
        group7.overdraw = true;
        group7.position.set(80, 30, -125);
        group7.rotation.y = Math.PI * 1;

        var group8 = new THREE.Object3D();
        group8 = group1.clone();
        group8.overdraw = true;
        group8.position.set(-75, 30, -175);
        group8.rotation.y = Math.PI * -0.8;
        group8.rotation.x = Math.PI * 0;
        
        //capacitor ends
        
        
        
         //last coil starts

        var cylindergeometry = new THREE.CylinderGeometry(30, 30, 60, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x444444});
        this.cylinder4 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder4.overdraw = true;
        this.cylinder4.position.set(325.0, 20, -140);
        this.cylinder4.rotation.y = Math.PI * 1;
        this.cylinder4.rotation.z = Math.PI * 0;

        this.cube4 = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 35), new THREE.MeshPhongMaterial({wireframe: false, color: 0xbbbbbb}));
        this.cube4.overdraw = true;
        this.cube4.position.set(313, -6, -98);
        this.cube4.rotation.x = Math.PI * 0;
        this.cube4.rotation.y = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 20, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xcccccc});
        this.cylinder41 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder41.overdraw = true;
        this.cylinder41.position.set(345.0, 50, -140);
        this.cylinder41.rotation.y = Math.PI * 1;
        this.cylinder41.rotation.z = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 20, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder42 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder42.overdraw = true;
        this.cylinder42.position.set(305.0, 50, -140);
        this.cylinder42.rotation.y = Math.PI * 1;
        this.cylinder42.rotation.z = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(0.5, 0.5, 38, 50, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder44 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder44.overdraw = true;
        this.cylinder44.position.set(305.0, 75, -138);
        this.cylinder44.rotation.x = Math.PI * 0.062;
        this.cylinder44.rotation.z = Math.PI * 0.015;

        var cylindergeometry = new THREE.CylinderGeometry(0.5, 0.5, 20, 50, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder52 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder52.overdraw = true;
        this.cylinder52.position.set(345.0, 65.2, -140);
        this.cylinder52.rotation.x = Math.PI * 0;
        this.cylinder52.rotation.z = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(0.5, 0.5, 50, 50, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder53 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder53.overdraw = true;
        this.cylinder53.position.set(368.0, 75, -130.5);
        this.cylinder53.rotation.x = Math.PI * 0.5;
        this.cylinder53.rotation.z = Math.PI * 0.625;

       //last coil ends


//supply starts

        var supply = new THREE.Object3D();
        var cube5 = new THREE.Mesh(new THREE.BoxGeometry(200, 10, 150), new THREE.MeshPhongMaterial({wireframe: false, color: 0xAAAAAA}));
        cube5.overdraw = true;
        cube5.position.set(20, -2.5, 0);
        cube5.rotation.x = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(40, 40, 100, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x0000ff});
        var cylinder9 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder9.overdraw = true;
        cylinder9.position.set(75, 50, 0);

        var cylindergeometry = new THREE.CylinderGeometry(42.5, 42.5, 5, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
        var cylinder10 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder10.overdraw = true;
        cylinder10.position.set(75, 100, 0);

        var cube6 = new THREE.Mesh(new THREE.BoxGeometry(5, 50, 55), new THREE.MeshNormalMaterial({wireframe: false, color: 0xAAAAAA}));
        cube6.overdraw = true;
        cube6.position.set(75, 100, 0);
        cube6.rotation.x = Math.PI * 0.5;

        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 150, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder12 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder12.overdraw = true;
        this.cylinder12.position.set(0, 120, -20);
        this.cylinder12.rotation.z = Math.PI * 0.5;

        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 50, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xffff00});
        var cylinder14 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder14.overdraw = true;
        cylinder14.position.set(-50, 120, -20);
        cylinder14.rotation.z = Math.PI * 0.5;

        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 150, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder13 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder13.overdraw = true;
        this.cylinder13.position.set(0, 120, 20);
        this.cylinder13.rotation.z = Math.PI * 0.5;

        var cylindergeometry = new THREE.CylinderGeometry(10, 10, 10, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x0000ff});
        var cylinder18 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder18.overdraw = true;
        cylinder18.position.set(-80, 110, 0);
        cylinder18.rotation.z = Math.PI * 0.5;


        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 180, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder19 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder19.overdraw = true;
        this.cylinder19.position.set(-100, 110, 95);
        this.cylinder19.rotation.x = Math.PI * 0.5;
        this.cylinder19.rotation.z = Math.PI * 0.075;


        var cylindergeometry = new THREE.CylinderGeometry(7.5, 7.5, 70, 50, false);
        var cylindermaterial = new THREE.MeshNormalMaterial({color: 0x666666});
        this.cylinder20 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder20.overdraw = true;
        this.cylinder20.position.set(-125, 75, 165);
//        cylinder18.rotation.z = Math.PI * 0.5;

        var cylindergeometry = new THREE.CylinderGeometry(7.5, 7.5, 70, 100, false);
        var cylindermaterial = new THREE.MeshNormalMaterial({color: 0x666666});
        this.cylinder21 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder21.overdraw = true;
        this.cylinder21.position.set(-125, 75, 180);

        var cylindergeometry = new THREE.CylinderGeometry(7.5, 7.5, 50, 100, false);
        var cylindermaterial = new THREE.MeshNormalMaterial({color: 0x666666});
        this.cylinder22 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder22.overdraw = true;
        this.cylinder22.position.set(-125, 20, 172);
//        cylinder18.rotation.z = Math.PI * 0.5;

        var cube71 = new THREE.Mesh(new THREE.BoxGeometry(15, 5, 30), new THREE.MeshPhongMaterial({wireframe: false, color: 0xAAAAAA}));
        cube71.overdraw = true;
        cube71.position.set(-125, 110, 172);
//        cube71.rotation.x = Math.PI * 0.5;

        var cube72 = new THREE.Mesh(new THREE.BoxGeometry(40, 5, 40), new THREE.MeshPhongMaterial({wireframe: false, color: 0xAAAAAA}));
        cube72.overdraw = true;
        cube72.position.set(-125, -5, 175);


        var cube7 = new THREE.Mesh(new THREE.BoxGeometry(2.5, 100, 130), new THREE.MeshNormalMaterial({wireframe: false, color: 0xAAAAAA}));
        cube7.overdraw = true;
        cube7.position.set(-75, 60, 0);
        cube7.rotation.x = Math.PI * 0.5;

        var cube8 = new THREE.Mesh(new THREE.BoxGeometry(75, 25, 100), new THREE.MeshNormalMaterial({wireframe: false, color: 0xAAAAAA}));
        cube8.overdraw = true;
        cube8.position.set(-15, 20, 0);


        supply.add(cube5);
        supply.add(cylinder9);
        supply.add(cylinder10);
        supply.add(cube6);
        supply.add(this.cylinder12);
        supply.add(this.cylinder13);
        supply.add(cylinder14);
        supply.add(cylinder18);
        supply.add(this.cylinder19);
        supply.add(this.cylinder20);
        supply.add(this.cylinder21);
        supply.add(this.cylinder22);
        supply.add(cube7);
        supply.add(cube71);
        supply.add(cube72);
        supply.add(cube8);
        supply.position.set(0, -150, 350);
        supply.rotation.y = Math.PI * 1;


        var supply2 = new THREE.Object3D();
        supply2 = supply.clone();
        supply2.position.set(600, -150, 50);
        supply2.rotation.y = Math.PI * -0.5;
        supply2.scale.set(0.5, 0.5, 0.5);
                
        //supply ends
        
        
        
        //load switch starts

        var cylindergeometry = new THREE.CylinderGeometry(3.02, 3.02, 73, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder56 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder56.overdraw = true;
        this.cylinder56.position.set(610, -90, 49.5);
        this.cylinder56.rotation.x = Math.PI * 0.5;

        var cylindergeometry = new THREE.CylinderGeometry(3.02, 3.02, 75, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder57 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder57.overdraw = true;
        this.cylinder57.position.set(590, -90.5, 48);
        this.cylinder57.rotation.x = Math.PI * 0.5;

        var cylindergeometry = new THREE.CylinderGeometry(0.5, 0.5, 270, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder58 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder58.overdraw = true;
        this.cylinder58.position.set(479, 23, -60);
        this.cylinder58.rotation.x = Math.PI * -0.124;
        this.cylinder58.rotation.z = Math.PI * -0.9;

        var cylindergeometry = new THREE.CylinderGeometry(0.5, 0.5, 100, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder59 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder59.overdraw = true;
        this.cylinder59.position.set(445, 18, 50);
        this.cylinder59.rotation.x = Math.PI * 0;
        this.cylinder59.rotation.z = Math.PI * -0.65;

        
//load switch ends



//ground switc starts

        var groundset = new THREE.Object3D();
        var cube90 = new THREE.Mesh(new THREE.BoxGeometry(50, 50, 7.5), new THREE.MeshPhongMaterial({wireframe: false, color: 0xAAAAAA}));
        cube90.overdraw = true;
        cube90.position.set(0, 0, 20);
        cube90.rotation.x = Math.PI * 0;



        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 100, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x0000ff});
        var cylinder15 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder15.overdraw = true;
        cylinder15.position.set(0, 25, 0);

        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 75, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
        this.cylinder16 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder16.overdraw = true;
        this.cylinder16.position.set(330, -105, 350);


        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 75, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
        this.cylinder166 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder166.overdraw = true;
        this.cylinder166.position.set(230, -105, 350);




        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 50, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
        this.cylinder17 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder17.overdraw = true;
        this.cylinder17.position.set(0, 50, 5);
        this.cylinder17.rotation.x = Math.PI * 0.5;

//         window.setTimeout(function(){
//            cylinder16.rotation.x = Math.PI * 0.5;
//            cylinder16.rotation.z = Math.PI * 0.5;
//            cylinder16.material.color.setHex(0xffffff);
//        },10000);

        var SphereGeometry = new THREE.SphereGeometry(5, 160, 160);
        var Spherematerial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x444444});
        var sphere3 = new THREE.Mesh(SphereGeometry, Spherematerial);
        sphere3.overdraw = true;
        sphere3.position.set(0, 50, 30);

        var SphereGeometry = new THREE.SphereGeometry(5, 160, 160);
        var Spherematerial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x444444});
        var sphere4 = new THREE.Mesh(SphereGeometry, Spherematerial);
        sphere4.overdraw = true;
        sphere4.position.set(0, 50, -20);

        //this.scene.add(cylinder16);
        groundset.add(cube90);
        groundset.add(cylinder15);

        groundset.add(this.cylinder17);
        groundset.add(sphere3);
        groundset.add(sphere4);
        groundset.position.set(310, -125, 350);
        groundset.rotation.y = Math.PI * 0.5;


        var groundset1 = new THREE.Object3D();
        groundset1 = groundset.clone();
        groundset1.overdraw = true;
        groundset1.position.set(210, -125, 350);
        groundset1.rotation.y = Math.PI * 0.5;

        var groundset2 = new THREE.Object3D();
        groundset2 = groundset.clone();
        groundset2.overdraw = true;
        groundset2.position.set(400, 10, 60);
        groundset2.rotation.y = Math.PI * 0;
        groundset2.scale.set(0.6, 0.6, 0.6);
        
        var cylindergeometry = new THREE.CylinderGeometry(1.5, 1.5, 30, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xcccccc});
        this.cylinder60 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder60.overdraw = true;
        this.cylinder60.position.set(400, 30, 72);
        this.cylinder60.rotation.x = Math.PI * 0;
        this.cylinder60.rotation.z = Math.PI * 0;


        var cylindergeometry = new THREE.CylinderGeometry(0.4, 0.4, 183, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder65 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder65.overdraw = true;
        this.cylinder65.position.set(413.1, 65.9, -42.5);
        this.cylinder65.rotation.x = Math.PI * -0.408;
        this.cylinder65.rotation.z = Math.PI * -0.045;

        var cube91 = new THREE.Mesh(new THREE.BoxGeometry(75, 10, 140), new THREE.MeshPhongMaterial({wireframe: false, color: 0xAAAAAA}));
        cube91.overdraw = true;
        cube91.position.set(275, -152.5, 350);
        cube91.rotation.y = Math.PI * 0.5;

        var cube92 = new THREE.Mesh(new THREE.BoxGeometry(60, 25, 75), new THREE.MeshNormalMaterial({wireframe: false, color: 0xAAAAAA}));
        cube92.overdraw = true;
        cube92.position.set(275, -125, 350);


        

        var cylindergeometry = new THREE.CylinderGeometry(1, 1, 175, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder23 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder23.overdraw = true;
        this.cylinder23.position.set(160, -60, 270);
        this.cylinder23.rotation.x = Math.PI * -0.43;
        this.cylinder23.rotation.z = Math.PI * 0.12;


        var cylindergeometry = new THREE.CylinderGeometry(1, 1, 244, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder24 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder24.overdraw = true;
        this.cylinder24.position.set(308, -35, 241);
        this.cylinder24.rotation.x = Math.PI * -0.392;
        this.cylinder24.rotation.z = Math.PI * -0.05;



        this.grp1 = new THREE.Object3D();
        var cylindergeometry = new THREE.CylinderGeometry(5, 5, 164, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x00ffff});
        var cylinder25 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        cylinder25.overdraw = true;
        cylinder25.position.set(210, -78, 53);



        var cube3 = new THREE.Mesh(new THREE.BoxGeometry(20, 5, 20), new THREE.MeshPhongMaterial({wireframe: false, color: 0xAAAAAA}));
        cube3.overdraw = true;
        cube3.position.set(327, 3, 130);
        cube3.rotation.x = Math.PI * 0;

        var cylindergeometry = new THREE.CylinderGeometry(2.5, 2.5, 185, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder27 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder27.overdraw = true;
        this.cylinder27.position.set(210, 82.5, 53);

        var cylindergeometry = new THREE.CylinderGeometry(1, 1, 180, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder28 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder28.overdraw = true;
        this.cylinder28.position.set(2.5, 84, 0);
        this.cylinder28.rotation.z = Math.PI * 0;


        var cylindergeometry = new THREE.CylinderGeometry(1, 1, 212, 75, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666});
        this.cylinder29 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder29.overdraw = true;
        this.cylinder29.position.set(105, 174, 26);
        this.cylinder29.rotation.z = Math.PI * 0.5;
        this.cylinder29.rotation.y = Math.PI * -0.08;

        this.grp1.add(cylinder25);
        this.grp1.add(this.cylinder27);
        this.grp1.add(this.cylinder28);
        this.grp1.add(this.cylinder29);
        this.grp1.position.set(313, 0, -85);
        this.grp1.rotation.y = Math.PI * -0.4;

        this.grp2 = new THREE.Object3D();
        this.grp2 = this.grp1.clone();
        this.grp2.position.set(591, -85, 10);
        this.grp2.scale.set(0.5, 0.46, 0.5);
        this.grp2.rotation.y = Math.PI * 1.2;

        var cylindergeometry = new THREE.CylinderGeometry(1, 1, 228, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder26 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder26.overdraw = true;
        this.cylinder26.position.set(200, 23, 127);
        this.cylinder26.rotation.x = Math.PI * -0.21;
        this.cylinder26.rotation.z = Math.PI * -0.22;



//spring starts

        this.spring = new THREE.Object3D();

        var torusgeometry = new THREE.TorusGeometry(5, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0x6666666, shading: THREE.FlatShading});
        this.torus21 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus21.position.set(735, 89, -120);
        this.torus21.rotation.x = Math.PI * 0.5;


        var torusgeometry = new THREE.TorusGeometry(5, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0x666666, shading: THREE.FlatShading});
        this.torus22 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus22.position.set(735, 93, -120);
        this.torus22.rotation.x = Math.PI * 0.5;


        var torusgeometry = new THREE.TorusGeometry(5, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0x666666, shading: THREE.FlatShading});
        this.torus23 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus23.position.set(735, 97, -120);
        this.torus23.rotation.x = Math.PI * 0.5;



        var torusgeometry = new THREE.TorusGeometry(5, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0x666666, shading: THREE.FlatShading});
        this.torus24 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus24.position.set(735, 101, -120);
        this.torus24.rotation.x = Math.PI * 0.5;



        var torusgeometry = new THREE.TorusGeometry(5, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0x666666, shading: THREE.FlatShading});
        this.torus25 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus25.position.set(735, 105, -120);
        this.torus25.rotation.x = Math.PI * 0.5;

        var torusgeometry = new THREE.TorusGeometry(5, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0x666666, shading: THREE.FlatShading});
        this.torus26 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus26.position.set(735, 109, -120);
        this.torus26.rotation.x = Math.PI * 0.5;

        var torusgeometry = new THREE.TorusGeometry(5, 0.5, 80 * 10, 6 * 15, Math.PI * 2);
        var torusmaterial = new THREE.MeshPhongMaterial({color: 0x666666, shading: THREE.FlatShading});
        this.torus27 = new THREE.Mesh(torusgeometry, torusmaterial);
        this.torus27.position.set(735, 112, -120);
        this.torus27.rotation.x = Math.PI * 0.5;
//        this.torus27.rotation.z = Math.PI * -0.5;
//        
//        
//          var cylindergeometry = new THREE.CylinderGeometry(0.5, 0.5, 5, 100, false);
//        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xb87333});
//        this.cylinder55 = new THREE.Mesh(cylindergeometry, cylindermaterial);
//        this.cylinder55.overdraw = true;
//        this.cylinder55.position.set(735, 109, -122);
//        this.cylinder55.rotation.x = Math.PI * 0.4;
//        this.cylinder55.rotation.z = Math.PI * 0.5;



        this.spring.add(this.torus21);
        this.spring.add(this.torus22);
        this.spring.add(this.torus23);
        this.spring.add(this.torus24);
        this.spring.add(this.torus25);
        this.spring.add(this.torus26);
        this.spring.add(this.torus27);
//  spring.add(this.cylinder55);
        this.spring.position.set(-337, -63, 0);

        var spring1 = new THREE.Object3D();
        this.spring1 = this.spring.clone();
        this.spring1.position.set(-262, -63, 0);

//spring ends



        //load starts

        var cylindergeometry = new THREE.CylinderGeometry(0.5, 0.5, 100, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder61 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder61.overdraw = true;
        this.cylinder61.position.set(530, 75, -120);
        this.cylinder61.rotation.x = Math.PI * 0.5;
        this.cylinder61.rotation.z = Math.PI * 0.5;


        var load = new THREE.Object3D();

        var cylindergeometry = new THREE.CylinderGeometry(4, 4, 30, 100, 50, true);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xb87333});
        this.cylinder62 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder62.doubleSided = true;
        this.cylinder62.overdraw = true;
        this.cylinder62.position.set(571, -25, -120);
//        this.cylinder62.rotation.x = Math.PI * 0.5;
//        this.cylinder62.rotation.z = Math.PI *0.5;

        var cylindergeometry = new THREE.CylinderGeometry(4, 4, 30, 100, 50, true);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0xb87333});
        this.cylinder63 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder63.doubleSided = true;
        this.cylinder63.overdraw = true;
        this.cylinder63.position.set(570, 27, -120);
//        this.cylinder63.rotation.x = Math.PI * 0.5;
//        this.cylinder63.rotation.z = Math.PI *0.5;

        var cylindergeometry = new THREE.CylinderGeometry(0.75, 0.75, 35, 100, false);
        var cylindermaterial = new THREE.MeshPhongMaterial({color: 0x666666});
        this.cylinder64 = new THREE.Mesh(cylindergeometry, cylindermaterial);
        this.cylinder64.overdraw = true;
        this.cylinder64.position.set(570, 58, -120);
        
        
  this.cube220 = new THREE.Mesh(new THREE.BoxGeometry(10, 25, 10), new THREE.MeshPhongMaterial({wireframe: false, color: 0x666666}));
        this.cube220.overdraw = true;
        this.cube220.position.set(570, 0, -120);

        this.cube22 = new THREE.Mesh(new THREE.BoxGeometry(10, 220, 2.5), new THREE.MeshPhongMaterial({wireframe: false, color: 0x006400}));
        this.cube22.overdraw = true;
        this.cube22.position.set(520, -50, -100);
//        this.cube22.rotation.x = Math.PI * 0.5;
//         this.cube22.rotation.y = Math.PI * 0.5;


        this.cube23 = new THREE.Mesh(new THREE.BoxGeometry(10, 220, 2.5), new THREE.MeshPhongMaterial({wireframe: false, color: 0x006400}));
        this.cube23.overdraw = true;
        this.cube23.position.set(620, -50, -100);

        this.cube25 = new THREE.Mesh(new THREE.BoxGeometry(10, 220, 2.50), new THREE.MeshPhongMaterial({wireframe: false, color: 0x006400}));
        this.cube25.overdraw = true;
        this.cube25.position.set(520, -50, -140);
//        this.cube22.rotation.x = Math.PI * 0.5;
//         this.cube22.rotation.y = Math.PI * 0.5;

        this.cube26 = new THREE.Mesh(new THREE.BoxGeometry(10, 220, 2.50), new THREE.MeshPhongMaterial({wireframe: false, color: 0x006400}));
        this.cube26.overdraw = true;
        this.cube26.position.set(620, -50, -140);


        this.cube24 = new THREE.Mesh(new THREE.BoxGeometry(20, 5, 41), new THREE.MeshPhongMaterial({wireframe: false, color: 0x006400}));
        this.cube24.overdraw = true;
        this.cube24.position.set(570, 38, -120);

        this.cube27 = new THREE.Mesh(new THREE.BoxGeometry(110, 20, 7.5), new THREE.MeshPhongMaterial({wireframe: false, color: 0x006400}));
        this.cube27.overdraw = true;
        this.cube27.position.set(570, 50, -102.5);


        this.cube28 = new THREE.Mesh(new THREE.BoxGeometry(110, 20, 7.5), new THREE.MeshPhongMaterial({wireframe: false, color: 0x006400}));
        this.cube28.overdraw = true;
        this.cube28.position.set(570, 50, -137.5);

        this.cube29 = new THREE.Mesh(new THREE.BoxGeometry(110, 20, 7.5), new THREE.MeshPhongMaterial({wireframe: false, color: 0x006400}));
        this.cube29.overdraw = true;
        this.cube29.position.set(570, -50, -102.5);


        this.cube30 = new THREE.Mesh(new THREE.BoxGeometry(110, 20, 7.5), new THREE.MeshPhongMaterial({wireframe: false, color: 0x006400}));
        this.cube30.overdraw = true;
        this.cube30.position.set(570, -50, -137.5);

        this.cube31 = new THREE.Mesh(new THREE.BoxGeometry(20, 5, 41), new THREE.MeshPhongMaterial({wireframe: false, color: 0x006400}));
        this.cube31.overdraw = true;
        this.cube31.position.set(570, -38, -120);


        load.add(this.cylinder62);
        load.add(this.cylinder63);
        load.add(this.cube22);
         load.add(this.cube220);
        load.add(this.cube23);
        load.add(this.cube24);
        load.add(this.cube25);
        load.add(this.cube26);
        load.add(this.cube27);
        load.add(this.cube28);
        load.add(this.cube29);
        load.add(this.cube30);
        load.add(this.cylinder64);
        load.add(this.cube31);
        load.position.set(181, 0, -36);
        load.scale.set(0.7, 1, 0.7);
//load ends




        //this.scene.add(this.star);

        this.scene.add(this.spring);
        this.scene.add(this.spring1);

        this.scene.add(this.cylinder1);
        this.scene.add(this.cylinder2);
        this.scene.add(this.cylinder4);
        this.scene.add(this.cylinder5);
        this.scene.add(this.cylinder6);
        this.scene.add(this.cylinder41);
        this.scene.add(this.cylinder42);
        this.scene.add(this.cylinder43);
        this.scene.add(this.cylinder44);
        this.scene.add(this.cylinder52);
        this.scene.add(this.cylinder53);
        this.scene.add(this.cylinder54);


        this.scene.add(this.cylinder45);
        this.scene.add(this.cube5);
        this.scene.add(this.cube6);
        this.scene.add(this.cube7);
        this.scene.add(this.cube8);
        this.scene.add(this.cube9);
        this.scene.add(this.cube15);
        this.scene.add(this.cube16);
        this.scene.add(this.cube17);
        this.scene.add(this.cube18);
        this.scene.add(this.cube19);
        this.scene.add(this.cube20);
        this.scene.add(this.cube21);

        this.scene.add(this.cylinder47);
        this.scene.add(this.cylinder48);
        this.scene.add(this.cylinder49);
        this.scene.add(this.cylinder51);
        this.scene.add(this.torus1);
        this.scene.add(this.torus2);
        this.scene.add(this.torus3);
        this.scene.add(this.torus4);
        this.scene.add(this.torus5);
        this.scene.add(this.torus6);

        this.scene.add(plane);
        this.scene.add(this.table);
        this.scene.add(this.cube11);
        this.scene.add(this.cube12);
        this.scene.add(this.cube13);
        this.scene.add(this.cube14);
        this.scene.add(cube3);
        this.scene.add(this.cube4);
        this.scene.add(this.tableColumn1);
        this.scene.add(this.tableColumn2);
        this.scene.add(this.tableColumn3);
        this.scene.add(this.tableColumn4);
        this.scene.add(group1);
        this.scene.add(group2);
        this.scene.add(group3);
        this.scene.add(group4);
        this.scene.add(group5);
        this.scene.add(group6);
        this.scene.add(group7);
        this.scene.add(group8);

        this.scene.add(supply);
        this.scene.add(supply2);
        this.scene.add(this.cylinder56);
        this.scene.add(this.cylinder57);
        this.scene.add(this.cylinder58);
        this.scene.add(this.cylinder59);
        this.scene.add(this.cylinder60);
        this.scene.add(this.cylinder65);
        this.scene.add(this.cylinder66);


        this.scene.add(groundset);
        this.scene.add(groundset1);
        this.scene.add(groundset2);
        this.scene.add(cube91);
        this.scene.add(cube92);
        this.scene.add(this.cylinder23);
        this.scene.add(this.cylinder24);
        this.scene.add(this.cylinder16);
        this.scene.add(this.cylinder166);
        this.scene.add(this.cylinder26);

        this.scene.add(this.cylinder61);
        this.scene.add(load);


//        this.scene.add(this.cylinder28);
//        this.scene.add(this.cylinder29);
        this.scene.add(this.grp1);
        this.scene.add(this.grp2);

        this.container.addEventListener('mouseover', onContainerMouseOver, false);
        this.container.addEventListener('mouseout', onContainerMouseOut, false);
//        this.container.addEventListener('mouseout', onContainerMouseDown, false);
//        this.container.addEventListener('mouseout', onContainerMouseUp, false);
//        document.addEventListener('mousemove', onContainerMouseMove, false);
//        document.addEventListener('mousedown', onContainerMouseDown, false);
//        document.addEventListener('keydown', onContainerKeyDown, false);
//        document.addEventListener('keyup', onContainerKeyUp, false);
//        document.addEventListener('touchstart', onDocumentTouchStart, false);
//        document.addEventListener('touchmove', onDocumentTouchMove, false);
    }
};

function onContainerMouseOver() {
    CUBEScene.controls.enabled = true;
}
function onContainerMouseOut() {
    CUBEScene.controls.enabled = false;
}
//function onContainerMouseDown() {
//    CUBEScene.controls.enabled = true;
//}
//function onContainerMouseUp() {
//    CUBEScene.controls.enabled =false;
//}
// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    update();
    render();
}

// Update controls and stats
function update() {
//    AXISCubeScene.controls.update(AXISCubeScene.clock.getDelta());
    CUBEScene.controls.update();
//    CUBEScene.stats.update();
}
// Render the scene
function render() {
    if (CUBEScene.renderer) {
        CUBEScene.renderer.render(CUBEScene.scene, CUBEScene.camera);
    }
}