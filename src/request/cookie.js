import $ from 'jquery.cookie'

function cookie(name, msg){

    $.cookie(name, msg);
    console.log( $.cookie());

}

export default cookie;