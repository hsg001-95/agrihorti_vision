const diseaseInfo = {
  "Canker in Apple Tree": {
    symptoms: "Sunken, cracked bark, brown sap oozing, branch dieback.",
    treatment: "Prune infected branches, apply copper fungicide, disinfect tools.",
    future: "Regular pruning, prevent wounds during harvesting.",
    care: "Avoid overwatering, fertilize properly in spring.",
    medicines: "Copper-based fungicides, Bordeaux mixture.",
    precautions: "Disinfect pruning tools before and after use."
  },
  "Apple Scub": {
    symptoms: "Olive-green or brown spots on leaves and fruits.",
    treatment: "Use fungicides like Captan or Mancozeb, remove infected leaves.",
    future: "Apply fungicides before rainy seasons.",
    care: "Promote good air circulation by proper pruning.",
    medicines: "Captan, Mancozeb sprays.",
    precautions: "Avoid overhead watering."
  },
  "Tikka Disease (Leaf Spot)": {
    symptoms: "Brown circular spots on leaves, defoliation.",
    treatment: "Apply fungicide sprays like Mancozeb at regular intervals.",
    future: "Plant resistant varieties if available.",
    care: "Ensure proper spacing and sunlight.",
    medicines: "Mancozeb, Chlorothalonil.",
    precautions: "Remove and destroy infected debris."
  },
  "Bacterial Wilt": {
    symptoms: "Wilting of leaves without yellowing, blackening of vascular tissues.",
    treatment: "Remove infected plants, rotate crops, avoid waterlogging.",
    future: "Plant wilt-resistant varieties.",
    care: "Maintain good soil drainage.",
    medicines: "Copper hydroxide sprays (limited effect).",
    precautions: "Avoid injury to roots during field operations."
  },
  "Rust": {
    symptoms: "Orange/red powdery pustules on leaves.",
    treatment: "Use sulfur-based fungicides, remove infected plant parts.",
    future: "Monitor early signs during humid seasons.",
    care: "Plant resistant varieties if possible.",
    medicines: "Sulfur Dust, Wettable Sulfur.",
    precautions: "Do not overcrowd plants."
  },
  "Powdery Mildew": {
    symptoms: "White powdery fungal growth on leaves, stems, and buds.",
    treatment: "Apply neem oil or sulfur sprays, improve air circulation.",
    future: "Preventive sulfur sprays before flowering.",
    care: "Ensure good sunlight exposure.",
    medicines: "Sulfur sprays, Neem oil solution.",
    precautions: "Avoid excess nitrogen fertilization."
  },
  "Leaf Blight": {
    symptoms: "Irregular brown lesions on leaves, premature leaf drop.",
    treatment: "Use copper-based fungicides, prune infected parts.",
    future: "Timely fungicide application before disease onset.",
    care: "Maintain field hygiene, proper fertilization.",
    medicines: "Copper oxychloride, Mancozeb.",
    precautions: "Avoid working in wet fields to prevent spread."
  }
};

async function analyzeImage() {
  if (!modelLoaded) {
    alert("Please wait, model is still loading...");
    return;
  }

  const fileInput = document.getElementById('imageUpload');
  const file = fileInput.files[0];
  if (!file) {
    alert("Please upload an image first!");
    return;
  }

  const preview = document.getElementById('preview');
  preview.src = URL.createObjectURL(file);
  preview.style.display = 'block';

  document.getElementById('loading').style.display = 'block';

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = async () => {
    const tensor = tf.browser.fromPixels(img)
      .resizeNearestNeighbor([224, 224])
      .toFloat()
      .expandDims();

    const prediction = await model.predict(tensor).data();
    const resultIndex = prediction.indexOf(Math.max(...prediction));

    const classes = [
      "Canker in Apple Tree",
      "Apple Scub",
      "Tikka Disease (Leaf Spot)",
      "Bacterial Wilt",
      "Rust",
      "Powdery Mildew",
      "Leaf Blight"
    ];

    const diseaseName = classes[resultIndex];
    const info = diseaseInfo[diseaseName];

    const fullReport = {
      disease: diseaseName,
      symptoms: info.symptoms,
      treatment: info.treatment,
      future: info.future,
      care: info.care,
      medicines: info.medicines,
      precautions: info.precautions,
      date: new Date().toLocaleString()
    };

    // Save to latestReport
    localStorage.setItem("latestReport", JSON.stringify(fullReport));

    // Add to history array
    let history = JSON.parse(localStorage.getItem("reportHistory")) || [];
    history.push(fullReport);
    localStorage.setItem("reportHistory", JSON.stringify(history));

    document.getElementById('loading').style.display = 'none';
    alert("Analysis complete! View your report.");
    window.location.href = "report.html"; // Redirect after analyze
  };
}
let videoStream;

function startCamera() {
  const video = document.getElementById("cameraStream");
  const captureBtn = document.getElementById("captureBtn");

  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      videoStream = stream;
      video.srcObject = stream;
      video.style.display = "block";
      captureBtn.style.display = "inline";
    })
    .catch(err => {
      alert("Camera access denied or not available.");
      console.error(err);
    });
}

function captureImage() {
  const video = document.getElementById("cameraStream");
  const canvas = document.getElementById("snapshotCanvas");
  const context = canvas.getContext("2d");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  videoStream.getTracks().forEach(track => track.stop());
  video.style.display = "none";
  document.getElementById("captureBtn").style.display = "none";

  const imageBlob = dataURLtoBlob(canvas.toDataURL());
  analyzeFromBlob(imageBlob);
}

function dataURLtoBlob(dataurl) {
  const arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  for (let i = 0; i < n; i++) u8arr[i] = bstr.charCodeAt(i);
  return new Blob([u8arr], { type: mime });
}

async function analyzeFromBlob(blob) {
  if (!modelLoaded) {
    alert("Please wait, model is still loading...");
    return;
  }

  const preview = document.getElementById('preview');
  preview.src = URL.createObjectURL(blob);
  preview.style.display = 'block';

  document.getElementById('loading').style.display = 'block';

  const img = new Image();
  img.src = URL.createObjectURL(blob);

  img.onload = async () => {
    const tensor = tf.browser.fromPixels(img)
      .resizeNearestNeighbor([224, 224])
      .toFloat()
      .expandDims();

    const prediction = await model.predict(tensor).data();
    const resultIndex = prediction.indexOf(Math.max(...prediction));

    const classes = [
      "Canker in Apple Tree",
      "Apple Scub",
      "Tikka Disease (Leaf Spot)",
      "Bacterial Wilt",
      "Rust",
      "Powdery Mildew",
      "Leaf Blight"
    ];

    const diseaseName = classes[resultIndex];
    const info = diseaseInfo[diseaseName];

    const fullReport = {
      disease: diseaseName,
      symptoms: info.symptoms,
      treatment: info.treatment,
      future: info.future,
      care: info.care,
      medicines: info.medicines,
      precautions: info.precautions,
      date: new Date().toLocaleString()
    };

    localStorage.setItem("latestReport", JSON.stringify(fullReport));
    let history = JSON.parse(localStorage.getItem("reportHistory")) || [];
    history.push(fullReport);
    localStorage.setItem("reportHistory", JSON.stringify(history));

    document.getElementById('loading').style.display = 'none';
    alert("Analysis complete! View your report.");
    window.location.href = "report.html";
  };
}