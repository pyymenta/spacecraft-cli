# Spacecraft

![image](https://travis-ci.org/pyymenta/spacecraft-cli.svg?branch=master)

A simple CLI to solve the Spacecraft Problem, made with [TypeScript](https://www.typescriptlang.org/)

Let's build a rocket together!

![image](./rocket.jpg)

## The Problem
Say, the Canadian Space Agency is building an unmanned spacecraft that’ll go to the moon. 

![to the moon](https://i.imgur.com/15vvnfN.png)

Here’s some more info about the project.
* The ship’s starting coordinates are `(0, 0)`, which is on Earth.
* The ship’s final destination is `(0, 250)`, which is on the moon.
* The ship will be controlled over a CLI using a standard keyboard as follows:

* The ship starts at `(0, 0)` at 0 speed, i.e. at complete rest.
The ship only moves when a valid key is pressed.
* Pressing `W` increases the ship’s speed and then moves it forward by speed units.
    * The ship’s maximum speed is 5.
* Pressing `S` decreases the ship’s speed and then moves it forward by speed units.
    * The ship’s minimum speed is 0.
    * After launch, the ship cannot go below speed 1, i.e. it always moves forward until it reaches the moon.

* Pressing `A` and `D` move the ship left and right by one unit respectively.
* The ship also moves forward by speed units.

## Problem
Write a CLI program in your preferred language to simulate the above spacecraft. Display output as follows:

* Begin with `(0, 0) ready for launch`.
* After every movement, display the updated position.
* If the ship goes more than 5 points to the left/right, display `wrong trajectory`.
* If the ship tries to decrease the speed below 1, display `minimum speed`.
* If the ship tries to increase the speed over 5, display `maximum speed`.
* When the ship reaches `(0, 250)` display `on the moon`.
* If the ship goes beyond 250 on the y-axis, display `contact lost`.

## Sample output
```
(0, 0) # Begin with original position.
(0, 1) # W increases the speed to 1 and moves forward.
(0, 3) # W increases the speed to 2 and moves forward.
(-1, 5) # A moves the ship left and forward.
(0, 7) # D moves the ship right and forward.
(0, 8) # S decreases the speed to 1 and moves forward.
...
(0, 250) on the moon # Ship reaches the moon
```

# Getting started

## Installation

To get started locally, follow these instructions:

1.  Clone to your local computer using `git`.
2.  Make sure you have Node installed; see instructions [here](https://nodejs.org/en/download/).
3.  Make sure that you have `yarn` installed; see instructions [here](https://yarnpkg.com/lang/en/docs/install/).
4.  Run `yarn install` to install dependencies.

## Usage

```sh
# starts 🚀 on coordinates (0,0) - Earth
yarn start

# Use W, A, S, or D  to starting control 🚀 .
```

## Build the CLI bundle

```sh
yarn build
```

## Run tests

```sh
yarn test
```
