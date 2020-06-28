export const switching = (buttons, content) => {

    const tabs = (array, tabId) => {
        array.forEach((item) => {
            if (item.dataset.id === tabId) {
                item.classList.add('active');
                return;
            }
            item.classList.remove('active');
            return;
        });
    };

    const activeTab = (array, tabId) => {
        array.forEach((item) => {
            if (item.dataset.id === tabId) {
                item.classList.add('active__button');
                return;
            }
            item.classList.remove('active__button');
            return;
        });
    }

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
                e.preventDefault();
                const id = button.dataset.id
                tabs(content, id)
                activeTab(tabsButton, id)
            }) 
        })
};