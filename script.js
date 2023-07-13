let scratch = document.getElementById('scratch');
let subSystems = [new subSystem('Subsystem 1'), new subSystem('Subsystem 2')];
let subSystemList = document.getElementById('subSystemList');
let subSystemPropertiesList = document.getElementById('subSystemProperties');

let newSubName = document.getElementById('newSubsystem')

let l = ['f', 'g']
l.push('h')

console.log(subSystems);
console.log(subSystemList);

function addSubsystem(){
  let s = subSystems.find(({subsystemName}) => subsystemName === newSubName.value);

  if (s === undefined){
    let subName = newSubName.value;
      subSystems.push(new subSystem(newSubName.value));
      subSystemList.innerHTML += `<button type="button" class="list-group-item list-group-action" id="${subName}">${subName}</button>`;
      document.getElementById(subName).addEventListener('click', updateSubsystemProperties(subName));
  }
}

function deleteSubsystem(){
    if (subSystems.includes(newSubName.value)){
    }
}

function updateSubsystemProperties(subName){
  let selectedSub = subSystems.find(({subsystemName}) => subsystemName === newSubName.value);
  subSystemPropertiesList.innerHTML = '';
  selectedSub.states.forEach(state => {
    subSystemPropertiesList.innerHTML += `<li class="list-group-item" id="${subName}">${state}</li>`;
    
  });
}

document.getElementById('addSubsystem').addEventListener('click', addSubsystem);
//document.getElementById('deleteSubsystem').addEventListener('click', deleteSubsystem);

class Polygon {
    constructor(...sides) {
      this.sides = sides;
    }
    // Method
    *getSides() {
      for (const side of this.sides) {
        yield side;
      }
    }
  }
  
  const pentagon = new Polygon(1,2,3,4,5);
  
  //console.log([...pentagon.getSides()]); // [1,2,3,4,5]

  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
