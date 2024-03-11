
 

    function Relogio(){
    
    let tempo = new Date()
    let hora=  tempo.getHours()
    let minuto= tempo.getMinutes()
    let segundo= tempo.getUTCSeconds()
    let ano = tempo.getFullYear()
    let mes = tempo.getMonth() +1
    let dia = tempo.getDate()

    let datas= document.getElementById('txtdata')
    let horas= document.getElementById('txthoras')
  
    


    if( segundo < 10){
        segundo = '0'+ segundo
    }
    if(minuto <10){
        minuto ='0'+ minuto 
    } 
    if (hora<10){
        hora = '0'+ hora
    } 


    if (mes == 1){
        mes = 'Janeiro'
    }
    else if (mes== 2){
        mes='Fevereiro'
    }
    else if(mes ==3){
        mes='Março'
    }
    else if(mes==4){
        mes='Abril'
    }
    else if(mes==5){
        mes ='Maio'
    }
    else if (mes==6){
        mes="Junho"
    }
    if (mes == 7){
        mes = 'Julho'
    }
    else if (mes== 8){
        mes='Agosto'
    }
    else if(mes ==9){
        mes='Setembro'
    }
    else if(mes==10){
        mes='Outubro'
    }
    else if(mes==11){
        mes ='Novembro'
    }
    else if (mes==12){
        mes='Dezembro'
    }

    let tempototal = hora + ':' + minuto + ':' + segundo
    let datatotal = dia + ' de ' + mes + ' de ' + ano  

    horas.innerHTML=tempototal;
    datas.innerHTML=datatotal



}
    
    function RelogioKin(){    

    let tempo = new Date()
    let hora = tempo.getHours()
    let minuto = tempo.getMinutes()

    let horakin = document.getElementById('horakin')
    let kin = '';
    

    if (hora == 6 || hora == 7 && minuto < 12) {
        kin = 'Dragão'
    } else if (hora == 7 && minuto >= 12 || hora == 8 && minuto < 24) {
        kin = 'Vento'
    } else if (hora == 8 && minuto >= 24 || hora == 9 && minuto < 36) {
        kin = "Noite"
    } else if (hora == 9 && minuto >= 36 || hora == 10 && minuto < 48) {
        kin = "Semente"
    } else if (hora == 10 && minuto >= 48 || hora == 11) {
        kin = "Serpente"
    } else if (hora == 12 || hora == 13 && minuto < 12) {
        kin = "Enlaçador de Mundos"
    } else if (hora == 13 && minuto >= 12 || hora == 14 && minuto < 24) {
        kin = "Mão"
    } else if (hora == 14 && minuto >= 24 || hora == 15 && minuto < 36) {
        kin = "Estrela"
    } else if (hora == 15 && minuto >= 36 || hora == 16 && minuto < 48) {
        kin = "Lua"
    } else if (hora == 16 && minuto >= 48 || hora == 17) {
        kin = "Cachorro"
    } else if (hora == 18 || hora == 17 && minuto < 12) {
        kin = "Macaco"
    } else if (hora == 19 && minuto >= 12 || hora == 20 && minuto < 24) {
        kin = "Humano"
    } else if (hora == 20 && minuto >= 24 || hora == 21 && minuto < 36) {
        kin = "Caminhante do Céu"
    } else if (hora == 21 && minuto >= 36 || hora == 22 && minuto < 48) {
        kin = "Mago"
        console.log('kin')
    } else if (hora == 22 && minuto >= 48 || hora == 23) {
        kin = "Águia"
    } else if (hora == 0 || hora == 1 && minuto < 12) {
        kin = "Guerreiro"
    } else if (hora == 1 && minuto >= 12 || hora == 2 && minuto < 24) {
        kin = "Terra"
    } else if (hora == 2 && minuto >= 24 || hora == 3 && minuto < 36) {
        kin = "Espelho"
    } else if (hora == 3 && minuto >= 36 || hora == 4 && minuto < 48) {
        kin = "Tormenta"
    } else if (hora == 4 && minuto >= 48 || hora == 5) {
        kin = "Sol"
    }
    
    horakin.innerHTML = `Hora do kin ${kin}.`

}

    function CalendarioKin(){

        let tempo = new Date()    
        let ano = tempo.getFullYear()
        let mes = tempo.getMonth()+1
        let dia = tempo.getDate()

        let anocod = 0
        let mescod = 0
        let diacod = 0
        let kin    = 0


        
        if (ano==0 || ano % 52 == 0){ anocod = 232}
   else if (ano ==1 || ano % 52 == 1){anocod = 77}
   else if (ano ==2 || ano % 52 == 2){anocod = 182} 
   else if (ano ==3 || ano % 52 == 3){anocod = 27}
   else if (ano ==4 || ano % 52 == 4){anocod = 132}
   else if (ano ==5 || ano % 52 == 5){anocod = 237}
   else if (ano ==6 || ano % 52 == 6){anocod = 82}
   else if (ano ==7 || ano % 52 == 7){anocod = 187}
   else if (ano ==8 || ano % 52 == 8){anocod = 32}
   else if (ano ==9 || ano & 52 == 9){anocod = 137}
   else if (ano ==10 || ano % 52 ==10){anocod = 242}
   else if (ano ==11 || ano % 52 ==11){anocod = 87}
   else if (ano ==12 || ano % 52 ==12){anocod = 192}
   else if (ano ==13 || ano % 52 ==13){anocod = 37}
   else if (ano ==14 || ano % 52 ==14){anocod = 142}
   else if (ano ==15 || ano % 52 ==15){anocod = 247}
   else if (ano ==16 || ano % 52 == 16){anocod = 92}
   else if (ano ==17 || ano % 52 == 17){anocod = 197} 
   else if (ano ==18 || ano % 52 == 18){anocod = 42}
   else if (ano ==19 || ano % 52 == 19){anocod = 147}
   else if (ano ==20 || ano % 52 == 20){anocod = 252}
   else if (ano ==21 || ano % 52 == 21){anocod = 97}
   else if (ano ==22 || ano % 52 == 22){anocod = 202}
   else if (ano ==23 || ano % 52 == 23){anocod = 47}
   else if (ano ==24 || ano & 52 == 24){anocod = 152}
   else if (ano ==25 || ano % 52 == 25){anocod = 257}
   else if (ano ==26 || ano % 52 == 26){anocod = 102}
   else if (ano ==27 || ano % 52 == 27){anocod = 207}
   else if (ano ==28 || ano % 52 == 28){anocod = 52}
   else if (ano ==29 || ano % 52 == 29){anocod = 157}
   else if (ano ==30 || ano % 52 == 30){anocod = 2}
   else if (ano ==31 || ano % 52 == 31){anocod = 107}
   else if (ano ==32 || ano % 52 == 32){anocod = 212} 
   else if (ano ==33 || ano % 52 == 33){anocod = 57}
   else if (ano ==34 || ano % 52 == 34){anocod = 162}
   else if (ano ==35 || ano % 52 == 35){anocod = 7}
   else if (ano ==36 || ano % 52 == 36){anocod = 112}
   else if (ano ==37 || ano % 52 == 37){anocod = 217}
   else if (ano ==38 || ano % 52 == 38){anocod = 62}
   else if (ano ==39 || ano & 52 == 39){anocod = 167}
   else if (ano ==40 || ano % 52 == 40){anocod = 12}
   else if (ano ==41 || ano % 52 == 41){anocod = 117}
   else if (ano ==42 || ano % 52 == 42){anocod = 222}
   else if (ano ==43 || ano % 52 == 43){anocod = 67}
   else if (ano ==44 || ano % 52 == 44){anocod = 172}
   else if (ano ==45 || ano % 52 == 45){anocod = 17}
   else if (ano ==46 || ano % 52 == 46){anocod = 122}
   else if (ano ==47 || ano % 52 == 47){anocod = 227}
   else if (ano ==48 || ano % 52 == 48){anocod = 72}
   else if (ano ==49 || ano & 52 == 49){anocod = 177}
   else if (ano ==50 || ano % 52 == 50){anocod = 22}
   else if (ano ==51 || ano % 52 == 51){anocod = 127}





if (mes == 1){ mescod = 0}
else if (mes == 2){ mescod = 31}
else if (mes == 3){ mescod = 59}
else if (mes == 4){ mescod = 90}
else if (mes == 5){ mescod = 120}
else if (mes == 6){ mescod = 151}
else if (mes == 7){ mescod = 181}
else if (mes == 8){ mescod = 212}
else if (mes == 9){ mescod = 243}
else if (mes == 10){ mescod = 13}
else if (mes == 11){ mescod = 44}
else if (mes == 12){ mescod = 74}




if (dia==1){diacod=1}
else if (dia==2){diacod=2}
else if (dia==3){diacod=3}
else if (dia==4){diacod=4}
else if (dia==5){diacod=5}
else if (dia==6){diacod=6}
else if (dia==7){diacod=7}
else if (dia==8){diacod=8}
else if (dia==9){diacod=9}
else if (dia==10){diacod=10}
else if (dia==11){diacod=11}
else if (dia==12){diacod=12}
else if (dia==13){diacod=13}
else if (dia==14){diacod=14}
else if (dia==15){diacod=15}
else if (dia==16){diacod=16}
else if (dia==17){diacod=17}
else if (dia==18){diacod=18}
else if (dia==19){diacod=19}
else if (dia==20){diacod=20}
else if (dia==21){diacod=21}
else if (dia==22){diacod=22}
else if (dia==23){diacod=23}
else if (dia==24){diacod=24}
else if (dia==25){diacod=25}
else if (dia==26){diacod=26}
else if (dia==27){diacod=27}
else if (dia==28){diacod=28}
else if (dia==29){diacod=29}
else if (dia==30){diacod=30}
else if (dia==31){diacod=31}

let codkin = (anocod + mescod + diacod)

if (codkin > 260){kin=codkin-260}
else {kin=codkin}

let diakin = document.getElementById('diakin')
kintxt=`Hoje é dia do kin ${kin}`
diakin.innerHTML=(kintxt)

    }

    function Signo() {
    
    let tempo = new Date() 
    let dia = tempo.getDate();
    let mes = tempo.getMonth() + 1; // Meses são indexados de 0 a 11

    let signo = ''
    let zodiaco = document.getElementById('zodiaco')
  
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
      signo = "Áries";
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
      signo = "Touro";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
      signo = "Gêmeos";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
      signo = "Câncer";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
      signo = "Leão";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
      signo = "Virgem";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
      signo = "Libra";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
      signo = "Escorpião";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
      signo = "Sagitário";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
      signo = "Capricórnio";
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
      signo = "Aquário";
    } else {
      signo = "Peixes";
    }

    zodiaco.innerHTML=`Estamos no signo de ${signo}`


  }        
    
setInterval(Relogio,500);
setInterval(RelogioKin,500);
setInterval(CalendarioKin,500);
setInterval(Signo,500);