let form, display;

function load() {
  form = document.querySelector("form");
  display = document.querySelector("div");
  data = undefined;

  url = new URL(window.location.href);

  if (
    /**
     * If the url has the obfuscate parameter set to true and the data parameter is not null,
     * then the data is decoded and split into an array. The array is then mapped to a new array and the data is set to the data object
     */
    url.searchParams.get("obfuscate") === "true" &&
    url.searchParams.get("data") !== null
  ) {
    data = atob(url.searchParams.get("data")).split("&");
    data = data.map((item) => item.split("=")[1]);
    data = {
      sender: data[0],
      reciever: data[1],
      occasion: data[2],
      message: data[3],
      obfuscate: true,
    };

    console.log(data);

    /**
     * the form is hidden because the data is already set
     */
    form.style.display = "none";
  } else if (
    /**
     * If the url has the obfuscate parameter set to false and the sender, reciever, occasion and message parameters are not null,
     * then the data is decoded and split into an array. The array is then mapped to a new array and the data is set to the data object
     */
    url.searchParams.get("obfuscate") === "false" &&
    url.searchParams.get("sender") !== null &&
    url.searchParams.get("reciever") !== null &&
    url.searchParams.get("occasion") !== null &&
    url.searchParams.get("message") !== null
  ) {
    data = {
      sender: url.searchParams.get("sender"),
      reciever: url.searchParams.get("reciever"),
      occasion: url.searchParams.get("occasion"),
      message: url.searchParams.get("message"),
      obfuscate: false,
    };
  }

  if (data !== undefined) {
    /**
     * the form is hidden because the data is already set
     */
    form.style.display = "none";

    /**
     * Populate the display with the data
     * The data is set to the innerText of the display
     */
    document.querySelector("#occasion").innerText = data.occasion;
    document.querySelector("#message").innerText = data.message;
    document.querySelector("#sender").innerText = data.sender;
    document.querySelector("#reciever").innerText = data.reciever;
  }
}

function submitForm(e) {
  e.preventDefault();

  const formData = new FormData(form);
  data = {
    sender:
      formData.get("sender") === "" ? "Anonymous" : formData.get("sender"),
    reciever:
      formData.get("reciever") === "" ? "You" : formData.get("reciever"),
    occasion:
      formData.get("occasion") === "" ? "Occasion" : formData.get("occasion"),
    message:
      formData.get("message") === "" ? "Message" : formData.get("message"),
    obfuscate: formData.get("obfuscate") === "on" ? true : false,
  };

  form_params = ``;
  form_params += `sender=${data.sender}&`;
  form_params += `reciever=${data.reciever}&`;
  form_params += `occasion=${data.occasion}&`;
  form_params += `message=${data.message}&`;

  form_params = form_params.slice(0, -1);

  url_params = `?`;
  if (data.obfuscate) {
    url_params += `obfuscate=true&`;
    coded = btoa(form_params);

    url_params += `data=${coded}`;
  } else {
    url_params += `obfuscate=false&`;
    url_params += form_params;
  }

  //console.log(url_params);

  window.location.href = window.location.href.split("?")[0] + url_params;
}
