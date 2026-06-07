const EmailInput = document.getElementById("EmailInput");
const PassInput = document.getElementById("PassInput");
const msg = document.querySelector(".msg")
const LoginBtn = document.querySelector(".LoginBtn");


if (LoginBtn) {
  LoginBtn.addEventListener("click",
    async function (e) {
      e.preventDefault();
      
      const userdata =
      {
        username: EmailInput.value,
        password: PassInput.value
      }

      if (EmailInput.value === "") {
        msg.innerText = "Enter Username";
        return;
    }

    if (PassInput.value === "") {
        msg.innerText = "Enter Password";
        return;
    }

    if (PassInput.value.length < 6) {
        msg.innerText = "Password must be at least 6 characters";
        return;
    }
      console.log(userdata);
      const response = await fetch("https://dummyjson.com/auth/login", {

        method: "post",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify(userdata),


      })
      const data = await response.json();

      if (response.status === 200) {
        LoginBtn.remove();
        localStorage.setItem("token", data.accessToken);
        console.log("Token saved:", data.accessToken);
        window.location.href = "dashboard.html";
        alert("login successfully!")
        
      } else {
        console.log("Login failed:", data.message);
        msg.innerHTML = " enter valid username of password"
       msg.style.color = "red";
      }

      console.log("Status:", response.status);

    })
}

