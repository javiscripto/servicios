const toggleBtn= document.querySelector(".toggle")
const container=document.querySelector(".contenedor")

const body= document.querySelector(".body")

container.addEventListener("click", ()=>{
    toggleBtn.classList.toggle("active")
    body.classList.toggle("dark")
})




// const toggleBtn = document.querySelector(".toggle");
// const container = document.querySelector(".contenedor");

// let isDragging = false;
// let initialX = 0;

// toggleBtn.addEventListener("mousedown", (e) => {
//   isDragging = true;
//   initialX = e.clientX;
//   document.body.style.userSelect = "none"; // Evitar que el texto sea seleccionado al arrastrar
// });

// document.addEventListener("mousemove", (e) => {
//   if (isDragging) {
//     let moveX = e.clientX - initialX;
//     let containerWidth = container.offsetWidth - toggleBtn.offsetWidth; // Limitar el movimiento dentro del contenedor

//     // Limitar el rango del desplazamiento
//     if (moveX < 0) moveX = 0;
//     if (moveX > containerWidth) moveX = containerWidth;

//     toggleBtn.style.transform = `translateX(${moveX}px)`;
//   }
// });

// document.addEventListener("mouseup", () => {
//   if (isDragging) {
//     isDragging = false;
//     document.body.style.userSelect = ""; // Permitir seleccionar de nuevo

//     // Toggle active state cuando el botón llegue a más de la mitad
//     if (parseInt(toggleBtn.style.transform.replace("translateX(", "").replace("px)", "")) > container.offsetWidth / 2) {
//       toggleBtn.classList.add("active");
//       toggleBtn.style.transform = `translateX(${container.offsetWidth - toggleBtn.offsetWidth}px)`;
//     } else {
//       toggleBtn.classList.remove("active");
//       toggleBtn.style.transform = `translateX(0px)`;
//     }
//   }
// });
