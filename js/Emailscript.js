function sendMail() {
  var params = {
    from_name: document.getElementById("Name").value,
    email_id: document.getElementById("email_id").value,
    from_number: document.getElementById("Number").value,
    message: document.getElementById("message").value,
  };

  console.log(params);

  //   params.addEventListner("input", () => {
  //     console.log(params.value);
  //   });

  // const serviceID = "YOUR_SERVICE_ID";
  // const templateID = "YOUR_TEMPLETE_ID";
  const serviceID = "service_fv0e38d";
  const templateID = "template_8b6irgy";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("Name").value = "";
      document.getElementById("email_id").value = "";
      document.getElementById("Number").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
