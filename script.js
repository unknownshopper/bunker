document.addEventListener('DOMContentLoaded', function () {
    // Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const error = document.getElementById('loginError');
  
        // Validación simple
        if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
          error.textContent = "Ingresa un correo válido.";
          return;
        }
        if (password.length < 8) {
          error.textContent = "La contraseña debe tener al menos 8 caracteres.";
          return;
        }
  
        // Simulación de login exitoso
        document.getElementById('loginModal').style.display = 'none';
        error.textContent = "";
        // Aquí puedes mostrar contenido exclusivo, etc.
      });
    }
  
    // Auto-scroll suave para la barra de cervezas
    const cervezaAside = document.querySelector('.cerveza-aside');
    if (cervezaAside) {
      let autoScrollActive = true;
      let scrollSpeed = 0.5; // píxeles por frame
  
      function autoScroll() {
        if (autoScrollActive && cervezaAside) {
          cervezaAside.scrollTop += scrollSpeed;
          // Si llegó al final, regresa al inicio
          if (cervezaAside.scrollTop + cervezaAside.clientHeight >= cervezaAside.scrollHeight - 1) {
            cervezaAside.scrollTop = 0;
          }
        }
        requestAnimationFrame(autoScroll);
      }
  
      // Pausa el auto-scroll cuando el usuario interactúa
      cervezaAside.addEventListener('mouseenter', () => { autoScrollActive = false; });
      cervezaAside.addEventListener('mouseleave', () => { autoScrollActive = true; });
      cervezaAside.addEventListener('wheel', () => { autoScrollActive = false; });
      cervezaAside.addEventListener('touchstart', () => { autoScrollActive = false; });
  
      autoScroll();
    }
  });