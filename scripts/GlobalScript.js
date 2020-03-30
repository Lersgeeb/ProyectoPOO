/*Temporary js script until backend be implemented  */
/* Not Working :c*/

class GlobalJS{
    static online = false;
    static userOnline = false;

    constructor(){
        this.users = {
            'gabriel@gmail.com':{
                password:1234,
                userName:'Lersgeeb',
                firstname:'Gabriel Enrique',
                lastName:'Escobar Banegas'
            },
            'noGabriel@gmail.com':{
                password:4321,
                userName:'NoGabriel',
                firstname:'NoGabriel NoEnrique',
                lastName:'NoEscobar NoBanegas'
            },
        }
    }

        getUsers(){
        var users = {
            'gabriel@gmail.com':{
                password:1234,
                userName:'Lersgeeb',
                firstname:'Gabriel Enrique',
                lastName:'Escobar Banegas'
            },
            'noGabriel@gmail.com':{
                password:4321,
                userName:'NoGabriel',
                firstname:'NoGabriel NoEnrique',
                lastName:'NoEscobar NoBanegas'
            },
        }
        return users;
    }

    authentication(email,passwordInput){
        
        var users = this.users;
        

        if(users[email]){
            if(users[email].password==passwordInput){
                GlobalJS.online = true;
                GlobalJS.userOnline = users[email];
                return users[email];
            }
        }
    }
}


class Prueba1 extends GlobalJS{
  

    readInputs(){
        
        var email = document.getElementById('emailInput').value;
        var pw = document.getElementById('pwInput').value;
        var user = super.authentication(email,pw);
        if(user){
            console.log(`bienvenido ${user.firstname}`);
        }
        else{
            console.log("Correo o contraseña incorrecto")
        }  
    }

    printalgo(){
        console.log('hola')
    }

}

class Prueba2 extends GlobalJS{
    readInputs(){
        var email = document.getElementById('emailInput').value;
        var pw = document.getElementById('pwInput').value;
        var user = super.authentication(email,pw);
        if(user){
            console.log(`bienvenido ${user.userName}`);
            
        }
        else{
            console.log("Correo o contraseña incorrecto")
        }
        
    }

    printalgo(){
        console.log('hola')
    }
}



function conect1(){
    prueba1.readInputs();
    console.log(GlobalJS.userOnline);
}
function conect2(){
    prueba2.readInputs();
    console.log(GlobalJS.userOnline);
}

/*page1*/
prueba1  = new Prueba1();
document.getElementById('buttonCLick1').addEventListener('click',conect1);
prueba1.printalgo();


/*page2*/
prueba2  = new Prueba2();
document.getElementById('buttonCLick2').addEventListener('click',conect2);




    