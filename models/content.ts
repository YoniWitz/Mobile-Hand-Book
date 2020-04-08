import { IContent } from "./IContent";

export const content: IContent[] = [
    {
        title: 'I. INTRODUCTION',
        page: 1,
        key: '1',
        subContent: [
            { title: 'A. ABOUT THE ORGANIZATION', page: 1, key: '1' },
            { title: 'B. EQUAL EMPLOYMENT OPPORTUNITY', page: 1, key: '2' },
            { title: 'C. SUPPLEMENTAL GENDER DISCRIMINATION POLICY', page: 2, key: '3' }
        ]
    },
    {
        title: 'II. WORKING AT THE AGENCY',
        page: 8,
        key: '2',
        subContent: [
            { title: 'A. EMPLOYMENT CLASSIFICATIONS', page: 8, key: '1' },
            { title: 'B. INITIAL EMPLOYMENT PERIOD', page: 8, key: '2' },
            { title: 'C. PERSONNEL FILES', page: 8, key: '3' }
        ]
    },
    {
        title: 'III. EMPLOYEE BENEFITS',
        page: 13,
        key: '3',
        subContent: [
            { title: 'A. BENEFITS OVERVIEW', page: 13, key: '1' },
            { title: 'B. PAID HOLIDAYS', page: 13, key: '2' },
            { title: 'C. PAID VACATION TIME', page: 14, key: '3' }
        ]
    },
    {
        title: 'IV. LEAVES OF ABSENCE',
        page: 21,
        key: '4',
        subContent: [
            { title: 'A.JURY DUTY LEAVE', page: 21, key: '1' },
            { title: 'B. BEREAVEMENT LEAVE', page: 21, key: '2' },
            { title: 'C. MILITARY LEAVE', page: 21, key: '3' }
        ]
    },
    {
        title: 'V. BUSINESS ETHICS & RELATED POLICIES',
        page: 27,
        key: '5',
        subContent: [
            { title: 'A. GENERAL OVERVIEW OF ETHICAL CONDUCT GUIDELINES', page: 27, key: '1' },
            { title: 'B. RELATIONSHIPS WITH THOSE WE SERVE', page: 27, key: '2' },
            { title: 'C. ANTI-NEPOTISM AND ROMANTIC RELATIONSHIPS POLICY', page: 27, key: '3' }
        ]
    }
];