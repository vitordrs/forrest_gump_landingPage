const tabs = document.querySelectorAll('.tabs__btn');
const painel = document.querySelectorAll('.tabs__painel');

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        painel.forEach(painel => painel.classList.remove('active'));

        const target = tab.getAttribute('data-tab');
        document.getElementById(target).classList.add('active');
    })
})