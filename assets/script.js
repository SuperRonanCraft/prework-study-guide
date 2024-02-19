
const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();

/*function helloWorld() {
    console.log("Hello, world, I am a function!")
}*/

function listTopics() {
    for (let x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
}

function selectTopic() {
    var topic = randomTopic;
    if (topic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (topic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (topic === 'Git') {
      console.log("Let's study Git!");
    } else if (topic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
}
/*
if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}

const shapes = ["triangle", "square", "pentagon", "circle"];
const studentInfo = ["Lu", 54, true];
const shape = "circle";

for(let x = 0; x < shapes.length; x++) {
    // code block
    console.log(shapes[x]);
}
*/




