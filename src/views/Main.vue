<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <div class="mx-auto" style="height: 101%;">
          <v-card-text style="height: 80%;">

            <p class="text-h4 weare">Discover fascinating Job Prospects</p>

            <div class="text--primary">
              Find a world of fascinating career opportunities catered to your talents and interests. Open up a world of
              possibilities and start down the path to a successful career.
            </div>
          </v-card-text>
          <v-card-actions>
            <br />
            <br />

          </v-card-actions>


        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mx-auto" style="height: 101%;">
          <v-card-text style="height: 75%;">

            <p class="text-h4 weare">Develop Your Potential</p>

            <div class="text--primary">
              Give yourself the tools and resources you need to realize all of your potential. We're here to support you
              in achieving your professional objectives, from skill-development workshops to career counseling
            </div>
          </v-card-text>
          <v-card-actions>
            <br />
            <br />
            <br />

          </v-card-actions>


        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mx-auto" style="height: 101%;">
          <v-card-text style="height: 80%;">
           
            <p class="text-h4 weare">Connect with Employers</p>
          
            <div class="text--primary">
              Forge meaningful connections with leading employers in your industry. Our extensive network provides
              exclusive access to job openings, internships, and apprenticeships, ensuring you stay ahead in the
              competitive job market.
            </div>
          </v-card-text>
          <v-card-actions>
            <br />
            <br />
         
          </v-card-actions>

         
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mx-auto" style="height: 101%;">
          <v-card-text style="height: 79%;">
          
            <p class="text-h4 weare">Personalized Support</p>
           
            <div class="text--primary">
              Our staff of committed career advisors will offer you tailored advice. We are here to offer individualized
              support at every stage of the trip since we recognize that each person's path is unique.
            </div>
          </v-card-text>
          <v-card-actions>
            <br />
            <br />
           
          </v-card-actions>

         
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mx-auto">
          <v-card-text style="height: 70%;">
            
            <p class="text-h4 weare">Opportunities for Lifelong Learning</p>
            
            <div class="text--primary">
              Take advantage of our extensive selection of training programs to improve your skills. We provide
              possibilities for you to develop your skills and improve your employability, from workshops to online
              courses.
            </div>
          </v-card-text>
          <v-card-actions>
            <br />
            <br />
            
          </v-card-actions>

          <v-dialog v-model="revealEmployer" max-width="600px">
            <v-card class="transition-fast-in-fast-out v-card--reveal">
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
                  <b>Step 3: 3: Navigate to your employer dashboard</b><br />
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
                <v-btn text color="green accent-4" @click="revealEmployer = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mx-auto" style="height: 101%;">
          <v-card-text style="height: 78%;">
            <!-- <div>How to</div> -->
            <p class="text-h4 weare">Community Engagement</p>
            <!-- <p class="mb-6">Applicant Seeker</p> -->
            <div class="text--primary">
              Join a vibrant community of job seekers, professionals, and experts. Participate in forums, networking
              events, and job fairs to expand your network and tap into collective knowledge.
            </div>
          </v-card-text>
          <v-card-actions>
            <br />
            <br />
            <!-- <v-btn text color="green accent-4" @click="revealEmployer = true" class="justify-end">
              User Guide
            </v-btn> -->
          </v-card-actions>

          <!-- <v-dialog v-model="revealEmployer" max-width="600px">
            <v-card class="transition-fast-in-fast-out v-card--reveal">
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
                  <b>Step 3: 3: Navigate to your employer dashboard</b><br />
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
                <v-btn text color="green accent-4" @click="revealEmployer = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog> -->
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="mx-auto" style="height: 101%;">
          <v-card-text style="height: 78%;">
            <!-- <div>How to</div> -->
            <p class="text-h4 weare">Support for Employers</p>
            <!-- <p class="mb-6">Applicant Seeker</p> -->
            <div class="text--primary">
              For companies seeking talented individuals, we offer a range of services to streamline your recruitment
              process.
            </div>
          </v-card-text>
          <v-card-actions>
            <br />
            <br />
            <!-- <v-btn text color="green accent-4" @click="revealEmployer = true" class="justify-end">
              User Guide
            </v-btn> -->
          </v-card-actions>

          <!-- <v-dialog v-model="revealEmployer" max-width="600px">
            <v-card class="transition-fast-in-fast-out v-card--reveal">
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
                  <b>Step 3: 3: Navigate to your employer dashboard</b><br />
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
                <v-btn text color="green accent-4" @click="revealEmployer = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog> -->
        </div>
      </v-col> <v-col cols="12" md="4">

      </v-col>
    </v-row>

  </v-container>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    noImage: require("@/assets/no-image-icon.png"),
    jobs: [],
    trainings: [],
    programs: [],
    show: false,
  }),
  computed: {},
  created() {
    // this.setLoggedIn(true)
    this.setAppBar(true);
    this.jobposts();
    //this.trainingposts()
    this.programposts();
    this.loadJobs();
    this.initializeObserver();
  },
  methods: {
    ...mapMutations(["setLoggedIn", "setAppBar", "setMonthDailySales"]),

    
    jobposts() {
      this.jobs = []
      this.$http
        .post("post/list", { type: "job" })
        .then((response) => {
          response.data.status ? this.jobs = response.data.posts : this.jobs = []
          console.log(response.data.posts)
        })
        .catch((e) => {
          console.log(e);
        });
    },
    trainingposts() {
      this.$http
        .post("post/list", { type: "training" })
        .then((response) => {
          response.data.status
            ? (this.trainings = response.data.posts)
            : (this.trainings = []);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    programposts() {
      this.$http
        .post("post/list", { type: "program" })
        .then((response) => {
          response.data.status
            ? (this.programs = response.data.posts)
            : (this.programs = []);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    
    initializeObserver() {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.loadMoreJobs();
          }
        });
      });

      this.observer.observe(this.$refs.lazyLoader);
    },

    loadJobs() {
      this.isLoading = true;

      // Fetch initial set of jobs
      this.$http
        .post("post/list", { type: "job" })
        .then((response) => {
          if (response.data.status) {
            this.jobs = response.data.posts;
            
            this.isLoading = false;
          }
        })
        .catch((e) => {
          console.log("output",e);
          
        });
    },

    
  },
};
</script>


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