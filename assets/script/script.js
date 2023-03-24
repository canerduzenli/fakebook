const postBtn = document.querySelector('.addPost');
const imgUpload = document.querySelector('#imgUpload');
const fileResult = document.querySelector('.fileName');
const textArea = document.querySelector('.post');
const postCon = document.querySelector('.postCon');
const modalContainer = document.getElementById('modal-container');

class User {
  constructor(id, name, userName, email) {
    this.id = id;
    this.name = name;
    this.userName = userName;
    this.email = email;
  }
}

class Subscriber extends User {
  constructor(id, name, userName, email, pages, groups, canMonetize) {
    super(id, name, userName, email);
    this.pages = pages;
    this.groups = groups;
    this.canMonetize = canMonetize;
  }
}

const subscriber = new Subscriber(
  1234,
  'Caner',
  'duzenlicaner',
  'canerd@gmail.com',
  6,
  3,
  true
);

const accountBtn = document.querySelector('.img');

accountBtn.addEventListener('click', () => {
  modalContainer.style.visibility = 'visible';
  document.getElementById('id').innerHTML = `ID: ${subscriber.id}`;
  document.getElementById('username').innerHTML = `Username: ${subscriber.userName}`;
  document.getElementById('email').innerHTML = `Email: ${subscriber.email}`;
  document.getElementById('groups').innerHTML = `Groups: ${subscriber.groups}`;
  document.getElementById('can Monetize').innerHTML = `Can Monetize: ${subscriber.canMonetize}`;
});

imgUpload.addEventListener('change', () => {
  const file = imgUpload.files[0];
  if (file) {
    fileResult.textContent = file.name;
  }
});
postBtn.addEventListener('click', () => {
  if (textArea.value.trim() !== '') {
    const newPost = document.createElement('div');
    newPost.classList.add('post');

    const postHeader = document.createElement('div');
    postHeader.classList.add('postHeader');

    const userImg = document.createElement('img');
    userImg.classList.add('userImg');
    userImg.setAttribute('src', './assets/images/IMG_3440 Large.jpeg');

    postHeader.appendChild(userImg);

    const postAuthor = document.createElement('div');
    postAuthor.classList.add('postAuthor');
    postAuthor.textContent = 'Caner Duzenli';

    postHeader.appendChild(postAuthor);

    const postContent = document.createElement('div');
    postContent.classList.add('postContent');

    const postText = document.createElement('p');
    postText.classList.add('postText');
    postText.textContent = textArea.value;
    postContent.appendChild(postText);

    const postDate = document.createElement('div');
    postDate.classList.add('postDate');
    const currentDate = new Date();
    postDate.textContent = currentDate.toLocaleString();

    postContent.appendChild(postDate);

    const file = imgUpload.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const postImg = document.createElement('img');
        postImg.classList.add('postImg');
        postImg.src = event.target.result;
        postContent.appendChild(postImg);
      };
      reader.readAsDataURL(file);
    }

    newPost.appendChild(postHeader);
    newPost.appendChild(postContent);
    postCon.appendChild(newPost);

    textArea.value = '';
  }
});
