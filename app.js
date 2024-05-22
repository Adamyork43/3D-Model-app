// Function to change the viewpoint of the 3D model
function changeView(view) {
    var viewpoint = document.querySelector('#x3dViewpoint'); // Make sure this selector matches your X3D's viewpoint ID
    switch(view) {
        case 'front':
            viewpoint.setAttribute('position', '0 0 5');
            break;
        case 'side':
            viewpoint.setAttribute('position', '5 0 0');
            break;
    }
}

// Function to trigger animations on the models
function triggerAnimation(modelId) {
    var model = document.querySelector(modelId); // Ensure your X3D models have appropriate IDs
    var animation = model.querySelector('TimeSensor'); // Adjust this to your actual X3D structure
    if (animation.getAttribute('enabled') !== 'true') {
        animation.setAttribute('enabled', 'true');
    } else {
        animation.setAttribute('enabled', 'false');
    }
}

// Function to swap textures
function swapTexture(modelId, textureUrl) {
    var model = document.querySelector(modelId); // Model's ID
    var appearance = model.querySelector('Appearance'); // Navigate to the Appearance node
    var texture = appearance.querySelector('ImageTexture');
    texture.setAttribute('url', textureUrl);
}

// Camera control example - change the position of the camera based on predefined views
function setupCameraControls() {
    document.getElementById('frontView').addEventListener('click', () => changeView('front'));
    document.getElementById('sideView').addEventListener('click', () => changeView('side'));
}

// Function to dynamically load the models based on user interaction
function loadModel(modelId, modelUrl) {
    $(modelId).load(modelUrl); // Using jQuery for simplicity
}

$(document).ready(function() {
    setupCameraControls(); // Set up camera control listeners

    // Example event listeners for model interactions
    $('#cokeButton').on('click', function() {
        triggerAnimation('#cokeModel');
    });

    $('#textureChange').on('click', function() {
        swapTexture('#cokeModel', 'newTexture.jpg');
    });

    // Initialize the first model view or any other setup needed
});
function showModel(modelId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        if (section.id === modelId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

