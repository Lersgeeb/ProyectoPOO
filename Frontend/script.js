async function uploadIMG(){
    fileUrl = '../Backend/api/upload.php';

    form = document.getElementById('formImage');
    file = document.getElementById('fileUp');

    let formdata = new FormData(form);
    formdata.append('nameFile','nombreArchivo.jpg')
    const res = await axios.post(fileUrl, formdata)
    

    if(res.request.status == 200){
        document.getElementById('imgSection').innerHTML= `<img src="${res.data}" alt="...">`
    }

    
}
