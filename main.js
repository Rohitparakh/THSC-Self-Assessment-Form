let currentQuestion = 1;
let name, phone, age, gender, fitnessGoals = [], height, weight, bmi, goals = [], exercise, activityFrequency, activityDuration, activityIntensity, medicalCondition, waistFat, diagnosedConditions = [], medication, menopause, eatingHabits, foodAllergies = [], waterIntake, caffeineIntake, wholeGrainServings, fruitServings, vegetableServings, proteinServings, eatingOutFrequency, sugarIntake, packedFoodsFrequency, alcoholFrequency, sleepDuration, email;

document.addEventListener("DOMContentLoaded", function() {
  // Hide other questions section initially
  var otherQuestionsSection = document.getElementById('otherQuestionsSection');
  otherQuestionsSection.style.display = 'none';

  // Handle submission of user info
  var userInfoSubmitBtn = document.getElementById('userInfoSubmit');
  userInfoSubmitBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user info
    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');

    name = nameInput.value.trim();
    phone = phoneInput.value.trim();
    email = emailInput.value.trim();

    // Validate user info
    if (name === '' || phone === '' || email === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Assuming validation passes, hide user info section
    var userInfoSection = document.getElementById('userInfoSection');
    userInfoSection.style.display = 'none';
    // Show other questions section
    otherQuestionsSection.style.display = 'block';
    document.querySelector(".btn-group").style.display = "flex";
    document.querySelector(".questionDiv").style.display = "block";
    document.querySelector(".question").style.display = "block";
    if(currentQuestion===1){
    document.querySelector('.btn-group').style.justifyContent = 'right';
    }

    // You can now proceed with displaying the rest of the quiz questions
    // and handling user responses accordingly
  });

  // Add event listeners for other quiz interactions as needed
});


// Hide the intro screen and show the first question when the start button is clicked
// document.getElementById("startButton").addEventListener("click", function() {
//     document.getElementById("introScreen").style.display = "none";
    // document.querySelector(".btn-group").style.display = "flex";
    // document.querySelector(".questionDiv").style.display = "block";
    // document.querySelector(".question").style.display = "block";
// });

function setAge(selectedAge) {
  age = selectedAge;
  console.log('Selected age:', age);
  nextQuestion();
}

function setGender(selectedGender) {
  gender = selectedGender;
  console.log('Selected gender:', gender);
  nextQuestion();
}

function setFitnessGoals(input) {
  if (input.checked) {
    // Add fitness goal if checkbox is checked
    fitnessGoals.push(input.value);
} else {
    // Remove fitness goal if checkbox is unchecked
    const index = fitnessGoals.indexOf(input.value);
    if (index !== -1) {
        fitnessGoals.splice(index, 1);
    }
}
    fitnessGoals = [...new Set(fitnessGoals)]
    console.log("Selected fitness goal:", fitnessGoals);
}   

function setHeight() {
  height = document.getElementById('height').value;
  console.log('Entered height:', height);
  // nextQuestion();
}

function setWeight() {
  weight = document.getElementById('weight').value;
  console.log('Entered weight:', weight);
  calculateBMI();
}

function calculateBMI() {
  if (height && weight && height > 0 && weight > 0) {
    const heightInMeters = height / 100;
    bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    console.log('Calculated BMI:', bmi);
  }
  // nextQuestion();
}

function setExercise(selectedExercise) {
  exercise = selectedExercise;
  console.log('Exercise:', exercise);
  if (exercise === 'Yes' || exercise === 'Maybe') {
    nextQuestion();
  } else {
    nextQuestion(4);
  }
}

function setActivityFrequency(frequency) {
  activityFrequency = frequency;
  console.log('Activity Frequency:', activityFrequency);
  nextQuestion();
}

function setActivityDuration(duration) {
  activityDuration = duration;
  console.log('Activity Duration:', activityDuration);
  nextQuestion();
}

function setActivityIntensity(intensity) {
  activityIntensity = intensity;
  console.log('Activity Intensity:', activityIntensity);
  nextQuestion();
}

function setMedicalCondition(condition) {
  medicalCondition = condition;
  console.log('Medical Condition:', medicalCondition);
        // hide pcos if not female
        if(gender !== "female"){
      document.querySelector("#pcosHolder").remove()
    }

  if (medicalCondition === 'Yes') {
    nextQuestion();
  } else {
    nextQuestion(3); // Skip to question 12 if No
  }
}

function setWaistFat(fat) {
  waistFat = fat;
  console.log('Waist Fat:', waistFat);

  nextQuestion();
}

function setDiagnosedConditions() {
    diagnosedConditions = []       
  const checkboxes = document.querySelectorAll('#question11 input[type="checkbox"]:checked');
  checkboxes.forEach(checkbox => {
    diagnosedConditions.push(checkbox.id);
  });
  diagnosedConditions = [...new Set(diagnosedConditions)]

  console.log('Diagnosed Conditions:', diagnosedConditions);
//   nextQuestion();
}

function setMedication(med) {
  medication = med;
  console.log('Medication:', medication);
  nextQuestion();
}

function setSleepDifficulty(value) {
  sleepDifficulty = value;
  console.log('Sleep Difficulty:', sleepDifficulty);
  nextQuestion();
}

function setSnapping(value) {
  snapping = value;
  console.log('Snapping:', snapping);
  nextQuestion();
}

function setMorningHeadaches(value) {
  morningHeadaches = value;
  console.log('Morning Headaches:', morningHeadaches);
  nextQuestion();
}

function setTiredness(value) {
  tiredness = value;
  console.log('Tiredness:', tiredness);
  nextQuestion();
}

function setMoodSwings(value) {
  moodSwings = value;
  console.log('Mood Swings:', moodSwings);
  if(gender==="female"){
    nextQuestion();
  } else {
    nextQuestion(2)
  }

}

function setMenopause(response) {
    menopause = response; // Store response
    console.log('Menopause:', menopause); // Log response to console
    nextQuestion(); // Proceed to the next question
}

function setEatingHabits(habits) {
    eatingHabits = habits;
    console.log('Eating Habits:', eatingHabits);
    nextQuestion();
}

function setEatingPattern(pattern) {
    eatingPattern = pattern;
    console.log('Eating Pattern:', eatingPattern);
    nextQuestion();
}

function setFoodAllergies(checkbox) {
    if (checkbox.checked) {
        foodAllergies.push(checkbox.value);
    } else {
        const index = foodAllergies.indexOf(checkbox.value);
        if (index !== -1) {
            foodAllergies.splice(index, 1);
        }
    }
    console.log('Food Allergies:', foodAllergies);
}

function setWaterIntake(value) {
    waterIntake = value;
    console.log('Water Intake:', waterIntake);
    nextQuestion();
}

function setCaffeineIntake(value) {
    caffeineIntake = value;
    console.log('Caffeine Intake:', caffeineIntake);
    nextQuestion();
}

function setWholeGrainServings(value) {
    wholeGrainServings = value;
    console.log('Whole Grain Servings:', wholeGrainServings);
    nextQuestion();
}

function setFruitServings(value) {
    fruitServings = value;
    console.log('Fruit Servings:', fruitServings);
    nextQuestion();
}

function setVegetableServings(value) {
    vegetableServings = value;
    console.log('Vegetable Servings:', vegetableServings);
    nextQuestion();
}

function setProteinServings(value) {
    proteinServings = value;
    console.log('Protein-Rich Foods Servings:', proteinServings);
    nextQuestion();
}

function setEatingOutFrequency(value) {
    eatingOutFrequency = value;
    console.log('Eating Out Frequency:', eatingOutFrequency);
    nextQuestion();
}

function setSugarIntake(value) {
    sugarIntake = value;
    console.log('Sugar Intake:', sugarIntake);
    nextQuestion();
}

function setPackedFoodsFrequency(value) {
    packedFoodsFrequency = value;
    console.log('Packed Foods Frequency:', packedFoodsFrequency);
    nextQuestion();
}

function setAlcoholFrequency(value) {
    alcoholFrequency = value;
    console.log('Alcohol Frequency:', alcoholFrequency);
    nextQuestion();
}

function setSleepDuration(value) {
    sleepDuration = value;
    console.log('Sleep Duration:', sleepDuration);
    nextQuestion();
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function setEmail() {
  email = document.getElementById('email').value;
  console.log('Entered email:', email);
  nextQuestion();
}

function prevQuestion() {
  document.getElementById(`question${currentQuestion}`).style.display = 'none';
  currentQuestion--;
  document.getElementById(`question${currentQuestion}`).style.display = 'block';
  if (currentQuestion === 1) {
    document.getElementById('prevBtn').style.display = 'none';
  } 
  document.getElementById('nextBtn').innerText = 'Next';
}

function showThankYouScreen() {
  document.getElementById("questionContainer").style.display = "none";
  document.getElementById('prevBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById("thankYouScreen").style.display = "block";
  // Display BMI
  var bmiText = document.getElementById("bmiText");
  bmiText.textContent = "Your BMI is: " + bmi;
}

// Function to show the recommendations screen and hide the thank-you screen
function showRecommendationsScreen() {
  document.getElementById("thankYouScreen").style.display = "none";
  document.getElementById("recommendationContainer").style.display = "block";
  showRecommendations();
}

// Event listener for the button to show recommendations
document.getElementById("showRecommendationsButton").addEventListener("click", showRecommendationsScreen);

let transitioning = false;

function nextQuestion(step = 1) {
  if (transitioning || !validateInputs()) return;

  transitioning = true;

  document.querySelector('.btn-group').style.justifyContent = 'space-between';

  // Hide the current question
  document.getElementById(`question${currentQuestion}`).style.display = 'none';
  currentQuestion += step;
  if (currentQuestion <= 33) {
    // Show the next question after a delay
    setTimeout(() => {
      document.getElementById(`question${currentQuestion}`).style.display = 'block';
      document.getElementById('prevBtn').style.display = 'block';
      transitioning = false;
    }, 500); // One-second delay
  } else {
    // Show product recommendations
    // document.getElementById('prevBtn').style.display = 'none';
    // document.getElementById('nextBtn').style.display = 'none';
    // document.getElementById('recommendationContainer').style.display = 'block';
    // showRecommendations();
    // Show Thankyou Screen 
    showThankYouScreen();
    appendToGoogleSheet();
  }

   // Change next button text if on the last question
   if (currentQuestion === 33) {
    document.getElementById('nextBtn').innerText = 'Finish';
  } else {
    document.getElementById('nextBtn').innerText = 'Next';
  }
}

function validateInputs() {
  switch (currentQuestion) {
    case 1:
      if (!age) {
        alert('Please select your age.');
        return false;
      }
      break;
    case 2:
      if (!gender) {
        alert('Please select your gender.');
        return false;
      }
      break;
    case 3:
      if (!fitnessGoals) {
        alert('Please select your fitness goals.');
        return false;
      }
      break;
    case 4:
      if (!height || height <= 0) {
        alert('Please enter valid height.');
        return false;
      }
      break;
    case 5:
      if (!weight || weight <= 0) {
        alert('Please enter valid weight.');
        return false;
      }
      break;
    case 6:
      if (!exercise) {
        alert('Please select if you exercise/walk during the week.');
        return false;
      }
      break;
    case 10:
      if (!medicalCondition) {
        alert('Please select if you have any existing medical conditions.');
        return false;
      }
      break;
    case 11:
      if (document.querySelectorAll('input[type="checkbox"]:checked').length === 0) {
        alert('Please select at least one diagnosed condition.');
        return false;
      }
      break;
    case 12:
      if (!medication) {
        alert('Please select if you are taking medications for the diagnosed conditions.');
        return false;
      }
      break;          
    case 13:
      if (!waistFat) {
        alert('Please answer the question about waist fat deposition.');
        return false;
      }
      break;
    case 14:
      if (!sleepDifficulty) {
        alert('Please answer the question about sleep difficulty.');
        return false;
      }
      break;
    case 15:
      if (!snapping) {
        alert('Please answer the question about Snapping.');
        return false;
      }
      break;
    case 16:
      if (!morningHeadaches) {
        alert('Please answer the question about Morning headaches.');
        return false;
      }
      break;
    case 17:
      if (!tiredness) {
        alert('Please answer the question about Tiredness.');
        return false;
      }
      break;
    case 18:
      if (!moodSwings) {
        alert('Please answer the question about Mood swings.');
        return false;
      }
      break;
    case 19:
      if (!menopause) {
        alert('Please answer the question about Menopause.');
        return false;
      }
      break;
    case 20:
      if (!eatingHabits) {
        alert('Please answer the question about Eating Habits.');
        return false;
      }
      break;
    case 21:
      if (!eatingPattern) {
        alert('Please answer the question about Eating Patterns.');
        return false;
      }
      break;
    case 22:
      if (!foodAllergies) {
        alert('Please answer the question about Food Allergies.');
        return false;
      }
      break;
    case 23:
      if (!waterIntake) {
        alert('Please answer the question about Water Intake.');
        return false;
      }
      break;
    case 24:
      if (!caffeineIntake) {
        alert('Please answer the question about Caffeine Intake.');
        return false;
      }
      break;
    case 25:
      if (!wholeGrainServings) {
        alert('Please answer the question about Whole Grain Servings.');
        return false;
      }
      break;
    case 26:
      if (!fruitServings) {
        alert('Please answer the question about Fruit Servings.');
        return false;
      }
      break;
    case 27:
      if (!vegetableServings) {
        alert('Please answer the question about Vegetable Servings.');
        return false;
      }
      break;
    case 28:
      if (!proteinServings) {
        alert('Please answer the question about Protein Rich Food.');
        return false;
      }
      break;
    case 29:
      if (!eatingOutFrequency) {
        alert('Please answer the question about your frequency of eating out.');
        return false;
      }
      break;
    case 30:
      if (!sugarIntake) {
        alert('Please answer the question about your sugar intake.');
        return false;
      }
      break;
    case 31:
      if (!packedFoodsFrequency) {
        alert('Please answer the question about your packaged foods frequency.');
        return false;
      }
      break;
    case 32:
      if (!alcoholFrequency) {
        alert('Please answer the question about your alchohol frequency.');
        return false;
      }
      break;
    case 33:
      if (!sleepDuration) {
        alert('Please answer the question about your sleep duration.');
        return false;
      }
      break;
    case 34:
      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
      }
      break;
  }
  return true;
}

function addToCart(variant,title) {
  console.log(variant);
  var items = [{ quantity: 1, id: variant }];
  $.ajax({
      type: "POST",
      url: '/cart/add.json',
      data: { items: items },
      success: function(data) {
          console.log('Success:', data);
          if (data.items.length > 0) {
              const alertPopup = document.createElement('div');
              alertPopup.classList.add('alert', 'alert-success');
              alertPopup.textContent = title+' added to cart';
              document.body.appendChild(alertPopup);
              setTimeout(function() {
                  alertPopup.remove();
              }, 3000); // 3 seconds
          }
      },
      error: function(xhr, status, error) {
          console.error('Error:', error);
          alert('Error occurred. Please try again.');
      },
      dataType: 'json'
  });
}



function generateRecommendationsHTML(recommendations) {
  
    let html = ''; 
    recommendations.forEach((recommendation) => {
      let product ={
        title:recommendation            
      }
      if(recommendation=="GNMR"){
        product.title = "Gut Nourishing Meal Replacement, Pack of 400 gm(12 Serves), Belgian Chocolate";
        product.variant = 47571824902442;
        product.price = "1,057.00";
        product.image="https://thehealthspanco.com/cdn/shop/files/ProductImages-GNMR.jpg?v=1708167440&width=600"
      } else if(recommendation =="EDNM"){
        product.title="Energy Dense Nutrition Mix, Pack of 400 gm(12 Serves), Belgian Chocolate";
        product.variant = 47571750256938;
        product.price = "850.00";
        product.image="https://thehealthspanco.com/cdn/shop/files/9_9573dd95-df5e-4aaf-a0c5-39b293c5b054.jpg?v=1708173700&width=600"                  
      } else if(recommendation =="GRMM"){
        product.title="Gut Repair Metabolic Mix";
        product.variant = 47700499464490;
        product.price = '0.00';
        product.image="https://thehealthspanco.com/cdn/shop/files/Artboard1_6b5abc6e-2162-4468-8ff3-51044a21dbcd.jpg?v=1710222857&width=600"                    
      } else if(recommendation =="SLMM"){
        product.title="Sustainably Lean Metabolic Mix";
        product.variant = 47513420693802;
        product.price = '0.00';
        product.image="https://thehealthspanco.com/cdn/shop/files/Artboard1_9a2c7555-a516-4279-95c3-8fb1e2e19f65.jpg?v=1709883309&width=600"          
      }
      
    html += `
      <div class="product-card">
          <img class="product-image" src="${product.image}" alt="Product 1">
          <div class="product-title">${product.title}</div>
          <div class="product-price">Rs. ${product.price}</div>
          <button onclick="addToCart(${product.variant},'${product.title}')" class="add-to-cart">Add to Cart</button>
      </div>
      `; 
    });
return html;
}

var recommendations = [];
// Function to display product recommendations
function displayProductRecommendations(BMI, fitnessGoal) {
    var weightCategory = "";
    fitnessGoal= fitnessGoal.toLowerCase();
    // Determine weight category based on BMI
    if (BMI < 18.5) {
        weightCategory = "underweight";
    } else if (BMI >= 18.5 && BMI <= 22.9) {
        weightCategory = "normal";
    } else if (BMI >= 22.9 && BMI <= 24.9) {
        weightCategory = "overweight";
    } else {
        weightCategory = "obese";
    }
    // Generate product recommendations based on weight category and fitness goal
    switch (weightCategory) {
case "underweight":
    switch (fitnessGoal) {
        case "muscle gain":
            recommendations.push(...["EDNM", "GRMM"])
            break;
        case "improved energy levels":
        case "improve health":
        case "maintain health":
        case "improve immunity":
            recommendations.push(...["GRMM", "EDNM"])
            break;
    }
    break;
case "normal":
    switch (fitnessGoal) {
        case "weight loss":
            recommendations.push(...["GRMM", "EDNM"])
            break;
        case "muscle gain":
        case "improved energy levels":
        case "improve health":
        case "maintain health":
        case "improve immunity":
            recommendations.push(...["GRMM", "EDNM"]) // Same recommendation for all goals
            break;
    }
    break;
    case "overweight":
switch (fitnessGoal) {
    case "weight loss":
        recommendations.push(...["GRMM", "GNMR", "SLMM"])
        break;
    case "muscle gain":
        recommendations.push(...["GRMM", "GNMR"])
        break;
    case "improved energy levels":
        recommendations.push(...["GRMM", "GNMR", "EDNM"]) // Include EDNM for energy goal
        break;
    case "improve health":
    case "maintain health":
    case "improve immunity":
        recommendations.push(...["GRMM", "GNMR"])
        break;
}
break;

case "obese":
    switch (fitnessGoal) {
        case "improved energy levels":
            recommendations.push(...["GRMM", "GNMR", "SLMM", "EDNM"])
            break;
        case "weight loss":
        case "muscle gain":
        case "improve health":
        case "maintain health":
        case "improve immunity":
            recommendations.push(...["GRMM", "GNMR", "SLMM"])
            break;
    }
    break;
}

if(recommendations.length==0){
recommendations = ["GRMM", "GNMR", "SLMM", "EDNM"];
}
recommendations= [...new Set(recommendations)];
    // Display recommendations
    console.log("Product Recommendations:", recommendations.join(", "));
    const productGrid = document.getElementById('productGrid');
    const recommendationsHTML = generateRecommendationsHTML(recommendations);
    productGrid.innerHTML = recommendationsHTML; // Set inner HTML of div   
}

function showRecommendations() {
    // Display product recommendations based on collected data
    fitnessGoals.forEach((fitnessGoal)=>{
      displayProductRecommendations(bmi, fitnessGoal);
    })
}

// Function to toggle the "selected" class to the parent label
function toggleSelectedCheckBox() {
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
checkbox.addEventListener('change', function() {
  const label = this.parentElement;
  if (this.checked) {
    label.classList.add('selected');
  } else {
    label.classList.remove('selected');
  }
});
});
}

// Call the function to toggle selected class
toggleSelectedCheckBox();

function appendToGoogleSheet(){
  // Collect form data
var formData = {
  age,
  gender, 
  fitnessGoals, 
  height, 
  weight, 
  bmi, 
  goals, 
  exercise, 
  activityFrequency, 
  activityDuration, 
  activityIntensity, 
  medicalCondition, 
  waistFat, 
  diagnosedConditions, 
  medication, 
  menopause, 
  eatingHabits, 
  foodAllergies, 
  waterIntake, 
  caffeineIntake, 
  wholeGrainServings, 
  fruitServings, 
  vegetableServings, 
  proteinServings, 
  eatingOutFrequency, 
  sugarIntake, 
  packedFoodsFrequency, 
  alcoholFrequency, 
  sleepDuration, 
  email
  // Add more fields as needed
};

// Send form data to Google Apps Script web app
fetch('https://script.google.com/macros/s/AKfycbxswizVrOYShTWocw76dFXW3pnnlzmSG077GQ7lsopLlnLGFtTApdZyj6muvoDprNsO/exec', {
  method: 'POST',
  mode: 'no-cors', // Set mode to 'no-cors'
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
.then(response => {
  if (response.ok) {
      console.log('Form submission successful');
  } else {
      console.error('Form submission failed');
  }
})
.catch(error => {
  console.error('Error:', error);
});

}

// Get all the buttons inside .option divs
const buttons = document.querySelectorAll('.option button');

// Loop through each button and add event listener
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Toggle the "selected" class for the clicked button
        toggleSelected(this);
    });
});

// Function to toggle the "selected" class when a button is clicked
function toggleSelected(button) {
    button.classList.toggle('selected');
}
