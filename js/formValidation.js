document.querySelector(".intro__form").addEventListener('submit', function (e) {

    e.preventDefault();

    this.querySelectorAll('.intro__form-input').forEach(input => {

        const container = input.parentElement;
        const errorTxt = container.querySelector('.intro__form-input-error');

        errorTxt.textContent = '';
        container.classList.remove('intro__form-input-container--error');

        let error;

        if (!input.value)
            error = `${input.placeholder} cannot be empty`;
        else if (input.classList.contains('intro__form-email') && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.value))
            error = 'Looks like this is not an email';



        if (error) {
            errorTxt.textContent = error;
            container.classList.add('intro__form-input-container--error');
        }

    });
});