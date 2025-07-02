function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
			 radius = parseFloat(radius);
		    let area = Math.PI * radius * radius;
		    area = area.toFixed(2);
           alert(area);
}
calculateArea();
