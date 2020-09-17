function newCallback(nama, asal, pulang){
   console.log(nama, asal );
    pulang()
}
function peluang(){
    console.log("Pulang Kampung");
}

newCallback("adi","yusuf",peluang)

