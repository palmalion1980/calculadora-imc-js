function calculateBMI(){

    const peso = parseFloat(document.getElementById("weight").value)
    const altura = parseFloat(document.getElementById("height").value) / 100
    

    if (isNaN (peso )|| isNaN (altura) ){
                document.getElementById('result').textContent = 'Por favor ingresa ambos valores.';
                return;
            };
    
    
        let bmi = (peso / (altura * altura)).toFixed(1);
        let mesage = "";


    if (bmi < 19){
        mesage = '¡Eres más liviano que un suspiro!Come un poquito más, que el viento te lleva 🌬️."Bajo Peso"'
            const cont_Img = document.getElementById("cont_idImg");
               //const img_insert = document.createElement('img');
               //img_insert.setAttribute('src', 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWpvZjYyZmE1NnJ5YTZldzF6a3dwcm9od3FoNm16NDFmNnh2cGQ0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/acrhlXABYy5CKSKMcB/giphy.gif' );
                //cont_Img.appendChild(img_insert);
                
    } else if (bmi >= 18.5 && bmi < 24.9) {
                mesage = '¡Estás como modelo de etiqueta nutricional! 🥗😎."Peso Ideal"';
               const cont_Img = document.getElementById("cont_idImg");
              // const img_insert = document.createElement('img');
              // img_insert.setAttribute('src', 'https://i.pinimg.com/originals/94/b1/07/94b107d21c9f601ea2b07ee1404b08be.gif' );
               // cont_Img.appendChild(img_insert);
               
                

    }else if (bmi >= 25 && bmi < 29.9) {
                mesage = 'Estás en la zona de confort… del refrigerador 😋🧊. "Sobre Peso"';
                 const cont_Img = document.getElementById("cont_idImg");
               //const img_insert = document.createElement('img');
              // img_insert.setAttribute('src', 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXZuaDEydXBqMWgyN2g2a2xuZDliZXFlbDZ4NDk5cjQ1d2x5emthYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3Hz6emBFIfy8XcPvC2/giphy.gif' );
               // cont_Img.appendChild(img_insert);
               

    }else if (bmi >= 30 && bmi < 39.9) {
                mesage = '¡Ese botón del pantalón está al borde del sacrificio!🐷🐷😅👖. "Obesidad"';
                const cont_Img = document.getElementById("cont_idImg");
               //const img_insert = document.createElement('img');
               //img_insert.setAttribute('src', 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHI3OGd3NzY4a3VpdjZzNjV0YWYwaXZrYXlpbGE5MHd4M3lkbXlpayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PV9t4AJL5UweI/giphy.gif' );
                //cont_Img.appendChild(img_insert);

    }else {     
               
                mesage = 'Ya no es sobrepeso, es cariño acumulado 💗🍔 ¡Hora de actuar!🐷🐷🐷. "besidad Extrema" ';
                const cont_Img = document.getElementById("cont_idImg");
              // const img_insert = document.createElement('img');
              // img_insert.setAttribute('src', 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXZuaDEydXBqMWgyN2g2a2xuZDliZXFlbDZ4NDk5cjQ1d2x5emthYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3Hz6emBFIfy8XcPvC2/giphy.gif' );
               // cont_Img.appendChild(img_insert);
                
            }

    
     document.getElementById('result').style.color = "#00796B";
     document.getElementById('result').textContent = `Tu imc es ${bmi} ${mesage}`;
     document.getElementById('weight').value="";
     document.getElementById('height').value="";
     
setTimeout(function(){
    location.reload()
}, 10000);
     
};




