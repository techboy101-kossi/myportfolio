const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });


    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    
    //   const img = document.createElement("img"); img.src = "image111.jpg"; //
    //   Replace with your image path img.alt = "My Image"; img.style.width =
    //   "300px"; // Optional styling img.style.borderRadius = "10px";
    //   document.getElementById("hero").appendChild(img);


//   const modal = document.getElementById("imgModal");
//   const modalImg = document.getElementById("modalImage");
//   const imgs = document.querySelectorAll(".click-img");
//   const closeBtn = document.querySelector(".close");

//   imgs.forEach(img => {
//     img.addEventListener("click", () => {
//       modal.style.display = "block";
//       modalImg.src = img.src;
//     });
//   });

//   closeBtn.onclick = () => {
//     modal.style.display = "none";
//   };


