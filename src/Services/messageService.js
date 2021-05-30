import swal from "sweetalert";

const ICON = {
    QUESTION: "https://img.icons8.com/doodle/48/000000/question-mark--v1.png",
    ERROR: "https://img.icons8.com/plasticine/100/000000/error-cloud.png",
    WARNING: "https://img.icons8.com/plasticine/100/000000/exclamation-mark.png",
    SUCCESS: "https://img.icons8.com/dusk/64/000000/ok.png"
}

const showConfirmMessage = (content) => {
    return swal({
        text: content,
        buttons: true,
        dangerMode: true,
        icon: ICON.WARNING
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
    ICON
}