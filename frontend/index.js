function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here

  const widgetClass = document.querySelectorAll("section div")
  widgetClass.forEach(widgetClass => widgetClass.classList.add('widget'))
  // widgetClass.classList.add('widget')

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here

  const quoteOTD = document.querySelector('.quoteoftheday');
  let ranNum = Math.floor(Math.random() * 9);
  // console.log(quotes[ranNum].quote)
  const randomQInfo = quotes[ranNum];
  // console.log(randomQInfo)

  const qouteDiv1 = quoteOTD.appendChild(document.createElement('div'))
  const qouteDiv2 = quoteOTD.appendChild(document.createElement('div'))
    qouteDiv1.textContent = `${randomQInfo.quote}`
    
    if(randomQInfo.date) {
        qouteDiv2.textContent = `${randomQInfo.author} in ${randomQInfo.date}`
    } else {
        qouteDiv2.textContent = `${randomQInfo.author} in an unknown date`
    } 

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here

  const corporateSpeak = document.querySelector('.corporatespeak');
    const corpPar = corporateSpeak.appendChild(document.createElement('p'))
    let corpWord = {
      verb1: verbs[(Math.floor(Math.random() * 9))],
      verb2: verbs[(Math.floor(Math.random() * 9))],
      noun1: nouns[(Math.floor(Math.random() * 9))],
      noun2: nouns[(Math.floor(Math.random() * 9))],
      adverb1: adverbs[(Math.floor(Math.random() * 9))],
      adverb2: adverbs[(Math.floor(Math.random() * 9))],
      
    };
    corpPar.textContent = `We need to ${corpWord.verb1} our ${corpWord.noun1} ${corpWord.adverb1} in order to ${corpWord.verb2} our ${corpWord.noun2} ${corpWord.adverb2}.`


  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  const countdown = document.querySelector('.countdown')
  const countDiv1 = countdown.appendChild(document.createElement('p'))
  let count = 5;
  countDiv1.textContent = `T minus ${count}...`

  function countDownTimer() {
    count = count -1;
    countDiv1.textContent = `T minus ${count}...`
    if(count <= 0) {
      countDiv1.innerHTML = "Blast off!";
      clearInterval(blastOffTimer)
    } else return count;
  }

  const blastOffTimer = setInterval(countDownTimer, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  const friendsWidg = document.querySelector('.friends')
  const friendsPar = friendsWidg.appendChild(document.createElement('p'))
  
  let randomPerson = people[(Math.floor(Math.random() * 14))];
  let numFriends = randomPerson.friends;
  let birthYear = randomPerson.dateOfBirth.split('-')[0];
  let theirFriends = [];
  for(let i = 0; i < numFriends.length; i++) {
    let newFriend = ""
    for(let x = 0; x < people.length; x++) {
      if(people[x].id === numFriends[i]) {
        newFriend = `${people[x].fname} ${people[x].lname}`
        theirFriends.push(newFriend)
      }
    }
  }
  
  let namesReg = theirFriends.join(', ').replace(/,([^,]*)$/, ' and$1')
  // console.log(namesReg)

  if(numFriends.length === 0) {
    friendsPar.textContent = `${randomPerson.fname} ${randomPerson.lname} was born in ${birthYear} and has no friends`
  } else {
    friendsPar.textContent = `${randomPerson.fname} ${randomPerson.lname} was born in ${birthYear} and is friends with ${namesReg}.`
  }

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  let widgeList = widgetClass;
  let tabCount = 1;
  widgeList.forEach(
    function(node) {
      node.setAttribute("tabindex", tabCount)
      tabCount = tabCount + 1;
      return tabCount
    }
  )


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
