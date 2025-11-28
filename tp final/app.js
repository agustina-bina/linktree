// ============================================
// PICHIS RESCUE - JAVASCRIPT PRINCIPAL
// ============================================

// Import Swal library
const Swal = window.Swal

// ============================================
// 1. BASE DE DATOS DE MASCOTAS
// ============================================

function capitalize(str) {
  if (!str) return ""
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const mascotas = [
  {
    id: 1,
    nombre: "Luna",
    especie: "perro",
    edad: "adulto",
    tamano: "mediano",
    necesidadesEspeciales: false,
    descripcion:
      "Luna es una perra muy cariñosa y tranquila. Le encanta estar cerca de las personas y es ideal para familias.",
    caracteristicas: ["Tranquila", "Sociable", "Cariñosa"],
    imagen: "fotos/Luna.jpg",
  },
  {
    id: 2,
    nombre: "Max",
    especie: "perro",
    edad: "cachorro",
    tamano: "grande",
    necesidadesEspeciales: false,
    descripcion:
      "Max es un cachorro juguetón lleno de energía. Necesita una familia activa que pueda darle mucho ejercicio.",
    caracteristicas: ["Energético", "Juguetón", "Inteligente"],
    imagen: "fotos/Max.jpg",
  },
  {
    id: 3,
    nombre: "Uli",
    especie: "grande",
    edad: "adulto",
    tamano: "chico",
    necesidadesEspeciales: false,
    descripcion: "Uli es un gato independiente pero muy dulce. Disfruta de la tranquilidad y los momentos de caricias.",
    caracteristicas: ["Independiente", "Cariñoso", "Tranquilo"],
    imagen: "fotos/Uli.jpg",
  },
  {
    id: 4,
    nombre: "Coco",
    especie: "gato",
    edad: "senior",
    tamano: "chico",
    necesidadesEspeciales: true,
    descripcion:
      "Coco es una gatita senior que busca un hogar tranquilo donde pasar sus años dorados. Es muy cariñosa y necesita medicación diaria.",
    caracteristicas: ["Cariñosa", "Tranquila", "Leal"],
    imagen: "fotos/Coco.jpg",
  },
  {
    id: 5,
    nombre: "Simba",
    especie: "perro",
    edad: "cachorro",
    tamano: "chico",
    necesidadesEspeciales: false,
    descripcion:
      "Simba es un cachorro curioso, activo y muy divertido. Le encanta explorar y jugar con todo lo que encuentra.",
    caracteristicas: ["Curioso", "Activo", "Juguetón"],
    imagen: "fotos/Simba.jpg",
  },
  {
    id: 6,
    nombre: "Rocky",
    especie: "perro",
    edad: "adulto",
    tamano: "grande",
    necesidadesEspeciales: false,
    descripcion:
      "Rocky es un perro protector y leal. Ideal para hogares con espacio exterior y experiencia con perros grandes.",
    caracteristicas: ["Protector", "Leal", "Obediente"],
    imagen: "fotos/Rocky.jpg",
  },
  {
    id: 7,
    nombre: "Nala",
    especie: "perro",
    edad: "adulto",
    tamano: "grande",
    necesidadesEspeciales: false,
    descripcion: "Nala es una perra muy dulce y sociable. Se lleva bien con personas y otros animales.",
    caracteristicas: ["Cariñosa", "Sociable", "Leal"],
    imagen: "fotos/Nala.jpg",
  },
  {
    id: 8,
    nombre: "Toby",
    especie: "perro",
    edad: "cachorro",
    tamano: "mediano",
    necesidadesEspeciales: true,
    descripcion:
      "Toby perdió una patita en un accidente pero eso no lo detiene. Es alegre, cariñoso y se adapta perfectamente.",
    caracteristicas: ["Resiliente", "Alegre", "Adaptable"],
    imagen: "fotos/Toby.jpg",
  },
  {
    id: 9,
    nombre: "Niebla",
    especie: "gato",
    edad: "senior",
    tamano: "chico",
    necesidadesEspeciales: false,
    descripcion: "Niebla es una gatita senior muy tranquila. Le encanta dormir y recibir mimos suaves.",
    caracteristicas: ["Tranquila", "Dulce", "Dormilona"],
    imagen: "fotos/Niebla.jpg",
  },
  {
    id: 10,
    nombre: "Bruno",
    especie: "perro",
    edad: "adulto",
    tamano: "chico",
    necesidadesEspeciales: false,
    descripcion: "Bruno es un perro salchicha muy amigable, sociable y divertido. Ideal para familias con niños.",
    caracteristicas: ["Amigable", "Paciente", "Sociable"],
    imagen: "fotos/Bruno.jpg",
  },
  {
    id: 11,
    nombre: "Mora",
    especie: "gato",
    edad: "cachorro",
    tamano: "chico",
    necesidadesEspeciales: false,
    descripcion: "Mora es una gatita bebé muy juguetona. Le encanta perseguir juguetes y explorar todo.",
    caracteristicas: ["Juguetona", "Curiosa", "Energética"],
    imagen: "fotos/Mora.jpg",
  },
  {
    id: 12,
    nombre: "Milo",
    especie: "perro",
    edad: "cachorro",
    tamano: "grande",
    necesidadesEspeciales: false,
    descripcion: "Milo es un cachorro grande con mucha energía. Necesita entrenamiento y actividad diaria.",
    caracteristicas: ["Energético", "Fuerte", "Leal"],
    imagen: "fotos/Milo.jpg",
  },
  {
    id: 14,
    nombre: "Otto",
    especie: "gato",
    edad: "adulto",
    tamano: "mediano",
    necesidadesEspeciales: false,
    descripcion: "Otto es un gato muy inteligente y cariñoso. Le gusta jugar y estar cerca de su familia.",
    caracteristicas: ["Inteligente", "Cariñoso", "Curioso"],
    imagen: "fotos/Otto.jpg",
  },
  {
    id: 15,
    nombre: "Lola",
    especie: "gato",
    edad: "senior",
    tamano: "mediano",
    necesidadesEspeciales: true,
    descripcion:
      "Lola es una gatita senior con problemas de movilidad. Necesita un hogar tranquilo y atención veterinaria regular.",
    caracteristicas: ["Tranquila", "Dulce", "Resiliente"],
    imagen: "fotos/Lola.jpg",
  },
]

// ============================================
// 2. NAVEGACIÓN MÓVIL
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.querySelector(".mobile-menu-toggle")
  const nav = document.querySelector(".nav")

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      nav.classList.toggle("active")
    })

    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active")
      })
    })
  }

  // Inicializar funciones según la página
  initHomePage()
  initMascotasPage()
  initInvolucratePage()
  initContactPage()
  initDenunciaModal()
})

// ============================================
// 3. PÁGINA HOME - MASCOTAS DESTACADAS Y CARRUSEL
// ============================================
let currentSlide = 0
const carouselImages = [
  "fotos/apaisada.jpg?height=1080&width=1920",
  "fotos/apai2.jpg?height=1080&width=1920",
  "fotos/apai3.jpg?height=1080&width=1920",
  "fotos/apai4.jpg?height=1080&width=1920",
]

function initHomePage() {
  const featuredContainer = document.getElementById("featuredPets")
  if (featuredContainer) {
    // Mostrar 3 mascotas aleatorias
    const featured = [...mascotas].sort(() => 0.5 - Math.random()).slice(0, 3)

    featuredContainer.innerHTML = featured
      .map(
        (pet) => `
            <div class="card card-pet" onclick="showPetDetails(${pet.id})">
                <img src="${pet.imagen}" alt="${pet.nombre} - ${pet.especie}" class="card-pet-image">
                <h3 class="card-title">${pet.nombre}</h3>
                <p><strong>${pet.especie === "perro" ? "🐕" : "🐱"} ${capitalize(pet.especie)}</strong> • ${capitalize(pet.edad)} • ${capitalize(pet.tamano)}</p>
                ${pet.necesidadesEspeciales ? '<span class="card-badge especial">Necesidades Especiales</span>' : ""}
                <button class="btn btn-outline" style="width: 100%; margin-top: 1rem;">Ver Más</button>
            </div>
        `,
      )
      .join("")
  }

  initCarousel()
}

function initCarousel() {
  const heroImage = document.querySelector(".hero-image")
  const prevBtn = document.querySelector(".carousel-btn-prev")
  const nextBtn = document.querySelector(".carousel-btn-next")
  const indicators = document.querySelectorAll(".carousel-indicator")

  if (!heroImage || !prevBtn || !nextBtn) return

  function updateCarousel() {
    heroImage.src = carouselImages[currentSlide]
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentSlide)
    })
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselImages.length
    updateCarousel()
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselImages.length) % carouselImages.length
    updateCarousel()
  }

  prevBtn.addEventListener("click", prevSlide)
  nextBtn.addEventListener("click", nextSlide)

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentSlide = index
      updateCarousel()
    })
  })

  // Auto-advance carousel every 5 seconds
  setInterval(nextSlide, 5000)

  updateCarousel()
}

// ============================================
// 4. PÁGINA MASCOTAS - FILTROS Y CATÁLOGO
// ============================================
function initMascotasPage() {
  const mascotasContainer = document.getElementById("mascotasContainer")
  if (!mascotasContainer) return

  console.log("[v0] Initializing mascotas page with", mascotas.length, "pets")

  renderMascotas(mascotas)

  // Escuchar cambios en los filtros
  const filterEspecie = document.getElementById("filterEspecie")
  const filterTamano = document.getElementById("filterTamano")
  const filterEdad = document.getElementById("filterEdad")
  const filterNecesidades = document.getElementById("filterNecesidades")
  const clearFilters = document.getElementById("clearFilters")
  const clearFiltersAlt = document.getElementById("clearFiltersAlt")

  console.log("[v0] Filter elements found:", {
    especie: !!filterEspecie,
    tamano: !!filterTamano,
    edad: !!filterEdad,
    necesidades: !!filterNecesidades,
    clear: !!clearFilters,
  })

  const applyFilters = () => {
    console.log("[v0] Applying filters...")
    const filtered = mascotas.filter((pet) => {
      const especieValue = filterEspecie?.value || ""
      const tamanoValue = filterTamano?.value || ""
      const edadValue = filterEdad?.value || ""
      const necesidadesValue = filterNecesidades?.value || ""

      const especieMatch = !especieValue || pet.especie === especieValue
      const tamanoMatch = !tamanoValue || pet.tamano === tamanoValue
      const edadMatch = !edadValue || pet.edad === edadValue
      const necesidadesMatch =
        !necesidadesValue ||
        (necesidadesValue === "si" && pet.necesidadesEspeciales) ||
        (necesidadesValue === "no" && !pet.necesidadesEspeciales)

      return especieMatch && tamanoMatch && edadMatch && necesidadesMatch
    })

    console.log("[v0] Filtered results:", filtered.length, "pets")
    renderMascotas(filtered)
  }

  if (filterEspecie) filterEspecie.addEventListener("change", applyFilters)
  if (filterTamano) filterTamano.addEventListener("change", applyFilters)
  if (filterEdad) filterEdad.addEventListener("change", applyFilters)
  if (filterNecesidades) filterNecesidades.addEventListener("change", applyFilters)

  const resetFilters = () => {
    console.log("[v0] Resetting filters...")
    if (filterEspecie) filterEspecie.value = ""
    if (filterTamano) filterTamano.value = ""
    if (filterEdad) filterEdad.value = ""
    if (filterNecesidades) filterNecesidades.value = ""
    renderMascotas(mascotas)
  }

  if (clearFilters) clearFilters.addEventListener("click", resetFilters)
  if (clearFiltersAlt) clearFiltersAlt.addEventListener("click", resetFilters)
}

function renderMascotas(pets) {
  const container = document.getElementById("mascotasContainer")
  const noResults = document.getElementById("noResults")

  console.log("[v0] Rendering", pets.length, "pets")

  if (pets.length === 0) {
    container.style.display = "none"
    if (noResults) noResults.style.display = "block"
    return
  }

  container.style.display = "grid"
  if (noResults) noResults.style.display = "none"

  container.innerHTML = pets
    .map(
      (pet) => `
        <div class="card card-pet" onclick="showPetDetails(${pet.id})">
            <img src="${pet.imagen}" alt="${pet.nombre} - ${pet.especie}" class="card-pet-image" loading="lazy">
            <div class="card-pet-content">
                <h3 class="card-title">${pet.nombre}</h3>
                <p class="card-pet-info">
                    <strong>${pet.especie === "perro" ? "🐕 Perro" : "🐱 Gato"}</strong>
                </p>
                <p class="card-pet-info">
                    <strong>Tamaño:</strong> ${capitalize(pet.tamano)}
                </p>
                <p class="card-pet-info">
                    <strong>Edad:</strong> ${capitalize(pet.edad)}
                </p>
                <p class="card-pet-description">${pet.descripcion}</p>
                ${pet.necesidadesEspeciales ? '<span class="card-badge especial">Necesidades Especiales</span>' : ""}
            </div>
        </div>
    `,
    )
    .join("")

  console.log("[v0] Rendered successfully")
}

// ============================================
// 5. CALCULADORA DE DONACIONES
// ============================================
function initInvolucratePage() {
  const calculateBtn = document.getElementById("calculateDonation")
  if (!calculateBtn) return

  calculateBtn.addEventListener("click", calcularDonacion)

  // Inicializar juego de adopciones
  initAdoptionGame()
}

function calcularDonacion() {
  const amount = Number.parseInt(document.getElementById("donationAmount").value)
  const resultDiv = document.getElementById("donationResult")

  if (!amount || amount < 100) {
    Swal.fire({
      icon: "warning",
      title: "Monto inválido",
      text: "Por favor ingresá un monto de al menos $100",
      confirmButtonColor: "#FF8C42",
    })
    return
  }

  const precios = {
    alimentos: 150, // Precio por unidad de alimentos
    ropa: 300, // Precio por unidad de ropa/juguetes/camas
    veterinario: 800, // Precio por tratamiento veterinario
  }

  const cantidades = {
    alimentos: Math.floor(amount / precios.alimentos),
    ropa: Math.floor(amount / precios.ropa),
    veterinario: Math.floor(amount / precios.veterinario),
  }

  document.querySelector('[data-category="alimentos"] .bubble-value').textContent = cantidades.alimentos
  document.querySelector('[data-category="ropa"] .bubble-value').textContent = cantidades.ropa
  document.querySelector('[data-category="veterinario"] .bubble-value').textContent = cantidades.veterinario

  resultDiv.style.display = "block"
}

// ============================================
// 6. JUEGO DE ADOPCIONES
// ============================================
const gameScore = { correct: 0, wrong: 0 }
let currentAdoptante = null

function initAdoptionGame() {
  const newAdoptanteBtn = document.getElementById("newAdoptante")
  if (!newAdoptanteBtn) return

  newAdoptanteBtn.addEventListener("click", generateNewAdoptante)
  generateNewAdoptante() // Generar el primero automáticamente
}

function generateNewAdoptante() {
  const perfiles = [
    {
      especie: "perro",
      tamano: "chico",
      edad: "adulto",
      personalidad: "tranquilo",
      descripcion: "Busco un perro tamaño chico, preferentemente tranquilo y adulto.",
    },
    {
      especie: "perro",
      tamano: "grande",
      edad: "cachorro",
      personalidad: "energético",
      descripcion: "Quiero un cachorro grande y juguetón para una familia activa.",
    },
    {
      especie: "gato",
      tamano: "chico",
      edad: "adulto",
      personalidad: "independiente",
      descripcion: "Busco un gato adulto, tranquilo e independiente para un depto.",
    },
    {
      especie: "gato",
      tamano: "chico",
      edad: "cachorro",
      personalidad: "juguetón",
      descripcion: "Quiero un gatito bebé, juguetón y curioso.",
    },
    {
      especie: "perro",
      tamano: "mediano",
      edad: "adulto",
      personalidad: "cariñoso",
      descripcion: "Busco un perro mediano, cariñoso y sociable.",
    },
    {
      especie: "perro",
      tamano: "grande",
      edad: "adulto",
      personalidad: "protector",
      descripcion: "Necesito un perro grande que sea protector y leal.",
    },
  ]

  currentAdoptante = perfiles[Math.floor(Math.random() * perfiles.length)]

  const profileDiv = document.getElementById("adopanteProfile")
  profileDiv.innerHTML = `
        <p style="font-size: 1.1rem; line-height: 1.8;">
            <strong>💬 "${currentAdoptante.descripcion}"</strong>
        </p>
        <p style="margin-top: 1rem; color: var(--gray);">
            Especie: ${capitalize(currentAdoptante.especie)} •
            Tamaño: ${capitalize(currentAdoptante.tamano)} •
            Edad: ${capitalize(currentAdoptante.edad)}
        </p>
    `

  renderGamePets()
}

function renderGamePets() {
  const gamePetsDiv = document.getElementById("gamePets")
  if (!gamePetsDiv) return

  // Seleccionar 4 mascotas aleatorias
  const selectedPets = [...mascotas].sort(() => 0.5 - Math.random()).slice(0, 4)

  gamePetsDiv.innerHTML = selectedPets
    .map(
      (pet) => `
        <div class="game-pet-card" onclick="checkAdoptionMatch(${pet.id})">
            <img src="${pet.imagen}" alt="${pet.nombre}">
            <h4>${pet.nombre}</h4>
            <p>${pet.especie === "perro" ? "🐕" : "🐱"} ${capitalize(pet.especie)}</p>
            <p style="font-size: 0.8rem;">${capitalize(pet.tamano)} • ${capitalize(pet.edad)}</p>
        </div>
    `,
    )
    .join("")
}

function checkAdoptionMatch(petId) {
  const pet = mascotas.find((p) => p.id === petId)
  if (!pet || !currentAdoptante) return

  // Verificar coincidencias
  const especieMatch = pet.especie === currentAdoptante.especie
  const tamanoMatch = pet.tamano === currentAdoptante.tamano
  const edadMatch = pet.edad === currentAdoptante.edad

  const isCorrect = especieMatch && tamanoMatch && edadMatch

  if (isCorrect) {
    gameScore.correct++
    Swal.fire({
      icon: "success",
      title: "¡Perfecto Match! ",
      text: `${pet.nombre} es ideal para este adoptante. ¡Excelente elección!`,
      confirmButtonColor: "#27AE60",
    }).then(() => {
      generateNewAdoptante()
    })
  } else {
    gameScore.wrong++
    let reason = ""
    if (!especieMatch) reason = `Están buscando un ${currentAdoptante.especie}, no un ${pet.especie}.`
    else if (!tamanoMatch) reason = `Buscan tamaño ${currentAdoptante.tamano}, y ${pet.nombre} es ${pet.tamano}.`
    else if (!edadMatch) reason = `Prefieren ${currentAdoptante.edad}, y ${pet.nombre} es ${pet.edad}.`

    Swal.fire({
      icon: "error",
      title: "No es el match correcto 😢",
      text: reason,
      confirmButtonColor: "#E74C3C",
    })
  }

  updateScore()
}

function updateScore() {
  const scoreCorrect = document.getElementById("scoreCorrect")
  const scoreWrong = document.getElementById("scoreWrong")

  if (scoreCorrect) scoreCorrect.textContent = gameScore.correct
  if (scoreWrong) scoreWrong.textContent = gameScore.wrong
}

// ============================================
// 7. FORMULARIO DE CONTACTO
// ============================================
function initContactPage() {
  const contactForm = document.getElementById("contactForm")
  if (!contactForm) return

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("contactName").value.trim()
    const email = document.getElementById("contactEmail").value.trim()
    const message = document.getElementById("contactMessage").value.trim()

    // Validaciones
    if (!name || name.length < 2) {
      Swal.fire({
        icon: "error",
        title: "Nombre inválido",
        text: "Por favor ingresá tu nombre completo",
        confirmButtonColor: "#E74C3C",
      })
      return
    }

    if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Email inválido",
        text: "Por favor ingresá un email válido",
        confirmButtonColor: "#E74C3C",
      })
      return
    }

    if (!message || message.length < 10) {
      Swal.fire({
        icon: "error",
        title: "Mensaje muy corto",
        text: "Por favor escribí al menos 10 caracteres en tu mensaje",
        confirmButtonColor: "#E74C3C",
      })
      return
    }

    // Simular envío exitoso
    Swal.fire({
      icon: "success",
      title: "¡Mensaje Enviado!",
      text: "Gracias por contactarnos. Te responderemos a la brevedad.",
      confirmButtonColor: "#27AE60",
    }).then(() => {
      contactForm.reset()
    })
  })
}

// ============================================
// 8. MODAL DE DENUNCIA
// ============================================
function initDenunciaModal() {
  const denunciaBtn = document.querySelector(".denuncia-btn")
  const denunciaModal = document.getElementById("denunciaModal")
  const denunciaForm = document.getElementById("denunciaForm")
  const closeBtn = denunciaModal?.querySelector(".modal-close")

  if (!denunciaBtn || !denunciaModal) return

  denunciaBtn.addEventListener("click", (e) => {
    e.preventDefault()
    denunciaModal.classList.add("active")
  })

  closeBtn?.addEventListener("click", () => {
    denunciaModal.classList.remove("active")
  })

  denunciaModal.addEventListener("click", (e) => {
    if (e.target === denunciaModal) {
      denunciaModal.classList.remove("active")
    }
  })

  denunciaForm?.addEventListener("submit", (e) => {
    e.preventDefault()

    const ubicacion = document.getElementById("denunciaUbicacion").value.trim()
    const descripcion = document.getElementById("denunciaDescripcion").value.trim()
    const email = document.getElementById("denunciaEmail")?.value.trim()

    if (!ubicacion || !descripcion || descripcion.length < 20) {
      Swal.fire({
        icon: "error",
        title: "Información incompleta",
        text: "Por favor completá todos los campos obligatorios. La descripción debe tener al menos 20 caracteres.",
        confirmButtonColor: "#E74C3C",
      })
      return
    }

    if (email && !validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Email inválido",
        text: "Por favor ingresá un email válido o dejá el campo vacío",
        confirmButtonColor: "#E74C3C",
      })
      return
    }

    Swal.fire({
      icon: "success",
      title: "Denuncia Recibida",
      text: "Gracias por reportar. Tu denuncia será derivada a las autoridades correspondientes.",
      confirmButtonColor: "#27AE60",
    }).then(() => {
      denunciaForm.reset()
      denunciaModal.classList.remove("active")
    })
  })
}

// ============================================
// 9. UTILIDADES
// ============================================

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Hacer showPetDetails disponible globalmente
window.showPetDetails = (petId) => {
  const pet = mascotas.find((p) => p.id === petId)
  if (!pet) return

  Swal.fire({
    title: `${pet.nombre}`,
    imageUrl: pet.imagen,
    imageHeight: 200,
    imageAlt: `${pet.nombre} - ${pet.especie}`,
    html: `
            <p><strong>${pet.especie === "perro" ? "🐕" : "🐱"} ${capitalize(pet.especie)}</strong> • ${capitalize(pet.edad)} • ${capitalize(pet.tamano)}</p>
            <p><strong>Características:</strong> ${pet.caracteristicas.join(", ")}</p>
            <p><strong>Descripción:</strong> ${pet.descripcion}</p>
            ${pet.necesidadesEspeciales ? "<p><strong>Necesidades Especiales:</strong> Sí</p>" : ""}
        `,
    confirmButtonText: "Adoptar",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "contacto.html"
    }
  })
}

window.checkAdoptionMatch = checkAdoptionMatch
