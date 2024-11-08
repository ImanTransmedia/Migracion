import { loadVideo } from "./loader.js";
import { loadAudio } from "./loader.js";

const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener("DOMContentLoaded", async() => {
  
  // Configuración de MindAR y Three.js
  const mindarThree = new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "Target/targetsv2.mind"
  });

  
  
    const { renderer, scene, camera } = mindarThree;

//#region Video

    const videosData = [
      {
        url: "personajes/animacion personaje prop2.mp4",
        position: new THREE.Vector3(0, 0, 0.1),
      },

    ];

    const videos = await Promise.all(
      videosData.map(async (videoData) => {
        const videoTexture = await loadVideo(videoData.url);
        const video = videoTexture.image;

        const geometry = new THREE.PlaneGeometry(1, 1080 / 1080);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: videoTexture });
        const plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = 0;
        plane.position.copy(videoData.position);
        plane.scale.multiplyScalar(1);

        const anchor = mindarThree.addAnchor(0);
        anchor.group.add(plane);


        anchor.onTargetFound = () => {
          video.play();

        };

        anchor.onTargetLost = () => {
          video.pause();

        };

        return { video, plane };
      })
    );

    //#endregion


//#region Video2

    const videosData1 = [
      {
        url: "Videos/Test1.mp4",
        position: new THREE.Vector3(0, 0, 0.1),
      },

    ];

    const videos1 = await Promise.all(
      videosData1.map(async (videoData1) => {
        const videoTexture1 = await loadVideo(videoData1.url);
        const video = videoTexture1.image;

        const geometry = new THREE.PlaneGeometry(1, 1080 / 1080);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: videoTexture1 });
        const plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = 0;
        plane.position.copy(videoData1.position);
        plane.scale.multiplyScalar(1);

        const anchor2 = mindarThree.addAnchor(1);
        anchor2.group.add(plane);


        anchor2.onTargetFound = () => {
          video.play();

        };

        anchor2.onTargetLost = () => {
          video.pause();

        };

        return { video, plane };
      })
    );

    //#endregion
  
//#region Video3

    const videosData2 = [
      {
        url: "Paisajes/animacion backgroud prop 2.mp4",
        position: new THREE.Vector3(0, 0, 0.1),
      },

    ];

    const videos2 = await Promise.all(
      videosData2.map(async (videoData2) => {
        const videoTexture2 = await loadVideo(videoData2.url);
        const video = videoTexture2.image;

        const geometry = new THREE.PlaneGeometry(1, 1080 / 1080);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: videoTexture2 });
        const plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = 0;
        plane.position.copy(videoData2.position);
        plane.scale.multiplyScalar(1);

        const anchor3 = mindarThree.addAnchor(2);
        anchor3.group.add(plane);


        anchor3.onTargetFound = () => {
          video.play();

        };

        anchor3.onTargetLost = () => {
          video.pause();

        };

        return { video, plane };
      })
    );

    //#endregion

//#region Video4

    const videosData3 = [
      {
        url: "Paisajes/animacion backgroud prop 3.mp4",
        position: new THREE.Vector3(0, 0, 0.1),
      },

    ];

    const videos3 = await Promise.all(
      videosData3.map(async (videoData3) => {
        const videoTexture3 = await loadVideo(videoData3.url);
        const video = videoTexture3.image;

        const geometry = new THREE.PlaneGeometry(1, 1080 / 1080);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: videoTexture3 });
        const plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = 0;
        plane.position.copy(videoData3.position);
        plane.scale.multiplyScalar(1);

        const anchor4 = mindarThree.addAnchor(3);
        anchor4.group.add(plane);


        anchor4.onTargetFound = () => {
          video.play();

        };

        anchor4.onTargetLost = () => {
          video.pause();

        };

        return { video, plane };
      })
    );

    //#endregion
  
  
  //#region Video5

    const videosData4 = [
      {
        url: "Paisajes/animacion backgroud prop 4.mp4",
        position: new THREE.Vector3(0, 0, 0.1),
      },

    ];

    const videos4 = await Promise.all(
      videosData4.map(async (videoData4) => {
        const videoTexture4 = await loadVideo(videoData4.url);
        const video = videoTexture4.image;

        const geometry = new THREE.PlaneGeometry(1, 1080 / 1080);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: videoTexture4 });
        const plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = 0;
        plane.position.copy(videoData4.position);
        plane.scale.multiplyScalar(1);

        const anchor3 = mindarThree.addAnchor(4);
        anchor3.group.add(plane);


        anchor3.onTargetFound = () => {
          video.play();

        };

        anchor3.onTargetLost = () => {
          video.pause();

        };

        return { video, plane };
      })
    );

    //#endregion

//#region Video6

    const videosData5 = [
      {
        url: "personajes/Animacion Personajes prop_1.mp4",
        position: new THREE.Vector3(0, 0, 0.1),
      },

    ];

    const videos5 = await Promise.all(
      videosData5.map(async (videoData5) => {
        const videoTexture5 = await loadVideo(videoData5.url);
        const video = videoTexture5.image;

        const geometry = new THREE.PlaneGeometry(1, 1080 / 1080);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: videoTexture5 });
        const plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = 0;
        plane.position.copy(videoData5.position);
        plane.scale.multiplyScalar(1);

        const anchor4 = mindarThree.addAnchor(5);
        anchor4.group.add(plane);


        anchor4.onTargetFound = () => {
          video.play();

        };

        anchor4.onTargetLost = () => {
          video.pause();

        };

        return { video, plane };
      })
    );

    //#endregion


 //#region Textura
    
    const anchor4 = mindarThree.addAnchor(6);
    // Carga la textura de la imagen
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('Graficas/1.png');

    // Crea un material usando la textura
    const material2 = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture });

    // Crea una geometría (por ejemplo, un plano)
    const geometry2 = new THREE.PlaneGeometry(1, 1);

    // Crea el mesh combinando la geometría y el material
    const mesh2 = new THREE.Mesh(geometry2, material2);
                             
    anchor4.group.add (mesh2);

    //#endregion

 //#region Textura
    
    const anchor8 = mindarThree.addAnchor(7);
    // Carga la textura de la imagen
    const textureLoader8 = new THREE.TextureLoader();
    const texture8 = textureLoader8.load('Paisajes/e9131c558bf94fc68be3baac3837b7f3.jpg');

    // Crea un material usando la textura
    const material8 = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture });

    // Crea una geometría (por ejemplo, un plano)
    const geometry8 = new THREE.PlaneGeometry(1, 1);

    // Crea el mesh combinando la geometría y el material
    const mesh8 = new THREE.Mesh(geometry8, material8);
                             
    anchor8.group.add (mesh8);

    //#endregion
  
  
   //#region Textura
    
    const anchor9 = mindarThree.addAnchor(8);
    // Carga la textura de la imagen
    const textureLoader9 = new THREE.TextureLoader();
    const texture9 = textureLoader9.load('personajes/Captura de pantalla 2024-11-07 125159.png');

    // Crea un material usando la textura
    const material9 = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture });

    // Crea una geometría (por ejemplo, un plano)
    const geometry9 = new THREE.PlaneGeometry(1, 1);

    // Crea el mesh combinando la geometría y el material
    const mesh9 = new THREE.Mesh(geometry9, material9);
                             
    anchor9.group.add (mesh9);

    //#endregion

  
  //#region Textura
    
    const anchor10 = mindarThree.addAnchor(9);
    // Carga la textura de la imagen
    const textureLoader10 = new THREE.TextureLoader();
    const texture10 = textureLoader10.load('personajes/Captura de pantalla 2024-11-07 125159.png');

    // Crea un material usando la textura
    const material10 = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture });

    // Crea una geometría (por ejemplo, un plano)
    const geometry10 = new THREE.PlaneGeometry(1, 1);

    // Crea el mesh combinando la geometría y el material
    const mesh10 = new THREE.Mesh(geometry10, material10);
                             
    anchor9.group.add (mesh10);

    //#endregion



//ejecutable  
await mindarThree.start();

    renderer.setAnimationLoop(() => {
      videos.forEach(({ video, plane }) => {});
      videos1.forEach(({ video, plane }) => {});
      videos2.forEach(({ video, plane }) => {});
      videos3.forEach(({ video, plane }) => {});
      videos4.forEach(({ video, plane }) => {});
      videos5.forEach(({ video, plane }) => {});
      

      renderer.render(scene, camera);
    });
  
});
