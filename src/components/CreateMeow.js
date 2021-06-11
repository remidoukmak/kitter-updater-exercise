import React, { useState } from "react";

const CreateMeow = () => {
  const [textArea, setTextArea] = useState("");
  const [hashtagText, setHashtagText] = useState("");
  const [userResponse, setUserResponse] = useState(null);

  // function handleChange(event) {
  //   // console.log(event.target.value);
  //   setTextArea(event.target.value);

  // setMeows(newNames);
  // const meowInput = document.getElementById("meowName");
  // meowInput.value = "";

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://cyf-cors-api.herokuapp.com/meow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ textArea, hashtagText }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserResponse(data);
        // setTextArea("");
        // setHashtagText("");
      });
  }

  return (
    <form>
      <textarea onChange={(e) => setTextArea(e.target.value)}></textarea>
      {/* <input
        type="text"
        value={add.title}
        onChange={(e) => setAdd({ ...add, title: e.target.value })}
      ></input> */}

      <input
        type="text"
        value={hashtagText}
        onChange={(e) => setHashtagText(e.target.value)}
      />
      <button type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

// 2. Create a new component called CreateMeow
//    It should be a form with a <textarea>
//    element to update the content of the
//    Meow and a text input for the hashtags.
//    Put it above the Timeline component.

//  Use useState to save the textarea and hashtag input
//    values on change.

// 4. Add some styling to the CreateMeow component so that it looks more
//    like the other Meow components. You can give it a class name of .CreateMeow
//    and then add styling in styles.css.

export default CreateMeow;
