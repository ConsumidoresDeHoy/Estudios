// Datos para la gráfica de barras
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Tipo de gráfica: barras
    data: {
        labels: ['Snacks Salados', 'Snacks Dulces'], // Las etiquetas de los ejes X
        datasets: [{
            label: 'Porcentaje',
            data: [50.7, 49.3], // Los porcentajes que mencionaste
            backgroundColor: ['#ff6347', '#ffda79'], // Colores llamativos (rojo para salados y amarillo para dulces)
            borderColor: ['#fff', '#fff'], // Bordes blancos para las barras
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true, // Para que las barras comiencen desde 0
                ticks: {
                    stepSize: 10, // Espacio entre los ticks en el eje Y
                }
            },
            x: {
                ticks: {
                    font: {
                        family: 'Arial',
                        size: 14,
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.dataset.label + ': ' + tooltipItem.raw.toFixed(1) + '%'; // Mostrar el porcentaje con un decimal
                    }
                }
            }
        }
    }
});

// Lógica para abrir el panel deslizante
$('#openSidebar').click(function() {
    $('#sidebar').css('right', '0'); // Deslizar el panel hacia la derecha
});

// Lógica para cerrar el panel deslizante
$('#closeSidebar').click(function() {
    $('#sidebar').css('right', '-280px'); // Deslizar el panel fuera de la vista
});

// Lógica para buscar un estudio
$('#searchBtn').click(function() {
    let searchTerm = $('#searchInput').val().toLowerCase();
    let studyFound = false;

    // Aquí simulamos la lista de estudios disponibles
    let availableStudies = ['Estudio 1', 'Estudio 2', 'Estudio 3'];

    $('#studies').empty();

    availableStudies.forEach(function(study) {
        if (study.toLowerCase().includes(searchTerm)) {
            $('#studies').append('<li class="list-group-item">' + study + '</li>');
            studyFound = true;
        }
    });

    if (!studyFound) {
        $('#searchMessage').show(); // Mostrar mensaje si no se encuentra el estudio
    } else {
        $('#searchMessage').hide();
    }
});
