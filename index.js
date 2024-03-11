/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Sprite1/costumes/1.svg", {
        x: 213.36731999999998,
        y: 118.45678000000002,
      }),
      new Costume("2", "./Sprite1/costumes/2.svg", {
        x: 213.61731999999998,
        y: 118.70678000000005,
      }),
      new Costume("3", "./Sprite1/costumes/3.svg", {
        x: 213.86731999999998,
        y: 118.95678000000008,
      }),
      new Costume("4", "./Sprite1/costumes/4.svg", {
        x: 214.11731999999998,
        y: 119.20678000000011,
      }),
      new Costume("5", "./Sprite1/costumes/5.svg", {
        x: 214.36731999999998,
        y: 119.45678000000014,
      }),
      new Costume("6", "./Sprite1/costumes/6.svg", {
        x: 214.61731999999998,
        y: 119.70678000000017,
      }),
      new Costume("7", "./Sprite1/costumes/7.svg", {
        x: 214.86731999999998,
        y: 119.9567800000002,
      }),
      new Costume("8", "./Sprite1/costumes/8.svg", {
        x: 215.11731999999998,
        y: 120.20678000000022,
      }),
      new Costume("9", "./Sprite1/costumes/9.svg", {
        x: 215.36731999999998,
        y: 120.45678000000025,
      }),
      new Costume("10", "./Sprite1/costumes/10.svg", {
        x: 215.61731999999998,
        y: 120.70678000000028,
      }),
      new Costume("11", "./Sprite1/costumes/11.svg", {
        x: 215.86731999999998,
        y: 120.95678000000031,
      }),
      new Costume("12", "./Sprite1/costumes/12.svg", {
        x: 216.11731999999998,
        y: 121.20678000000031,
      }),
      new Costume("13", "./Sprite1/costumes/13.svg", {
        x: 216.36731999999998,
        y: 121.45678000000031,
      }),
      new Costume("14", "./Sprite1/costumes/14.svg", {
        x: 216.61731999999998,
        y: 121.70678000000034,
      }),
      new Costume("15", "./Sprite1/costumes/15.svg", {
        x: 216.86731999999998,
        y: 121.95678000000036,
      }),
      new Costume("16", "./Sprite1/costumes/16.svg", {
        x: 217.11731999999998,
        y: 122.20678000000039,
      }),
      new Costume("17", "./Sprite1/costumes/17.svg", {
        x: 217.36731999999998,
        y: 122.45678000000042,
      }),
      new Costume("18", "./Sprite1/costumes/18.svg", {
        x: 217.61731999999998,
        y: 122.70678000000045,
      }),
      new Costume("19", "./Sprite1/costumes/19.svg", {
        x: 217.86731999999998,
        y: 122.95678000000048,
      }),
      new Costume("20", "./Sprite1/costumes/20.svg", {
        x: 218.11731999999998,
        y: 123.2067800000005,
      }),
      new Costume("21", "./Sprite1/costumes/21.svg", {
        x: 218.36731999999998,
        y: 123.45678000000053,
      }),
      new Costume("22", "./Sprite1/costumes/22.svg", {
        x: 218.61731999999998,
        y: 123.70678000000056,
      }),
      new Costume("23", "./Sprite1/costumes/23.svg", {
        x: 218.86731999999998,
        y: 123.95678000000059,
      }),
      new Costume("24", "./Sprite1/costumes/24.svg", {
        x: 219.11731999999998,
        y: 124.20678000000062,
      }),
      new Costume("25", "./Sprite1/costumes/25.svg", {
        x: 219.36731999999998,
        y: 124.45678000000065,
      }),
      new Costume("26", "./Sprite1/costumes/26.svg", {
        x: 219.61731999999998,
        y: 124.70678000000073,
      }),
      new Costume("27", "./Sprite1/costumes/27.svg", {
        x: 219.86731999999998,
        y: 124.9567800000007,
      }),
      new Costume("28", "./Sprite1/costumes/28.svg", {
        x: 220.11731999999998,
        y: 125.20678000000073,
      }),
      new Costume("29", "./Sprite1/costumes/29.svg", {
        x: 220.36731999999998,
        y: 125.45678000000076,
      }),
      new Costume("30", "./Sprite1/costumes/30.svg", {
        x: 220.61731999999998,
        y: 125.70678000000079,
      }),
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2),
    ];
  }

  *whenGreenFlagClicked() {
    this.direction = -90;
    this.costume = 1;
    this.size = 80;
    for (let i = 0; i < 29; i++) {
      this.costumeNumber++;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(0.5);
    while (true) {
      this.broadcast("message1");
      for (let i = 0; i < 25; i++) {
        this.size += (40 - this.size) / 4;
        this.direction += (0 - this.direction) / 4;
        yield;
      }
      this.broadcast("2");
      for (let i = 0; i < 25; i++) {
        this.size += (80 - this.size) / 4;
        this.direction += (90 - this.direction) / 4;
        yield;
      }
      this.broadcast("3");
      for (let i = 0; i < 25; i++) {
        this.size += (40 - this.size) / 4;
        this.direction += (180 - this.direction) / 4;
        yield;
      }
      this.broadcast("2");
      this.direction = -179;
      for (let i = 0; i < 25; i++) {
        this.size += (80 - this.size) / 4;
        this.direction += (-90 - this.direction) / 4;
        yield;
      }
      yield* this.wait(0.5);
      yield;
    }
  }

  *whenIReceive2() {}
}
