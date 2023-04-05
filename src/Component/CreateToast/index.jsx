const toasts = {
  error: {
    icon: `
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="circle-exclamation"
      class="svg-inline--fa fa-circle-exclamation icon"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
      ></path>
    </svg>`,
    msg: "Location not found!",
  },
};

function createToast(status) {
  let toast = document.createElement("div");
  toast.className = `toast ${status}`;

  toast.innerHTML = `
        ${toasts[status].icon}
      <span class="msg">${toasts[status].msg}</span>
      <span class="countdown"></span>
      `;
  document.querySelector("#toasts").appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "hide_slide 1s ease forwards";
  }, 4000);
  setTimeout(() => {
    toast.remove();
  }, 6000);
}

export default createToast;
