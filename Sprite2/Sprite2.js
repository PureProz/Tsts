/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 179.56779487495731,
        y: 21.018111055703713,
      }),
      new Costume("costume2", "./Sprite2/costumes/costume2.svg", {
        x: 102.93523328991779,
        y: 21.123501859824017,
      }),
      new Costume("image2vector 2", "./Sprite2/costumes/image2vector 2.svg", {
        x: 14.225878866844766,
        y: 14.867496366377026,
      }),
      new Costume("image2vector 3", "./Sprite2/costumes/image2vector 3.svg", {
        x: 181.57755537690844,
        y: 37.23086904829157,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2),
      new Trigger(Trigger.BROADCAST, { name: "3" }, this.whenIReceive3),
    ];
  }

  *whenGreenFlagClicked() {
    this.direction = 90;
    this.costume = "costume1";
    this.size = 80;
  }

  *whenIReceiveMessage1() {
    this.direction = 90;
    this.costume = "costume2";
    for (let i = 0; i < 25; i++) {
      this.size += (40 - this.size) / 4;
      yield;
    }
  }

  *whenIReceive2() {
    this.direction = 90;
    this.costume = "costume1";
    for (let i = 0; i < 25; i++) {
      this.size += (80 - this.size) / 4;
      yield;
    }
  }

  *whenIReceive3() {
    this.direction = 90;
    this.costume = "image2vector 2";
    for (let i = 0; i < 25; i++) {
      this.direction += (45 - this.direction) / 4;
      this.size += (100 - this.size) / 4;
      yield;
    }
  }
}
