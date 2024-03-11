import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: -92.81919533014297,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 30,
    size: 78.75,
    visible: true,
    layerOrder: 1,
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80.5,
    visible: true,
    layerOrder: 2,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
