// let first = document.querySelector("li:first-child");
// console.log(first.textContent);


// let elementH1 = document.querySelector("h1");
// elementH1.remove();

// let lists = document.querySelector("ul")
// let newlist = document.createElement("li")
// newlist.textContent = "RTX3000"
// lists.append(newlist)


// let elementH1 = document.querySelector("h1");
// elementH1.textContent = "Series";
// let newH1 = document.querySelector(".primary").style.backgroundColor = "teal";
// let lisecond = document.querySelector("li:last-child");
// lisecond.style.back


//Task-1

function addStudent(name) {
    let newUser = document.querySelector("ul");
    let newStudent = document.createElement("li");
    newStudent.textContent = name;
    newUser.append(newStudent)
}
addStudent("Kamal Aliyev")