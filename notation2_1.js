
if(3){
    window.addEventListener('click', function () {
        const selectElement = document.querySelector('notes');

        selectElement.addEventListener('change', (event) => {
            const result = document.querySelector('.notes');
            result.textContent = `You like ${event.target.value}`;
        });



    });
}