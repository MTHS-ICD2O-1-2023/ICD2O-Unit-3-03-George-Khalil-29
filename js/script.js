// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George , Khalil
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateVolumeOfSphere() {
  // input
  const volume = parseFloat(document.getElementById('volume-Of-Sphere').value)
  // process
  const volumeOfSphere = 4 / 3 * 3.14 * volume
  // output
  document.getElementById('volume').innerHTML
    = 'Volume is: ' + 4 / 3 * 3.14 * volume + '.'
}

