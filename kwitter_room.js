const firebaseConfig = {
      apiKey: "AIzaSyBDE_s3Scn0WOY2jZwhcUG3e72u6V7S7oc",
      authDomain: "kwitter-5e960.firebaseapp.com",
      databaseURL: "https://kwitter-5e960-default-rtdb.firebaseio.com",
      projectId: "kwitter-5e960",
      storageBucket: "kwitter-5e960.appspot.com",
      messagingSenderId: "206708198552",
      appId: "1:206708198552:web:17583130a1044518fc14ed",
      measurementId: "G-VGBDRK1GST"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="welcome"+user_name+"!!";

      function addRoom(){
            room_name=document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
            localStorage.setItem("room_name", room_name);
            window.location="kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("room name=" + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+
         Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout() { 
      localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
        window.location = "index.html"; 
}