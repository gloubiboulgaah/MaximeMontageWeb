document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});     

const hiddenDocument = document.querySelectorAll('.hidden');
hiddenDocument.forEach((el) => observer.observe(el));

const iconContainer = document.getElementById('icon-container');
const draggableIcon = document.getElementById('discord');

let isDragging = false;

draggableIcon.addEventListener('mousedown', (e) => {
    isDragging = true;

    const offsetX = e.clientX - draggableIcon.getBoundingClientRect().left;
    const offsetY = e.clientY - draggableIcon.getBoundingClientRect().top;

    document.addEventListener('mousemove', handleMouseMove);

    e.preventDefault();
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
    isDragging = false;

    document.removeEventListener('mousemove', handleMouseMove);
    }
});

function handleMouseMove(e) {
    if (isDragging) {
        const x = e.clientX - iconContainer.getBoundingClientRect().left;
        const y = e.clientY - iconContainer.getBoundingClientRect().top;

        draggableIcon.style.transform = `translate(${x}px, ${y}px)`;
    }
}

const divs = document.querySelectorAll('.video-button');
divs.forEach(div => {
    div.addEventListener('mouseover', () => {
        divs.forEach(otherDiv => {
        if (otherDiv !== div) {
            otherDiv.classList.add('blur');
            otherDiv.classList.remove('net');
        }
    });

    div.classList.add('net');
    div.classList.remove('blur');
    });

    div.addEventListener('mouseout', () => {
        divs.forEach(otherDiv => {
            otherDiv.classList.remove('blur');
            otherDiv.classList.remove('net');
        });
    });
});

const tween1 = KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    { repeat: 999, duration: 5000, yoyo: true }
)

const tween2 = KUTE.fromTo(
    '#blob3',
    { path: '#blob3' },
    { path: '#blob4' },
    { repeat: 999, duration: 4500, yoyo: true }
)

const tween3 = KUTE.fromTo(
    '#blob5',
    { path: '#blob5' },
    { path: '#blob6' },
    { repeat: 999, duration: 4000, yoyo: true }
)

const tween4 = KUTE.fromTo(
    '#blob7',
    { path: '#blob7' },
    { path: '#blob8' },
    { repeat: 999, duration: 3500, yoyo: true }
)

const tween5 = KUTE.fromTo(
    '#blob9',
    { path: '#blob9' },
    { path: '#blob10' },
    { repeat: 999, duration: 3000, yoyo: true }
)

const tween6 = KUTE.fromTo(
    '#blob11',
    { path: '#blob11' },
    { path: '#blob12' },
    { repeat: 999, duration: 2500, yoyo: true }
)

const tween7 = KUTE.fromTo(
    '#blob13',
    { path: '#blob13' },
    { path: '#blob14' },
    { repeat: 999, duration: 2000, yoyo: true }
)

const tween8 = KUTE.fromTo(
    '#wave1',
    { path: '#wave1' },
    { path: '#wave2' },
    { repeat: 999, duration: 5000, yoyo: true }
)

const tween9 = KUTE.fromTo(
    '#wave3',
    { path: '#wave3' },
    { path: '#wave4' },
    { repeat: 999, duration: 4500, yoyo: true }
)

const tween10 = KUTE.fromTo(
    '#wave5',
    { path: '#wave5' },
    { path: '#wave6' },
    { repeat: 999, duration: 4000, yoyo: true }
)

const tween11 = KUTE.fromTo(
    '#wave7',
    { path: '#wave7' },
    { path: '#wave8' },
    { repeat: 999, duration: 3500, yoyo: true }
)

const tween12 = KUTE.fromTo(
    '#rob1',
    { path: '#rob1' },
    { path: '#rob2' },
    { repeat: 999, duration: 5000, yoyo: true }
)

const tween13 = KUTE.fromTo(
    '#rob3',
    { path: '#rob3' },
    { path: '#rob4' },
    { repeat: 999, duration: 4500, yoyo: true }
)

const tween14 = KUTE.fromTo(
    '#rob5',
    { path: '#rob5' },
    { path: '#rob6' },
    { repeat: 999, duration: 4000, yoyo: true }
)
tween1.start()
tween2.start()
tween3.start()
tween4.start()
tween5.start()
tween6.start()
tween7.start()
tween8.start()
tween9.start()
tween10.start()
tween11.start()
tween12.start()
tween13.start()
tween14.start()