// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George , Khalil
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateVolumeOfPyramid() {
  // input
  const length = parseFloat(document.getElementById('length-of-pyramid').value)
  const width = parseFloat(document.getElementById('width-of-pyramid').value)
  const height = parseFloat(document.getElementById('height-of-pyramid').value)
  // process
  const volumeOfPayrmid = (length * width * height) / 3
  // output
  document.getElementById('volume').innerHTML
    = 'Volume is: ' + length * width * height / 3 + ' mm³.'
}

