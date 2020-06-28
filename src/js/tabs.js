export const switching = (buttons, content) => {
    const tabs = (tabs, contents, tabId) => {
        contents.forEach((item) => {
            if (item.dataset.id === tabId) {
                item.classList.add('active');
                return;
            }
            item.classList.remove('active');
            return;
        });

        tabs.forEach((item) => {
            if (item.dataset.id === tabId) {
                item.classList.add('active__button');
                return;
            }
            item.classList.remove('active__button');
            return;
        });
    };

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
                e.preventDefault();
                const id = button.dataset.id
                tabs(buttons, content, id)
            }) 
        })
};