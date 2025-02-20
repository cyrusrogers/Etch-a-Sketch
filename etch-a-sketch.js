const container = document.createElement("div");
container.classList.add("container");
document.body.append(container)


for (let i = 0; i < 16; i++) {
  const innerDiv = document.createElement("div");
  innerDiv.classList.add("inner-div");

  for (let j = 0; j < 16; j++) {
    const innerDiv2 = document.createElement("div");
    innerDiv2.classList.add("inner-div2");
    innerDiv.append(innerDiv2)
    
  } 
  container.append(innerDiv);
}

