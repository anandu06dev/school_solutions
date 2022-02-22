import { Page } from "@utils/interfaces/page.meta";
import { IStudentDetails } from "@utils/interfaces/studentData";
import { Observable } from "rxjs";
import { StudentDetailsFacade } from "../services/students.facade";

export const studentList = {
  avatarInfo: {
    key: 'studentFirstName',
    show: true,
  },
  mainInfo: {
    key: 'studentFirstName',
    secKey: 'studentLastName',
  },
  sub1Info: {
    key: 'admissionNo',
    label: '#',
    show: true,
  },
  sub2Info: {
    key: 'studentBloodGroup',
    label: 'Blood Group',
    show: true,
  },
  chip1Info: {
    key: 'studentClass',
    label: 'class',
    show: true,
  },
  chip2Info: {
    key: 'studentGender',
    label: 'class',
    show: true,
    trim: 1,
  },
};

export const studentListSearch = {
  avatarInfo: {
    key: 'studentFirstName',
    show: true,
  },
  mainInfo: {
    key: 'studentFirstName',
    secKey: 'studentLastName',
  },
  sub1Info: {
    key: 'admissionNo',
    label: 'Admission No. : ',
    show: true,
  },
  chip1Info: {
    key: 'studentClass',
    label: 'class',
    show: true,
  },
  chip2Info: {
    key: 'studentGender',
    label: 'class',
    show: true,
    trim: 1,
  },
};


