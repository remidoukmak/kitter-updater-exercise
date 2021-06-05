The task is to update our Kitter timeline
by creating new Meows using useEffect and fetch

1. Add a useEffect hook in App.js to fetch data from the following API endpoint: https://cyf-cors-api.herokuapp.com/meow. Use this data
   to set the meows in App.js.

2. Create a new component called CreateMeow
   It should be a form with a <textarea>
   element to update the content of the
   Meow and a text input for the hashtags. Put it above the Timeline component.

3. Use useState to save the textarea and hashtag input
   values on change.

4. Add a submit button to the form. On submit, handle
   the event so that it POSTs
   the text and hashtags to the the following API endpoint: https://cyf-cors-api.herokuapp.com/meow.

   Your fetch should look like this:

   ````fetch(
    "https://cyf-cors-api.herokuapp.com/meow",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
      text: (text from textarea),
      hashtags: (hashtags from input)
    })
   })```
   ````
