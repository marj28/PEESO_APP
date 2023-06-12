<template>
    <v-app>   
      
      <v-row>
        <v-col cols="12" md="8" class="backgruond"></v-col>
        <v-col cols="12" md="4" style="">
          <h3 class="mt-5 weare">#WEARE<span class="tagum">TAGUM</span></h3>        
          <!-- <h1 class="ml-n5 mt-n1 CPEESOFont">CPEESO</h1> -->
          <p class="mt-5">
            Public Education and Employment Services Office (P.E.E.S.O.) is a
            government agency tasked in providing education and employment
            services under the Department of Labor and Employment (DOLE).
          </p>
        </v-col>
             
      </v-row>
        <v-col cols="12" >
          <h5 class="pa-5 weare mt-6">Accessing CPEESO Website ( User Guide )</h5>
          <v-row>
            <v-col cols="12" md="4">
              <v-card class="mx-auto" >
                <v-card-text>
                  <div>How to</div>
                  <p class="text-h4 weare">JOB SEEKER</p>
                  <p class="mb-6">Applicant</p>
                  <div class="text--primary">
                    I am an individual who is actively searching for employment
                    opportunities. I may be currently unemployed or looking to
                    transition from my current job to a new one. My primary focus
                    is on finding a job that aligns with my skills,
                    qualifications, and career aspirations.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <br />
                  <br />
                  <v-btn
                    text
                    color="green accent-4"
                    @click="revealJobseeker = !revealJobseeker"
                  >
                    User Guide
                  </v-btn>
                </v-card-actions>
  
                <v-dialog v-model="revealJobseeker" max-width="600px">
                  <v-card class="">
                    <v-card-text class="pb-0 " >
                      <p class="text-h5 weare ">Jobseeker Access</p>
                      <p>
                        <b>Step 1: Create an Account</b><br />
                        - Look for the "Sign Up" or "Create Account" button and
                        click on it. <br />
                        - Fill out the registration form with your personal
                        information, such as your name, email address, and a
                        password.
                      </p>
                      <p>
                        <b>Step 2: Verify your email</b><br />
                        - Check your email inbox for a verification email from the
                        job application system. <br />
                        - Open the email and click on the verification link
                        provided.<br />
                        - This step confirms your email address and activates your
                        account.
                      </p>
                      <p>
                        <b>Step 3: Explore available job opportunities</b><br />
                        - Once your account is activated, log in to the job
                        application system using your registered email and
                        password.<br />
                        - Navigate to the "Job Opportunities" or "Job Listings"
                        section. <br />
                        - Browse through the available job openings and click on
                        the ones that interest you to view the job details.
                      </p>
                      <p>
                        <b>Step 4: Prepare your application materials</b><br />
                        - Review the job requirements, qualifications, and any
                        specific instructions mentioned in the job description.<br />
                        - Prepare your application materials, which may include a
                        resume/CV, cover letter, and any additional documents
                        requested. <br />
                      </p>
                      <p>
                        <b>Step 5: Submit your application</b><br />
                        - Locate the "Apply Now" or "Submit Application" button
                        within the job listing<br />
                        - Click on the button to initiate the application process.
                      </p>
                      <p>
                        <b
                          >Step 6: Update your profile and preferences
                          (optional)</b
                        ><br />
                        - Explore your user profile settings within the job
                        application system.<br />
                        - Update your profile information, such as contact
                        details, education, work experience, and skills.
                      </p>
                    </v-card-text>
                    <v-card-actions class="pt-0">                    
                      <v-btn
                        text
                        color="green accent-4"
                        @click="revealJobseeker = false"
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card class="mx-auto" >
                <v-card-text>
                  <div>How to</div>
                  <p class="text-h4 weare">STUDENT</p>
                  <p class="mb-6">Scholarship Seeker</p>
                  <div class="text--primary">
                    I am currently enrolled in an educational institution,
                    pursuing my academic goals and working towards acquiring
                    knowledge and skills in a specific field. My main focus is on
                    my education and personal development.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <br />
                  <br />
                  <br />
                  <v-btn
                    text
                    color="green accent-4"
                    @click="revealStudent = true"
                  >
                    User Guide
                  </v-btn>
                </v-card-actions>
  
                <v-dialog v-model="revealStudent" max-width="600px">
                  <v-card
                   
                    class="transition-fast-in-fast-out v-card--reveal"
                  >
                    <v-card-text class="pb-0">
                      <p class="text-h5 weare">Student Access</p>
                      <p>
                        <b>Step 1: Create an Account</b><br />
                        - Look for the "Sign Up" or "Create Account" button and
                        click on it. <br />
                        - Fill out the registration form with your personal
                        information, such as your name, email address, and a
                        password.
                      </p>
                      <p>
                        <b>Step 2: Verify your email</b><br />
                        - Check your email inbox for a verification email from the
                        job application system. <br />
                        - Open the email and click on the verification link
                        provided.<br />
                        - This step confirms your email address and activates your
                        account.
                      </p>
                      <p>
                        <b
                          >Step 3: Explore available job opportunities /
                          Scholarships</b
                        ><br />
                        - Once your account is activated, log in to the job
                        application system using your registered email and
                        password.<br />
                        - Navigate to the "Job Opportunities" or "Job Listings"
                        section. <br />
                        - Browse through the available job openings and click on
                        the ones that interest you to view the job details.
                      </p>
                      <p>
                        <b>Step 4: Prepare your application materials</b><br />
                        - Review the job requirements, qualifications, and any
                        specific instructions mentioned in the job description.<br />
                        - Prepare your application materials, which may include a
                        resume/CV, cover letter, and any additional documents
                        requested. <br />
                      </p>
                      <p>
                        <b>Step 5: Submit your application</b><br />
                        - Locate the "Apply Now" or "Submit Application" button
                        within the job listing<br />
                        - Click on the button to initiate the application process.
                      </p>
                      <p>
                        <b
                          >Step 6: Update your profile and preferences
                          (optional)</b
                        ><br />
                        - Explore your user profile settings within the job
                        application system.<br />
                        - Update your profile information, such as contact
                        details, education, work experience, and skills.
                      </p>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                      <v-btn
                        text
                        color="green accent-4"
                        @click="revealStudent = false"
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card class="mx-auto" >
                <v-card-text>
                  <div>How to</div>
                  <p class="text-h4 weare">EMPLOYER</p>
                  <p class="mb-6">Applicant Seeker</p>
                  <div class="text--primary">
                    I am responsible for overseeing and managing a company or
                    organization. I have the authority to hire and supervise
                    employees, set company policies and procedures, and make
                    strategic decisions to drive the success of the business. It
                    is my role to create a productive and positive work
                    environment.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <br />
                  <br />
                  <v-btn
                    text
                    color="green accent-4"
                    @click="revealEmployer = true"
                    class="justify-end"
                  >
                    User Guide
                  </v-btn>
                </v-card-actions>
  
                <v-dialog v-model="revealEmployer" max-width="600px">
                  <v-card
                    
                    class="transition-fast-in-fast-out v-card--reveal"
                  >
                    <v-card-text class="pb-0">
                      <p class="text-h5 weare">Student Access</p>
                      <p>
                        <b>Step 1: Create an Account</b><br />
                        - Look for the "Sign Up" or "Create Account" button and
                        click on it. <br />
                        - Fill out the registration form with your personal
                        information, such as your name, email address, and a
                        password.
                      </p>
                      <p>
                        <b>Step 2: Verify your email</b><br />
                        - Check your email inbox for a verification email from the
                        job application system. <br />
                        - Open the email and click on the verification link
                        provided.<br />
                        - This step confirms your email address and activates your
                        account.
                      </p>
                      <p>
                        <b>Step 3: 3: Navigate to your employer dashboard</b
                        ><br />
                        - Once logged in, you will be redirected to your employer
                        dashboard or a designated section for employers.<br />
                        - Navigate to the "Job Opportunities" or "Job Listings"
                        section. <br />
                        - Familiarize yourself with the available features and
                        options specific to employers, such as job postings and
                        candidate management
                      </p>
                      <p>
                        <b>Step 4: Create a job posting</b><br />
                        - Click on the "Post a Job" or "Create Job Listing" button
                        within your employer dashboard.<br />
                        - Provide the necessary details for the job posting,
                        including job title, description, qualifications, and any
                        other relevant information.<br />
                        - Set the desired application deadline and any other
                        specific requirements. <br />
                        - Review the job posting information for accuracy before
                        submitting it.
                      </p>
                      <p>
                        <b>Step 5: Manage candidate applications</b><br />
                        - View the list of candidates who have applied for your
                        job posting.<br />
                        - Click on individual candidate profiles to review their
                        application materials, such as resumes, cover letters, and
                        additional documents. <br />
                        - Use the provided tools to track, organize, and manage
                        candidate applications effectively.
                      </p>
                      <p>
                        <b>Step 6: Communicate with candidates</b><br />
                        - Send messages to candidates regarding application
                        status, interview invitations, or any other necessary
                        communication.<br />
                        - Respond promptly to candidate inquiries or requests for
                        additional information.
                      </p>
                      <p>
                        <b>Step 7: Shortlist and select candidates</b><br />
                        - Review the applications and assess candidates based on
                        the provided qualifications and requirements.<br />
                        - Select the candidates you would like to proceed with for
                        further evaluation or interviews.
                      </p>
                      <p>
                        <b>Step 8: Schedule interviews and assessments</b><br />
                        - Coordinate and schedule interviews or assessments with
                        the selected candidates.<br />
                      </p>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                      <v-btn
                        text
                        color="green accent-4"
                        @click="revealEmployer = false"
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
    </v-app>
  </template>
  
  
  <style>
  /* .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    width: 100%;
  } */
  .backgruond {
    background-image: url(../assets/kontak.jpg) !important;
    height: 350px;
    /* width: 65%; */
    display: block;
    /* position: absolute; */
    top: 8px;
    right: 16px;
    background-size: cover;
    margin-top: 10px;
  }
  .CPEESOFont {
    font-size: 60px;
    color: #39af37;
  }
  #weare {
    color: #39af37;
  }
  .weare {
    color: #39af37;
  }
  
  .tagum {
    color: #dfcc03;
  }
  </style>
  <script>
  export default {
    data: () => ({
      reveal: false,
      revealJobseeker: false,
      seeker: true,
      revealStudent: false,
      revealEmployer: false,
    }),
  };
  </script>