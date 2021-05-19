import swal from "sweetalert";

const showConfirmMessage = (content) => {
    return swal({
        text: content,
        buttons: true,
        dangerMode: true,
    })
}

const showMessage = (content, icon) => {
    return swal({
        text: content,
        icon: icon
    })
}

export const messageServices ={
    showConfirmMessage,
    showMessage,
}