let editor;

window.onload = function() {
    editor = ace.edit('editor');
    editor.setTheme('ace/theme/monokai');
    editor.session.setMode('ace/mode/scheme');
}

function changeLanguage() {

    let language = $('#languages').val();

    if(language === "scheme")editor.session.setMode('ace/mode/scheme');
    else if(language === "haskell")editor.session.setMode('ace/mode/haskell');
    else if(language === "ocaml")editor.session.setMode('ace/mode/ocaml');
}


function changeFunction() {

    let language = $('#languages').val();
    let func = $('#fmal_fall').val();

    if (language === "scheme") {

        if(func === "foldl"){
            editor.setValue("(define (foldl f u x) \n  \
            \'your code here\' \n \
            ) \n \
            \n \
            ;;Don't touch \n \
            (foldl - 8 (list 1 2 3 4)) \n \
            (foldl + 5 (list 1 2 3 4))");
           }else if(func === "foldr"){
            editor.setValue("(define (foldr f u x) \n  \
            \'your code here\' \n \
            ) \n \
            \n \
            ;;Don't touch \n \
            (foldr - 8 (list 1 2 3 4)) \n \
            (foldr + 5 (list 1 2 3 4))");   
           }else if (func === "atoi") {
            
           }else if (func === "iota") {
               
           }else if (func === "powerlist") {
               
           }        
    }else if (language === "haskell") {
        
        if(func === "foldl"){

        }else if (func === "foldr") {
            
        }else if (func === "atoi") {
            
        }else if (func === "iota") {
            
        }else if (func === "powerlist") {
            
        }
    }else if (language === "ocaml") {
     
        if(func === "foldl"){

        }else if (func === "foldr") {
            
        }else if (func === "atoi") {
            
        }else if (func === "iota") {
            
        }else if (func === "powerlist") {
            
        }
    }

    
}

function runCode(){

    $.ajax({
        url : "/app/compiler.php",
        method: "POST",
        data: {
            language: $('#languages').val(),
            code: editor.getSession().getValue()
        },

        success: function(response){
            $(".output").text(response)
        }
    })
}