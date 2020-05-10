/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cards =document.querySelector('.cards');

axios.get("https://api.github.com/users/j721")
  .then(response=>{
      cards.append(createCard(response.data))
      console.log(response);
  })
  .catch(error=>{
      console.log('the data was not returned', error)
  });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['witlessmean', 'mrsimpson3000', 
'DanialHadavi', 'berachele', 'easpaas'];

followersArray.forEach(item =>{
  axios.get(`https://api.github.com/users/${item}`)
  .then(response=>{
    console.log(response.data);
    cards.appendChild(createCard(response.data))
  })
  .catch(error=>{
    console.log('data was not returned', error);
  });
})



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


function createCard(data){
//create elements
const card =document.createElement('div');
const picture = document.createElement('img');
const cardInfo = document.createElement('div');
const name= document.createElement('h3');
const username = document.createElement('p');
const location = document.createElement('p');
const profile = document.createElement('p');
const link = document.createElement('a');
const followers = document.createElement('p');
const following = document.createElement('p');
const bio = document.createElement('p');




//adding classes to elements 
card.classList.add('card');
cardInfo.classList.add('card-info');
name.classList.add('name');
username.classList.add('username');

//setting text content
picture.src = data.avatar_url; 
name.textContent= data.name;
username.textContent= data.login; 
location.textContent=data.location;
profile.textContent='Profile:';
link.setAttribute(`href`,data.html_url);
link.textContent= data.html_url; 
followers.textContent= `Followers: ${data.followers}`;
following.textContent=`Following: ${data.following}`;  
bio.textContent= data.bio;

//append elements

profile.append(link);
card.append(picture, cardInfo);
cardInfo.append(name, username, location, profile, followers, following,bio);

return card;


}
