function randomStory() {
    const subjects = ["A wizard", "A ninja", "A robot", "A dragon", "A pirate"];
    const verbs = ["fought", "discovered", "built", "saved", "explored"];
    const objects = ["a secret scroll", "a mysterious land", "a futuristic city", "a magical realm", "a hidden treasure"];

    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];

    return `${subject} ${verb} ${object}.`;
}

let ra = randomStory()
console.log("randomStory: " + ra);
