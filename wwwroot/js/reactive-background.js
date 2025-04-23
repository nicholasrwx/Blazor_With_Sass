// move a single element in relation to mouse movement across it's container
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

    if (positionX >= 0 && positionX < maxWidth) {
      container.style.setProperty("--pos-x", `${positionX}px`);
    }

    if (positionY >= 0 && positionY < maxHeight) {
      container.style.setProperty("--pos-y", `${positionY}px`);
    }
  });
}

// move elements, within their respective containers, in relation to mouse movement across the entire screen
function createBackgroundListener() {
  const background = document.getElementById("reactBackground");
  const reactiveContainer = document.getElementById("rc1");
  const block = document.getElementById("b1");
  const block2 = document.getElementById("b2");
  const block3 = document.getElementById("b3");
  const block4 = document.getElementById("b4");

  background.addEventListener("mousemove", function (e) {
    // Required for top / left / bottom / right attributes
    const backgroundRect = background.getBoundingClientRect();

    // required for computed areas without borders, or to get border sizes dynamically
    const backgroundDimensions = getComputedStyle(background);
    const containerDimensions = getComputedStyle(reactiveContainer);
    const blockDimensions = getComputedStyle(block);

    // calculate container boundaries
    const maxWidth = Math.round(parseFloat(backgroundDimensions.width));
    const maxHeight = Math.round(parseFloat(backgroundDimensions.height));

    // mouse position in relation to background
    const positionX = Math.round(e.clientX - backgroundRect.left);
    const positionY = Math.round(e.clientY - backgroundRect.top);

    // increment multiplier for block movement within container
    const percentageMovedX = Math.round((positionX / maxWidth) * 100);
    const percentageMovedY = Math.round((positionY / maxHeight) * 100);

    // block position within the container
    const blockPositionX = Math.round(
      (percentageMovedX *
        (parseFloat(containerDimensions.width) -
          parseFloat(blockDimensions.width))) /
        100
    );
    const blockPositionY = Math.round(
      (percentageMovedY *
        (parseFloat(containerDimensions.height) -
          parseFloat(blockDimensions.height))) /
        100
    );

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
  });
}
