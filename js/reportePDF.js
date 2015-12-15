function tableToJson(table){
		var data = [];

	//first row needs to be headers   https://www.youtube.com/watch?v=1Sjq8KfDnTc
	var headers = [];
	for(var i=0; i< table.rows[0].cells.length;i++){
		headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
		
	}
	data.push(headers);
	//go through cells
	for (var i = 1; i < table.rows.length; i++) {
		var tableRow = table.rows[i];
		var rowData = {};
		for (var j = 0;j < tableRow.cells.length; j++) {
			rowData[ headers[j] ] = tableRow.cells[j].innerHTML;
			
		}
		data.push(rowData);
	}
	return data;
	}

	function callme(){
		var table = tableToJson($('#table-id').get(0));

		var doc = new jsPDF('1','pt', 'letter', true );

		doc.cellInitialize();

		$.each(table, function(i, row){
			$.each(row, function(j, cell){
				if (j=="email" | j==1) {
					doc.cell(1,10,190,20,cell,i);
				}else{
					doc.cell(1,10,90,20,cell,i);
				}				
			});
		});

	doc.save('Safas.pdf');
	}