const boton = document.getElementById("btnChef");

if(boton){

    const especialidades = [

        "🥟 Dim Sum Tradicional",
        "🍜 Ramen Imperial",
        "🍚 Arroz Tres Delicias",
        "🥡 Pollo Agridulce",
        "🥢 Ternera con Bambú",
        "🍤 Langostinos Cantonés",
        "🔥 Pato Pekín"

    ];

    boton.addEventListener("click", ()=>{

        const random =
        Math.floor(
        Math.random() * especialidades.length
        );

        document.getElementById("especialidad")
        .innerHTML =
        "Especialidad de hoy: " +
        especialidades[random];

    });

}