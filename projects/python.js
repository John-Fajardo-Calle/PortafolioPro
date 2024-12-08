document.addEventListener('DOMContentLoaded', () => {
    // Theme synchronization
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.className = savedTheme;
    themeSwitch.checked = (savedTheme === 'dark');

    themeSwitch.addEventListener('change', () => {
        const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
        body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    });

    document.querySelectorAll('.project-card').forEach(card => {
        const header = card.querySelector('.project-header');
        const arrow = card.querySelector('.toggle-arrow');

        header.addEventListener('click', () => {
            const isOpen = card.classList.toggle('active');
            arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0)';
        });

        const hasInput = card.getAttribute('data-has-input') === 'true';
        if (hasInput) {
            const projectNum = card.getAttribute('data-project');
            const outputsContainer = card.querySelector('.outputs-container');
            const outputView = card.querySelector('.output-view');
            const selectedInput = card.querySelector('.selected-input');
            const selectedOutput = card.querySelector('.selected-output');
            const inputImages = outputsContainer.querySelectorAll('.input-image');

            inputImages.forEach(imgDiv => {
                imgDiv.addEventListener('click', () => {
                    const inputIndex = imgDiv.getAttribute('data-input-index');

                    inputImages.forEach(otherDiv => {
                        if (otherDiv !== imgDiv) {
                            otherDiv.classList.add('fade-out');
                        }
                    });

                    imgDiv.classList.add('slide-left');

                    setTimeout(() => {
                        outputsContainer.style.display = 'none';
                        outputView.style.display = 'flex';

                        const inputSrc = `../projects/python/project${projectNum}/input/project${projectNum}_input${inputIndex}.png`;
                        const outputSrc = `../projects/python/project${projectNum}/output/project${projectNum}_output${inputIndex}.png`;

                        selectedInput.innerHTML = `<img src="${inputSrc}" alt="Project ${projectNum} Input ${inputIndex}">`;
                        selectedOutput.innerHTML = `<img src="${outputSrc}" alt="Project ${projectNum} Output ${inputIndex}" class="output-appear">`;

                        inputImages.forEach(div => {
                            div.classList.remove('fade-out','slide-left');
                        });
                    }, 700);
                });

                outputView.addEventListener('mouseleave', () => {
                    outputsContainer.style.display = 'grid';
                    outputView.style.display = 'none';
                    selectedInput.innerHTML = '';
                    selectedOutput.innerHTML = '';
                });
            });
        }
    });
});