/*
 *  JavaScript Logic
 */
function LikeButton() {
  this.init();
}

const apiInvokeCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          'likes': 30,
          'postId': 1001
        }
      });
    }, 5000);
  });
};

LikeButton.prototype.handleClick = function(event) {
  event.target.classList.add('clicked');
  this.buttonIcon.classList.remove('fa-heart');
  this.buttonIcon.classList.add('fa-circle-notch');
  apiInvokeCall().then(response => {
    event.target.classList.remove('clicked');
    this.buttonIcon.classList.add('fa-heart');
    this.buttonIcon.classList.remove('fa-circle-notch');
  });
};

LikeButton.prototype.init = function() {
  this.button = document.querySelector('button.like');
  this.buttonIcon = document.querySelector('button i');
  this.button.addEventListener('click', this.handleClick.bind(this));
};

new LikeButton();
