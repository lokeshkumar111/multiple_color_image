const container = document.querySelector(".container");
const displayColors=()=>{
    const mainDiv=document.createElement('div');
    mainDiv.setAttribute('id', 'mainDiv');
    mainDiv.style.margin='20px 5px 10px 5px';
    mainDiv.style.display='flex';
    mainDiv.style.flexDirection='row';
    mainDiv.style.gap='20px';

    const SingleColorDiv = document.createElement('div');
    SingleColorDiv.setAttribute('id', 'SingleColorDiv');
    SingleColorDiv.style.padding='50px';
    SingleColorDiv.style.width='300px';
    SingleColorDiv.style.height='300px';
    SingleColorDiv.style.borderRadius='10px';
    SingleColorDiv.textContent="";

    const updateSingleColor = (color) => {
        SingleColorDiv.style.background = color;
        localStorage.setItem('selectedColor', color);
    };

    const storedColor = localStorage.getItem('selectedColor') || 'rgb(0,150,255)';
    updateSingleColor(storedColor)

    const secondDiv = document.createElement('div');
    secondDiv.setAttribute('id', 'secondDiv');
    secondDiv.style.display='flex';
    secondDiv.style.flexDirection='column-reverse';
    secondDiv.style.justifyContent='space-between'
    

    const MultipleColorDiv = document.createElement('div');
    MultipleColorDiv.setAttribute('id', 'MultipleColorDiv');
    MultipleColorDiv.style.display='grid';
    MultipleColorDiv.style.gridTemplateColumns='repeat(4, 1fr)'
    MultipleColorDiv.style.margin='20px auto';
    MultipleColorDiv.style.width='500px';
    MultipleColorDiv.style.height='300px';
    MultipleColorDiv.style.gap='10px';
    MultipleColorDiv.style.gridAutoRows = '90px';
    MultipleColorDiv.style.alignContent = 'start';

    const mcb1 = document.createElement('button');
    mcb1.textContent="";
    mcb1.setAttribute('class','blue');
    mcb1.style.background = 'rgb(137, 207, 240)';
    mcb1.style.border='none';
    mcb1.style.borderRadius ='5px';
    mcb1.style.border ='none';

    const mcb2 = document.createElement('button');
    mcb2.textContent="";
    mcb2.setAttribute('class','blue');
    mcb2.style.background = 'rgb(0, 150, 255)';
    mcb2.style.padding='10px';
    mcb2.style.borderRadius ='5px';
    mcb2.style.border ='none';

    const mcb3 = document.createElement('button');
    mcb3.textContent="";
    mcb3.setAttribute('class','blue');
    mcb3.style.background = 'rgb(100, 149, 237)';
    mcb3.style.padding='10px';
    mcb3.style.borderRadius ='5px';
    mcb3.style.border ='none';

    const mcb4 = document.createElement('button');
    mcb4.textContent="";
    mcb4.setAttribute('class','blue');
    mcb4.style.background = 'rgb(0, 71, 171)';
    mcb4.style.padding='10px';
    mcb4.style.borderRadius ='5px';
    mcb4.style.border ='none';

    const mcb5 = document.createElement('button');
    mcb5.textContent="";
    mcb5.setAttribute('class','blue');
    mcb5.style.background = 'blue';
    mcb5.style.padding='10px';
    mcb5.style.borderRadius ='5px';
    mcb5.style.border ='none';

    const mcb6 = document.createElement('button');
    mcb6.textContent="";
    mcb6.setAttribute('class','red');
    mcb6.style.background = 'rgb(210, 43, 43)';
    mcb6.style.padding='10px';
    mcb6.style.borderRadius ='5px';
    mcb6.style.border ='none';

    const mcb7 = document.createElement('button');
    mcb7.textContent="";
    mcb7.setAttribute('class','red');
    mcb7.style.background = 'rgb(220, 20, 60)';
    mcb7.style.padding='10px';
    mcb7.style.borderRadius ='5px';
    mcb7.style.border ='none';

    const mcb8 = document.createElement('button');
    mcb8.textContent="";
    mcb8.setAttribute('class','red');
    mcb8.style.background = 'red';
    mcb8.style.padding='10px';
    mcb8.style.borderRadius ='5px';
    mcb8.style.border ='none';

    const mcb9 = document.createElement('button');
    mcb9.textContent="";
    mcb9.setAttribute('class','green');
    mcb9.style.background = 'rgb(79, 121, 66)';
    mcb9.style.padding='10px';
    mcb9.style.borderRadius ='5px';
    mcb9.style.border ='none';

    const mcb10 = document.createElement('button');
    mcb10.textContent="";
    mcb10.setAttribute('class','green');
    mcb10.style.background = 'rgb(34, 139, 34)';
    mcb10.style.padding='10px';
    mcb10.style.borderRadius ='5px';
    mcb10.style.border ='none';

    const mcb11 = document.createElement('button');
    mcb11.textContent="";
    mcb11.setAttribute('class','green');
    mcb11.style.background = 'rgb(170, 255, 0)';
    mcb11.style.padding='10px';
    mcb11.style.borderRadius ='5px';
    mcb11.style.border ='none';

    const mcb12 = document.createElement('button');
    mcb12.textContent="";
    mcb12.setAttribute('class','green');
    mcb12.style.background = 'green';
    mcb12.style.padding='10px';
    mcb12.style.borderRadius ='5px';
    mcb12.style.border ='none';


    MultipleColorDiv.append(mcb1, mcb2, mcb3, mcb4, mcb5, mcb6, mcb7, mcb8, mcb9, mcb10, mcb11, mcb12);

    const btnDiv = document.createElement('div');
    btnDiv.style.display = 'flex';
    btnDiv.style.flexDirection='row';
    btnDiv.style.justifyContent = 'space-between';
    btnDiv.style.padding = '5px';
    btnDiv.style.position= 'relative';
    btnDiv.style.top='5px';
    btnDiv.style.alignItems='center';

    const selectDiv = document.createElement('div');

    var selectElement = document.createElement("select");
    selectElement.style.padding='5px';
    selectElement.style.borderRadius='5px';
    selectElement.style.fontSize='large'
    var optionValues = ["All", "Red", "Green", "Blue"];

    for (var i = 0; i < optionValues.length; i++) {
        var option = document.createElement("option");
        option.text = optionValues[i];
        option.value = i + 1; 
        selectElement.appendChild(option);
    }
    selectElement.addEventListener("change", function() {
        const selectedOption = selectElement.options[selectElement.selectedIndex].text;
        if (selectedOption === "All") {
            const buttons = MultipleColorDiv.querySelectorAll("button");
            buttons.forEach(button => {
                button.style.display = "block";
            });
            updateSingleColor("red");
        } else {
            const buttons = MultipleColorDiv.querySelectorAll("button");
            buttons.forEach(button => {
                button.style.display = (button.classList.contains(selectedOption.toLowerCase())) ? "block" : "none";
            });
            updateSingleColor(selectedOption.toLowerCase());
        }
        console.log("Selected option: " + selectElement.value);
    });

    const buttonSize = {
        width: getComputedStyle(mcb1).width,
        height: getComputedStyle(mcb1).height,
    };

    selectDiv.appendChild(selectElement);
    btnDiv.appendChild(selectDiv);

    const ColorBtn = document.createElement('div');
    ColorBtn.setAttribute('id', 'ColorBtnDiv');
    ColorBtn.style.display='flex';
    ColorBtn.style.flexDirection='row';
    ColorBtn.style.gap='5px';

    const b1 = document.createElement('button');
    b1.textContent="All";
    b1.setAttribute('id', 'all');
    b1.style.padding='5px 10px 5px 10px';
    b1.style.background='white';
    b1.style.borderRadius='5px';
    b1.style.border='1px solid grey';
    b1.style.fontSize='large';

    b1.addEventListener("click", function () {
        // Show all buttons
        const buttons = MultipleColorDiv.querySelectorAll("button");
        buttons.forEach(button=> {
            button.style.display = "block";
        });

        // Update SingleColorDiv background color (default to red if none selected)
        const selectedColor = selectElement.value;
        updateSingleColor(selectedColor === "All" ? "rgb(137, 207, 240)" : selectedColor);
    });
     
    const b2 = document.createElement('button');
    b2.textContent="Red";
    b2.setAttribute('id', 'red');
    b2.style.padding='5px 10px 5px 10px';
    b2.style.background='red';
    b2.style.borderRadius='5px';
    b2.style.color= 'white';
    b2.style.border = 'none';
    b2.style.fontSize='large'

    b2.addEventListener("click", function () {
        // Hide all buttons except those with class "red"
        const buttons = MultipleColorDiv.querySelectorAll("button");
        buttons.forEach(button => {
            button.style.display = (button.classList.contains("red")) ? "block" : "none";
        });

        // Update SingleColorDiv background color to red
        updateSingleColor("red");
    });

    const b3 = document.createElement('button');
    b3.textContent="Green";
    b3.setAttribute('id', 'green');
    b3.style.padding='5px 10px 5px 10px';
    b3.style.background='green';
    b3.style.borderRadius='5px';
    b3.style.color= 'white';
    b3.style.border='none';
    b3.style.fontSize='large'

    b3.addEventListener("click", function () {
        // Hide all buttons except those with class "green"
        const buttons = MultipleColorDiv.querySelectorAll("button");
        buttons.forEach(button => {
            button.style.display = (button.classList.contains("green")) ? "block" : "none";
        });

        // Update SingleColorDiv background color to green
        updateSingleColor("green");
    });

    const b4 = document.createElement('button');
    b4.textContent="Blue";
    b4.setAttribute('id', 'blue');
    b4.style.padding='5px 10px 5px 10px';
    b4.style.background='blue';
    b4.style.borderRadius='5px';
    b4.style.color= 'white';
    b4.style.border='none';
    b4.style.fontSize='large'

    b4.addEventListener("click", function () {
        // Hide all buttons except those with class "blue"
        const buttons = MultipleColorDiv.querySelectorAll("button");
        buttons.forEach(button => {
            button.style.display = (button.classList.contains("blue")) ? "block" : "none";
        });

        // Update SingleColorDiv background color to blue
        updateSingleColor("blue");
    });

    const colorButtons = MultipleColorDiv.querySelectorAll("button");
    colorButtons.forEach(button => {
        button.style.width = buttonSize.width;
        button.style.height = buttonSize.height;
    
        button.addEventListener("click", function () {
            const bgColor = getComputedStyle(button).backgroundColor;
            updateSingleColor(bgColor);
        });
    });

    ColorBtn.append(b1,b2,b3,b4);
    btnDiv.appendChild(ColorBtn);

    mainDiv.appendChild(SingleColorDiv);
    secondDiv.append(MultipleColorDiv,btnDiv);
    mainDiv.append(secondDiv);
    container.appendChild(mainDiv);
}
displayColors();