export const API_SUBJECT = 'https://quanlikhoahoc.herokuapp.com/api/v1/auth/home'
export const API_CLASS = 'https://quanlikhoahoc.herokuapp.com/api/v1/auth/class'
export const API_TEACHER = 'https://quanlikhoahoc.herokuapp.com/api/v1/auth/teacher'
export const API_CLASS_OF_TEACHER = 'https://quanlikhoahoc.herokuapp.com/api/v1/auth/listClass'
export const API_CMT_OF_TEACHER = 'https://quanlikhoahoc.herokuapp.com/api/v1/rated/list'
export const API_CURRENT = 'https://quanlikhoahoc.herokuapp.com/'
export const API_CHECK_SHOW_SUB_CMT = 'https://quanlikhoahoc.herokuapp.com/api/v1/rated/checkValidate'
export const API_POST_CMT = 'https://quanlikhoahoc.herokuapp.com/api/v1/rated/add'
export const API_AUTHENTICATION = 'Bearer ' + localStorage.getItem('token')

// EXAM
export const API_EXAM_DETAIL = 'https://quanlikhoahoc.herokuapp.com/api/v1/exams'
export const API_TEST_DETAIL = 'https://quanlikhoahoc.herokuapp.com/api/v1/exams/test'
export const API_CHECK_TEST = 'https://quanlikhoahoc.herokuapp.com/api/v1/exams/checkans'
export const API_CHECK_DO_TEST = 'https://quanlikhoahoc.herokuapp.com/api/v1/exams/userprofile/next_exams'