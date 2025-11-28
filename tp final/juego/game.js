const animals = [
  { nombre: "Spaniel / Springer Spaniel mezcla", tipo: "perro", tamaño: "mediano", imageUrl: "../fotos/1.png" },
  { nombre: "Pastor Alemán", tipo: "perro", tamaño: "grande", imageUrl: "../fotos/2.png" },
  { nombre: "Border Collie", tipo: "perro", tamaño: "mediano", imageUrl: "../fotos/3.png" },
  { nombre: "Gato atigrado gris", tipo: "gato", tamaño: "mediano", imageUrl: "../fotos/4.png" },
  { nombre: "Poodle Toy / mezcla", tipo: "perro", tamaño: "chico", imageUrl: "../fotos/5.png" },
  { nombre: "Terrier marrón / mezcla tipo pitbull", tipo: "perro", tamaño: "mediano", imageUrl: "../fotos/7.png" },
  { nombre: "Dachshund", tipo: "perro", tamaño: "chico", imageUrl: "../fotos/8.png" },
  { nombre: "Dachshund cachorro", tipo: "perro", tamaño: "chico", imageUrl: "../fotos/11.png" },
  { nombre: "Labradoodle cachorro merle", tipo: "perro", tamaño: "mediano", imageUrl: "../fotos/12.png" },
  { nombre: "Gato atigrado gris", tipo: "gato", tamaño: "mediano", imageUrl: "../fotos/16.png" },
  { nombre: "Gato bebé blanco", tipo: "gato", tamaño: "chico", imageUrl: "../fotos/17.png" },
  { nombre: "Peterbald / Sphynx", tipo: "gato", tamaño: "chico", imageUrl: "../fotos/18.png" },
  { nombre: "Gato bebé gris", tipo: "gato", tamaño: "chico", imageUrl: "../fotos/19.png" },
  { nombre: "Maine Coon", tipo: "gato", tamaño: "grande", imageUrl: "../fotos/20.png" },
]

const customers = [
  { id: 1, name: "Cliente 1", type: "gato", size: "chico", imageUrl: "../fotos/cliente 1.png" },
  { id: 2, name: "Cliente 2", type: "perro", size: "mediano", imageUrl: "../fotos/cliente 2.png" },
  { id: 3, name: "Cliente 3", type: "gato", size: "mediano", imageUrl: "../fotos/cliente 3.png" },
  { id: 4, name: "Cliente 4", type: "perro", size: "chico", imageUrl: "../fotos/cliente 4.png" },
  { id: 5, name: "Cliente 5", type: "perro", size: "grande", imageUrl: "../fotos/cliente 5.png" },
  { id: 6, name: "Cliente 6", type: "gato", size: "chico", imageUrl: "../fotos/cliente 6.png" },
]

const gameState = {
  currentCustomerIndex: 0,
  currentCustomer: null,
  selectedAnimal: null,
  score: 0,
  currentFilter: "all",
  backgroundImage: "../fotos/fondi.png",
  customerImages: {},
}

// DOM Elements
const computerButton = document.getElementById("computerButton")
const computerModal = document.getElementById("computerModal")
const validationModal = document.getElementById("validationModal")
const closeComputerBtn = document.getElementById("closeComputerBtn")
const nextClientBtn = document.getElementById("searchAnimalBtn")
const animalsGrid = document.getElementById("animalsGrid")
const filterButtons = document.querySelectorAll(".filter-btn")
const customerImage = document.getElementById("customerImage")
const scoreDisplay = document.getElementById("score")
const backgroundImageEl = document.getElementById("backgroundImage")
const deskImage = document.getElementById("deskImage")
const bubbleType = document.getElementById("bubbleType")
const bubbleSize = document.getElementById("bubbleSize")

function createCustomerUploadFields() {}

function applyCustomerImage() {
  const customer = gameState.currentCustomer
  console.log("[v0] Loading customer image:", customer.imageUrl)
  if (customer.imageUrl) {
    customerImage.src = customer.imageUrl
    customerImage.onerror = () => {
      console.log("[v0] ERROR: Failed to load customer image:", customer.imageUrl)
    }
    customerImage.onload = () => {
      console.log("[v0] Successfully loaded customer image")
    }
  } else {
    customerImage.src = ""
  }
}

function loadSavedImages() {
  console.log("[v0] Loading background image:", gameState.backgroundImage)
  backgroundImageEl.src = gameState.backgroundImage
  backgroundImageEl.onerror = () => {
    console.log("[v0] ERROR: Failed to load background image:", gameState.backgroundImage)
  }
  backgroundImageEl.onload = () => {
    console.log("[v0] Successfully loaded background image")
  }
}

function initGame() {
  loadSavedImages()
  gameState.currentCustomerIndex = 0
  loadCustomer(0)
}

function loadCustomer(index) {
  if (index >= customers.length) {
    endGame()
    return
  }

  gameState.currentCustomerIndex = index
  gameState.currentCustomer = { ...customers[index] }
  gameState.selectedAnimal = null

  console.log("[v0] Loading customer:", gameState.currentCustomer)

  customerImage.style.animation = "none"
  setTimeout(() => {
    customerImage.style.animation = "zoomInCustomer 1s ease-out"
  }, 10)

  applyCustomerImage()
  const petType = gameState.currentCustomer.type === "gato" ? "Gato" : "Perro"
  const petSize = gameState.currentCustomer.size.charAt(0).toUpperCase() + gameState.currentCustomer.size.slice(1)

  bubbleType.textContent = petType
  bubbleSize.textContent = petSize

  console.log("[v0] Set bubble text:", petType, petSize)
}

function endGame() {
  validationModal.classList.add("active")
  const messageEl = document.getElementById("validationMessage")
  const adoptionPaper = document.getElementById("adoptionPaper")

  messageEl.textContent = "¡JUEGO COMPLETADO!"
  messageEl.classList.add("success")
  messageEl.classList.remove("error")

  adoptionPaper.innerHTML = `
        <div>
            <h3>RESUMEN FINAL</h3>
            <p>Clientes atendidos correctamente: <strong>${gameState.score}</strong> de 6</p>
            <p style="margin-top: 20px; font-size: 12px;">¡Gracias por jugar!</p>
        </div>
    `

  nextClientBtn.textContent = "Reiniciar Juego"
  nextClientBtn.onclick = () => {
    location.reload()
  }
}

computerButton.addEventListener("click", () => {
  console.log("[v0] Opening computer modal")
  computerModal.classList.add("active")
  gameState.currentFilter = "all"
  renderAnimals("all")
  updateFilterButtons("all")
})

closeComputerBtn.addEventListener("click", () => {
  console.log("[v0] Closing computer modal")
  computerModal.classList.remove("active")
})

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter
    gameState.currentFilter = filter
    renderAnimals(filter)
    updateFilterButtons(filter)
  })
})

function updateFilterButtons(activeFilter) {
  filterButtons.forEach((btn) => {
    if (btn.dataset.filter === activeFilter) {
      btn.classList.add("active")
    } else {
      btn.classList.remove("active")
    }
  })
}

function renderAnimals(filter) {
  let filtered = animals

  if (filter !== "all") {
    filtered = animals.filter((a) => a.tipo === filter)
  }

  console.log("[v0] Rendering animals, filter:", filter, "count:", filtered.length)

  animalsGrid.innerHTML = filtered
    .map(
      (animal, idx) => `
        <div class="animal-card" data-index="${idx}" data-type="${animal.tipo}" data-size="${animal.tamaño}">
            <div class="animal-image" style="background-image: url('${animal.imageUrl}')"></div>
            <div class="animal-name">${animal.nombre}</div>
            <div class="animal-details">
                <p>${animal.tipo}</p>
                <p>${animal.tamaño}</p>
            </div>
        </div>
    `,
    )
    .join("")

  document.querySelectorAll(".animal-card").forEach((card) => {
    card.addEventListener("click", selectAnimal)
  })
}

function selectAnimal(e) {
  const card = e.currentTarget
  const animalType = card.dataset.type
  const animalSize = card.dataset.size
  const animalIndex = Number.parseInt(card.dataset.index)

  console.log("[v0] Selected animal - type:", animalType, "size:", animalSize, "index:", animalIndex)

  const animal = animals.find((a) => a.tipo === animalType && a.tamaño === animalSize)

  if (animal) {
    gameState.selectedAnimal = {
      tipo: animal.tipo,
      tamaño: animal.tamaño,
      nombre: animal.nombre,
    }
    console.log("[v0] Animal found:", gameState.selectedAnimal)
    validateSelection()
  } else {
    console.log("[v0] ERROR: Animal not found!")
  }
}

function validateSelection() {
  computerModal.classList.remove("active")
  validationModal.classList.add("active")

  const isCorrect =
    gameState.selectedAnimal.tipo === gameState.currentCustomer.type &&
    gameState.selectedAnimal.tamaño === gameState.currentCustomer.size

  console.log(
    "[v0] Validation - Correct:",
    isCorrect,
    "Selected:",
    gameState.selectedAnimal,
    "Required:",
    gameState.currentCustomer,
  )

  const messageEl = document.getElementById("validationMessage")
  const adoptionPaper = document.getElementById("adoptionPaper")

  if (isCorrect) {
    messageEl.textContent = "¡PERFECTO! Adoptaron al animal correctamente"
    messageEl.classList.add("success")
    messageEl.classList.remove("error")
    gameState.score++
    scoreDisplay.textContent = gameState.score

    adoptionPaper.innerHTML = `
            <div>
                <h3>CERTIFICADO DE ADOPCIÓN</h3>
                <p>Se certifica que ${gameState.currentCustomer.name}</p>
                <p>ha adoptado a: <strong>${gameState.selectedAnimal.nombre}</strong></p>
                <p style="margin-top: 20px; font-size: 12px;">✓ Aprobado ✓</p>
            </div>
        `
  } else {
    messageEl.textContent = "ERROR - Este NO es el animal correcto"
    messageEl.classList.add("error")
    messageEl.classList.remove("success")
    adoptionPaper.innerHTML = `
            <div>
                <h3>SOLICITUD RECHAZADA</h3>
                <p>Pedía: <strong>${gameState.currentCustomer.type} ${gameState.currentCustomer.size}</strong></p>
                <p>Seleccionaste: <strong>${gameState.selectedAnimal.tipo} ${gameState.selectedAnimal.tamaño}</strong></p>
            </div>
        `
  }
}

nextClientBtn.addEventListener("click", () => {
  console.log("[v0] Next client button clicked")
  validationModal.classList.remove("active")
  loadCustomer(gameState.currentCustomerIndex + 1)
})

console.log("[v0] Initializing game...")
initGame()
