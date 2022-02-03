function getQuote() {
  const personName = this.event.target.value;
  const newButton = document.createElement("button");
  newButton.value = personName;
  newButton.innerHTML = "Get Quote.";
  newButton.setAttribute("onclick", "display()");
  const clickedButton = this.event.target;
  clickedButton.parentNode.insertBefore(newButton, clickedButton.nextSibling);
}
function display() {
  const names = {
    "Kobe Bryant": [
      "''If you're afraid to fail," +
        "<br>" +
        " then you're probably going to fail.''" +
        "<br>" +
        "-Kobe Bryant",
      "''Dedication makes dreams come true.''" + "<br>" + "-Kobe Bryant",
      "''Once you know what failure feels like," +
        "<br>" +
        " determination chases success.''" +
        "<br>" +
        "-Kobe Bryant",
      "''The most important thing is you must put everybody on notice, that you're here and you are for real.''" +
        "<br>" +
        "-Kobe Bryant",
      "''After all, greatness is not for everybody.''" +
        "<br>" +
        "-Kobe Bryant",
    ],
    "Bill Gates": [
      "''We all need people who will give us feedback." +
        "<br>" +
        "That's how we improve.''" +
        "<br>" +
        "-Bill Gates",
      "''Your most unhappy customers are your greatest" +
        "<br>" +
        "source of learning.''" +
        "<br>" +
        "-Bill Gates",
      "''Patience is a key element of success.''" + "<br>" + "-Bill Gates",
      "''If you are born poor it's not your mistake," +
        "<br>" +
        "but if you die poor it's your mistake.''" +
        "<br>" +
        "-Bill Gates",
      "''Treatment without prevention is simply unsustainable.''" +
        "<br>" +
        "-Bill Gates",
    ],
    "Michael Jordan": [
      "''Talent wins games, but teamwork and intelligence wins" +
        "<br>" +
        "championships.'' " +
        "<br>" +
        "-Michael Jordan",
      "''I can accept failure, everyone fails at something." +
        "<br>" +
        "But I can't accept not trying.'' " +
        "<br>" +
        "-Michael Jordan",
      "''You must expect great things of yourself before you can do them.''" +
        "<br>" +
        "-Michael Jordan",
      "''Some people want it to happen, some wish it would happen," +
        " and others make it happen.'' " +
        "<br>" +
        "-Michael Jordan",
      "''I've never lost a game I just ran out of time.''" +
        "<br>" +
        "-Michael Jordan",
    ],
    "Steve Jobs": [
      "''Your time is limited, so don't waste it living someone else's life.''" +
        "<br>" +
        "-Steve Jobs",
      "''Don't let the noise of others' opinions drown out your own inner voice.''" +
        "<br>" +
        "-Steve Jobs",
      "''Stay hungry. Stay foolish.''" + "<br>" + "-Steve Jobs",
      "''Creativity is just connecting things.''" + "<br>" + "-Steve Jobs",
      "''Don't let the noise of others' opinions drown out your own inner voice.''" +
        "<br>" +
        "-Steve Jobs",
    ],
    "Nelson Mandela": [
      "''Real leaders must be ready to sacrifice all for the freedom of their people.''" +
        "<br>" +
        "-Nelson Mandela",
      "''Resentment is like drinking poison and then hoping it will kill your enemies.''" +
        "<br>" +
        "-Nelson Mandela",
      "''It always seems impossible until it's done.''" +
        "<br>" +
        "-Nelson Mandela",
      "''Money won't create success, the freedom to make it will.''" +
        "<br>" +
        "-Nelson Mandela",
      "''It is in the character of growth that we should learn from both pleasant and unpleasant experiences.''" +
        "<br>" +
        "-Nelson Mandela",
    ],
  };

  const personName = this.event.target.value;
  const randomQuoteIndex = Math.floor(Math.random() * 5);
  console.log(personName);
  console.log(randomQuoteIndex);
  document.getElementById(personName).innerHTML =
    names[personName][randomQuoteIndex];
}
