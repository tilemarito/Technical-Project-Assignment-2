document.getElementById('calculate').addEventListener('click', function(event){
    event.preventDefault()

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    document.getElementById('output').innerHTML = 
    '<p> Your BMI is <strong id="result"></strong> Your category is <strong id="category"></strong></p><p id="desc"></p>';

    const total = document.getElementById('result');
    const category = document.getElementById('category');

    const bmiCalculator = weight/(height/100)**2;

    total.innerText = bmiCalculator.toFixed(1);
    console.log(bmiCalculator);

    if(bmiCalculator < 18.5){
        category.innerText = 'Underweight'
        document.getElementById('desc').innerHTML = '<br><p>Nah, berat badan kamu sudah di bawah batas berat badan normal ya Sobat! Sekarang Anda perlu mulai mengatur pola makan Anda. Anda perlu meningkatkan asupan kalori dari 2800 menjadi 3000 dalam sehari. Makan lagi dong!!.</p>'
    }else if(bmiCalculator <= 24.9){
        category.innerText = 'Normal weight'
        document.getElementById('desc').innerHTML = '<br><p>Wow, berat badan Anda normal, sobat!! Pertahankan berat badan ideal Anda dengan mengonsumsi 2500 kalori dalam sehari!.</p>'
    }else if(bmiCalculator <= 29.9){
        category.innerText = 'Overweight'
        document.getElementById('desc').innerHTML = '<br><p>Wow, berat badanmu melebihi batas berat badan normal sobat!! Sekarang Anda perlu mulai mengatur pola makan Anda. Anda perlu mengonsumsi 1100-1600 kalori dalam sehari. Jangan mengkonsumsi terlalu banyak kalori.</p>'
    }else if(bmiCalculator > 29.9){
        category.innerText = 'Obesity'
        document.getElementById('desc').innerHTML = '<br><p>Wow, berat badanmu melebihi batas berat badan normal sobat!! Sekarang Anda perlu mulai mengatur pola makan Anda. Anda perlu mengonsumsi 1100-1600 kalori dalam sehari. Jangan mengkonsumsi terlalu banyak kalori.</p>'
    }else{
        alert('Enter your weight and height')
        document.getElementById('output').innerHTML =""
        var x = document.getElementById('output');
        x.style.display = 'none';
    }

    var x = document.getElementById('output');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
        x.style.margin = '20px 300px';
        x.style.padding = '50px';
        x.style.borderRadius = '30px';
        x.style.backgroundColor = '#E3E3E3';
    }
});

document.getElementById('reset').addEventListener('click', function(event){
    form.reset()
})