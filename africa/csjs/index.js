        // Получаем все ссылки
        const links = document.querySelectorAll('a[data-content]');
        // Обработчик событий для ссылок
        links.forEach(link => {
                // Удаляем активный класс со всех секций
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('active');
                });
                // Показываем нужную секцию
                const sectionToShow = document.getElementById(link.dataset.content);
                if (sectionToShow) {
                    sectionToShow.classList.add('active');
                }
            });
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(event) {
                // Удаляем класс у всех ссылок
                document.querySelectorAll('nav a').forEach(l => l.classList.remove('active-background'));
                
                // Добавляем класс к текущей ссылке
                this.classList.add('active-background');
                
                // Предотвращаем переход по ссылке (если нужно)
                event.preventDefault();
                
            });
        });
        document.querySelector('.content-section').classList.add('active');
links[0].classList.add('active-background');