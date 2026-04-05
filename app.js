const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

const nameField = document.getElementById("name");
const subjectField = document.getElementById("dynamic-subject");


form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // 🔥 Dynamic Subject Set
  const userName = nameField.value.trim();
  subjectField.value = `New Inquiry Generated from ${userName}`;

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.innerHTML = "✅ Message sent successfully!";
      status.style.color = "green";
      form.reset();
    } else {
      status.innerHTML = "❌ Oops! Something went wrong.";
      status.style.color = "red";
    }

  } catch (error) {
    status.innerHTML = "❌ Network error. Try again.";
    status.style.color = "red";
  }
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav ul');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('toggle'); 
});


// ================= COUNTER ANIMATION (FINAL PREMIUM) =================
document.addEventListener("DOMContentLoaded", () => {

  const counters = [
    { id: "projectCount", target: 20 },
    { id: "clientCount", target: 15 },
    { id: "yearsCount", target: 3 }
  ];

  // slight delay for smooth UI feel
  setTimeout(() => {
    counters.forEach(counter => {
      animateCounter(counter.id, counter.target);
    });
  }, 300);

});

function animateCounter(id, target) {
  const element = document.getElementById(id);
  if (!element) return;

  let start = 0;
  const duration = 1500; // total animation time (ms)
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;

    // easing function (slow at end)
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);

    const value = Math.floor(easeOut * target);
    element.innerText = value;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.innerText = target;
    }
  }

  requestAnimationFrame(update);
}