import React from "react";

function Modalsucesso(){
    return (
        <div className="container">
        <div class="modal fade mt-5" id="modalExemplo">
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                   <div class="modal-header">
                  <h3 class="modal-title" id="exampleModalLabel">Parabéns!</h3>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                     <span aria-hidden="true">&times;</span>
                     </button>
            </div>
            <div class="modal-body">
               <h4 className="text-success"> Serviço Cadastrado com sucesso</h4>
            </div>
            <div class="modal-footer justify-content-center">
                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                 </div>
        </div>
        </div>
        </div>
    </div>
    )}

export default Modalsucesso;
