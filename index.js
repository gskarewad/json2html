function json2html(data) {
    let style = `<style> table {
        border-collapse: collapse;
          }
    th, td {
        border: 1px solid orange; padding: 10px; text-align: left;
        max-width: 150px; overflow-wrap: break-word;
    } </style>`;
    let html = '<table class="table">';
    html += '<tr>';
    let properties = Object.keys(data[0]);
    properties.forEach((header) => {
        html += '<th>' + header.toUpperCase() + '</th>';
    });
    html += '</tr>';
    data.forEach((record) => {
        html += '<tr>';
        properties.forEach((key) => {
            if (key === 'event_data') {
                html += '<td>' + JSON.stringify(record[key]) + '</td>';

            } else {
                html += '<td>' + record[key] + '</td>';
            }
        });
        html += '<tr>';
    });
    html += '</table>';
    return style + html;
}

module.exports = json2html; 