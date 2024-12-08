document.addEventListener('DOMContentLoaded', () => {
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
    });
});
