const Form = document.getElementById("form");
const sumbitbutton = document.getElementById("sumbit_btn");

let xhr = new XMLHttpRequest();
xhr.open("POST", "https://reqbin.com/echo/post/json");

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => console.log(xhr.responseText);

sumbitbutton.addEventListener("click", (e) => {
    e.preventDefault();

    const username = Form.username_textbox.value;
    const age = Form.age_textbox.value;
    const name = Form.name_textbox.value;
    const second_name = Form.second_textbox.value;

    const data = {
        username_data: username,
        age_data: age,
        name_data: name,
        second_data: second_name,
    }

    xhr.send(JSON.stringify(data).split());

    window.location.reload();
})