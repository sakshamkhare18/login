
const logoutBtn = document.querySelector(".btn-logout")
const viewProfile = document.querySelector(".btn-profile")
 const profilepic =document.getElementById("dp")
 const usernameText = document.getElementById("username")
  const emailText = document.getElementById("email")
   const phoneText = document.getElementById("phone")
     const addressText = document.getElementById("address")
     const statusText = document.getElementById("status")
     const heading = document.getElementById("heading")
     
     const token = localStorage.getItem("token");
     usernameText.disable=true;
     emailText.disable=true;
     phoneText.disable=true;
     addressText.disable=true;

if (!token) {
    window.location.href = "index.html";
    alert("you are loged out ! login again ")
}
logoutBtn.addEventListener("click",()=> {
    window.location.href = "index.html";
    localStorage.clear();
})

viewProfile.addEventListener("click",
    
    async function() {
heading.remove()

const response = await fetch("https://dummyjson.com/auth/me", {

        method: "GET",

        headers: {
        
            "Authorization": `Bearer ${token}`
        },

      })
const data = await response.json();
console.log(data);

profilepic.src = data.image;

usernameText.innerText =
   " Hello " + data.username;


   emailText.innerText =
   "email : " + data.email;

   phoneText.innerText=
   "phone :" + data.phone;

    addressText.innerText=
   "address : " + data.address.city;
})
