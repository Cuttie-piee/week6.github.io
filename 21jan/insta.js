var img_arr = [
  'https://images.pexels.com/photos/70069/pexels-photo-70069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
]
var container_ref = document.getElementsByClassName('post-img')
for (var i=0; i<5; i++ ) {
  var img_ref = document.createElement('img');
  img_ref.src = img_arr[i];
  img_ref.className = 'cover'
  container_ref[i].appendChild(img_ref);
}
const clickArea = document.querySelector('.inner-div');
const likeButton = document.querySelector('.likeButton');
let likeCount = 0;
const showHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    clickArea.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 800);
}
clickArea.addEventListener('dblclick', (e) => {
    likeButton.innerHTML = ++likeCount;
    showHeart(e);
});