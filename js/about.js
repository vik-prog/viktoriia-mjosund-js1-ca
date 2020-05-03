const updateText = () => {
   document.body.innerHTML = document.body.innerHTML.replace(/the/g, "banana");
   document.body.innerHTML = document.body.innerHTML.replace(/The/g, "Banana");
};
setTimeout(updateText, 3000);
