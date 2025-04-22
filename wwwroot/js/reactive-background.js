function createElementListener() {
  const container = document.getElementById("container");
  const block = document.getElementById("block");

  // Moving a block within a container
  container.addEventListener("mousemove", function (e) {
    // Container and block dimensions
    const rectCont = container.getBoundingClientRect();
    const rectBlock = block.getBoundingClientRect();

    // Block width and height rounded to nearest ones position
    const blockWidth = Math.round(rectBlock.width);
    const blockHeight = Math.round(rectBlock.height);

    // Overall Container Dimensions
    const containerWidth = Math.round(rectCont.width);
    const containerHeight = Math.round(rectCont.height);

    // Maximum travel allowable in relation to mouse position. accounts for block and border size.
    const maxWidth = containerWidth - blockWidth - 3;
    const maxHeight = containerHeight - blockHeight - 4;

    // Mouse Position in relation to container and at center of block
    const positionX = Math.round(e.clientX - rectCont.left - blockWidth / 2);
    const positionY = Math.round(e.clientY - rectCont.top - blockHeight / 2);

    //
    if (positionX >= 0 && positionX < maxWidth) {
      container.style.setProperty("--pos-x", `${positionX}px`);
    }

    if (positionY >= 0 && positionY < maxHeight) {
      container.style.setProperty("--pos-y", `${positionY}px`);
    }
    console.log(`X: ${positionX}, Y: ${positionY}`);
  });

  // Moving blocks in relation to their respective containers
  // Based on mouse movements outside those containers
}

function createBackgroundListener() {
  const background = document.getElementById("reactBackground");
  const reactiveContainer = document.getElementById("rc1");
  const block = document.getElementById("b1");
  const block2 = document.getElementById("b2");
  const block3 = document.getElementById("b3");
  const block4 = document.getElementById("b4");

  background.addEventListener("mousemove", function (e) {
    const backgroundDimensions = background.getBoundingClientRect();
    const containerDimensions = reactiveContainer.getBoundingClientRect();
    const blockDimensions = block.getBoundingClientRect();

    // calculate background to container width and height ratios
    const backgroundPercentX = Math.round(backgroundDimensions.width / 100);
    const backgroundPercentY = Math.round(backgroundDimensions.height / 100);
    const containerPercentX = Math.round(containerDimensions.width / 100);
    const containerPercentY = Math.round(containerDimensions.height / 100);

    // block dimensions ratio in relation to background
    const blockWidthRatio = Math.round(
      (blockDimensions.width / containerDimensions.width) *
        100 *
        backgroundPercentX
    );
    const blockHeightRatio = Math.round(
      (blockDimensions.height / containerDimensions.height) *
        100 *
        backgroundPercentY
    );

    // calculate container boundaries
    const maxWidth = Math.round(backgroundDimensions.width);
    const maxHeight = Math.round(backgroundDimensions.height);

    // mouse position in relation to background
    const positionX = Math.round(e.clientX - backgroundDimensions.left);
    const positionY = Math.round(e.clientY - backgroundDimensions.top);

    //increment multiplier for block movement within container
    const percentageMovedX = Math.round(
      (positionX / backgroundDimensions.width) * 100
    );
    const percentageMovedY = Math.round(
      (positionY / backgroundDimensions.height) * 100
    );

    // blcok position within the container
    const blockPositionX = Math.round(containerPercentX * percentageMovedX);
    const blockPositionY = Math.round(containerPercentY * percentageMovedY);

    // increment based on ratio
    if (positionX >= 0 && positionX < maxWidth) {
      block.style.setProperty("--con-x", `${blockPositionX}px`);
      block2.style.setProperty("--con-x", `${blockPositionX}px`);
      block3.style.setProperty("--con-x", `${blockPositionX}px`);
      block4.style.setProperty("--con-x", `${blockPositionX}px`);
    }

    if (positionY >= 0 && positionY < maxHeight) {
      block.style.setProperty("--con-y", `${blockPositionY}px`);
      block2.style.setProperty("--con-y", `${blockPositionY}px`);
      block3.style.setProperty("--con-y", `${blockPositionY}px`);
      block4.style.setProperty("--con-y", `${blockPositionY}px`);
    }

    // calculate box boundaries
    console.log(
      `x: ${blockPositionX}, y: ${blockPositionY}, cWid: ${maxWidth}, cHei: ${maxHeight}`
    );
  });

  // you need to use a ratio to calculate movements
}
