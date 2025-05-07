let model;
let modelLoaded = false;

async function loadModel() {
  model = await tf.loadLayersModel('./model/model.json');  
  console.log("Model Loaded Successfully!");
  modelLoaded = true;
}
window.onload = loadModel;
