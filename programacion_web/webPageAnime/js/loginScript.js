/* este archivo sera utilizado para crear las funciones de login, validacion, registro */

class Aplicacion{
    constructor(){
        this.registro = [];
    }

    ini(){/* dentro del ini creamos todas las funciones que vamos a utilizar*/ 
        this.eventoRegistrar();
        this.eventoLogear();
        this.eventoCargarRegistro();
    }

    eventoRegistrar(){
        $("#registrar").click(function(){/* enlasamos nuestra funcion con el boton */
            /* creamos las variables que vamos a utilizar para el registro del usuario */
            var usuario=$("#usuario").val();
            var nombre=$("#nombre").val();
            var apellido=$("#apellidos").val();
            var correo=$("#correo").val();
            var pass=$("#pass").val();
            var repass=$("#repass").val();

            /* pasamos por parametro los valores que agregemos en el formulario */
            var unRegistro = new Registro(usuario, nombre, apellido, correo, pass, repass);
            
            /* agrega un registro al arreglo */
            app.registro.push(unRegistro);

            console.log("llego aqui.");
        });
    }
    eventoLogear(){
        $("#logear").click(function(){
            //var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            var expr1 = /^[a-zA-Z]*$/;

            var usuario=$("#usuario").val();
            var pass=$("#pass").val();

            //Verifica que no este vacío y que sean letras
            if(usuario == "" || !expr1.test(usuario)){
                $("#mensaje1").fadeIn("slow"); //Muestra mensaje de error  
                return false;          
            }else{
                $("#mensaje1").fadeOut();//el mensaje se oculta
                if(pass == "" || !expr1.test(pass)){
                    $("#mensaje2").fadeIn("slow"); //Muestra mensaje de error  
                    return false;          
                }else{
                    $("#mensaje2").fadeOut();//el mensaje se oculta
                }
            }

            
        });
        console.log("llego aqui.");
    }
    eventoCargarRegistro(){
        var unRegistro;
        $.getJSON("registro,json", function (datos){
            $.each(datos, function (registro) {
                unRegistro = new Registro(registro.usuario, registro.nombre, registro.apellido, registro.correo, registro.pass, registro.repass);
                app.registro.push(unRegistro);
            });
        });
    }
}

//inicio la aplicacion
$("document").ready(function(){
    app = new Aplicacion();
    app.ini(); //ini tiene el control de que eventos habilito/deshabilito
});