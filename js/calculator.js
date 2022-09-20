function criaCalculadora(){
    return{
        display: document.querySelector(".display"),
        inicia(){
            this.buttonclick();
            
            
        },
        realizaConta(){
            try{ //Esse try testa ve e se der certo ele roda
                let conta =this.display.value=eval(this.display.value);//esse eval executa como um javascript, dai ele por si só resolve os dados
                if(!conta){ //caso o eval não retorna como algo verdadeiro ele executa o alert
                    alert('Conta inválida');
                    return;
                }
            
            }catch(e){
                alert('conta inválida');
                return;
            }

        },
        clearDisplay(){
            this.display.value=""
        },
        oneDelet(){
            this.display.value=this.display.value.slice(0,-1);//é o que vai ser eliminado, se colocar o 1 ele elemina ate todos deixando so o primeiro, por isso -1 para ele eliminar somente o primeiro
        },

        btnParaDisplay(valor){
            this.display.value+=valor;//eu incremento um valor nele sempre concatenando
            

        },

        buttonclick(){
            document.addEventListener("click", (event)=>{
                const elements=event.target;
                if(elements.classList.contains("btn-num")){
                    this.btnParaDisplay(elements.innerText/*isso é para pegar o texto que esta dentro do elemento */)//so assim para funcionar que foi chamado de fora
                }else if(elements.classList.contains("btn-clear")){
                    this.clearDisplay();
                }else if(elements.classList.contains("btn-del")){
                    this.oneDelet()
                }else if(elements.classList.contains("btn-eq")){
                    this.realizaConta()
                }
            })//usando uma aereofunction ele não altera o this ou seja ele consegue pega todos os dados que esta no object
        }

    }
}

const calculadora = criaCalculadora();
calculadora.inicia();
