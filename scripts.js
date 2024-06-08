let chartInstance; // 使用不同的变量名以防冲突

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('realtime-chart').getContext('2d');
    chartInstance = createChart(ctx);

    // 模拟数据更新
    setInterval(function() {
        const newData = Math.floor(Math.random() * 100);
        updateChart(chartInstance, newData);
    }, 5000);
});

function createChart(ctx) {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1分钟前', '30秒前', '现在'],
            datasets: [{
                label: 'CPU 使用率',
                data: [65, 70, 75],
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function updateChart(chart, newData) {
    chart.data.datasets[0].data.shift();
    chart.data.datasets[0].data.push(newData);
    chart.update();
}
