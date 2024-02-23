let darkMode = true;
const buttonToggle = document.getElementById('toggle-mode')


buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light') //pedindo para add o modo light caso nn tenha ou colocar o modo light mesmo tendo algo já

    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`  //mudança de acessibilidade

    darkMode = !darkMode // o contrário do original
})