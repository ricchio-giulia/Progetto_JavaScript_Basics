//Ottengo i riferimenti agli elementi del DOM
document.addEventListener('DOMContentLoaded', function () {
    const titoloContatore = document.getElementById('counter');
    const bottoneDecremento = document.getElementById('decremento');
    const bottoneResetta = document.getElementById('resetta');
    const bottoneIcremento = document.getElementById('incremento');

    //Inizializzo il valore del contatore
    let valoreContatore = 0;

    //Creo funzione per aggiornare il titolo
    function aggiornaTitolo() {
        titoloContatore.textContent = valoreContatore;
    }

    //Aggiungo event listener per decremento
    decremento.addEventListener('click', function () {
        if (valoreContatore > 0) {
            valoreContatore--;
            aggiornaTitolo();
        }
    });

    //Aggiungo event listener per il pulsante resetta
    resetta.addEventListener('click', function () {
        valoreContatore = 0;
        aggiornaTitolo();
    });

    //Aggiungo event listener per incremento
    incremento.addEventListener('click', function () {
        valoreContatore++;
        aggiornaTitolo();
    });

    //Inizializzo contatore per il caricamento della pagina
    aggiornaTitolo();
});
