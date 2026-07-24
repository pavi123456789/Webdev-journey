let toDelete = document.querySelectorAll('.to-delete')
toDelete.forEach((del) => {
    del.addEventListener('submit', (e) => {
        if(!confirm('Delete this chat?')){
            e.preventDefault();
        }
    });
});


// or write 
// onsubmit="return confirm('Delete this chat?')"
// in the form tag







