const btn = document.querySelectorAll('.sidebar ul li');

btn.forEach(item =>{

    item.addEventListener('click',()=> {
        btn.forEach(item => item.classList.remove('line--behind'));
        item.classList.add('line--behind');
    })
})

// CALL ACTION MODAL WINDOW
const openCallModal = () => {

  const closeBtn = document.querySelector('.call-action__closeBtn');
  const callForm = document.querySelector('.call-action__form');
  const showForm = document.getElementById('do_show');
  const formBg = document.querySelector('.call-action__bg');
  const callModal = document.querySelector('.call-action');

  //open
  showForm.addEventListener('click', (e) => {
    openCallModall(e);
  });
  //close
  closeBtn.addEventListener('click', (e) => {
    closeCallModall(e);
  });

  function openCallModall(e) {
    e.preventDefault();
    showForm.style.display = 'none';
    closeBtn.style.display = 'flex';
    formBg.classList.add('move');
    callForm.classList.add('show');
    callModal.classList.add('show');
  }
  function closeCallModall(e) {
    e.preventDefault();
    formBg.classList.remove('move');
    callForm.classList.remove('show');
    showForm.style.display = 'flex';
    closeBtn.style.display = 'none';
    setTimeout(() => {
      callModal.classList.remove('show');
    }, 400);
  }
}

openCallModal();

//ARM ANIMATION


const pathHover1 =
  'M499.537 482.957C479.037 471.957 489.177 471.298 455.037 453.457C398.037 431.957 356.537 435.316 296.037 432.457C266.537 433.457 225.037 430.458 205.793 452.12C196.537 461.458 191.037 464.458 176.537 464.458';
const path1 = "M500.786 514.487C492.767 476.019 469.943 448.733 435.803 430.892C386.162 404.952 336.219 401.373 283.476 424.892C257.776 436.351 241.571 450.768 235.398 478.483C232.753 490.36 225.555 503.02 208.642 500.821";

const pathHover2 =
  'M122.216 195.734C140.739 196.958 139.738 212.849 140.537 223.957C152.037 277.957 166.327 352.959 183.037 408.457C188.608 426.957 193.764 441.362 199.853 451.941';
const path2 = "M215.475 211.947C233.998 213.171 232.998 229.062 233.797 240.17C237.687 294.196 240.126 348.33 242.685 402.445C243.259 414.576 247.702 430.351 253.791 440.93";

const pathHover3 =
  'M234.484 3.95703C239.665 18.607 252.518 27.574 261.127 39.719C274.755 58.944 289.427 77.427 303.679 96.211C312.692 108.093 310.857 119.838 301.857 130.287C283.433 151.675 264.652 172.754 245.512 193.524C230.951 209.366 220.455 209.503 204.584 195.305C199.473 190.733 194.137 186.391 189.284 181.558C186.53 178.813 182.127 179.003 180.878 180.158C167.697 192.336 149.103 189.131 134.537 197.012';
const path3 = "M329.087 23.1641C334.268 37.8141 347.121 46.7811 355.73 58.9261C369.358 78.1511 384.03 96.6341 398.282 115.418C407.295 127.3 405.46 139.045 396.46 149.494C378.036 170.882 359.254 191.961 340.115 212.731C325.554 228.573 315.058 228.71 299.187 214.512C294.076 209.94 288.74 205.598 283.887 200.765C281.133 198.02 276.73 198.21 275.481 199.365C262.3 211.543 243.706 208.338 229.14 216.219";

const pathHover4 =
  'M738.537 438.957C721.037 430.956 706.037 427.956 696.037 425.456C645.037 412.706 631.537 417.456 585.037 418.456C558.037 421.457 542.537 428.457 509.037 445.957C498.037 452.457 487.44 456.484 480.037 464.457';
const path4 = "M724.592 409.273C713.333 411.109 707.175 401.773 699.069 397.132C659.078 374.246 617.39 362.026 570.797 371.518C536.476 378.51 509.014 396.336 485.422 421.243C477.94 429.143 470.603 437.177 463.2 445.15";

const pathHover5 =
  'M233.781 2C200.207 13.7 168.9 30.568 136.472 44.876C105.95 58.343 82.0373 78.9766 54.5373 95.9766C36.0373 107.413 24.5373 113.477 15.7722 128.621C0.587237 181.463 2.03729 286.477 2.03729 286.477C2.03729 286.477 20.2973 458.064 5.03729 523.977C-0.585712 548.262 9.20429 557.694 11.5373 583.477C12.3863 592.86 21.7672 597.801 31.8062 601.483C73.3942 616.735 104.755 648.067 141.249 671.338C181.265 696.855 221.472 700.923 269.244 710.564C289.692 714.691 309.938 719.757 330.814 720.392C374.822 721.73 418.782 720.499 462.337 713.524C481.837 710.401 501.031 705.391 520.486 701.924C525.356 701.056 531.361 701.491 535.724 703.624C595.245 732.697 657.907 733.766 723.759 727.65C728.84 727.178 734.004 727.588 739.129 727.588';
const path5 = "M328.233 29.998C294.659 41.698 263.352 58.5661 230.924 72.8741C200.402 86.3411 171.434 104.041 139.989 114.474C116.889 122.137 114.797 140.703 110.224 156.619C95.0388 209.461 65.4788 315.41 65.4788 315.41C65.4788 315.41 20.3618 447.379 5.10182 513.292C-0.521178 537.577 2.76882 561.192 5.10182 586.975C5.95082 596.358 7.22982 603.845 17.2688 607.527C58.8568 622.779 90.2178 654.111 126.712 677.382C166.728 702.899 206.935 727.967 254.707 737.608C275.155 741.735 295.401 746.801 316.277 747.436C360.285 748.774 404.245 747.543 447.8 740.568C467.3 737.445 486.494 732.435 505.949 728.968C510.819 728.1 516.824 728.535 521.187 730.668C580.708 759.741 643.37 770.81 709.222 764.694C714.303 764.222 719.467 764.632 724.592 764.632";

let TOGGLE = true;
document.querySelector('.arm').addEventListener('mouseenter', () => {
  console.log('fsd');
  armAnime();
  TOGGLE = false;
});
document.querySelector('.arm').addEventListener('mouseleave', () => {
  console.log('fsd');
  armAnime();
  TOGGLE = true;
});
function armAnime() {
  const line1 = anime({
    targets: '#line1',
    d: [{ value: TOGGLE ? pathHover1 : path1 }],
    easing: 'easeOutQuad',
    duration: 500,
    loop: false,
  });
  const line2 = anime({
    targets: '#line2',
    d: [
      {
        value: TOGGLE ? pathHover2 : path2
      }
    ],
    easing: 'easeOutQuad',
    duration: 500,
    loop: false,
  });
  const line3 = anime({
    targets: '#line3',
    d: [{ value: TOGGLE ? pathHover3 : path3 }],
    easing: 'easeOutQuad',
    duration: 500,
    loop: false,
  });
  const line4 = anime({
    targets: '#line4',
    d: [{ value: TOGGLE ? pathHover4 : path4 }],
    easing: 'easeOutQuad',
    duration: 500,
    loop: false,
  });
  const line5 = anime({
    targets: '#line5',
    d: [{ value: TOGGLE ? pathHover5 : path5 }],
    easing: 'easeOutQuad',
    duration: 500,
    loop: false,
  });

  anime({
    targets: '#line01',
    opacity: TOGGLE ? "0" : "1",
    easing: 'easeOutQuad',
    duration: 300,
    loop: false,
  });
  anime({
    targets: '#line02',
    opacity: TOGGLE ? "0" : "1",
    easing: 'easeOutQuad',
    duration: 300,
    loop: false,
  });
}
