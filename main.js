window.addEventListener('scroll', onScroll)

onScroll() // Precisamos atualizar pelo menos uma vez
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function showNavOnScroll() {
    if (scrollY === 0) {
        navigation.classList.remove("scroll")
    } else {
        navigation.classList.add("scroll")
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 500) {
        backToTopButton.classList.add("show")
    } else {
        backToTopButton.classList.remove("show")
    }
}

function activateMenuAtCurrentSection(section) {
    const middleLine = scrollY + (innerHeight / 2)

    // Verificando em qual seção o usuário está
    // Utilizaremos o "id" da seção e obteremos o "offsetTop"
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionIsAboveOrInsideMiddleLine = middleLine >= sectionTop

    const nextSectionBegin = sectionHeight + sectionTop // Somamos o tamanho fixo da seção com o valor da altura da seção para sabermos a localização de início da seção seguinte
    const nextSectionIsUnderMiddleLine = middleLine < nextSectionBegin

    const isInBoundaries = sectionIsAboveOrInsideMiddleLine && nextSectionIsUnderMiddleLine

    const sectionId = section.getAttribute("id")
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (isInBoundaries) {
        console.log(`Dentro dos limites da seção ${sectionId}`)
        menuElement.classList.add('active')
    }

}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    delay: 125,
    origin: 'up',
    distance: '30px',
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content
`);