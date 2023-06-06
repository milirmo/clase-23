let total = 0
function ejecutar() {
    if (cant.value === "") {
        alert("no ingreso la cantidad.");
    } else {
        if (articulo.value === "") {
        alert("no ingreso el articulo.");
        } else {
            if (precioxunidad.value === "") {
            alert("no ingreso el precio por unidad.");
            } else {
                let div = document.createElement("div");
                let p = document.createElement("p");
                let b_total = document.createElement("b");

                p.innerHTML = cant.value + " " + articulo.value;
                let subtotal = parseFloat(precioxunidad.value) * parseFloat(cant.value);
                b_total.innerHTML = " $ " + subtotal;
                total += subtotal

                p.appendChild(b_total);
                div.appendChild(p);
                lista.appendChild(div);

                document.getElementById("cant").value = "";
                document.getElementById("articulo").value = "";
                document.getElementById("precioxunidad").value = "";
                document.getElementById("total").textContent = "total a pagar $ " + total;
            }
        }
    }
}