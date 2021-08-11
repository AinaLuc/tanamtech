// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBuFa6q1wI0VeWuXZsHX77ztKyNF7h3D2M",
    authDomain: "blog-tanamtech.firebaseapp.com",
    databaseURL: "https://blog-tanamtech-default-rtdb.firebaseio.com",
    projectId: "blog-tanamtech",
    storageBucket: "blog-tanamtech.appspot.com",
    messagingSenderId: "644786005445",
    appId: "1:644786005445:web:1df03dff1d43507f1357ac",
    measurementId: "G-LGD1YQ9GXB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  //firebase.firestore().enablePersistence()
  var database = firebase.database();


  const db = firebase.firestore();
  var docRef = db.collection("cities").doc("SF");

  db.collection("blog")
  .get()
  .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        addPosts(doc);
       
      }) })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });

 /*  let articleBlog;

  $(document).ready(function() {
    setTimeout(function() { sendIdBlog(); }, 1000);
  });
   */
  // id of the blog
  function sendIdblog(id){
    database.ref('blog').set(id).then( ()=> {
      window.location.href = "./post.html";

    })

  }
 function addPosts(doc){
     // doc.data() is never undefined for query doc snapshots
     console.log(doc.id, " => ",doc.data().titre);
     $('.postsdata').prepend('<div class="post-preview" id="'+doc.data().id+'"><a><h2 class="post-title">'+doc.data().titre+'</h2> <h3 class="post-subtitle">'+doc.data().meta+' </h3></a>\
     <p class="post-meta"> Posted by \
                       <a href="#!">'+doc.data().author+'</a>\
                       '+doc.data().date+' \
                   </p></div>\
               ');
  
               $(".post-preview").click( function(event){
  

                let id =parseInt(event.currentTarget.id);
                console.log("Working");
                sendIdblog(id);

           
               
              }) 

    
 } 



 

