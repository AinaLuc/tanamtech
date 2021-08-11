 /*  var firebaseConfig = {
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
firebase.analytics();   */ 
let meta;
  const dbRef = firebase.database().ref("blog");
  //const db = firebase.firestore();
dbRef.on('value',(snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    const db = firebase.firestore();

    db.collection("blog").where("id", "==", snapshot.val())
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ",doc.data().content);
           $('#content').append(doc.data().content)
           addTitle(doc);
addTitlePage(doc) ;          
          } );

    }) 


    


  } else {
    console.log("No data available");
  }
})
function addTitle(doc) {
  console.log(doc.data().titre);
  $(".post-heading h1").text(doc.data().titre);
  $(".subheading").text(doc.data().meta);
  $(".author").text(doc.data().author);
  $(".date").text(doc.data().date);





     
}
function addTitlePage(data){
  $("meta[name='description']").attr("content", data.data().meta);
  $("title").text(data.data().titre);

  //document.querySelectorAll("head").append('<meta name="description" content="'+data.data().meta+'">')
 
  //  $('head').append('<meta name="description" content="content">');
    //document.querySelector('meta[name=description]').setAttribute("content","new");

}

 
