// object that holds all the Wilks coefficents for males
var mCoeff = {
  a: -216.0475144,
  b: 16.2606339,
  c: -0.002388645,
  d: -0.00113732,
  e: 7.01863 * Math.pow(10, -6),
  f: -1.291 * Math.pow(10, -8)
};

// object that holds all the Wilks coefficients for females
var fCoeff = {
  a: 594.31747775582,
  b: -27.23842536447,
  c: 0.82112226871,
  d: -0.00930733913,
  e: 4.731582 * Math.pow(10, -5),
  f: -9.054 * Math.pow(10, -8)
};

// convertUnits
// Purpose:
// Arguments:
// Returns:
function convertUnits(toConvert) {
  if (document.getElementById("unit") == "kg"){
      return toConvert;
  } else{
      return (0.453592 * toConvert);
  }
}

// wilksscore
// Purpose:
// Arguments:
// Returns:
function wilksScore() {
  var sex = document.querySelector('input[name="sex"]:checked').value;
        console.log(sex);

  var w = convertUnits(document.getElementById("weight").value);
    console.log(w);
  var tw = totalWeight();
    console.log(tw);
  document.getElementById("wilks").innerHTML = (wilksCoeff(sex, w) * tw);
}

// totalWeight
// Purpose: 
// Arguments:
// Returns:
function totalWeight() {
  var sr = convertUnits(document.getElementById("squatReps").value);
  var sw = convertUnits(document.getElementById("squatWeight").value);
  var br = convertUnits(document.getElementById("benchReps").value);
  var bw = convertUnits(document.getElementById("benchWeight").value);
  var dlr = convertUnits(document.getElementById("dlReps").value);
  var dlw = convertUnits(document.getElementById("dlWeight").value);

  var total = onerepMax(sr, sw) + onerepMax(br, bw) + onerepMax(dlr, dlw);
  return total;
}

function onerepMax(reps, weight) {
  var orm = (weight * (1 + ((reps) / 30)));
  return orm;
}
    
// wilkscoeff
// Purpose:
// Arguments:
// Returns:
function wilksCoeff(sex, w) {
  var wc = 0;
  if (sex === "female") {
    wc= (500 / femaleWilks(w));
  }
  if (sex === "male") {
    wc = (500 / maleWilks(w));
  }
    console.log(wc);
    return wc;
}

// femalewilks
// Purpose:
// Arguments:
// Returns:
function femaleWilks(w)
{
    var fwilks = fCoeff.a + fCoeff.b * w + fCoeff.c * Math.pow(w, 2) + fCoeff.d * Math.pow(w, 3) + fCoeff.e * Math.pow(w, 4) + fCoeff.f * Math.pow(w, 5);
    console.log(fwilks);
    return fwilks;
}

// maleWilks
// Purpose:
// Arguments:
// Returns:
function maleWilks(w) {
  var mwilks = mCoeff.a + mCoeff.b * w + mCoeff.c * Math.pow(w, 2) + mCoeff.d * Math.pow(w, 3) + mCoeff.e * Math.pow(w, 4) + mCoeff.f * Math.pow(w, 5);
    console.log(mwilks);
    return mwilks;
}
