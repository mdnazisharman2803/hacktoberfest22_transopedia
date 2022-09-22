const scriptURL = 'https://script.google.com/macros/s/AKfycbyQDiCWAbDJgaQ4RdKn8I0_zxkZ-UCWw78W5i6dKyUp3hizEz1dzz1UdYKZ8KUhJ5joxw/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })
