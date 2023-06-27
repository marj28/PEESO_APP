/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/login',
    name: 'Login',
    view: 'account/Login'
  },
  {
    path: '/WhatisPeeso',
    name: 'WhatisPeeso',
    view: 'WhatisPeeso'
  },


  {
    path: '/PeesoServices',
    name: 'PeesoServices',
    view: 'PeesoServices'
  },

  {
    path: '/SchedDisplay',
    name: 'SchedDisplay',
    view: 'SchedDisplay'
  },

  {
    path: '/DisplaySchedView',
    name: 'DisplaySchedView',
    view: 'employeer/DisplaySchedView'
  },



  {
    path: '/ContactUs',
    name: 'ContactUs',
    view: 'ContactUs'
  },
  {
    path: '/home',
    name: 'Home',
    view: 'Main'
  },
  
  
  {
    path: '/monitoring-and-evaluation',
    name: 'MonitoringAndEvaluation',
    view: 'HomeCards/MonitoringAndEvaluation'
  },
  
  {
    path: '/labor-market',
    name: 'LaborMarket',
    view: 'HomeCards/LaborMarket'
  },
  {
    path: '/matching-and-refferal-division',
    name: 'MatchingAndRefferalDivision',
    view: 'HomeCards/MatchingAndRefferalDivision'
  },
  {
    path: '/coaching-and-education-facilitation',
    name: 'CoachingAndEducationFacilitation',
    view: 'HomeCards/CoachingAndEducationFacilitation'
  },
  {
    path: '/employer',
    name: 'Employer',
    view: 'dashboard/Employeer'
  },
  {
    path: '/training-details',
    name: 'TrainingDetails',
    view: 'TrainingDetails'
  },
  {
    path: '/program-page',
    name: 'ProgramPage',
    view: 'ProgramPage'
  },
  {
    path: '/company-select',
    name: 'CompanySelect',
    view: 'CompanySelect'
  },

  {
    path: '/job-post',
    name: 'Jobs',
    view: 'employeer/Jobs'
  },
  {
    path: '/program-post',
    name: 'Programs',
    view: 'employeer/Programs'
  },
  {
    path: '/training-post',
    name: 'Training',
    view: 'employeer/Trainings'
  },
  {
    path: '/company-private',
    name: 'CompanyPrivate',
    view: '/viewing/CompanyPrivate'
  },


  {
    path: '/company-public',
    name: 'CompanyPublic',
    view: 'CompanyPublic'
  },
  {
    path: '/job-details/:id',
    name: 'JobDetails',
    view: 'JobDetails'
  },
  {
    path: '/post/:id',
    name: 'Post',
    view: 'Post'
  },
  {
    path: '/inventory',
    name: 'Inventory',
    view: 'Inventory'
  },
  {
    path: '/accounts',
    name: 'Account Management',
    view: 'AccountPage'
  },
  {
    path: '/register',
    name: 'Register',
    view: 'account/Registration'
  },
  {
    path: '/verify',
    name: 'VerifyAccount',
    view: 'account/Verify'
  },
  {
    path: '/profile',
    name: 'Profile',
    view: 'account/Profile'
  },
  {
    path: '/student',
    name: 'Student',
    view: 'dashboard/Student'
  },
  {
    path: '/jobseeker',
    name: 'Jobseeker',
    view: 'dashboard/JobSeeker'
  },
  {
    path: '/studentprofile',
    name: 'StudentProfile',
    view: 'account/StudentProfile'
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    view: 'dashboard/AdminDashboard'
  },
  // Viewing for Student and Applicant Only
  {
    path: '/job-listing',
    name: 'JobsView',
    view: 'Viewing/JobsView'
  },
  {
    path: '/programview',
    name: 'ProgramsView',
    view: 'Viewing/ProgramsView'
  },
  {
    path: '/trainingview',
    name: 'TrainingsView',
    view: 'Viewing/TrainingsView'
  },
  {
    path: '/myapplication',
    name: 'MyApplication',
    view: 'Viewing/MyApplication'
  },
  {
    path: '/applicantlist',
    name: 'ApplicantList',
    view: 'employeer/ApplicantList'
  },
  {
    path: '/hiredapplicant',
    name: 'HiredApplicant',
    view: 'employeer/HiredApplicant'
  },
  
  {
    path: '/table-passing',
    name: 'TablePassingData',
    view: 'Viewing/TablePassingData'
  },

  
]
