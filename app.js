const hiddenParas = document.querySelectorAll('.hiddenPara');
const reads = document.querySelectorAll('.read');


for(let i = 0; i < reads.length; i++){
 reads[i].addEventListener('click', function(){
    if(hiddenParas[i].style.display === 'block'){
        hiddenParas[i].style.display = 'none';
        reads[i].innerHTML = 'Read More <i class="fa fa-angle-double-right" style="font-size: 10px;">';
    }else{
        hiddenParas[i].style.display = 'block';
        reads[i].innerHTML = 'Read Less <i class="fa fa-angle-double-left" style="font-size: 10px;">';
    }

 })
}


